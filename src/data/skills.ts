/**
 * Skills data — edit to reflect your own experience.
 * `level` drives a text label (never a progress bar or percentage):
 *   core      → "Core focus"
 *   working   → "Working knowledge"
 *   learning  → "Learning"
 *   exploring → "Exploring"
 */
export type SkillLevel = 'core' | 'working' | 'learning' | 'exploring'

export interface SkillItem {
  name: string
  level: SkillLevel
  description: string
}

export interface SkillCategory {
  title: string
  blurb: string
  icon: 'brackets' | 'book' | 'cpu' | 'tools'
  items: SkillItem[]
}

export const levelLabels: Record<SkillLevel, string> = {
  core: 'Core focus',
  working: 'Working knowledge',
  learning: 'Learning',
  exploring: 'Exploring',
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Languages',
    blurb: 'Languages I write in and query with',
    icon: 'brackets',
    items: [
      {
        name: 'C++',
        level: 'core',
        description: 'Primary language for problem solving and systems work',
      },
      {
        name: 'SQL',
        level: 'working',
        description: 'Queries, joins, and relational data modelling',
      },
    ],
  },
  {
    title: 'Computer Science',
    blurb: 'The fundamentals I am studying deliberately',
    icon: 'book',
    items: [
      {
        name: 'Data Structures & Algorithms',
        level: 'core',
        description: 'Problem solving, complexity analysis, and practice',
      },
      {
        name: 'Operating Systems',
        level: 'exploring',
        description: 'Processes, threads, memory, and scheduling',
      },
      {
        name: 'Database Management Systems',
        level: 'exploring',
        description: 'Indexing, transactions, and query behaviour',
      },
      {
        name: 'Computer Networks',
        level: 'exploring',
        description: 'TCP/IP, protocols, and client-server models',
      },
    ],
  },
  {
    title: 'Systems & Computing',
    blurb: 'Where my interest is heading',
    icon: 'cpu',
    items: [
      {
        name: 'Linux',
        level: 'core',
        description: 'Daily driver — shell, tooling, and the command line',
      },
      {
        name: 'Systems Programming',
        level: 'learning',
        description: 'Memory, file descriptors, and the OS boundary',
      },
      {
        name: 'CUDA & GPU Programming',
        level: 'exploring',
        description: 'Kernels, thread hierarchy, and the memory hierarchy',
      },
      {
        name: 'Parallel Computing',
        level: 'exploring',
        description: 'Splitting work across cores and accelerators',
      },
      {
        name: 'Performance Optimization',
        level: 'learning',
        description: 'Profiling first, optimizing second',
      },
    ],
  },
  {
    title: 'Tools & Development',
    blurb: 'Day-to-day engineering tools',
    icon: 'tools',
    items: [
      {
        name: 'Git',
        level: 'core',
        description: 'Version control and sensible commit hygiene',
      },
      {
        name: 'GitHub',
        level: 'core',
        description: 'Repos, issues, and collaboration',
      },
      {
        name: 'Web Development',
        level: 'working',
        description: 'React, TypeScript, and modern frontend tooling',
      },
      {
        name: 'PCB Design & Fabrication',
        level: 'exploring',
        description: 'Hardware exposure from my electrical engineering side',
      },
    ],
  },
]
