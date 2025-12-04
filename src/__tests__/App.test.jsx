import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'

describe('App', () => {
  it('renders and contains XSpace brand', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const brands = screen.getAllByText(/XSpace/i)
    expect(brands.length).toBeGreaterThan(0)
  })
})
