import { Info } from 'lucide-react'

import { projectsData } from '../data/projects'
import { ProjectCard } from './ProjectCard'

/**
 * Data-driven project grid. Completed work sorts before concepts; while no
 * verified project exists, a clear note explains that the cards are ideas.
 */
export function ProjectGrid() {
  const sorted = [...projectsData].sort((a, b) =>
    a.status === b.status ? 0 : a.status === 'completed' ? -1 : 1,
  )
  const hasCompleted = sorted.some((project) => project.status === 'completed')

  if (sorted.length === 0) {
    return (
      <div className="card p-8 text-center">
        <p className="text-sm text-fg-muted">
          Projects will appear here once they are added to{' '}
          <code className="rounded bg-elevated px-1.5 py-0.5 font-mono text-xs text-mint">
            src/data/projects.ts
          </code>
          .
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {!hasCompleted ? (
        <div
          className="flex items-start gap-3 rounded-lg border border-accent/25 bg-accent/[0.06] p-4"
          role="note"
        >
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          <p className="text-[13px] leading-relaxed text-fg-muted">
            <span className="font-medium text-fg">No verified projects published yet.</span>{' '}
            The cards below are clearly labelled <em>concepts</em> — planned experiments, not
            completed work. Real projects replace them by editing{' '}
            <code className="rounded bg-elevated px-1.5 py-0.5 font-mono text-[11.5px] text-mint">
              src/data/projects.ts
            </code>
            .
          </p>
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {sorted.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
