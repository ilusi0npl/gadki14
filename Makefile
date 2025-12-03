# GADKI Project - Makefile
# Visual verification commands for Figma-to-React implementation

.PHONY: help verify verify-list screenshot install-uimatch clean

# Project-specific config
CONFIG := scripts_gadki/uimatch-config.json

# Default URL (can be overridden)
URL := http://localhost:5173

# Default profile (can be overridden)
PROFILE := component/dev

help:
	@echo ""
	@echo "╔══════════════════════════════════════════════════════════════╗"
	@echo "║               GADKI Visual Verification                      ║"
	@echo "╠══════════════════════════════════════════════════════════════╣"
	@echo "║  make verify NODE=x      - Verify node by name/alias/ID      ║"
	@echo "║  make verify-list        - List all available nodes          ║"
	@echo "║  make screenshot         - Take screenshot of hero section   ║"
	@echo "║  make install-uimatch    - Install UIMatch dependencies      ║"
	@echo "║  make clean              - Clean temporary files             ║"
	@echo "╚══════════════════════════════════════════════════════════════╝"
	@echo ""
	@echo "Examples:"
	@echo "  make verify NODE=hero"
	@echo "  make verify NODE=title"
	@echo "  make verify NODE=mama"
	@echo "  make verify NODE=30-294 --profile=component/strict"
	@echo "  make verify-list"
	@echo ""

# List all available nodes from config
verify-list:
	@node scripts/verify-uimatch.cjs --config=$(CONFIG) --list

# Generic verify - requires NODE parameter
# Usage: make verify NODE=hero
# Usage: make verify NODE=title PROFILE=component/strict
# Usage: make verify NODE=30-294 URL=http://localhost:3000
verify:
ifndef NODE
	@echo "❌ NODE is required!"
	@echo "   Usage: make verify NODE=hero"
	@echo ""
	@echo "   Run 'make verify-list' to see available nodes"
	@exit 1
endif
	@node scripts/verify-uimatch.cjs --config=$(CONFIG) $(NODE) --url=$(URL) --profile=$(PROFILE)

# Take screenshot of current page
screenshot:
	@echo "📸 Taking screenshot..."
	@mkdir -p tmp
	@npx playwright screenshot $(URL) tmp/screenshot-$$(date +%Y%m%d-%H%M%S).png --viewport-size=1750,1177
	@echo "✅ Screenshot saved to tmp/"

# Install UIMatch and Playwright
install-uimatch:
	@echo "📦 Installing UIMatch and Playwright..."
	npm install -D @uimatch/cli playwright
	npx playwright install chromium
	@echo "✅ UIMatch installed!"

# Clean temporary files
clean:
	@echo "🧹 Cleaning temporary files..."
	rm -rf tmp/uimatch-reports/*
	rm -f tmp/screenshot-*.png
	@echo "✅ Cleaned!"
