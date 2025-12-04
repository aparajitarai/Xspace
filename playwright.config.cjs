/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: 'e2e',
  timeout: 30000,
  webServer: {
    command: 'npm run dev',
    port: 5173,
    timeout: 120000,
    reuseExistingServer: true,
  },
  use: {
    headless: true,
    viewport: { width: 1280, height: 800 },
  },
}

module.exports = config
