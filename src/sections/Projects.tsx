import { ProjectGrid } from '../components/ProjectGrid'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-t border-line py-16 sm:py-20 lg:py-24">
      <div className="container-x">
        <Reveal>
          <SectionHeading
          id="projects-heading"
          eyebrow="03 / Selected work"
          title="Learning by building."
          lead="Every project here is labelled honestly — verified work and clearly marked concepts are never mixed."
        />
        </Reveal>

        <Reveal className="mt-10" delay={0.08}>
          <ProjectGrid />
        </Reveal>
      </div>
    </section>
  )
}
