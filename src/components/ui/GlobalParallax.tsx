import { useEffect, useRef, useCallback } from 'react'
import { images } from '@/assets/images'

export function GlobalParallax() {
  const imgRef = useRef<HTMLImageElement>(null)

  const update = useCallback(() => {
    const img = imgRef.current
    if (!img || img.offsetHeight === 0) return
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    const maxTranslate = img.offsetHeight - window.innerHeight
    if (maxTranslate <= 0) return
    const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0
    img.style.transform = `translateY(${-progress * maxTranslate}px)`
  }, [])

  useEffect(() => {
    if (window.innerWidth < 768) return
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [update])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
      <img
        ref={imgRef}
        src={images.hero.src}
        srcSet={`${images.hero.src} 1x, ${images.hero.src2x} 2x, ${images.hero.src3x} 3x`}
        alt=""
        role="presentation"
        onLoad={update}
        className="w-full h-auto min-h-screen object-cover object-top will-change-transform"
      />
    </div>
  )
}
