import { test, expect } from "@playwright/test";

test.describe("Flipcard flow", () => {
  test("navigates through flipcards", async ({ page }) => {
    await page.goto("/");

    // Select the first package from the sidebar
    await page.getByRole("button", { name: "Paket A" }).click();

    // Switch to Flipcard mode from the choice grid
    await page.locator(".mode-choice-grid button").filter({ hasText: "Flipcard" }).click();

    // Flipcard surface is visible
    const flipcard = page.locator(".flipcard");
    await expect(flipcard).toBeVisible();
    await expect(page.getByText("Pertanyaan").first()).toBeVisible();

    // Flip the card to reveal the answer
    await page.getByRole("button", { name: "Balik kartu" }).click();
    await expect(flipcard).toHaveClass(/is-open/);
    await expect(page.getByText("Jawaban").first()).toBeVisible();

    // Close the card before navigating so long explanations on mobile do not cover the action row
    await page.getByRole("button", { name: "Balik kartu" }).click();
    await expect(flipcard).not.toHaveClass(/is-open/);

    // Move to the next card (force on mobile where the card can overlay the action row)
    await page.getByRole("button", { name: "Berikutnya" }).click({ force: true });
    await expect(page.getByText("Flipcard 2 dari 10")).toBeVisible();
  });
});

test.describe("Test submit flow", () => {
  test("submits a test and shows review", async ({ page }) => {
    await page.goto("/");

    // Select the first package and switch to Test mode
    await page.getByRole("button", { name: "Paket A" }).click();
    await page.locator(".mode-choice-grid button").filter({ hasText: "Tes" }).click();

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