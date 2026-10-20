import { Boxes, ChevronRight, CircuitBoard, Code, Cpu, ArrowDown } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { pipeline, type PipelineNode } from '../data/focus'

const NODE_ICONS: Record<PipelineNode['icon'], LucideIcon> = {
  code: Code,
  cpu: Cpu,
  circuit: CircuitBoard,
  boxes: Boxes,
}

/**
 * APPLICATION → OPERATING SYSTEM → HARDWARE → PARALLEL EXECUTION pipeline.
 * Horizontal with a travelling node on desktop, vertical on mobile.
 */
export function SystemsDiagram() {
  return (
    <div className="card p-5 sm:p-6">
      <p className="eyebrow">One problem, four layers</p>

      <ol className="mt-5 flex flex-col md:flex-row md:items-start">
        {pipeline.map((node, index) => {
          const Icon = NODE_ICONS[node.icon]
          const isLast = index === pipeline.length - 1
          return (
            <li key={node.label} className="flex flex-1 flex-col items-center md:flex-row">
              <div className="flex w-full flex-col items-center gap-2 rounded-lg border border-line bg-ink/70 px-4 py-3.5 text-center transition-colors duration-200 hover:border-[rgba(117,224,208,0.35)] md:w-auto md:min-w-[8.75rem] md:flex-1">
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-line bg-elevated text-accent">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.12em] text-fg">
                  {node.label}
                </span>
                <span className="text-[11px] leading-none text-fg-faint">{node.sub}</span>
              </div>

              {!isLast ? (
                <div
                  className="flex shrink-0 items-center justify-center py-3 md:flex-1 md:px-3 md:py-0"
                  aria-hidden="true"
                >
                  <ArrowDown className="h-4 w-4 text-accent/60 md:hidden" />
                  <span className="relative hidden h-px w-full bg-line md:block">
                    <span className="absolute -top-[2.5px] left-0 h-1.5 w-1.5 rounded-full bg-mint animate-travel" />
                  </span>
                  <ChevronRight className="hidden h-3.5 w-3.5 text-accent/60 md:block" />
                </div>
              ) : null}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
