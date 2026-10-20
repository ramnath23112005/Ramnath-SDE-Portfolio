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

const DOT_STYLES: Record<RoadmapStatus, string> = {
  learning: 'bg-mint shadow-[0_0_8px_rgba(117,224,208,0.5)]',
  exploring: 'bg-accent shadow-[0_0_8px_rgba(103,183,255,0.4)]',
  next: 'bg-fg-faint/50',
}

/** Three-track learning roadmap — vertical timeline with status dots. */
export function Roadmap() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {roadmapData.map((track) => {
        const Icon = TRACK_ICONS[track.icon]
        return (
          <article
            key={track.id}
            className="card flex flex-col p-5 transition-colors duration-200 hover:border-line-strong sm:p-6"
          >
            <header className="border-b border-line pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-line bg-elevated text-mint">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-fg">{track.title}</h3>
                  <p className="font-mono text-[10.5px] uppercase tracking-wider text-fg-faint">
                    Track
                  </p>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-fg-faint">{track.subtitle}</p>
            </header>

            <ul className="relative mt-5 flex-1 space-y-0">
              {/* Vertical timeline line */}
              <span
                aria-hidden="true"
                className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-mint/30 via-accent/20 to-transparent"
              />

              {track.items.map((item, index) => {
                const isLast = index === track.items.length - 1
                return (
                  <li key={item.title} className="relative flex gap-4 pb-5 last:pb-0">
                    {/* Status dot */}
                    <span className="relative z-10 mt-1.5 shrink-0">
                      <span
                        className={cn('block h-3.5 w-3.5 rounded-full border-2 border-surface', DOT_STYLES[item.status])}
                        aria-hidden="true"
                      />
                    </span>

                    <div className="min-w-0 flex-1 -mt-0.5">
                      <span
                        className={cn(
                          'inline-flex items-center rounded border px-1.5 py-0.5 font-mono text-[10px] font-medium tracking-wide',
                          STATUS_STYLES[item.status],
                        )}
                      >
                        {roadmapStatusLabels[item.status]}
                      </span>
                      <p className="mt-1.5 text-[13px] leading-snug text-fg-muted">
                        {item.title}
                      </p>
                    </div>

                    {/* Subtle connector to next item */}
                    {!isLast ? (
                      <span
                        aria-hidden="true"
                        className="absolute left-[7px] top-6 h-[calc(100%-1.5rem)] w-px bg-line"
                      />
                    ) : null}
                  </li>
                )
              })}
            </ul>
          </article>
        )
      })}
    </div>
  )
}
