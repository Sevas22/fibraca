'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

type Metric = {
  target: number
  prefix?: string
  suffix?: string
  label: string
}

const metrics: Metric[] = [
  { target: 20, prefix: '+', label: 'Años de experiencia' },
  { target: 500, prefix: '+', label: 'Proyectos realizados' },
  { target: 17, label: 'Categorías de producto' },
  { target: 100, suffix: '%', label: 'Anti-corrosión' },
]

const DURATION_MS = 1400

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3
}

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target)
      return
    }

    let start: number | null = null
    let rafId = 0

    const tick = (now: number) => {
      if (start === null) start = now
      const p = Math.min((now - start) / DURATION_MS, 1)
      const eased = easeOutCubic(p)
      const next = target * eased
      setValue(next)
      if (p < 1) rafId = requestAnimationFrame(tick)
      else setValue(target)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [target, active])

  return value
}

function StatCell({ metric, active }: { metric: Metric; active: boolean }) {
  const n = useCountUp(metric.target, active)
  const display = Math.round(n)

  return (
    <div className="flex min-w-0 flex-col items-center text-center">
      <div className="font-display text-2xl font-black tabular-nums leading-none text-primary sm:text-[1.75rem] lg:text-[1.85rem]">
        {metric.prefix}
        {display}
        {metric.suffix}
      </div>
      <div className="mt-2 max-w-[14ch] text-[11px] leading-snug text-muted-foreground md:text-xs">
        {metric.label}
      </div>
    </div>
  )
}

export default function HeroStats() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) {
      setActive(true)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true)
      },
      { threshold: 0, rootMargin: '24px 0px 24px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="mt-10 shrink-0 border-t border-border/70 pt-6 lg:mt-0">
      <div className="grid grid-cols-2 justify-items-center gap-x-6 gap-y-6 sm:gap-x-10 sm:gap-y-6 lg:gap-x-12 lg:gap-y-7">
        {metrics.map((metric) => (
          <StatCell key={metric.label} metric={metric} active={active} />
        ))}
      </div>

      <div className="mt-5 hidden items-center justify-center gap-2 text-muted-foreground lg:flex">
        <span className="text-[10px] uppercase tracking-[0.25em]">Explorar</span>
        <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden />
      </div>
    </div>
  )
}
