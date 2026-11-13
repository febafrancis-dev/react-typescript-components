
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchableList from './SearchableList'

const items = ['React', 'Angular', 'Vue', 'JavaScript', 'TypeScript']

describe('SearchableList Component', () => {
  it('renders all items initially', () => {
    render(<SearchableList items={items} />)

    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Angular')).toBeInTheDocument()
    expect(screen.getByText('Vue')).toBeInTheDocument()
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  it('filters items based on search text', async () => {
    const user = userEvent.setup()
    render(<SearchableList items={items} />)

    await user.type(screen.getByRole('textbox', { name: 'Search list' }), 'React')

    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.queryByText('Angular')).not.toBeInTheDocument()
  })

  it('searches without case sensitivity', async () => {
    const user = userEvent.setup()
    render(<SearchableList items={items} />)

    await user.type(screen.getByRole('textbox', { name: 'Search list' }), 'react')

    expect(screen.getByText('React')).toBeInTheDocument()
  })

  it('shows an empty message when no items match', async () => {
    const user = userEvent.setup()
    render(<SearchableList items={items} />)

    await user.type(
      screen.getByRole('textbox', { name: 'Search list' }),
      'Python'
    )

    expect(screen.getByRole('status')).toHaveTextContent('No results found')
  })

  it('supports a custom placeholder', () => {
    render(<SearchableList items={items} placeholder="Find a technology" />)

    expect(
      screen.getByPlaceholderText('Find a technology')
    ).toBeInTheDocument()
  })

  it('supports a custom empty message', async () => {
    const user = userEvent.setup()

    render(
      <SearchableList
        items={items}
        emptyMessage="Nothing matched your search"
      />
    )

    await user.type(
      screen.getByRole('textbox', { name: 'Search list' }),
      'Python'
    )

    expect(screen.getByRole('status')).toHaveTextContent(
      'Nothing matched your search'
    )
  })
})
