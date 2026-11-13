
import type { SelectHTMLAttributes } from 'react'

interface DropdownOption {
  label: string
  value: string
}

interface DropdownProps extends Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'children'
> {
  label?: string
  options: DropdownOption[]
  error?: string
}

function Dropdown({
  label,
  options,
  error,
  id,
  className = '',
  ...props
}: DropdownProps) {
  const dropdownId = id || label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={dropdownId}
          className="text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <select
        id={dropdownId}
        className={`rounded-lg border bg-white px-4 py-2 outline-none focus:ring-2 ${
          error
            ? 'border-red-500 focus:ring-red-200'
            : 'border-gray-300 focus:ring-blue-200'
        } ${className}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${dropdownId}-error` : undefined}
        {...props}
      >
        <option value="">Select an option</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <p id={`${dropdownId}-error`} className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

export default Dropdown
