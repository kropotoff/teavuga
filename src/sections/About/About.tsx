import { useTranslation } from 'react-i18next'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { images } from '@/assets/images'

export function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="bg-white py-30 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">

        {/* Portrait in gallery frame */}
        <FadeIn direction="right">
          {/* Outer frame */}
          <div className="p-3 bg-forest shadow-[0_8px_40px_rgba(13,51,22,0.18)]">
            {/* Mat */}
            <div className="p-6 bg-cream">
              {/* Inner fillet line */}
              <div className="p-px bg-forest/30">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={images.about.src}
                    srcSet={`${images.about.src} 1x, ${images.about.src2x} 2x, ${images.about.src3x} 3x`}
                    alt="Tea Vuga"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Text */}
        <div className="flex flex-col gap-8">
          <FadeIn delay={0.1}>
            <SectionLabel>{t('about.label')}</SectionLabel>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight font-light text-forest">
              {t('about.heading')}
            </h2>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-base leading-relaxed text-stone">
              {t('about.body')}
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <blockquote className="border-l-2 border-peach pl-6 mt-4">
              <p className="font-display text-xl italic text-forest/70">
                {t('about.quote')}
              </p>
              <cite className="block mt-2 text-xs tracking-widest text-stone not-italic uppercase">
                {t('about.quoteAuthor')}
              </cite>
            </blockquote>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
