import { defineConfig, devices } from "@playwright/test";

const PORT = process.env.PORT || "3000";
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "list",
  use: {
    baseURL: BASE_URL,
    trace: "on-first-retry",
    screenshot: "only-on-failure"
  },
  projects: [
    {
      name: "chromium-desktop",
      use: { ...devices["Desktop Chrome"] }
    },
    {
      name: "chromium-mobile",
      use: { ...devices["Pixel 7"] }
    }
  ],
  webServer: {
    command: "npm run dev",
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000
  }
});