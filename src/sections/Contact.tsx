import { ContactLinks } from '../components/ContactLinks'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { Terminal } from '../components/Terminal'
import { profile } from '../data/profile'

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t border-line py-16 sm:py-20 lg:py-24">
      <div className="container-x">
        <Reveal>
          <div>
            <SectionHeading
              id="contact-heading"
              eyebrow="06 / Let's connect"
              title="Good engineering starts with curiosity."
              lead="I'm open to SDE internship opportunities, technical collaborations, and conversations with people building useful software and infrastructure."
              leadClassName="whitespace-nowrap"
            />

            <p className="mt-6 max-w-2xl font-mono text-[12.5px] leading-relaxed text-fg-faint">
              Always learning. Building consistently. Improving one problem at a time.
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-[1fr_21rem] lg:items-start lg:gap-14">
            <Terminal />
            <ContactLinks
              email={profile.email}
              githubUrl={profile.githubUrl}
              linkedinUrl={profile.linkedinUrl}
              resumeUrl={profile.resumeUrl}
              codingProfiles={profile.codingProfiles}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
