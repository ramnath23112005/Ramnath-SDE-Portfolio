import { ArrowUpRight, GitBranch, Lightbulb } from 'lucide-react'

import type { Project, ProjectDiagram } from '../data/projects'
import { isValidHttpUrl } from '../lib/utils'
import { GitHubIcon } from './BrandIcons'

const STATUS_STYLES: Record<Project['status'], { label: string; className: string }> = {
  completed: { label: 'Completed', className: 'border-mint/40 bg-mint/10 text-mint' },
  concept: { label: 'Concept', className: 'border-accent/40 bg-accent/10 text-accent' },
}

/**
 * Lightweight, hand-built illustrations — no stock imagery.
 * Purely decorative (aria-hidden).
 */
function ProjectIllustration({ kind }: { kind: ProjectDiagram }) {
  if (kind === 'gantt') {
    const bars = [
      { grow: 3, tone: 'bg-accent/70' },
      { grow: 1, tone: 'bg-mint/70' },
      { grow: 2, tone: 'bg-accent/45' },
      { grow: 1, tone: 'bg-mint/45' },
      { grow: 2.5, tone: 'bg-accent/60' },
    ]
    return (
      <div className="flex h-full flex-col justify-center gap-2" aria-hidden="true">
        <div className="flex h-7 gap-1">
          {bars.map((bar, i) => (
            <div
              key={i}
              className={`rounded-[3px] ${bar.tone}`}
              style={{ flexGrow: bar.grow, flexBasis: 0 }}
            />
          ))}
        </div>
        <div className="flex gap-1">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="h-1.5 flex-1 rounded-full bg-white/10" />
          ))}
        </div>
      </div>
    )
  }

  if (kind === 'lanes') {
    const lit = new Set([1, 4, 6, 7, 10, 13, 16, 19])
    return (
      <div className="grid h-full grid-cols-6 grid-rows-3 gap-1.5" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className={`rounded-[3px] ${lit.has(i) ? 'bg-mint/70 animate-lane' : 'bg-white/[0.07]'}`}
            style={lit.has(i) ? { animationDelay: `${(i % 5) * 0.35}s` } : undefined}
          />
        ))}
      </div>
    )
  }

  return (
    <svg viewBox="0 0 220 64" className="h-full w-full" aria-hidden="true">
      <g fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1">
        <rect x="8" y="10" width="40" height="18" rx="3" />
        <rect x="56" y="10" width="40" height="18" rx="3" />
        <rect x="104" y="10" width="40" height="18" rx="3" />
        <rect x="152" y="10" width="40" height="18" rx="3" />
        <rect x="8" y="38" width="40" height="18" rx="3" />
        <rect x="56" y="38" width="40" height="18" rx="3" />
        <rect x="104" y="38" width="40" height="18" rx="3" />
        <rect x="152" y="38" width="40" height="18" rx="3" />
      </g>
      <g fill="none" stroke="#75e0d0" strokeWidth="1.5" strokeLinecap="round">
        <path d="M48 19 H56" />
        <path d="M96 19 H104" />
        <path d="M144 19 H152" />
        <path d="M172 28 V38" />
        <path d="M152 47 H104" strokeDasharray="3 3" stroke="#67b7ff" />
        <path d="M56 47 H48" strokeDasharray="3 3" stroke="#67b7ff" />
      </g>
      <g fill="#75e0d0">
        <rect x="14" y="15" width="14" height="10" rx="2" opacity="0.85" />
        <rect x="62" y="15" width="20" height="10" rx="2" opacity="0.55" />
        <rect x="110" y="15" width="10" height="10" rx="2" opacity="0.7" />
      </g>
      <g fill="#67b7ff">
        <rect x="158" y="43" width="24" height="10" rx="2" opacity="0.7" />
        <rect x="62" y="43" width="14" height="10" rx="2" opacity="0.5" />
      </g>
    </svg>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  const hasGithub = isValidHttpUrl(project.githubUrl)
  const hasDemo = isValidHttpUrl(project.liveDemoUrl)
  const status = STATUS_STYLES[project.status]

  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(117,224,208,0.35)] hover:bg-elevated">
      <div className="border-b border-line bg-ink/60 p-4">
        <div className="h-20 rounded-md border border-line/70 bg-black/30 p-3">
          <ProjectIllustration kind={project.diagram} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold leading-snug tracking-tight text-fg">
            {project.title}
          </h3>
          <span className={`chip shrink-0 ${status.className}`}>{status.label}</span>
        </div>

        <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">{project.summary}</p>

        <dl className="mt-4 space-y-3.5">
          <div>
            <dt className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-fg-faint">
              Problem
            </dt>
            <dd className="mt-1 text-[13px] leading-relaxed text-fg-muted">{project.problem}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-fg-faint">
              Approach
            </dt>
            <dd className="mt-1 text-[13px] leading-relaxed text-fg-muted">{project.approach}</dd>
          </div>
        </dl>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded border border-line bg-white/[0.03] px-2 py-0.5 font-mono text-[10.5px] text-fg-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        {project.status === 'concept' ? (
          <p className="mt-4 flex items-start gap-1.5 text-[11.5px] leading-relaxed text-fg-faint">
            <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent/80" aria-hidden="true" />
            Planned experiment — a design concept, not a finished project.
          </p>
        ) : null}

        <div className="mt-auto pt-5">
          {hasGithub || hasDemo ? (
            <div className="flex flex-wrap gap-2">
              {hasGithub ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost min-h-9 px-3 py-2 text-xs"
                  aria-label={`${project.title} source code on GitHub (opens in new tab)`}
                >
                  <GitHubIcon className="h-3.5 w-3.5" />
                  Repository
                </a>
              ) : null}
              {hasDemo ? (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost min-h-9 px-3 py-2 text-xs"
                  aria-label={`Open the live demo of ${project.title} (opens in new tab)`}
                >
                  Live demo
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ) : null}
            </div>
          ) : (
            <p className="flex items-center gap-1.5 font-mono text-[11px] text-fg-faint">
              <GitBranch className="h-3.5 w-3.5" aria-hidden="true" />
              Repository link not published yet.
            </p>
          )}
        </div>
      </div>
    </article>
  )
}
