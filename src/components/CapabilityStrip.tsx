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
                className={`bg-ink px-4 py-3.5 transition-colors duration-200 hover:bg-surface lg:px-3 lg:py-3 ${
                  spansTwoOnSmall ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-[12.5px] font-semibold leading-tight text-fg lg:text-[12px]">
                    {capability.label}
                  </span>
                </div>
                <p className="mt-1 pl-5.5 font-mono text-[10.5px] leading-relaxed text-fg-faint lg:text-[10px]">
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
