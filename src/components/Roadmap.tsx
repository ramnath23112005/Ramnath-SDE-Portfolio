import { BookOpen, Terminal as TerminalIcon, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { roadmapData, roadmapStatusLabels, type RoadmapStatus } from '../data/roadmap'
import { cn } from '../lib/utils'

const TRACK_ICONS: Record<RoadmapTrackIcon, LucideIcon> = {
  book: BookOpen,
  terminal: TerminalIcon,
  zap: Zap,
}

type RoadmapTrackIcon = (typeof roadmapData)[number]['icon']

const STATUS_STYLES: Record<RoadmapStatus, string> = {
  learning: 'border-mint/40 bg-mint/10 text-mint',
  exploring: 'border-accent/40 bg-accent/10 text-accent',
  next: 'border-line-strong bg-white/[0.04] text-fg-faint',
}

/** Three-track learning roadmap — honest statuses, no completion theatre. */
export function Roadmap() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {roadmapData.map((track) => {
        const Icon = TRACK_ICONS[track.icon]
        return (
          <article key={track.id} className="card flex flex-col p-5 transition-colors duration-200 hover:border-line-strong">
            <header className="border-b border-line pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-line bg-elevated text-mint">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-fg">{track.title}</h3>
                  <p className="font-mono text-[10.5px] text-fg-faint">Track</p>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-fg-faint">{track.subtitle}</p>
            </header>

            <ul className="mt-4 flex-1 space-y-2">
              {track.items.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span
                    className={cn(
                      'chip mt-px min-w-[5.25rem] justify-center',
                      STATUS_STYLES[item.status],
                    )}
                  >
                    {roadmapStatusLabels[item.status]}
                  </span>
                  <span className="pt-0.5 text-[13px] leading-snug text-fg-muted">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        )
      })}
    </div>
  )
}
