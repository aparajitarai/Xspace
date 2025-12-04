import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from '../../App'

describe('App', () => {
  it('renders the main App component', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    // The root App has a navbar with text 'XSpace'
    const brands = screen.getAllByText(/XSpace/i)
    expect(brands.length).toBeGreaterThan(0)
  })
})
