const { chromium } = require('playwright');

const TARGET_URL = 'http://localhost:5174';

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();

  await page.setViewportSize({ width: 1920, height: 1200 });
  await page.goto(TARGET_URL, { waitUntil: 'networkidle' });

  // Wait for fonts to load
  await page.waitForTimeout(2000);

  console.log('📸 Taking screenshots at different viewports...\n');

  // Desktop 1920x1080
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/final-desktop-1920.png' });
  console.log('✅ Desktop 1920x1080 saved');

  // Design width 1728
  await page.setViewportSize({ width: 1728, height: 1200 });
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/final-exact-1728.png' });
  console.log('✅ Exact design width 1728 saved');

  // Full page
  await page.screenshot({ path: '/tmp/final-full-page.png', fullPage: true });
  console.log('✅ Full page screenshot saved');

  // Element check
  const heroBox = await page.locator('[data-section="hero"]').boundingBox();
  console.log('\n📏 Hero section:', `${heroBox.width}x${heroBox.height}px`);

  const wordmarkVisible = await page.locator('[alt="GADKI"]').isVisible();
  console.log('🖼️  GADKI wordmark visible:', wordmarkVisible ? '✅' : '❌');

  const subtitleText = await page.locator('[data-node-id="50:51"]').textContent();
  console.log('📝 Subtitle text:', subtitleText ? `"${subtitleText}"` : '❌');

  const avatarCount = await page.locator('img[alt*="Max"], img[alt*="Tata"], img[alt*="Gadek"], img[alt*="Mama"], img[alt*="Córka"]').count();
  console.log('👥 Avatars found:', avatarCount, avatarCount === 5 ? '✅' : '⚠️');

  console.log('\n✨ All screenshots saved to /tmp/');

  await page.waitForTimeout(2000);
  await browser.close();
})();
