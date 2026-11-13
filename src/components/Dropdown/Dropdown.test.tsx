
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Dropdown from './Dropdown'

const options = [
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' },
  { label: 'Vue', value: 'vue' },
]

describe('Dropdown Component', () => {
  it('renders with a label', () => {
    render(<Dropdown label="Technology" options={options} />)

    expect(screen.getByLabelText('Technology')).toBeInTheDocument()
  })

  it('renders all provided options', () => {
    render(<Dropdown label="Technology" options={options} />)

    expect(screen.getByRole('option', { name: 'React' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Angular' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Vue' })).toBeInTheDocument()
  })

  it('renders the default placeholder option', () => {
    render(<Dropdown label="Technology" options={options} />)

    expect(
      screen.getByRole('option', { name: 'Select an option' })
    ).toBeInTheDocument()
  })

  it('allows selecting an option', async () => {
    const user = userEvent.setup()

    render(<Dropdown label="Technology" options={options} />)

    const dropdown = screen.getByLabelText('Technology')
    await user.selectOptions(dropdown, 'react')

    expect(dropdown).toHaveValue('react')
  })

  it('displays an error message', () => {
    render(
      <Dropdown
        label="Technology"
        options={options}
        error="Please select a technology"
      />
    )

    expect(
      screen.getByText('Please select a technology')
    ).toBeInTheDocument()

    expect(screen.getByLabelText('Technology')).toHaveAttribute(
      'aria-invalid',
      'true'
    )
  })

  it('can be disabled', () => {
    render(<Dropdown label="Technology" options={options} disabled />)

    expect(screen.getByLabelText('Technology')).toBeDisabled()
  })

  it('calls onChange when selection changes', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    render(
      <Dropdown
        label="Technology"
        options={options}
        onChange={handleChange}
      />
    )

    await user.selectOptions(screen.getByLabelText('Technology'), 'vue')

    expect(handleChange).toHaveBeenCalled()
    expect(handleChange.mock.calls[0][0].target.value).toBe('vue')
  })
})
