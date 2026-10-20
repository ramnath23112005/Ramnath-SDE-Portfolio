import { projectsData } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function ProjectGrid() {
  const sorted = [...projectsData].sort((a, b) =>
    a.status === b.status ? 0 : a.status === 'completed' ? -1 : 1,
  )

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
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {sorted.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
