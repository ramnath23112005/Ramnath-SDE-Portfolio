import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react'
import type { ReactNode } from 'react'

import type { CodingProfile } from '../data/profile'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'
import { cn, isValidEmail, isValidHttpUrl } from '../lib/utils'
import { GeeksforGeeksIcon, GitHubIcon, LeetCodeIcon, LinkedInIcon, NeetCodeIcon } from './BrandIcons'

interface ContactLinksProps {
  email: string
  githubUrl: string
  linkedinUrl: string
  resumeUrl: string
  codingProfiles: CodingProfile[]
}

interface ContactRow {
  key: string
  label: string
  href: string
  icon: ReactNode
}

function codingProfileIcon(url: string): ReactNode {
  let host: string
  try {
    host = new URL(url).hostname
  } catch {
    host = ''
  }
  if (host.includes('neetcode.io')) return <NeetCodeIcon className="h-4 w-4" />
  if (host.includes('leetcode.com')) return <LeetCodeIcon className="h-4 w-4" />
  if (host.includes('geeksforgeeks.org')) return <GeeksforGeeksIcon className="h-4 w-4" />
  return <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
}

/**
 * Contact panel: a vertical list of divided rows that stays tidy no matter
 * how many profiles are configured. Only configured links render — no dead
 * buttons. The copy-email control announces feedback via an aria-live region.
 */
export function ContactLinks({
  email,
  githubUrl,
  linkedinUrl,
  resumeUrl,
  codingProfiles,
}: ContactLinksProps) {
  const { state, copy } = useCopyToClipboard()
  const hasEmail = isValidEmail(email)

  const rows: ContactRow[] = [
    ...(isValidHttpUrl(githubUrl)
      ? [{ key: 'github', label: 'GitHub', href: githubUrl, icon: <GitHubIcon className="h-4 w-4" /> }]
      : []),
    ...(isValidHttpUrl(linkedinUrl)
      ? [
          {
            key: 'linkedin',
            label: 'LinkedIn',
            href: linkedinUrl,
            icon: <LinkedInIcon className="h-4 w-4" />,
          },
        ]
      : []),
    ...codingProfiles
      .filter((account) => isValidHttpUrl(account.url))
      .map((account) => ({
        key: account.url,
        label: account.label,
        href: account.url,
        icon: codingProfileIcon(account.url),
      })),
    ...(isValidHttpUrl(resumeUrl)
      ? [
          {
            key: 'resume',
            label: 'Résumé',
            href: resumeUrl,
            icon: <ArrowUpRight className="h-4 w-4" aria-hidden="true" />,
          },
        ]
      : []),
  ]

  if (!hasEmail && rows.length === 0) {
    return (
      <p className="max-w-sm font-mono text-xs leading-relaxed text-fg-faint">
        Contact links will appear here once configured in{' '}
        <span className="text-mint">src/data/profile.ts</span>.
      </p>
    )
  }

  return (
    <div className="w-full lg:max-w-[21rem]">
      <div className="card overflow-hidden">
        <ul className="divide-y divide-line">
          {hasEmail ? (
            <li className="flex items-center gap-3 px-4 py-3">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-line bg-elevated text-mint"
                aria-hidden="true"
              >
                <Mail className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <a
                  href={`mailto:${email}`}
                  className="block truncate text-sm font-medium text-fg transition-colors hover:text-mint"
                >
                  Email me
                </a>
                <p className="truncate font-mono text-[11px] text-fg-faint">{email}</p>
              </div>
              <button
                type="button"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-fg-faint transition-colors hover:bg-elevated hover:text-fg"
                aria-label="Copy email address to clipboard"
                onClick={() => copy(email.trim())}
              >
                {state === 'copied' ? (
                  <Check className="h-4 w-4 text-mint" aria-hidden="true" />
                ) : (
                  <Copy className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
            </li>
          ) : null}

          {rows.map((row) => (
            <li key={row.key}>
              <a
                href={row.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-4 py-3 transition-colors hover:bg-elevated/60"
                aria-label={`${row.label} profile (opens in a new tab)`}
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-line bg-elevated text-fg-muted transition-colors group-hover:text-mint"
                  aria-hidden="true"
                >
                  {row.icon}
                </span>
                <span className="min-w-0 flex-1 truncate text-sm text-fg-muted transition-colors group-hover:text-fg">
                  {row.label}
                </span>
                <ArrowUpRight
                  className="h-3.5 w-3.5 shrink-0 text-fg-faint transition-colors group-hover:text-mint"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p
        aria-live="polite"
        className={cn('mt-2 px-1 font-mono text-xs text-mint', state === 'idle' && 'sr-only')}
      >
        {state === 'copied'
          ? 'Email copied to clipboard.'
          : state === 'error'
            ? 'Could not copy — please copy manually.'
            : ''}
      </p>
    </div>
  )
}
