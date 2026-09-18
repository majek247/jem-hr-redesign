import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../lib/data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('')
  const [scrolled, setScrolled] = useState(false)

  /* Track scroll for two reasons:
     1. Toggle a "scrolled" state for nav padding
     2. Update activeHash based on which section is in view.
        Above the first section (Hero), nothing is active. */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)

      // Only start highlighting once we've scrolled past the Hero
      if (window.scrollY < window.innerHeight * 0.6) {
        setActiveHash('')
        return
      }

      const sections = navLinks
        .map((link) => {
          const id = link.to.replace('#', '')
          const el = document.getElementById(id)
          return el ? { id, top: el.getBoundingClientRect().top } : null
        })
        .filter((s): s is { id: string; top: number } => s !== null)

      // Find the last section whose top has crossed 30% of viewport height
      const threshold = window.innerHeight * 0.3
      let current: { id: string; top: number } | null = null
      for (const s of sections) {
        if (s.top <= threshold) current = s
      }
      setActiveHash(current ? `#${current.id}` : '')
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      {/* Main nav — solid navy, no fade */}
      <div
        className="border-b border-white/[0.06] transition-[padding] duration-300"
        style={{ backgroundColor: '#051d2e' }}
      >
        <nav
          className={`max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'py-3' : 'py-5'
          }`}
        >
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center gap-2 group shrink-0"
            onClick={() => setOpen(false)}
          >
            <div className="w-8 h-8 rounded-lg bg-coral flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <span className="text-white font-serif font-bold text-xl italic leading-none">
                j
              </span>
            </div>
            <span className="font-semibold text-2xl tracking-[-0.02em] text-white leading-none">
              Jem<span className="text-coral">.</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeHash === link.to
              return (
                <a
                  key={link.to}
                  href={link.to}
                  className={`relative text-[0.9rem] font-medium tracking-[-0.01em] transition-colors duration-300 py-1.5 ${
                    isActive
                      ? 'text-coral'
                      : 'text-white/60 hover:text-coral'
                  }`}
                >
                  {link.label}
                  {/* Coral underline on active */}
                  <span
                    className={`absolute left-0 right-0 -bottom-[1px] h-px transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ backgroundColor: 'var(--coral, #E05C4A)' }}
                  />
                </a>
              )
            })}
          </div>

          {/* Desktop CTA — quiet outline, coral on hover */}
          <div className="hidden lg:block">
           <a
  href="https://www.jemhr.com/contact/"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-2 rounded-full border border-white/15 hover:border-coral/60 px-5 py-2.5 text-[0.875rem] font-semibold tracking-[-0.01em] text-white/85 hover:text-coral transition-colors duration-300"
>
              Book a demo
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:border-white/30 lg:hidden transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-4 bg-white transition-transform duration-300 ${
                  open ? 'translate-y-[5px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-[1.5px] w-4 bg-white transition-transform duration-300 ${
                  open ? '-translate-y-[5px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div
            className="border-t border-white/[0.06] lg:hidden"
            style={{ backgroundColor: '#051d2e' }}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-5 py-6">
              {navLinks.map((link) => {
                const isActive = activeHash === link.to
                return (
                  <a
                    key={link.to}
                    href={link.to}
                    onClick={() => setOpen(false)}
                    className={`text-lg font-medium transition-colors ${
                      isActive ? 'text-coral' : 'text-white/75 hover:text-coral'
                    }`}
                  >
                    {link.label}
                  </a>
                )
              })}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-coral-dark transition-colors w-full"
              >
                Book a demo
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}