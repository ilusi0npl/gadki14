const { chromium } = require('playwright');

const TARGET_URL = 'http://localhost:5173';

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 100 });
  const page = await browser.newPage();

  // Mobile viewport (390px - iPhone 14 width)
  await page.setViewportSize({ width: 390, height: 844 });

  console.log('Testing Mobile layout (390x844)...');
  await page.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 30000 });

  // Wait for content to render
  await page.waitForTimeout(2000);

  console.log('Page title:', await page.title());

  // Take full page screenshot
  await page.screenshot({
    path: '/tmp/mobile-390-full.png',
    fullPage: true
  });
  console.log('📸 Full page screenshot saved to /tmp/mobile-390-full.png');

  // Take viewport screenshot (above the fold)
  await page.screenshot({
    path: '/tmp/mobile-390-viewport.png',
    fullPage: false
  });
  console.log('📸 Viewport screenshot saved to /tmp/mobile-390-viewport.png');

  // Scroll and capture different sections
  const scrollPositions = [
    { name: 'hero', y: 0 },
    { name: 'intro', y: 800 },
    { name: 'zasady', y: 1600 },
    { name: 'materialy', y: 4000 },
    { name: 'onas', y: 5500 },
    { name: 'faq', y: 7000 },
    { name: 'contact', y: 8500 },
    { name: 'footer', y: 12000 }
  ];

  for (const section of scrollPositions) {
    await page.evaluate((y) => window.scrollTo(0, y), section.y);
    await page.waitForTimeout(500);
    await page.screenshot({
      path: `/tmp/mobile-390-${section.name}.png`,
      fullPage: false
    });
    console.log(`📸 ${section.name} section saved to /tmp/mobile-390-${section.name}.png`);
  }

  console.log('✅ Mobile testing complete!');
  await browser.close();
})();
