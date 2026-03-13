export function IconInstagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <line x1="8" y1="10" x2="8" y2="16" />
      <line x1="8" y1="7" x2="8" y2="7.5" strokeWidth="2" />
      <path d="M12 10 v6 M12 13 a2.5 2.5 0 0 1 5 0 v3" />
    </svg>
  )
}

export function IconEmail({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7 L12 13 L22 7" />
    </svg>
  )
}
