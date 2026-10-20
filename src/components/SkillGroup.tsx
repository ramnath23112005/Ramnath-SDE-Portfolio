import { BookOpen, Brackets, Cpu, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { levelLabels, type SkillCategory, type SkillLevel } from '../data/skills'
import { cn } from '../lib/utils'

const CATEGORY_ICONS: Record<SkillCategory['icon'], LucideIcon> = {
  brackets: Brackets,
  book: BookOpen,
  cpu: Cpu,
  tools: Wrench,
}

const LEVEL_STYLES: Record<SkillLevel, string> = {
  core: 'border-mint/40 text-mint bg-mint/10',
  working: 'border-accent/40 text-accent bg-accent/10',
  learning: 'border-line-strong text-fg-muted bg-white/[0.04]',
  exploring: 'border-line-strong text-fg-faint bg-white/[0.03]',
}

export function SkillGroup({ category }: { category: SkillCategory }) {
  const Icon = CATEGORY_ICONS[category.icon]

  return (
    <article className="card flex flex-col p-5 transition-colors duration-200 hover:border-line-strong">
      <header className="flex items-center gap-3 border-b border-line pb-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-line bg-elevated text-accent">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-fg">{category.title}</h3>
          <p className="truncate font-mono text-[10.5px] text-fg-faint">{category.blurb}</p>
        </div>
      </header>

      <ul className="mt-1 flex-1 divide-y divide-line/70">
        {category.items.map((item) => (
          <li key={item.name} className="py-3.5">
            <div className="flex items-start justify-between gap-2">
              <span className="text-[13.5px] font-medium leading-snug text-fg">{item.name}</span>
              <span className={cn('chip mt-0.5 shrink-0', LEVEL_STYLES[item.level])}>
                {levelLabels[item.level]}
              </span>
            </div>
            <p className="mt-1 text-xs leading-relaxed text-fg-faint">{item.description}</p>
          </li>
        ))}
      </ul>
    </article>
  )
}
