
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from './Input'

describe('Input Component', () => {
  it('renders the input with a label', () => {
    render(<Input label="Email" />)

    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('renders placeholder text', () => {
    render(<Input placeholder="Enter your email" />)

    expect(
      screen.getByPlaceholderText('Enter your email')
    ).toBeInTheDocument()
  })

  it('accepts user input', async () => {
    const user = userEvent.setup()
    render(<Input label="Username" />)

    const input = screen.getByLabelText('Username')
    await user.type(input, 'feba123')

    expect(input).toHaveValue('feba123')
  })

  it('displays an error message', () => {
    render(<Input label="Email" error="Email is required" />)

    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toHaveAttribute(
      'aria-invalid',
      'true'
    )
  })

  it('can be disabled', () => {
    render(<Input label="Email" disabled />)

    expect(screen.getByLabelText('Email')).toBeDisabled()
  })
})
