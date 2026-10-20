interface SectionHeadingProps {
  id?: string
  eyebrow: string
  title: string
  lead?: string
}

export function SectionHeading({ id, eyebrow, title, lead }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-[1.75rem] font-semibold leading-tight tracking-tight text-fg sm:text-4xl">
        {title}
      </h2>
      {lead ? <p className="mt-4 text-[15px] leading-relaxed text-fg-muted">{lead}</p> : null}
    </div>
  )
}
