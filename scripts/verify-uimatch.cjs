#!/usr/bin/env node
/**
 * UIMatch Verification Script (Generic)
 * Compares implementation with Figma design for pixel-perfect analysis
 *
 * Usage:
 *   node scripts/verify-uimatch.cjs --config=CONFIG_PATH [NODE_NAME|NODE_ID] [OPTIONS]
 *
 * Options:
 *   --config=PATH        Path to project config JSON (required)
 *   --url=URL            Override default URL from config
 *   --selector=CSS       Override selector for element to capture
 *   --profile=NAME       Override profile: component/strict, component/dev, lenient
 *   --size=MODE          Size handling: strict, pad, crop, scale (default: pad)
 *   --no-text            Disable text comparison
 *   --list               List available nodes from config
 *
 * Examples:
 *   node scripts/verify-uimatch.cjs --config=scripts_gadki/uimatch-config.json hero
 *   node scripts/verify-uimatch.cjs --config=scripts_gadki/uimatch-config.json title --profile=component/strict
 *   node scripts/verify-uimatch.cjs --config=scripts_gadki/uimatch-config.json 30-294 --selector="body"
 *   node scripts/verify-uimatch.cjs --config=scripts_gadki/uimatch-config.json --list
 */

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// Parse arguments
const args = process.argv.slice(2);

// Extract options
const options = {
  config: null,
  url: null,
  selector: null,
  profile: null,
  size: 'pad',
  text: true,
  list: false,
};

let nodeArg = null;

args.forEach(arg => {
  if (arg.startsWith('--config=')) {
    options.config = arg.substring('--config='.length);
  } else if (arg.startsWith('--url=')) {
    options.url = arg.substring('--url='.length);
  } else if (arg.startsWith('--selector=')) {
    options.selector = arg.substring('--selector='.length);
  } else if (arg.startsWith('--profile=')) {
    options.profile = arg.substring('--profile='.length);
  } else if (arg.startsWith('--size=')) {
    options.size = arg.substring('--size='.length);
  } else if (arg === '--no-text') {
    options.text = false;
  } else if (arg === '--list') {
    options.list = true;
  } else if (!arg.startsWith('--')) {
    nodeArg = arg;
  }
});

// Validate config path
if (!options.config) {
  console.error('❌ Config file is required!');
  console.error('   Usage: node scripts/verify-uimatch.cjs --config=PATH [NODE_NAME]');
  console.error('');
  console.error('   Example: node scripts/verify-uimatch.cjs --config=scripts_gadki/uimatch-config.json hero');
  process.exit(1);
}

// Load config
const configPath = path.resolve(options.config);
if (!fs.existsSync(configPath)) {
  console.error(`❌ Config file not found: ${configPath}`);
  process.exit(1);
}

let config;
try {
  config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
} catch (e) {
  console.error(`❌ Failed to parse config: ${e.message}`);
  process.exit(1);
}

// Handle --list option
if (options.list) {
  console.log('');
  console.log('╔══════════════════════════════════════════════════════════════╗');
  console.log('║                    Available Nodes                           ║');
  console.log('╚══════════════════════════════════════════════════════════════╝');
  console.log('');

  for (const [name, node] of Object.entries(config.nodes || {})) {
    const aliases = Object.entries(config.aliases || {})
      .filter(([, target]) => target === name)
      .map(([alias]) => alias);
    const aliasStr = aliases.length > 0 ? ` (alias: ${aliases.join(', ')})` : '';
    console.log(`  ${name}${aliasStr}`);
    console.log(`    ID: ${node.id}`);
    console.log(`    ${node.name}`);
    if (node.note) console.log(`    Note: ${node.note}`);
    console.log('');
  }
  process.exit(0);
}

// Validate node argument
if (!nodeArg) {
  console.error('❌ Node name or ID is required!');
  console.error('   Usage: node scripts/verify-uimatch.cjs --config=PATH [NODE_NAME|NODE_ID]');
  console.error('');
  console.error('   Use --list to see available nodes');
  process.exit(1);
}

// Resolve node (by name, alias, or direct ID)
let resolvedNode = null;
let nodeName = nodeArg;

// Check if it's an alias
if (config.aliases && config.aliases[nodeArg]) {
  nodeName = config.aliases[nodeArg];
}

// Check if it's a named node
if (config.nodes && config.nodes[nodeName]) {
  resolvedNode = config.nodes[nodeName];
} else {
  // Treat as direct node ID
  resolvedNode = {
    id: nodeArg,
    name: `Custom node ${nodeArg}`,
    selector: options.selector || 'body',
  };
}

// Build final options
const figmaFileKey = config.figmaFileKey;
const figmaNodeId = resolvedNode.id.includes(':') ? resolvedNode.id.replace(':', '-') : resolvedNode.id;
const url = options.url || config.defaultUrl || 'http://localhost:5173';
const selector = options.selector || resolvedNode.selector || 'body';
const profile = options.profile || resolvedNode.profile || config.defaultProfile || 'component/dev';
const outputDir = path.resolve(config.outputDir || 'tmp/uimatch-reports');

