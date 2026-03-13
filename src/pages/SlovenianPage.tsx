import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Hero } from '@/sections/Hero/Hero'
import { About } from '@/sections/About/About'
import { Services } from '@/sections/Services/Services'
import { Qualifications } from '@/sections/Qualifications/Qualifications'
import { Pricing } from '@/sections/Pricing/Pricing'
import { Booking } from '@/sections/Booking/Booking'
import { Contact } from '@/sections/Contact/Contact'

export function SlovenianPage() {
  const { i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage('sl')
  }, [i18n])

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Qualifications />
      <Pricing />
      <Booking />
      <Contact />
    </>
  )
}
