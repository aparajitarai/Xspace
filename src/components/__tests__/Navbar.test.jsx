import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../Navbar'

describe('Navbar', () => {
  it('renders the Navbar component with menu items', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )
    expect(screen.getByText(/XSpace/i)).toBeInTheDocument()
  })
})
