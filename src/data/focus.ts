/**
 * Engineering focus content: the capability strip under the hero and the
 * three "systems thinking" panels. Edit freely — presentation lives in
 * components/CapabilityStrip.tsx and sections/SystemsFocus.tsx.
 */
export interface Capability {
  label: string
  hint: string
  icon: 'brackets' | 'cpu' | 'database' | 'terminal' | 'zap'
}

export const capabilities: Capability[] = [
  { label: 'C++ & Problem Solving', hint: 'Algorithms & DSA', icon: 'brackets' },
  { label: 'Operating Systems', hint: 'Processes, memory, scheduling', icon: 'cpu' },
  { label: 'Databases & Networking', hint: 'SQL, TCP/IP fundamentals', icon: 'database' },
  { label: 'Linux & Developer Tools', hint: 'CLI, Git, workflows', icon: 'terminal' },
  { label: 'CUDA & GPU Computing', hint: 'Parallel execution', icon: 'zap' },
]

export interface SystemPanel {
  id: string
  title: string
  description: string
  icon: 'workflow' | 'network' | 'boxes'
  topics: string[]
}

export const systemPanels: SystemPanel[] = [
  {
    id: 'programs-run',
    title: 'How programs run',
    description:
      'What happens between writing code and seeing it execute — the operating system as the layer that makes it all possible.',
    icon: 'workflow',
    topics: [
      'Processes and threads',
      'Memory management',
      'Scheduling',
      'System calls',
      'Resource management',
    ],
  },
  {
    id: 'computers-communicate',
    title: 'How computers communicate',
    description:
      'Protocols, clients, servers, and data stores — how independent machines agree on meaning and stay reliable.',
    icon: 'network',
    topics: [
      'TCP/IP',
      'Client-server architecture',
      'Networking fundamentals',
      'Databases and data access',
      'Reliability and latency',
    ],
  },
  {
    id: 'parallelism-works',
    title: 'How parallelism works',
    description:
      'Splitting one problem across many cores — and why where the data lives often matters more than the arithmetic.',
    icon: 'boxes',
    topics: [
      'CPU vs. GPU execution',
      'Parallel workloads',
      'Memory access patterns',
      'Throughput and latency',
      'Performance trade-offs',
    ],
  },
]

export interface PipelineNode {
  label: string
  sub: string
  icon: 'code' | 'cpu' | 'circuit' | 'boxes'
}

export const pipeline: PipelineNode[] = [
  { label: 'Application', sub: 'what we write', icon: 'code' },
  { label: 'Operating System', sub: 'how it runs', icon: 'cpu' },
  { label: 'Hardware', sub: 'where it executes', icon: 'circuit' },
  { label: 'Parallel Execution', sub: 'how it scales', icon: 'boxes' },
]
