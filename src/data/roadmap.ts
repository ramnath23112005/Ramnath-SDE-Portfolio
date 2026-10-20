/**
 * Learning roadmap — three parallel tracks.
 * status: 'learning' (actively studying) | 'exploring' (next to dig into) | 'next' (queued)
 * No percentages, deadlines, or completion claims — just honest direction.
 */
export type RoadmapStatus = 'learning' | 'exploring' | 'next'

export interface RoadmapItem {
  title: string
  status: RoadmapStatus
}

export interface RoadmapTrack {
  id: string
  title: string
  subtitle: string
  icon: 'book' | 'terminal' | 'zap'
  items: RoadmapItem[]
}

export const roadmapStatusLabels: Record<RoadmapStatus, string> = {
  learning: 'Learning',
  exploring: 'Exploring',
  next: 'Next',
}

export const roadmapData: RoadmapTrack[] = [
  {
    id: 'core-cs',
    title: 'Core CS',
    subtitle: 'Sharpening the fundamentals that everything else sits on',
    icon: 'book',
    items: [
      { title: 'Strengthen DSA and problem solving in C++', status: 'learning' },
      { title: 'Develop a deeper understanding of operating systems', status: 'learning' },
      { title: 'Practice DBMS concepts and SQL', status: 'exploring' },
      { title: 'Learn computer networking fundamentals', status: 'exploring' },
    ],
  },
  {
    id: 'systems',
    title: 'Systems',
    subtitle: 'Getting comfortable below the application layer',
    icon: 'terminal',
    items: [
      { title: 'Improve Linux command-line fluency', status: 'learning' },
      { title: 'Understand memory, processes, and threads', status: 'learning' },
      { title: 'Practice debugging and profiling', status: 'exploring' },
      { title: 'Build projects that demonstrate systems concepts', status: 'next' },
    ],
  },
  {
    id: 'parallel-computing',
    title: 'Parallel Computing',
    subtitle: 'Learning to think in many threads and memory hierarchies',
    icon: 'zap',
    items: [
      { title: 'Learn CUDA execution fundamentals', status: 'learning' },
      { title: 'Explore thread hierarchy and memory hierarchy', status: 'exploring' },
      { title: 'Understand memory coalescing and access patterns', status: 'exploring' },
      { title: 'Experiment with parallel algorithms and profiling', status: 'next' },
    ],
  },
]
