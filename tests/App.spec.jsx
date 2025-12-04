import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from '../src/App'

test('renders App and shows XSpace brand', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
  // Use getAllByText and check the first match (the navbar brand)
  const brands = screen.getAllByText(/xspace/i)
  expect(brands.length).toBeGreaterThan(0)
  expect(brands[0]).toBeInTheDocument()
})
