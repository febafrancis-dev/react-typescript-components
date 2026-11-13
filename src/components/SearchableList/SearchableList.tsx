
import { useState } from 'react'

interface SearchableListProps {
  items: string[]
  placeholder?: string
  emptyMessage?: string
}

function SearchableList({
  items,
  placeholder = 'Search items...',
  emptyMessage = 'No results found',
}: SearchableListProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex flex-col gap-3">
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-200"
        aria-label="Search list"
      />

      {filteredItems.length > 0 ? (
        <ul className="flex flex-col gap-2">
          {filteredItems.map((item) => (
            <li
              key={item}
              className="rounded-lg bg-gray-100 px-4 py-2 text-gray-800"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p role="status" className="text-sm text-gray-500">
          {emptyMessage}
        </p>
      )}
    </div>
  )
}

export default SearchableList
