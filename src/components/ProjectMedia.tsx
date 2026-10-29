import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import type { ProjectMedia as Media } from '../data/content'

/** Visual proof at the top of a project card: a muted looping demo, a screenshot, or a result chart. */
export default function ProjectMedia({ media, title }: { media: Media; title: string }) {
  const reduce = useReducedMotion()
  const videoRef = useRef<HTMLVideoElement>(null)

  // Only play the demo while the card is on screen, and never for reduced-motion users.
  useEffect(() => {
    const v = videoRef.current
    if (!v || reduce) return
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? v.play().catch(() => {}) : v.pause()),
      { threshold: 0.4 },
    )
    io.observe(v)
    return () => io.disconnect()
  }, [reduce])

  const frame = 'mb-5 overflow-hidden rounded-xl border border-line bg-white'

  if (media.kind === 'video') {
    return (
      <div className={frame}>
        <video
          ref={videoRef}
          src={media.src}
          poster={media.poster}
          muted
          loop
          playsInline
          preload="none"
          aria-label={`${title} demo video`}
          className="aspect-video w-full object-cover"
        />
      </div>
    )
  }

  if (media.kind === 'image') {
    return (
      <div className={frame}>
        <img src={media.src} alt={media.alt} loading="lazy" className="aspect-video w-full object-contain p-2" />
      </div>
    )
  }

  return (
    <figure className={`${frame} p-4`}>
      <div className="space-y-3">
        {media.bars.map((b) => (
          <div key={b.label}>
            <div className="mb-1 flex items-baseline justify-between text-xs font-semibold text-navy">
              <span>{b.label}</span>
              <span className="tabular-nums">{b.value}%</span>
            </div>
            <div className="h-2.5 w-full rounded-full bg-navy/5">
              <div className="h-2.5 rounded-full bg-accent" style={{ width: `${b.value}%` }} />
            </div>
          </div>
        ))}
      </div>
      <figcaption className="mt-3 text-[12px] leading-snug text-muted">{media.caption}</figcaption>
    </figure>
  )
}
