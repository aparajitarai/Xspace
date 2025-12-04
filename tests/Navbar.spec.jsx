import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../src/components/Navbar'

test('renders Navbar with HomePage brand', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  )
  expect(screen.getByText(/homepage/i)).toBeInTheDocument()
})
