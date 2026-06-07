import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:5199/technology', { waitUntil: 'networkidle' });

// Scroll to the gradient section
await page.evaluate(() => {
  const h2 = [...document.querySelectorAll('h2')].find(el => el.textContent.includes('Start Simple'));
  if (h2) h2.scrollIntoView({ block: 'start' });
});
await page.waitForTimeout(500);
await page.screenshot({ path: 'tech-gradient-zoom.png' });
await browser.close();
console.log('Done');
