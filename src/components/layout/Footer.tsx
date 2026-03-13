import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-forest text-cream/60 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <span className="font-display text-cream text-lg">Tea Vuga</span>
        <span>{t('footer.copy')}</span>
        <span>
          Made with ❤️ by{' '}
          <a
            href="https://www.linkedin.com/in/andrei-kropotoff-18692b60/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/80 underline underline-offset-2 hover:text-peach transition-colors"
          >
            Andrei Kropotoff
          </a>
        </span>
      </div>
    </footer>
  )
}
