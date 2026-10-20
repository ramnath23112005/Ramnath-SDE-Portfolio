import { useCallback, useRef, useState } from 'react'
import type { MouseEvent as ReactMouseEvent } from 'react'
import { Menu } from 'lucide-react'

import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { cn, scrollToSection } from '../lib/utils'
import { MobileMenu, type NavLink } from './MobileMenu'

const NAV_LINKS: readonly NavLink[] = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Focus', id: 'focus' },
  { label: 'Contact', id: 'contact' },
]

const NAV_SECTION_IDS: readonly string[] = ['hero', ...NAV_LINKS.map((l) => l.id)]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const { activeId, scrolled } = useActiveSection(NAV_SECTION_IDS)

  const closeMenu = useCallback((returnFocus = true) => {
    setMenuOpen(false)
    if (returnFocus) toggleRef.current?.focus()
  }, [])

  const handleNavClick = (event: ReactMouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()
    if (menuOpen) closeMenu(false)
    scrollToSection(id)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200',
        scrolled
          ? 'border-line bg-ink/85 backdrop-blur-md'
          : 'border-transparent bg-transparent',
      )}
    >
      <nav aria-label="Primary" className="container-x flex h-14 items-center justify-between gap-4 md:h-16">
        <a
          href="#top"
          className="group flex shrink-0 items-center gap-2.5"
          onClick={(event) => handleNavClick(event, 'top')}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-line-strong bg-elevated font-mono text-[11px] font-semibold text-mint transition-colors group-hover:border-mint/40">
            {profile.monogram}
          </span>
          <span className="text-sm font-semibold tracking-tight text-fg transition-colors group-hover:text-white">
            {profile.siteName}
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.id
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={cn(
                    'relative block rounded-md px-3 py-2 text-[13px] font-medium transition-colors',
                    isActive ? 'text-fg' : 'text-fg-muted hover:text-fg',
                  )}
                  onClick={(event) => handleNavClick(event, link.id)}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute inset-x-3 -bottom-px h-px origin-left bg-mint transition-transform duration-200',
                      isActive ? 'scale-x-100' : 'scale-x-0',
                    )}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1.5 font-mono text-[11px] text-fg-muted lg:inline-flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-mint animate-ping-soft" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-mint" />
            </span>
            {profile.availability}
          </span>

          <button
            ref={toggleRef}
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md text-fg-muted transition-colors hover:bg-elevated hover:text-fg md:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <MobileMenu open={menuOpen} links={NAV_LINKS} activeId={activeId} onClose={closeMenu} />
    </header>
  )
}
