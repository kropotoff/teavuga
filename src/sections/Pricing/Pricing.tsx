import { useTranslation } from 'react-i18next'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function Pricing() {
  const { t } = useTranslation()
  const items = t('pricing.items', { returnObjects: true }) as Array<{
    title: string
    duration: string
    price: string
    studentPrice?: string
  }>

  return (
    <section id="pricing" className="bg-white/90 py-30 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel>{t('pricing.label')}</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.15}>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight font-light text-forest mt-6 mb-16">
            {t('pricing.heading')}
          </h2>
        </FadeIn>

        <div className="flex flex-col divide-y divide-forest/10">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-8 gap-4 group">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-medium text-forest">{item.title}</h3>
                  <span className="text-sm text-stone">{item.duration}</span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="font-display text-3xl font-light text-forest">{item.price}</span>
                  {item.studentPrice && (
                    <span className="text-sm text-stone">{item.studentPrice} {t('pricing.studentLabel')}</span>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <p className="mt-12 text-sm text-stone leading-relaxed max-w-lg">
            {t('pricing.note')}
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
