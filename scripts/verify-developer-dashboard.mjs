import { chromium } from "playwright";

const TOKEN = "Z73u26O1yJQxfec8jwQBblaaDov3uYFTfEbrs9z1XpScTe08YYHTOuBk5KyJ782";
const URL = `https://kisi-kisi-ujian.vercel.app/?developer=ratings&key=${TOKEN}`;
const STORAGE_KEY = "latihan-soal-pbb-p2:developer-rating-access-key";

async function takeScreenshot(page, name) {
  const path = `/Users/persiapantubel/Desktop/codex/Latihan-Soal-PBB-P2/test-results/${name}`;
  await page.screenshot({ path, fullPage: false });
  console.log(`Screenshot saved: ${path}`);
  return path;
}

async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();

  console.log("=== Test 1: Open developer URL directly (no localStorage pre-set) ===");
  await page.goto(URL, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  await takeScreenshot(page, "developer-dashboard-direct.png");

  const hasDirectPanel = await page.locator('section[aria-label="Dashboard developer"]').isVisible().catch(() => false);
  console.log(`Dashboard panel visible without localStorage: ${hasDirectPanel}`);

  console.log("\n=== Test 2: Pre-set localStorage key then open URL ===");
  await context.clearCookies();
  const page2 = await context.newPage();
  await page2.goto("https://kisi-kisi-ujian.vercel.app/", { waitUntil: "networkidle" });
  await page2.evaluate(({ key, value }) => {
    window.localStorage.setItem(key, value);
  }, { key: STORAGE_KEY, value: TOKEN });
  await page2.goto(URL, { waitUntil: "networkidle" });
  await page2.waitForTimeout(1500);
  await takeScreenshot(page2, "developer-dashboard-with-storage.png");

  const hasStoredPanel = await page2.locator('section[aria-label="Dashboard developer"]').isVisible().catch(() => false);
  console.log(`Dashboard panel visible with localStorage: ${hasStoredPanel}`);

  if (hasStoredPanel) {
    console.log("\n=== Test 3: Click Feedback tab ===");
    const feedbackTab = page2.locator('button', { hasText: 'Feedback pengguna' });
    if (await feedbackTab.isVisible().catch(() => false)) {
      await feedbackTab.click();
      await page2.waitForTimeout(1500);
      const path3 = await takeScreenshot(page2, "developer-dashboard-feedback-tab.png");
      console.log(`Feedback tab screenshot: ${path3}`);

      const feedbackCount = await page2.locator('.developer-feedback-count').textContent().catch(() => "not found");
      console.log(`Feedback count text: ${feedbackCount}`);
    } else {
      console.log("Feedback tab not found");
    }
  }

  await browser.close();

  console.log("\n=== SUMMARY ===");
  console.log(`Direct URL opens dashboard: ${hasDirectPanel}`);
  console.log(`URL + localStorage opens dashboard: ${hasStoredPanel}`);
  console.log(`Developer dashboard is LIVE: ${hasStoredPanel}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
