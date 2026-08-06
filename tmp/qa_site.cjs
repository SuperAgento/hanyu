const { chromium } = require("playwright");
const fs = require("fs");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
  const errors = [];
  page.on("console", message => { if (message.type() === "error") errors.push(`console: ${message.text()}`); });
  page.on("pageerror", error => errors.push(`pageerror: ${error.message}`));

  await page.goto("http://127.0.0.1:4173/", { waitUntil: "networkidle" });
  const title = await page.title();
  const dashboardVisible = await page.locator("#dashboard").isVisible();
  const dimensions = await page.evaluate(() => ({ width: document.documentElement.scrollWidth, viewport: innerWidth }));
  await page.screenshot({ path: "tmp/site-dashboard.jpg", type: "jpeg", quality: 76, fullPage: true });

  await page.click('[data-view="mining"]');
  await page.waitForTimeout(250);
  const miningVisible = await page.locator("#mining").isVisible();
  await page.click("#languageToggle");
  const englishHeading = await page.locator("#miningTitle").textContent();
  await page.locator('[data-task="python"]').check();
  await page.reload({ waitUntil: "networkidle" });
  const taskPersisted = await page.locator('[data-task="python"]').first().isChecked();
  await page.screenshot({ path: "tmp/site-mining.jpg", type: "jpeg", quality: 76, fullPage: true });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("http://127.0.0.1:4173/#database", { waitUntil: "networkidle" });
  const mobileNavVisible = await page.locator(".mobile-nav").isVisible();
  const mobileDimensions = await page.evaluate(() => ({ width: document.documentElement.scrollWidth, viewport: innerWidth }));
  await page.screenshot({ path: "tmp/site-mobile.jpg", type: "jpeg", quality: 76, fullPage: true });

  const report = { title, dashboardVisible, miningVisible, englishHeading, taskPersisted, mobileNavVisible, dimensions, mobileDimensions, errors };
  fs.writeFileSync("tmp/site-qa.json", JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  await browser.close();
})().catch(error => {
  console.error(error);
  process.exit(1);
});
