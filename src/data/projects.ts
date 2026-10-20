/**
 * Projects data.
 *
 * status: 'completed' → verified, real work (shown first)
 * status: 'concept'   → a clearly labelled idea, NOT a finished project
 *
 * Only fill in `githubUrl` / `liveDemoUrl` when the links really exist —
 * buttons only render for URLs that are configured, so nothing dead ships.
 * Replace the concepts below with your real projects as they are built.
 */
export type ProjectStatus = 'completed' | 'concept'
export type ProjectDiagram = 'gantt' | 'lanes' | 'graph'

export interface Project {
  id: string
  title: string
  summary: string
  problem: string
  approach: string
  tags: string[]
  status: ProjectStatus
  diagram: ProjectDiagram
  githubUrl: string
  liveDemoUrl: string
}

export const projectsData: Project[] = [
  {
    id: 'cpu-scheduling-visualizer',
    title: 'CPU Scheduling Visualizer',
    summary:
      'An interactive educational tool that plays out how different CPU scheduling algorithms treat a set of processes.',
    problem:
      'Scheduling algorithms are easy to read about and hard to build an intuition for — waiting time and turnaround time only click once you can watch them change.',
    approach:
      'Simulate FCFS, SJF, Round Robin, and priority scheduling over an editable process set, then render a Gantt timeline with per-process waiting and turnaround calculations.',
    tags: ['C++', 'Algorithms', 'Data Structures', 'Visualization'],
    status: 'concept',
    diagram: 'gantt',
    githubUrl: '',
    liveDemoUrl: '',
  },
  {
    id: 'cuda-parallel-lab',
    title: 'CUDA Parallel Computing Lab',
    summary:
      'A collection of small CUDA experiments comparing straightforward sequential code with GPU-oriented implementations.',
    problem:
      'Parallel speedups are often quoted without context — I want to build my own grounded sense of when a GPU actually helps and when it does not.',
    approach:
      'Start with sequential baselines, write kernels for workloads like vector operations and stencil patterns, and document measured results only after experiments are actually run and recorded.',
    tags: ['CUDA', 'GPU', 'Parallel Computing', 'C++'],
    status: 'concept',
    diagram: 'lanes',
    githubUrl: '',
    liveDemoUrl: '',
  },
  {
    id: 'memory-access-explorer',
    title: 'Memory Access Explorers',
    summary:
      'An interactive visualization explaining cache locality, access patterns, and why data layout influences performance.',
    problem:
      'Two programs with identical asymptotic complexity can differ dramatically in wall-clock time — usually because of how they touch memory.',
    approach:
      'Visualize row-major versus column-major traversal, cache lines, and spatial locality, tying each animation back to the hardware behaviour that causes it.',
    tags: ['Systems', 'C++', 'Performance', 'Education'],
    status: 'concept',
    diagram: 'graph',
    githubUrl: '',
    liveDemoUrl: '',
  },
]

export const completedProjects = projectsData.filter((p) => p.status === 'completed')
export const conceptProjects = projectsData.filter((p) => p.status === 'concept')
