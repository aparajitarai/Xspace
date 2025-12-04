import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../components/Navbar'

describe('Navbar', () => {
  it('renders the brand and login button', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )
    expect(screen.getByText(/HomePage/i)).toBeInTheDocument()
    expect(screen.getByText(/Log In/i)).toBeInTheDocument()
  })
})
