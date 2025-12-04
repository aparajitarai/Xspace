const { test, expect } = require('playwright/test')
const path = require('path')

test('loads index.html and finds XSpace header', async ({ page }) => {
  const indexPath = path.join(process.cwd(), 'index.html')
  await page.goto(`file://${indexPath}`)
  // Check for the navbar XSpace brand text (the first element)
  const navbar = page.locator('nav')
  const brand = navbar.locator('text=XSpace').first()
  await expect(brand).toBeVisible()
})
