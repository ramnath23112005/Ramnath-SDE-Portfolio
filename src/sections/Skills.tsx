import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { SkillGroup } from '../components/SkillGroup'
import { skillsData } from '../data/skills'

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="border-t border-line py-16 sm:py-20 lg:py-24">
      <div className="container-x">
        <Reveal>
          <SectionHeading
              id="skills-heading"
              eyebrow="02 / Toolkit"
              title="Tools I use. Concepts I explore."
              lead="Grouped honestly: what I work in regularly, what I am learning, and what I have only started exploring. Statuses, not progress bars."
            />
        </Reveal>

        <Reveal className="mt-10" delay={0.08}>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {skillsData.map((category) => (
              <SkillGroup key={category.title} category={category} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
