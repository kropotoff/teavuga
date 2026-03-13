import { useTranslation } from 'react-i18next'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function Qualifications() {
  const { t } = useTranslation()
  const items = t('qualifications.items', { returnObjects: true }) as string[]

  return (
    <section id="qualifications" className="bg-forest py-30 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">

        <div>
          <FadeIn>
            <SectionLabel className="text-cream/50">{t('qualifications.label')}</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight font-light text-cream mt-6">
              {t('qualifications.heading')}
            </h2>
          </FadeIn>
        </div>

        <ul className="flex flex-col divide-y divide-cream/10">
          {items.map((item, i) => (
            <FadeIn key={item} delay={i * 0.08}>
              <li className="flex items-start gap-4 py-5">
                <span className="text-peach mt-0.5 text-lg leading-none">—</span>
                <span className="text-cream/80 text-base leading-relaxed">{item}</span>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  )
}
