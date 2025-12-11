import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import NewProfessionals from '../NewProfessionals'

const renderPage = () =>
  render(
    <MemoryRouter>
      <NewProfessionals />
    </MemoryRouter>,
  )

describe('NewProfessionals', () => {
  it('shows the hero heading and description count', () => {
    renderPage()

    expect(screen.getByRole('heading', { name: /Find Professionals/i })).toBeInTheDocument()
    expect(screen.getByText(/Discover Trusted Professionals/i)).toBeInTheDocument()
    expect(screen.getByText(/Found 6 professionals/i)).toBeInTheDocument()
  })

  it('filters professionals by search term', async () => {
    const user = userEvent.setup()
    renderPage()

    const searchInput = screen.getByPlaceholderText(/Search by name, service or description/i)
    await user.clear(searchInput)
    await user.type(searchInput, 'Modern')

    expect(screen.getByText(/Found 1 professionals/i)).toBeInTheDocument()
    expect(screen.getByText(/Modern Living Spaces/i)).toBeInTheDocument()
    expect(screen.queryByText(/Trusted Builders Ltd/i)).not.toBeInTheDocument()
  })
})