// Check for FIGMA_ACCESS_TOKEN
if (!process.env.FIGMA_ACCESS_TOKEN) {
  // Try to load from .env file
  const envPath = path.resolve('.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const match = envContent.match(/FIGMA_ACCESS_TOKEN=(.+)/);
    if (match) {
      process.env.FIGMA_ACCESS_TOKEN = match[1].trim();
    }
  }

  if (!process.env.FIGMA_ACCESS_TOKEN) {
    console.error('❌ FIGMA_ACCESS_TOKEN not found!');
    console.error('   Set it in .env file or export FIGMA_ACCESS_TOKEN=your_token');
    process.exit(1);
  }
}

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Display header
console.log('');
console.log('╔══════════════════════════════════════════════════════════════╗');
console.log('║              UIMatch Pixel-Perfect Verification              ║');
console.log('╠══════════════════════════════════════════════════════════════╣');
console.log(`║  Node:     ${resolvedNode.name.substring(0, 48).padEnd(48)} ║`);
console.log(`║  Node ID:  ${figmaNodeId.padEnd(48)} ║`);
console.log(`║  URL:      ${url.substring(0, 48).padEnd(48)} ║`);
console.log(`║  Selector: ${selector.substring(0, 48).padEnd(48)} ║`);
console.log(`║  Profile:  ${profile.padEnd(48)} ║`);
console.log('╚══════════════════════════════════════════════════════════════╝');

if (resolvedNode.note) {
  console.log(`   ℹ️  ${resolvedNode.note}`);
}
console.log('');

// Build UIMatch command
const uimatchArgs = [
  '-p', '@uimatch/cli',
  'uimatch', 'compare',
  `figma=${figmaFileKey}:${figmaNodeId}`,
  `story=${url}`,
  `selector=${selector}`,
  `outDir=${outputDir}`,
  `profile=${profile}`,
  `text=${options.text}`,
  `size=${options.size}`,
  'align=top-left',
];

console.log('🔍 Running UIMatch comparison...');
console.log(`   Command: npx ${uimatchArgs.join(' ')}`);
console.log('');

// Run UIMatch
const uimatch = spawn('npx', uimatchArgs, {
  stdio: 'inherit',
  env: process.env,
  cwd: process.cwd(),
});

uimatch.on('close', (code) => {
  console.log('');

  if (code === 0) {
    console.log('✅ UIMatch comparison completed!');
  } else {
    console.log(`⚠️  UIMatch exited with code ${code}`);
  }

  // Check for report - UIMatch creates timestamped folders
  let reportPath = path.join(outputDir, 'report.json');

  // Find latest timestamped folder if direct report doesn't exist
  if (!fs.existsSync(reportPath)) {
    try {
      const dirs = fs.readdirSync(outputDir)
        .filter(d => /^\d{8}-\d{6}$/.test(d))
        .sort()
        .reverse();
      if (dirs.length > 0) {
        reportPath = path.join(outputDir, dirs[0], 'report.json');
      }
    } catch (e) {
      // Ignore errors reading directory
    }
  }

  if (fs.existsSync(reportPath)) {
    try {
      const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));

      console.log('');
      console.log('═══════════════════════════════════════════════════════════════');
      console.log('                         RESULTS                                ');
      console.log('═══════════════════════════════════════════════════════════════');

      if (report.metrics) {
        console.log(`   Design Fidelity Score (DFS): ${report.metrics.dfs || 'N/A'}`);
        console.log(`   Pixel Diff Ratio:            ${(report.metrics.pixelDiffRatio * 100).toFixed(2)}%`);
      }

      if (report.qualityGate) {
        const passed = report.qualityGate.pass;
        console.log(`   Quality Gate:                ${passed ? '✅ PASSED' : '❌ FAILED'}`);
      }

      console.log('');
      console.log('📁 Output files:');
      console.log(`   Report:     ${reportPath}`);

      // Get the directory containing the report
      const reportDir = path.dirname(reportPath);

      const diffPath = path.join(reportDir, 'diff.png');
      if (fs.existsSync(diffPath)) {
        console.log(`   Diff Image: ${diffPath}`);
      }

      const figmaPath = path.join(reportDir, 'figma.png');
      if (fs.existsSync(figmaPath)) {
        console.log(`   Figma:      ${figmaPath}`);
      }

      const implPath = path.join(reportDir, 'impl.png');
      if (fs.existsSync(implPath)) {
        console.log(`   Impl:       ${implPath}`);
      }

      console.log('');

      // Provide analysis tips
      if (report.qualityGate && !report.qualityGate.pass) {
        console.log('💡 Tips for fixing differences:');
        console.log('   1. Open diff.png to see highlighted differences');
        console.log('   2. Red areas = pixels that differ between Figma and implementation');
        console.log('   3. Font rendering differences (~5%) are usually acceptable');
        console.log('   4. Structural issues (position, size, missing elements) must be fixed');
        console.log('');
      }

    } catch (e) {
      console.log(`   Could not parse report: ${e.message}`);
    }
  } else {
    console.log('');
    console.log('⚠️  No report.json found. Check if UIMatch ran correctly.');
  }

  process.exit(code);
});

uimatch.on('error', (err) => {
  console.error('❌ Failed to run UIMatch:', err.message);
  console.error('');
  console.error('Make sure UIMatch is installed:');
  console.error('   npm install -D @uimatch/cli playwright');
  console.error('   npx playwright install chromium');
  process.exit(1);
});
