import { MotionConfig } from 'framer-motion'

import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { CapabilityStrip } from './components/CapabilityStrip'
import { HeroSection } from './sections/Hero'
import { AboutSection } from './sections/About'
import { SkillsSection } from './sections/Skills'
import { ProjectsSection } from './sections/Projects'
import { SystemsFocusSection } from './sections/SystemsFocus'
import { LearningRoadmapSection } from './sections/LearningRoadmap'
import { ContactSection } from './sections/Contact'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div id="top" className="min-h-screen bg-ink text-fg font-sans antialiased selection:bg-mint/25 selection:text-fg">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-md focus:bg-elevated focus:px-4 focus:py-2 focus:text-sm focus:text-fg focus:outline-2 focus:outline-mint"
        >
          Skip to content
        </a>

        <Navbar />

        <main id="main">
          <HeroSection />
          <CapabilityStrip />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <SystemsFocusSection />
          <LearningRoadmapSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  )
}
