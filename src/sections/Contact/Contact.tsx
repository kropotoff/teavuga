import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { IconInstagram, IconLinkedIn, IconEmail } from '@/components/ui/SocialIcons'
import { cn } from '@/lib/utils'
import { images } from '@/assets/images'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

// Replace with your Formspree endpoint
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xlgplzgl'

export function Contact() {
  const { t } = useTranslation()
  const [state, setState] = useState<FormState>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState('submitting')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      setState(res.ok ? 'success' : 'error')
      if (res.ok) form.reset()
    } catch {
      setState('error')
    }
  }

  const inputClass = cn(
    'w-full bg-transparent border-b border-forest/20 py-3 text-forest placeholder:text-stone/50',
    'focus:outline-none focus:border-forest transition-colors duration-200 text-sm'
  )

  return (
    <section id="contact" className="bg-peach/85 py-30 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24">

        {/* Left: heading + social */}
        <div className="flex flex-col gap-8">
          <FadeIn>
            <SectionLabel>{t('contact.label')}</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight font-light text-forest">
              {t('contact.heading')}
            </h2>
          </FadeIn>
          <FadeIn delay={0.25}>
            <p className="text-sm text-stone">{t('contact.subheading')}</p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <img
              src={images.contactPortrait.src}
              alt="Tea Vuga"
              className="w-20 h-20 rounded-full object-cover object-top"
            />
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="flex flex-col gap-4 mt-4">
              <a
                href="mailto:vugatea@gmail.com"
                className="flex items-center gap-3 text-sm text-forest hover:text-stone transition-colors duration-200"
              >
                <IconEmail className="w-5 h-5 shrink-0" />
                vugatea@gmail.com
              </a>
              <a
                href="https://instagram.com/vugatea"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-forest hover:text-stone transition-colors duration-200"
              >
                <IconInstagram className="w-5 h-5 shrink-0" />
                @vugatea
              </a>
              <a
                href="https://linkedin.com/in/teavuga"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-forest hover:text-stone transition-colors duration-200"
              >
                <IconLinkedIn className="w-5 h-5 shrink-0" />
                Tea Vuga
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Right: form */}
        <FadeIn delay={0.2} direction="left">
          {state === 'success' ? (
            <div className="flex items-center justify-center h-full min-h-48">
              <p className="font-display text-xl text-forest italic">{t('contact.form.success')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <input
                name="name"
                type="text"
                required
                placeholder={t('contact.form.name')}
                className={inputClass}
              />
              <input
                name="email"
                type="email"
                required
                placeholder={t('contact.form.email')}
                className={inputClass}
              />
              <textarea
                name="message"
                required
                rows={4}
                placeholder={t('contact.form.message')}
                className={cn(inputClass, 'resize-none')}
              />
              {state === 'error' && (
                <p className="text-xs text-red-500">{t('contact.form.error')}</p>
              )}
              <button
                type="submit"
                disabled={state === 'submitting'}
                className="self-start flex items-center gap-3 text-sm font-medium text-forest border-b border-forest/40 pb-1 hover:border-forest transition-colors duration-200 group disabled:opacity-50"
              >
                {state === 'submitting' ? '...' : t('contact.form.submit')}
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  )
}
