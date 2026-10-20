import { useCallback, useEffect, useRef, useState } from 'react'

export type CopyState = 'idle' | 'copied' | 'error'

/**
 * Copy-to-clipboard with accessible feedback. Returns the current state so
 * callers can announce it via an aria-live region. Resets to idle after a
 * short delay; the timer is cleaned up on unmount.
 */
export function useCopyToClipboard(resetAfterMs = 2000) {
  const [state, setState] = useState<CopyState>('idle')
  const timerRef = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timerRef.current), [])

  const copy = useCallback(
    async (text: string) => {
      window.clearTimeout(timerRef.current)
      try {
        await navigator.clipboard.writeText(text)
        setState('copied')
      } catch {
        setState('error')
      }
      timerRef.current = window.setTimeout(() => setState('idle'), resetAfterMs)
    },
    [resetAfterMs],
  )

  return { state, copy }
}
