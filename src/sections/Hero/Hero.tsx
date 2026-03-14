import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { images } from '@/assets/images'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end pb-20 px-6 bg-cream overflow-hidden"
    >
      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        <img
          src={images.hero.src}
          srcSet={`${images.hero.src} 1x, ${images.hero.src2x} 2x, ${images.hero.src3x} 3x`}
          alt=""
          role="presentation"
          className="w-full h-full object-cover object-top"
        />
        {/* Gradient overlay so text stays legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/60 to-cream/10" />
      </div>

      <div className="relative max-w-6xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs font-medium tracking-[0.3em] uppercase text-stone mb-6"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(4rem,12vw,10rem)] leading-[0.9] font-light text-forest mb-10"
        >
          {t('hero.name')}
        </motion.h1>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-12 bg-forest/30"
        />
      </motion.div>
    </section>
  )
}
