'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ReactFlow, {
  Node,
  Edge,
  Handle,
  Position,
  NodeProps,
  useNodesState,
  OnNodesChange,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { Typewriter } from './typewriter'

// Set to true to enable dragging and position saving
const DEV_MODE = false

// Pulsing brand indicator
function PulsingDot() {
  return (
    <motion.div
      className="h-2 w-2 rounded-full bg-brand-600"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [1, 0.7, 1],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

// Loading dots animation
function LoadingDots() {
  return (
    <div className="flex items-center gap-1">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-brand-500"
          animate={{
            y: [0, -2, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.15,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

// Sparkle icon for agent
function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v1m0 16v1m-8-9h1m16 0h1m-2.636-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
    </svg>
  )
}

// Phone icon
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

// Globe icon
function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

// Card 1: Visitor Detected Node
function VisitorDetectedNode({ data }: NodeProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: data.visible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="w-40 rounded-lg border-2 border-brand-600 bg-brand-100 p-2.5 dark:border-brand-400 dark:bg-brand-950"
    >
      <Handle type="source" position={Position.Right} className="!h-0 !w-0 !border-0 !bg-transparent" />

      {/* Header */}
      <div className="mb-2 flex items-center gap-2">
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-brand-100 dark:bg-brand-900/50">
          <GlobeIcon className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="whitespace-nowrap text-xs font-semibold text-gray-900 dark:text-white">Visit detected!</span>
          <PulsingDot />
        </div>
      </div>

      {/* Metadata */}
      <div className="space-y-1 text-[10px] text-gray-500 dark:text-gray-400">
        <div className="flex items-center justify-between gap-2">
          <span className="text-gray-400 dark:text-gray-500">Location</span>
          <span className="whitespace-nowrap font-medium text-gray-700 dark:text-gray-300">Ho Chi Minh City</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-gray-400 dark:text-gray-500">Device</span>
          <span className="whitespace-nowrap font-medium text-gray-700 dark:text-gray-300">iPhone 15 Pro</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-gray-400 dark:text-gray-500">Page</span>
          <span className="whitespace-nowrap font-medium text-gray-700 dark:text-gray-300">/gift-cards</span>
        </div>
      </div>
    </motion.div>
  )
}

// Card 2: Agent Initializing Node
function AgentInitializingNode({ data }: NodeProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: data.visible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="w-48 rounded-lg border-2 border-brand-600 bg-brand-100 p-2.5 dark:border-brand-400 dark:bg-brand-950"
    >
      <Handle type="target" position={Position.Left} className="!h-0 !w-0 !border-0 !bg-transparent" />
      <Handle type="source" position={Position.Right} className="!h-0 !w-0 !border-0 !bg-transparent" />

      {/* Header */}
      <div className="mb-2 flex items-center gap-2">
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-brand-100 dark:bg-brand-900/50">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <SparkleIcon className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          </motion.div>
        </div>
        <span className="whitespace-nowrap text-xs font-semibold text-gray-900 dark:text-white">Launching local agent</span>
      </div>

      {/* Status */}
      <div className="flex items-center gap-1.5 rounded-md bg-brand-50 px-2 py-1.5 dark:bg-brand-900/30">
        <Typewriter
          words={['Preparing...', 'Context...', 'Timing...']}
          typingSpeed={40}
          deletingSpeed={25}
          pauseBeforeDelete={800}
          className="text-[10px] font-medium text-brand-600 dark:text-brand-400"
        />
      </div>
    </motion.div>
  )
}

// Card 3: Voice Chat CTA Node
function VoiceChatNode({ data }: NodeProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: data.visible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="w-56 rounded-lg border-2 border-brand-600 bg-brand-100 p-2.5 dark:border-brand-400 dark:bg-brand-950"
    >
      <Handle type="target" position={Position.Right} className="!h-0 !w-0 !border-0 !bg-transparent" />

      {/* Header */}
      <div className="mb-2 flex items-center gap-2">
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-brand-100 dark:bg-brand-900/50">
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
          >
            <PhoneIcon className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          </motion.div>
        </div>
        <span className="whitespace-nowrap text-xs font-semibold text-gray-900 dark:text-white">Agent is calling (yes, really!)</span>
      </div>

      {/* CTA Button */}
      <button className="pointer-events-auto w-full whitespace-nowrap rounded bg-brand-950 px-3 py-1 text-sm/7 font-medium text-white transition-colors hover:bg-brand-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
        Chat with Revve Agent
      </button>
    </motion.div>
  )
}

// Custom node types
const nodeTypes = {
  visitorDetected: VisitorDetectedNode,
  agentInitializing: AgentInitializingNode,
  voiceChat: VoiceChatNode,
}

// Initial node positions
const initialNodes: Node[] = [
  {
    id: 'visitor',
    type: 'visitorDetected',
    position: { x: 114, y: -269 },
    data: { visible: false },
  },
  {
    id: 'agent',
    type: 'agentInitializing',
    position: { x: 322, y: -229 },
    data: { visible: false },
  },
  {
    id: 'voiceChat',
    type: 'voiceChat',
    position: { x: 243, y: -123 },
    data: { visible: false },
  },
]

// Initial edges (hidden until animated)
const initialEdges: Edge[] = [
  {
    id: 'visitor-agent',
    source: 'visitor',
    target: 'agent',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#c2410c', strokeWidth: 2, opacity: 0, transition: 'opacity 0.4s ease-out' },
  },
  {
    id: 'agent-voiceChat',
    source: 'agent',
    target: 'voiceChat',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#c2410c', strokeWidth: 2, opacity: 0, transition: 'opacity 0.4s ease-out' },
  },
]

export function HeroFlowDiagram() {
  const ref = useRef(null)
  const [hasLoaded, setHasLoaded] = useState(false)

  // Trigger animation shortly after mount (page load)
  useEffect(() => {
    const timer = setTimeout(() => setHasLoaded(true), 300)
    return () => clearTimeout(timer)
  }, [])
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)
  const [saved, setSaved] = useState(false)

  // Save positions to clipboard
  const savePositions = () => {
    const positions = nodes.map((node) => ({
      id: node.id,
      position: { x: Math.round(node.position.x), y: Math.round(node.position.y) },
    }))
    const code = `// Updated node positions\nconst initialNodes: Node[] = [\n${positions
      .map(
        (p) =>
          `  {\n    id: '${p.id}',\n    type: '${p.id === 'visitor' ? 'visitorDetected' : p.id === 'agent' ? 'agentInitializing' : 'voiceChat'}',\n    position: { x: ${p.position.x}, y: ${p.position.y} },\n    data: { visible: false },\n  },`
      )
      .join('\n')}\n]`

    navigator.clipboard.writeText(code)
    console.log('Saved positions:', positions)
    console.log(code)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  // Staggered animation sequence (skip in dev mode for easier positioning)
  useEffect(() => {
    if (!hasLoaded) return

    // In dev mode, show all immediately
    if (DEV_MODE) {
      setNodes((nds) => nds.map((node) => ({ ...node, data: { ...node.data, visible: true } })))
      setEdges((eds) => eds.map((edge) => ({ ...edge, style: { ...edge.style, opacity: 1 } })))
      return
    }

    // Card 1 appears at 0ms
    const timer1 = setTimeout(() => {
      setNodes((nds) =>
        nds.map((node) =>
          node.id === 'visitor' ? { ...node, data: { ...node.data, visible: true } } : node
        )
      )
    }, 0)

    // Edge 1 appears at 400ms
    const timer2 = setTimeout(() => {
      setEdges((eds) =>
        eds.map((edge) =>
          edge.id === 'visitor-agent' ? { ...edge, style: { ...edge.style, opacity: 1 } } : edge
        )
      )
    }, 400)

    // Card 2 appears at 600ms
    const timer3 = setTimeout(() => {
      setNodes((nds) =>
        nds.map((node) =>
          node.id === 'agent' ? { ...node, data: { ...node.data, visible: true } } : node
        )
      )
    }, 600)

    // Edge 2 appears at 1000ms
    const timer4 = setTimeout(() => {
      setEdges((eds) =>
        eds.map((edge) =>
          edge.id === 'agent-voiceChat' ? { ...edge, style: { ...edge.style, opacity: 1 } } : edge
        )
      )
    }, 1000)

    // Card 3 appears at 1200ms
    const timer5 = setTimeout(() => {
      setNodes((nds) =>
        nds.map((node) =>
          node.id === 'voiceChat' ? { ...node, data: { ...node.data, visible: true } } : node
        )
      )
    }, 1200)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
    }
  }, [hasLoaded, setNodes, setEdges])

  return (
    <div
      ref={ref}
      className={`absolute inset-0 overflow-visible ${DEV_MODE ? '' : 'pointer-events-none'}`}
    >
      <div className={`absolute right-12 top-0 z-20 h-[400px] w-[600px] ${DEV_MODE ? 'pointer-events-auto' : ''}`}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={DEV_MODE ? onNodesChange : undefined}
          nodesDraggable={DEV_MODE}
          nodesConnectable={false}
          elementsSelectable={DEV_MODE}
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          preventScrolling={false}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          proOptions={{ hideAttribution: true }}
        />
      </div>

      {/* Dev mode save button */}
      {DEV_MODE && (
        <button
          onClick={savePositions}
          className="pointer-events-auto fixed bottom-8 right-8 z-[9999] rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-brand-700"
        >
          {saved ? '✓ Copied to clipboard!' : 'Save Positions'}
        </button>
      )}
    </div>
  )
}
