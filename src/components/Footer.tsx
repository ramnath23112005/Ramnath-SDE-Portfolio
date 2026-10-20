import { ArrowUp } from 'lucide-react'

import { profile } from '../data/profile'
import { isValidEmail, isValidHttpUrl, scrollToSection } from '../lib/utils'
import { GitHubIcon, LinkedInIcon } from './BrandIcons'

export function Footer() {
  const year = new Date().getFullYear()
  const hasEmail = isValidEmail(profile.email)
  const hasGithub = isValidHttpUrl(profile.githubUrl)
  const hasLinkedin = isValidHttpUrl(profile.linkedinUrl)

  return (
    <footer className="border-t border-line bg-ink">
      <div className="container-x flex flex-col gap-6 py-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-tight text-fg">{profile.name}</p>
          <p className="mt-1.5 font-mono text-[11.5px] text-fg-faint">
            Software engineering with a systems mindset.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 md:items-end">
          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px]">
            {hasGithub ? (
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-fg-muted transition-colors hover:text-fg"
              >
                <GitHubIcon className="h-3.5 w-3.5" aria-hidden="true" />
                GitHub
              </a>
            ) : null}
            {hasLinkedin ? (
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-fg-muted transition-colors hover:text-fg"
              >
                <LinkedInIcon className="h-3.5 w-3.5" aria-hidden="true" />
                LinkedIn
              </a>
            ) : null}
            {hasEmail ? (
              <a
                href={`mailto:${profile.email}`}
                className="text-fg-muted transition-colors hover:text-fg"
              >
                Email
              </a>
            ) : null}
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-fg-muted transition-colors hover:text-fg"
              onClick={() => scrollToSection('top')}
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </nav>

          <p className="font-mono text-[11px] text-fg-faint">
            © {year} {profile.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
