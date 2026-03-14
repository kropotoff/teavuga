import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

const NAV_LINKS = ['about', 'services', 'qualifications', 'pricing', 'contact'] as const

export function Nav() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const isEn = location.pathname.startsWith('/eng')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const toggleLang = () => {
    navigate(isEn ? '/' : '/eng')
    setMenuOpen(false)
  }

  // Over hero photo: white text. After scrolling: dark text on cream bg.
  const onPhoto = !scrolled

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled ? 'bg-cream/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className={cn(
            'font-display text-lg font-medium tracking-wide transition-colors duration-500',
            onPhoto ? 'text-cream' : 'text-forest'
          )}
        >
          Tea Vuga
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className={cn(
                'text-sm tracking-wide transition-colors duration-500',
                onPhoto
                  ? 'text-cream/80 hover:text-cream'
                  : 'text-stone hover:text-forest'
              )}
            >
              {t(`nav.${key}`)}
            </button>
          ))}
          <button
            onClick={toggleLang}
            className={cn(
              'text-sm font-medium px-3 py-1 rounded-full border transition-all duration-500',
              onPhoto
                ? 'text-cream border-cream/40 hover:bg-cream hover:text-forest'
                : 'text-forest border-forest/30 hover:bg-forest hover:text-cream'
            )}
          >
            {t('nav.langSwitch')}
          </button>
        </nav>

        {/* Mobile: lang + hamburger */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleLang}
            className={cn(
              'text-sm font-medium px-3 py-1 rounded-full border transition-all duration-500',
              onPhoto
                ? 'text-cream border-cream/40'
                : 'text-forest border-forest/30'
            )}
          >
            {t('nav.langSwitch')}
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <span className={cn('block w-6 h-px transition-all duration-300', onPhoto ? 'bg-cream' : 'bg-forest', menuOpen && 'rotate-45 translate-y-2')} />
            <span className={cn('block w-6 h-px transition-all duration-300', onPhoto ? 'bg-cream' : 'bg-forest', menuOpen && 'opacity-0')} />
            <span className={cn('block w-6 h-px transition-all duration-300', onPhoto ? 'bg-cream' : 'bg-forest', menuOpen && '-rotate-45 -translate-y-2')} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 bg-cream/95 backdrop-blur-md',
          menuOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <nav className="flex flex-col px-6 py-4 gap-5">
          {NAV_LINKS.map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className="text-left text-base text-forest tracking-wide"
            >
              {t(`nav.${key}`)}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
