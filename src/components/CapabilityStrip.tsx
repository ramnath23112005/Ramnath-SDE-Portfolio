import { Brackets, Cpu, Database, Terminal as TerminalIcon, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { capabilities, type Capability } from '../data/focus'

const ICONS: Record<Capability['icon'], LucideIcon> = {
  brackets: Brackets,
  cpu: Cpu,
  database: Database,
  terminal: TerminalIcon,
  zap: Zap,
}

/** Compact strip of technical focus areas directly below the hero. */
export function CapabilityStrip() {
  return (
    <section aria-label="Engineering capabilities" className="border-y border-line bg-surface/50">
      <div className="container-x">
        <ul className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-5">
          {capabilities.map((capability, index) => {
            const Icon = ICONS[capability.icon]
            const spansTwoOnSmall =
              index === capabilities.length - 1 && capabilities.length % 2 === 1
            return (
              <li
                key={capability.label}
                className={`bg-ink px-5 py-5 transition-colors duration-200 hover:bg-surface ${
                  spansTwoOnSmall ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-[13px] font-semibold leading-tight text-fg">
                    {capability.label}
                  </span>
                </div>
                <p className="mt-1.5 pl-6.5 font-mono text-[11px] leading-relaxed text-fg-faint">
                  {capability.hint}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
