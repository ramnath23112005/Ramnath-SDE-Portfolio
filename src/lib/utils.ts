/** Merge conditional class names. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}

export function isNonEmpty(value: string | undefined | null): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

export function isValidEmail(value: string | undefined | null): value is string {
  return isNonEmpty(value) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

export function isValidHttpUrl(value: string | undefined | null): value is string {
  if (!isNonEmpty(value)) return false
  try {
    const url = new URL(value.trim())
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

/** Smooth-scroll that honours reduced-motion preferences. */
export function scrollToSection(id: string): void {
  const target = document.getElementById(id)
  if (!target) return
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' })
  if (id !== 'top') target.setAttribute('tabindex', '-1')
  target.focus({ preventScroll: true })
}
