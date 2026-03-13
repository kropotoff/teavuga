import { useTranslation } from 'react-i18next'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'

// Dummy booking UI — placeholder for real Calendly or booking integration
const DUMMY_TIMES = [
  { day: 'Mon', date: '17', times: ['10:00', '14:00', '16:00'] },
  { day: 'Tue', date: '18', times: ['09:00', '11:00'] },
  { day: 'Thu', date: '20', times: ['10:00', '13:00', '15:00'] },
  { day: 'Fri', date: '21', times: ['09:00', '14:00'] },
]

export function Booking() {
  const { t } = useTranslation()

  return (
    <section id="booking" className="bg-cream py-30 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel>{t('booking.label')}</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.15}>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight font-light text-forest mt-6 mb-4">
            {t('booking.heading')}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-sm text-stone mb-12">{t('booking.subheading')}</p>
        </FadeIn>

        {/* Dummy calendar widget */}
        <FadeIn delay={0.25}>
          <div className="border border-forest/10 rounded-sm overflow-hidden bg-white max-w-2xl">
            {/* Month header */}
            <div className="flex items-center justify-between px-8 py-5 border-b border-forest/10">
              <span className="text-sm text-stone">‹</span>
              <span className="font-display text-lg text-forest">March 2025</span>
              <span className="text-sm text-stone">›</span>
            </div>

            {/* Day columns */}
            <div className="grid grid-cols-4 divide-x divide-forest/10">
              {DUMMY_TIMES.map((col) => (
                <div key={col.date} className="flex flex-col">
                  {/* Day header */}
                  <div className="text-center py-4 border-b border-forest/10">
                    <div className="text-xs text-stone tracking-widest uppercase">{col.day}</div>
                    <div className="font-display text-2xl text-forest mt-0.5">{col.date}</div>
                  </div>
                  {/* Time slots */}
                  <div className="flex flex-col gap-2 p-3">
                    {col.times.map((time) => (
                      <button
                        key={time}
                        className="text-xs text-forest border border-forest/20 rounded-sm py-2 hover:bg-peach/30 hover:border-peach transition-all duration-150"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div className="px-8 py-4 border-t border-forest/10 text-xs text-stone/60 text-center">
              Dummy UI — real booking integration coming soon
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
