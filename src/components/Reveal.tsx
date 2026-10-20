import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

import { cn } from '../lib/utils'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

/**
 * Section entrance: opacity + small translate only, fires once on scroll
 * into view. With MotionConfig reducedMotion="user" the translate is dropped
 * for users who prefer reduced motion.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
