import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import FindProfessionals from '../FindProfessionals'

describe('FindProfessionals', () => {
  it('renders the FindProfessionals component with professional listings', () => {
    render(
      <BrowserRouter>
        <FindProfessionals />
      </BrowserRouter>
    )
    expect(screen.getByText(/Trusted Builders Ltd/i)).toBeInTheDocument()
  })

  it('displays professional service tags', () => {
    render(
      <BrowserRouter>
        <FindProfessionals />
      </BrowserRouter>
    )
    expect(screen.getAllByText(/Environment/i).length).toBeGreaterThan(0)
  })

  it('shows starting prices for professionals', () => {
    render(
      <BrowserRouter>
        <FindProfessionals />
      </BrowserRouter>
    )
    expect(screen.getAllByText(/Starting from/i).length).toBeGreaterThan(0)
  })
})
