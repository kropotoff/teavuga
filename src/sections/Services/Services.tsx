import { useTranslation } from 'react-i18next'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function Services() {
  const { t } = useTranslation()
  const items = t('services.items', { returnObjects: true }) as Array<{ title: string; description: string }>

  return (
    <section id="services" className="bg-cream py-30 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel>{t('services.label')}</SectionLabel>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight font-light text-forest mt-6 mb-16 md:mb-20 max-w-xl">
            {t('services.heading')}
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-px bg-forest/10">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1} className="h-full">
              <div className="bg-cream p-10 md:p-12 h-full group hover:bg-peach/20 transition-colors duration-300">
                <span className="text-xs text-stone/50 font-mono mb-6 block">
                  0{i + 1}
                </span>
                <h3 className="font-display text-2xl font-light text-forest mb-4">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-stone">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
