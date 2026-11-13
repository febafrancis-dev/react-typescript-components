import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button Component', () => {
  it('renders button text', () => {
    render(<Button>Submit</Button>)

    expect(
      screen.getByRole('button', { name: 'Submit' })
    ).toBeInTheDocument()
  })

  it('renders secondary variant', () => {
    render(<Button variant="secondary">Cancel</Button>)

    expect(
      screen.getByRole('button', { name: 'Cancel' })
    ).toBeInTheDocument()
  })

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Submit</Button>)

    expect(
      screen.getByRole('button', { name: 'Submit' })
    ).toBeDisabled()
  })

  it('shows loading state', () => {
    render(<Button loading>Submit</Button>)

    expect(
      screen.getByRole('button', { name: 'Loading...' })
    ).toBeDisabled()
  })

  it('handles click events', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()

    render(<Button onClick={handleClick}>Click me</Button>)

    await user.click(screen.getByRole('button', { name: 'Click me' }))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})