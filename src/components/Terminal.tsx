import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

type Tone = 'fg' | 'muted' | 'accent' | 'blue' | 'mint'

interface OutputPart {
  text: string
  tone: Tone
}

interface CommandBlock {
  cmd: string
  outputs: OutputPart[][]
}

const TONE_CLASSES: Record<Tone, string> = {
  fg: 'text-fg',
  muted: 'text-fg-muted',
  accent: 'text-accent',
  blue: 'text-[#58a6ff]',
  mint: 'text-mint',
}

const BLOCKS: CommandBlock[] = [
  {
    cmd: 'whoami',
    outputs: [
      [
        { text: 'Ramnath G.K.', tone: 'fg' },
        { text: ' - Systems & Software Engineer', tone: 'muted' },
      ],
    ],
  },
  {
    cmd: 'cat current_focus.txt',
    outputs: [
      [{ text: '> High-Performance Computing (C++)', tone: 'fg' }],
      [{ text: '> OS Architecture & Memory Management', tone: 'fg' }],
      [{ text: '> Distributed Systems', tone: 'fg' }],
    ],
  },
  {
    cmd: 'status --check',
    outputs: [
      [
        { text: '[SUCCESS]', tone: 'blue' },
        { text: ' Available for SDE Internships (Summer 2024)', tone: 'fg' },
      ],
    ],
  },
  {
    cmd: 'ping github.com/RamnathGK',
    outputs: [
      [
        { text: 'Reply from GitHub: ', tone: 'muted' },
        { text: 'time=12ms', tone: 'accent' },
        { text: ', ', tone: 'muted' },
        { text: 'status=ACTIVE', tone: 'mint' },
      ],
    ],
  },
]

const TRANSCRIPT = BLOCKS.map(
  (block) =>
    `~ ${block.cmd}: ${block.outputs
      .map((row) => row.map((part) => part.text).join(''))
      .join(' | ')}`,
).join('; ')

const TYPING_MS = 45
const WAIT_AFTER_CMD_MS = 300
const PAUSE_AFTER_OUTPUT_MS = 450

interface TerminalState {
  /** Blocks whose command and output are fully shown. */
  completed: number
  /** Index of the block currently being typed, or null when idle. */
  typingBlock: number | null
  /** Characters typed so far for the active command. */
  typedCmd: string
  /** Whether the active block's output has been revealed. */
  outputsVisible: boolean
}

const INITIAL_STATE: TerminalState = {
  completed: 0,
  typingBlock: null,
  typedCmd: '',
  outputsVisible: false,
}

const DONE_STATE: TerminalState = {
  completed: BLOCKS.length,
  typingBlock: null,
  typedCmd: '',
  outputsVisible: false,
}

/**
 * Typewriter terminal. Auto-plays once when scrolled into view:
 * types each command character-by-character, waits 300 ms, reveals the
 * output, then moves on. Reduced-motion users see the full transcript
 * immediately. Decorative — exposed as a single labelled image.
 */
export function Terminal() {
  const containerRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const inView = useInView(containerRef, { once: true, amount: 0.35 })
  const reducedMotion = useReducedMotion()
  const [state, setState] = useState<TerminalState>(INITIAL_STATE)

  useEffect(() => {
    if (!inView || reducedMotion) return

    let cancelled = false
    const timers: number[] = []
    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(window.setTimeout(resolve, ms))
      })

    const run = async () => {
      for (let blockIndex = 0; blockIndex < BLOCKS.length; blockIndex++) {
        const cmd = BLOCKS[blockIndex].cmd
        for (let chars = 1; chars <= cmd.length; chars++) {
          if (cancelled) return
          setState({
            completed: blockIndex,
            typingBlock: blockIndex,
            typedCmd: cmd.slice(0, chars),
            outputsVisible: false,
          })
          await sleep(TYPING_MS)
        }
        if (cancelled) return
        await sleep(WAIT_AFTER_CMD_MS)
        if (cancelled) return
        setState({
          completed: blockIndex,
          typingBlock: blockIndex,
          typedCmd: cmd,
          outputsVisible: true,
        })
        await sleep(PAUSE_AFTER_OUTPUT_MS)
      }
      if (cancelled) return
      setState(DONE_STATE)
    }

    void run()

    return () => {
      cancelled = true
      timers.forEach((timer) => window.clearTimeout(timer))
    }
  }, [inView, reducedMotion])

  // Keep the newest line (and the cursor) in view inside the fixed-height body.
  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight })
  }, [state, reducedMotion])

  // Reduced-motion users get the finished transcript with no animation.
  const view = reducedMotion ? DONE_STATE : state

  const renderOutputs = (block: CommandBlock) =>
    block.outputs.map((row, rowIndex) => (
      <div key={rowIndex} className="break-words pl-1">
        {row.map((part, partIndex) => (
          <span key={partIndex} className={TONE_CLASSES[part.tone]}>
            {part.text}
          </span>
        ))}
      </div>
    ))

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-xl border border-line bg-[#0b0e14] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.9)]"
      role="img"
      aria-label={`Terminal window. ${TRANSCRIPT}`}
    >
      <div
        className="relative flex items-center border-b border-line bg-white/[0.03] px-4 py-2.5"
        aria-hidden="true"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/75" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/75" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/75" />
        <span className="ml-3 truncate font-mono text-[11px] text-fg-faint sm:absolute sm:left-1/2 sm:ml-0 sm:-translate-x-1/2">
          ramnath@system ~ %
        </span>
      </div>

      <div
        ref={bodyRef}
        className="h-[340px] space-y-2.5 overflow-hidden p-3.5 font-mono text-[10.5px] leading-[1.55] sm:h-[320px] sm:space-y-3 sm:p-6 sm:text-[12px] lg:h-[300px]"
        aria-hidden="true"
      >
        {BLOCKS.slice(0, view.completed).map((block) => (
          <div key={block.cmd}>
            <div className="flex flex-wrap gap-x-2">
              <span className="text-mint">➜ ~</span>
              <span className="text-fg">{block.cmd}</span>
            </div>
            {renderOutputs(block)}
          </div>
        ))}

        {view.typingBlock !== null ? (
          <div>
            <div className="flex flex-wrap items-center gap-x-2">
              <span className="text-mint">➜ ~</span>
              <span className="text-fg">{view.typedCmd}</span>
              {!view.outputsVisible ? (
                <span className="inline-block h-3.5 w-[7px] translate-y-px bg-mint animate-blink" />
              ) : null}
            </div>
            {view.outputsVisible ? renderOutputs(BLOCKS[view.typingBlock]) : null}
          </div>
        ) : null}

        {view.completed === BLOCKS.length ? (
          <div className="flex items-center gap-2">
            <span className="text-mint">➜ ~</span>
            <span className="inline-block h-3.5 w-[7px] translate-y-px bg-mint animate-blink" />
          </div>
        ) : null}
      </div>
    </div>
  )
}
