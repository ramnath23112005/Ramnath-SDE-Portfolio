import { CircleDot } from 'lucide-react'

import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { profile } from '../data/profile'

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line py-16 sm:py-20 lg:py-24">
      <div className="container-x">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_19rem] lg:gap-14">
            <div>
              <SectionHeading
                id="about-title"
                eyebrow="01 / About"
                title="Curious about what happens under the hood."
              />

              <div className="mt-7 max-w-[62ch] space-y-5 text-[15px] leading-7 text-fg-muted sm:text-justify">
                <p>
                  I&rsquo;m a third-year Electrical Engineering student at Bharati Vidyapeeth&rsquo;s
                  College of Engineering, Delhi, building a strong foundation in software engineering
                  and computer systems.
                </p>
                <p>
                  My interests span data structures and algorithms, operating systems, databases,
                  computer networks, and Linux. I enjoy understanding not just how software works,
                  but why it behaves the way it does.
                </p>
                <p>
                  I&rsquo;m also exploring CUDA, GPU programming, and parallel computing, with a
                  growing interest in memory access patterns, execution models, and performance
                  optimization.
                </p>
                <p>
                  My background in electrical engineering, alongside exposure to web development and
                  PCB design and fabrication, gives me an appreciation for both hardware and
                  software.
                </p>
                <p className="text-fg/90">
                  My goal is to become a strong software engineer who can reason about complex
                  systems, write efficient and maintainable code, and make thoughtful engineering
                  decisions.
                </p>
              </div>
            </div>

            <aside aria-label="Current focus" className="lg:sticky lg:top-24 lg:self-start">
              <div className="card p-5">
                <h3 className="eyebrow">Current focus</h3>
                <ul className="mt-4 space-y-3">
                  {profile.currentFocus.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-fg-muted">
                      <CircleDot className="mt-0.5 h-3.5 w-3.5 shrink-0 text-mint" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <dl className="mt-5 space-y-1.5 border-t border-line pt-4 font-mono text-[11px] leading-relaxed text-fg-faint">
                  <div>
                    <dt className="sr-only">Degree</dt>
                    <dd>{profile.degree}</dd>
                  </div>
                  <div>
                    <dt className="sr-only">College</dt>
                    <dd>{profile.college}</dd>
                  </div>
                  <div>
                    <dt className="sr-only">Academic year</dt>
                    <dd>{profile.academicYear}</dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
