import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

import { profile } from '../data/profile'
import { cn, scrollToSection } from '../lib/utils'

export interface NavLink {
  label: string
  id: string
}

interface MobileMenuProps {
  open: boolean
  links: readonly NavLink[]
  activeId: string | null
  onClose: (returnFocus?: boolean) => void
}

/**
 * Full-screen mobile navigation.
 * Closes on selection, on Escape, and via the close button; locks body
 * scroll while open and moves focus into the menu for keyboard users.
 */
export function MobileMenu({ open, links, activeId, onClose }: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    closeButtonRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose(true)
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open, onClose])

  if (!open) return null

  const handleSelect = (id: string) => {
    onClose(false)
    scrollToSection(id)
  }

  return (
    <div
      id="mobile-menu"
      className="fixed inset-0 z-40 flex flex-col bg-ink/97 backdrop-blur-sm md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
    >
      <div className="container-x flex h-14 items-center justify-end border-b border-line md:h-16">
        <button
          ref={closeButtonRef}
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-fg-muted transition-colors hover:bg-elevated hover:text-fg"
          aria-label="Close menu"
          onClick={() => onClose(true)}
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav aria-label="Mobile" className="container-x flex-1 overflow-y-auto py-8">
        <ul className="space-y-1">
          {links.map((link) => {
            const isActive = activeId === link.id
            return (
              <li key={link.id}>
                <button
                  type="button"
                  className={cn(
                    'flex w-full items-center justify-between rounded-lg px-4 py-3.5 text-left text-lg font-medium transition-colors',
                    isActive ? 'bg-elevated text-fg' : 'text-fg-muted hover:bg-elevated/60 hover:text-fg',
                  )}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={() => handleSelect(link.id)}
                >
                  {link.label}
                  <span className="font-mono text-xs text-fg-faint">
                    {String(links.indexOf(link) + 1).padStart(2, '0')}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>

        <div className="mt-8 flex items-center gap-2 border-t border-line pt-6 font-mono text-xs text-fg-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-mint animate-ping-soft" />
            <span className="relative h-2 w-2 rounded-full bg-mint" />
          </span>
          {profile.availability}
        </div>
      </nav>
    </div>
  )
}
