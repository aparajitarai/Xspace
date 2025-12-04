const { test, expect } = require('playwright/test')
const path = require('path')

test('navigates to /professionals and shows listings', async ({ page }) => {
  const indexPath = path.join(process.cwd(), 'index.html')

  // Prefer the dev server if available, otherwise fall back to file:// and click the nav link
  try {
    await page.goto('http://localhost:5173/professionals', { timeout: 5000 })
  } catch (e) {
    await page.goto(`file://${indexPath}`)
    const nav = page.locator('nav')
    const findLink = nav.locator('text=Find Professionals').first()
    await findLink.click()
  }

  // Wait for the page to load - look for "Find Professionals" heading anywhere on page
  const pageHeader = page.locator('h1:has-text("Find Professionals")')
  await expect(pageHeader).toBeVisible({ timeout: 10000 })

  // Wait for "Discover Trusted Professionals" section header
  const discoverHeader = page.locator('h2:has-text("Discover Trusted Professionals")')
  await expect(discoverHeader).toBeVisible({ timeout: 10000 })

  // Wait for a professional card to render and check for a known name
  const professional = page.locator('text=Trusted Builders Ltd').first()
  await expect(professional).toBeVisible({ timeout: 10000 })
})
