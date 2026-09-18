import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'dark' | 'ghost'

interface ButtonProps {
  to?: string
  href?: string
  variant?: Variant
  children: ReactNode
  className?: string
}

const variants: Record<Variant, string> = {
  primary: 'bg-coral text-paper hover:bg-coral-dark',
  dark: 'bg-ink text-paper hover:bg-ink/85',
  ghost: 'bg-transparent text-ink border border-ink/15 hover:border-ink/40',
}

export default function Button({ to, href, variant = 'primary', children, className = '' }: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-medium transition-colors duration-200 ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  )
}
