import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  bleed?: boolean
  id?: string
}

export default function Section({ children, className = '', bleed = false, id }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      {bleed ? children : <div className="container-content">{children}</div>}
    </section>
  )
}
