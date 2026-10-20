import type { MouseEvent as ReactMouseEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, MapPin } from 'lucide-react'

import { Terminal } from '../components/Terminal'
import { profile } from '../data/profile'
import { scrollToSection } from '../lib/utils'

const TECH_LINE = 'C++ · DSA · Linux · Systems Programming · CUDA'

export function HeroSection() {
  const reducedMotion = useReducedMotion()

  const jumpTo = (id: string) => (event: ReactMouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    scrollToSection(id)
  }

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: reducedMotion ? 0 : 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : delay, ease: 'easeOut' as const },
  })

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative isolate overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pb-16 lg:pt-32"
    >
      <div className="grid-lines pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[26rem] w-[46rem] max-w-[140vw] -translate-x-1/2 rounded-full bg-accent/[0.09] blur-[110px]"
        aria-hidden="true"
      />

      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <motion.p className="eyebrow" {...fadeUp(0)}>
              {profile.headline}
            </motion.p>

            <motion.h1
              className="mt-5 text-4xl font-bold leading-[1.07] tracking-tight text-fg sm:text-5xl lg:text-[3.45rem]"
              {...fadeUp(0.08)}
            >
              Building software.
              <br />
              Understanding <span className="text-mint">systems</span>.
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-fg-muted sm:text-base"
              {...fadeUp(0.16)}
            >
              I&rsquo;m Ramnath, an Electrical Engineering student at BVCOE exploring software
              engineering from the ground up — from algorithms and operating systems to parallel
              computing and GPU performance.
            </motion.p>

            <motion.p
              className="mt-4 font-mono text-xs leading-relaxed tracking-wide text-fg-faint sm:text-[13px]"
              {...fadeUp(0.22)}
            >
              {TECH_LINE}
            </motion.p>

            <motion.div className="mt-8 flex flex-wrap items-center gap-3" {...fadeUp(0.3)}>
              <a href="#projects" className="btn btn-primary" onClick={jumpTo('projects')}>
                Explore my work
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#contact" className="btn btn-ghost" onClick={jumpTo('contact')}>
                Get in touch
              </a>
            </motion.div>

            <motion.div
              className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11.5px] text-fg-faint"
              {...fadeUp(0.38)}
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {profile.location}
              </span>
              <span aria-hidden="true" className="hidden text-line-strong sm:inline">
                /
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inset-0 rounded-full bg-mint animate-ping-soft" />
                  <span className="relative h-2 w-2 rounded-full bg-mint" />
                </span>
                {profile.availability}
              </span>
            </motion.div>
          </div>

          <motion.div
            className="lg:pl-4"
            initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.55, delay: reducedMotion ? 0 : 0.25, ease: 'easeOut' }}
          >
            <Terminal />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
