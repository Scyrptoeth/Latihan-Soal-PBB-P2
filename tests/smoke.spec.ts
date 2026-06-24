import { test, expect } from "@playwright/test";

test.describe("Direct package navigation", () => {
  test("opens a package from the sidebar directly in test mode", async ({ page }) => {
    await page.goto("/");

    await page.locator(".topic-list").getByRole("button", { name: /Paket B/ }).click();

    await expect(page.locator(".test-layout")).toBeVisible();
    await expect(page.locator(".topbar-title").getByRole("heading", { name: "Paket B" })).toBeVisible();
    await expect(page.getByText("Pilih cara belajar")).toHaveCount(0);
    await expect(page.getByText("Flipcard")).toHaveCount(0);
  });

  test("opens a package from the landing page directly in test mode", async ({ page }) => {
    await page.goto("/");

    await page.locator(".package-grid").getByRole("button", { name: /Buka Paket C/ }).click();

    await expect(page.locator(".test-layout")).toBeVisible();
    await expect(page.locator(".topbar-title").getByRole("heading", { name: "Paket C" })).toBeVisible();
  });
});

test.describe("Test submit flow", () => {
  test("submits a test and shows review", async ({ page }) => {
    await page.goto("/");

    // Select the first package and enter Test mode directly
    await page.locator(".topic-list").getByRole("button", { name: /Paket A/ }).click();

    // Answer the first question by clicking option A
    await page.getByRole("button", { name: /^A\s/ }).first().click();

    // Submit the test
    await page.getByRole("button", { name: "Submit Tes" }).click();

    // Confirm the submit dialog
    await page.getByRole("button", { name: "Ya, Submit Tes" }).click();

    // Feedback dialog appears after submission
    await expect(page.getByRole("dialog")).toContainText("Terima kasih sudah mengerjakan");

    // Skip rating and view results
    await page.getByRole("button", { name: "Lewati dan Lihat Hasil" }).click();

    // Review section is visible
    await expect(page.locator(".review-box").first()).toBeVisible();
    await expect(page.getByRole("button", { name: "Kerjakan Ulang" })).toBeVisible();
  });
});
