import { Boxes, Network, Workflow } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { SystemsDiagram } from '../components/SystemsDiagram'
import { systemPanels, type SystemPanel } from '../data/focus'

const PANEL_ICONS: Record<SystemPanel['icon'], LucideIcon> = {
  workflow: Workflow,
  network: Network,
  boxes: Boxes,
}

export function SystemsFocusSection() {
  return (
    <section id="focus" aria-labelledby="focus-heading" className="border-t border-line py-16 sm:py-20 lg:py-24">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            id="focus-heading"
            eyebrow="04 / Beyond the surface"
            title="Interested in how the layers connect."
            lead="Most tutorials stop at the API. These are the questions I keep coming back to — the layers underneath, and how they shape what software actually does."
          />
        </Reveal>

        <Reveal className="mt-10" delay={0.06}>
          <SystemsDiagram />
        </Reveal>

        <Reveal className="mt-6" delay={0.1}>
          <div className="grid gap-5 md:grid-cols-3">
            {systemPanels.map((panel) => {
              const Icon = PANEL_ICONS[panel.icon]
              return (
                <article key={panel.id} className="card flex flex-col p-5 transition-colors duration-200 hover:border-line-strong sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-line bg-elevated text-mint">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-fg">
                      {panel.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-[13.5px] leading-relaxed text-fg-muted">
                    {panel.description}
                  </p>

                  <ul className="mt-4 flex-1 space-y-2 border-t border-line pt-4">
                    {panel.topics.map((topic) => (
                      <li key={topic} className="flex items-center gap-2.5 text-[13px] text-fg-muted">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
