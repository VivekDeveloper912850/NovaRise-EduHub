import { Braces, Check, Circle, Code2, Database, Hexagon, MousePointer2, Network, Ruler, Server, SquareDashed } from 'lucide-react'

const visualContent = {
  neural: {
    eyebrow: 'AI LAB',
    icon: Network,
    accent: 'text-cyan-300',
    accentBg: 'bg-cyan-300/10',
  },
  browser: {
    eyebrow: 'WEB STUDIO',
    icon: Code2,
    accent: 'text-indigo-300',
    accentBg: 'bg-indigo-300/10',
  },
  server: {
    eyebrow: 'JAVA STACK',
    icon: Server,
    accent: 'text-amber-300',
    accentBg: 'bg-amber-300/10',
  },
  blueprint: {
    eyebrow: 'DESIGN LAB',
    icon: Ruler,
    accent: 'text-emerald-300',
    accentBg: 'bg-emerald-300/10',
  },
}

function NeuralVisual({ Icon, accent, accentBg }) {
  return (
    <div className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-slate-950/60 p-5">
      <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(circle_at_center,rgba(103,232,249,0.45)_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="relative flex h-full items-center justify-center">
        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 ${accentBg} ${accent} shadow-lg shadow-cyan-950/30`}><Icon size={26} aria-hidden="true" /></div>
        <span className="absolute left-[18%] top-[25%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.9)]" />
        <span className="absolute right-[18%] top-[36%] h-1.5 w-1.5 rounded-full bg-indigo-300" />
        <span className="absolute bottom-[24%] left-[28%] h-1.5 w-1.5 rounded-full bg-cyan-200" />
        <span className="absolute bottom-[20%] right-[27%] h-2 w-2 rounded-full bg-indigo-300 shadow-[0_0_14px_rgba(129,140,248,0.8)]" />
        <span className="absolute left-[21%] top-[32%] h-px w-20 rotate-[24deg] bg-cyan-300/40" />
        <span className="absolute right-[22%] top-[45%] h-px w-16 -rotate-[28deg] bg-indigo-300/40" />
        <span className="absolute bottom-[29%] left-[32%] h-px w-14 -rotate-[18deg] bg-cyan-300/40" />
      </div>
    </div>
  )
}

function BrowserVisual({ Icon, accent, accentBg }) {
  return (
    <div className="h-full rounded-xl border border-white/10 bg-slate-950/60 p-4">
      <div className="flex items-center gap-1.5 border-b border-slate-800 pb-3">
        <Circle size={7} className="fill-rose-300 text-rose-300/40" aria-hidden="true" />
        <Circle size={7} className="fill-amber-300 text-amber-300/40" aria-hidden="true" />
        <Circle size={7} className="fill-emerald-300 text-emerald-300/40" aria-hidden="true" />
        <div className="ml-2 h-2 flex-1 rounded-full bg-slate-800" />
      </div>
      <div className="mt-4 grid grid-cols-[0.28fr_1fr] gap-3">
        <div className="space-y-2 rounded-lg bg-slate-900 p-2"><span className={`block h-2 w-7 rounded ${accentBg}`} /><span className="block h-1.5 w-9 rounded bg-slate-800" /><span className="block h-1.5 w-6 rounded bg-slate-800" /><span className="block h-1.5 w-8 rounded bg-slate-800" /></div>
        <div className="space-y-3"><div className="flex items-center justify-between"><span className="h-2 w-16 rounded bg-slate-700" /><Icon size={15} className={accent} aria-hidden="true" /></div><div className="grid grid-cols-2 gap-2"><span className="h-12 rounded-lg border border-indigo-400/20 bg-indigo-400/10" /><span className="h-12 rounded-lg border border-slate-800 bg-slate-900" /></div><span className="block h-2 w-24 rounded bg-slate-800" /></div>
      </div>
    </div>
  )
}

function ServerVisual({ Icon, accent, accentBg }) {
  return (
    <div className="relative h-full rounded-xl border border-white/10 bg-slate-950/60 p-4">
      <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 p-3"><div className={`flex h-8 w-8 items-center justify-center rounded-lg ${accentBg} ${accent}`}><Icon size={16} aria-hidden="true" /></div><span className="h-1.5 w-20 rounded bg-slate-800" /><Check size={15} className="text-emerald-300" aria-hidden="true" /></div>
      <div className="my-2 flex justify-center"><span className="h-5 w-px bg-amber-300/40" /></div>
      <div className="grid grid-cols-2 gap-2"><div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 p-2"><Database size={14} className="text-amber-300" aria-hidden="true" /><span className="h-1.5 w-10 rounded bg-slate-800" /></div><div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 p-2"><Braces size={14} className="text-indigo-300" aria-hidden="true" /><span className="h-1.5 w-10 rounded bg-slate-800" /></div></div>
    </div>
  )
}

function BlueprintVisual({ Icon, accent, accentBg }) {
  return (
    <div className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-slate-950/60 p-4 [background-image:linear-gradient(rgba(52,211,153,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.1)_1px,transparent_1px)] [background-size:18px_18px]">
      <div className="relative flex h-full items-center justify-center"><SquareDashed size={82} strokeWidth={0.8} className="text-emerald-300/40" aria-hidden="true" /><div className={`absolute flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 ${accentBg} ${accent}`}><Icon size={22} aria-hidden="true" /></div><MousePointer2 size={16} className="absolute bottom-3 right-5 rotate-[-15deg] text-emerald-200" aria-hidden="true" /></div>
    </div>
  )
}

function ProgramVisual({ visualType }) {
  const content = visualContent[visualType]
  const { icon: Icon, accent, accentBg, eyebrow } = content
  const visualProps = { Icon, accent, accentBg }

  return (
    <div className="relative h-44 overflow-hidden bg-slate-900 p-3">
      <div className="mb-2 flex items-center justify-between px-1 text-[10px] font-semibold tracking-[0.14em] text-slate-500"><span>{eyebrow}</span><Hexagon size={13} className={accent} aria-hidden="true" /></div>
      {visualType === 'neural' && <NeuralVisual {...visualProps} />}
      {visualType === 'browser' && <BrowserVisual {...visualProps} />}
      {visualType === 'server' && <ServerVisual {...visualProps} />}
      {visualType === 'blueprint' && <BlueprintVisual {...visualProps} />}
    </div>
  )
}

export default ProgramVisual