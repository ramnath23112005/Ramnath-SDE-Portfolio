import { Reveal } from '../components/Reveal'
import { Roadmap } from '../components/Roadmap'
import { SectionHeading } from '../components/SectionHeading'

export function LearningRoadmapSection() {
  return (
    <section id="roadmap" aria-labelledby="roadmap-heading" className="border-t border-line py-16 sm:py-20 lg:py-24">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            id="roadmap-heading"
            eyebrow="05 / Currently exploring"
            title="Building depth, one concept at a time."
            lead="Three tracks I am working through in parallel — honest statuses, no completion theatre."
          />
        </Reveal>

        <Reveal className="mt-10" delay={0.08}>
          <Roadmap />
        </Reveal>
      </div>
    </section>
  )
}
