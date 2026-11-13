import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  loading?: boolean
}

function Button({
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'rounded-lg font-medium transition-colors focus:outline-none focus:ring-2'

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
  }

  const sizes = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-5 py-2.5 text-base',
    large: 'px-7 py-3 text-lg',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </button>
  )
}

export default Button