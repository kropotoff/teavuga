export function FloralFrame({ className }: { className?: string }) {
  const ink = '#0d3316'
  const peach = '#e8b49a'

  return (
    <svg
      viewBox="0 0 420 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* ── TOP-LEFT ── */}
      <g stroke={ink} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1">
        <path d="M 10,10 C 30,36 48,64 52,98" />
        <path d="M 32,44 C 50,36 64,22 60,10" />
        <path d="M 60,10 C 74,0 80,-8 66,2 C 52,12 54,24 60,10 Z" fill={ink} fillOpacity="0.12" strokeWidth="0.9" />
        <path d="M 22,28 C 8,22 -2,14 4,6" />
        <path d="M 4,6 C -4,-2 -6,-14 6,-6 C 18,2 14,14 4,6 Z" fill={ink} fillOpacity="0.12" strokeWidth="0.9" />
        <path d="M 44,72 C 28,66 18,54 30,54 C 42,54 46,66 44,72 Z" fill={ink} fillOpacity="0.10" strokeWidth="0.9" />
        <g transform="translate(52,100)">
          {[0,72,144,216,288].map(a => (
            <ellipse key={a} cx="0" cy="-5" rx="1.8" ry="3.2" fill={peach} fillOpacity="0.6" stroke={ink} strokeWidth="0.7" transform={`rotate(${a} 0 0)`} />
          ))}
          <circle cx="0" cy="0" r="2" fill={peach} stroke="none" />
        </g>
        <path d="M 40,58 C 34,50 30,44 32,38" strokeWidth="0.8" opacity="0.7" />
        <circle cx="32" cy="38" r="2" fill={peach} stroke="none" />
        <circle cx="38" cy="42" r="1.4" fill={peach} stroke="none" />
      </g>

      {/* ── TOP-RIGHT ── */}
      <g transform="translate(420,0) scale(-1,1)" stroke={ink} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1">
        <path d="M 10,10 C 30,36 48,64 52,98" />
        <path d="M 32,44 C 50,36 64,22 60,10" />
        <path d="M 60,10 C 74,0 80,-8 66,2 C 52,12 54,24 60,10 Z" fill={ink} fillOpacity="0.12" strokeWidth="0.9" />
        <path d="M 22,28 C 8,22 -2,14 4,6" />
        <path d="M 4,6 C -4,-2 -6,-14 6,-6 C 18,2 14,14 4,6 Z" fill={ink} fillOpacity="0.12" strokeWidth="0.9" />
        <path d="M 44,72 C 28,66 18,54 30,54 C 42,54 46,66 44,72 Z" fill={ink} fillOpacity="0.10" strokeWidth="0.9" />
        <g transform="translate(52,100)">
          {[0,72,144,216,288].map(a => (
            <ellipse key={a} cx="0" cy="-5" rx="1.8" ry="3.2" fill={peach} fillOpacity="0.6" stroke={ink} strokeWidth="0.7" transform={`rotate(${a} 0 0)`} />
          ))}
          <circle cx="0" cy="0" r="2" fill={peach} stroke="none" />
        </g>
        <path d="M 40,58 C 34,50 30,44 32,38" strokeWidth="0.8" opacity="0.7" />
        <circle cx="32" cy="38" r="2" fill={peach} stroke="none" />
        <circle cx="38" cy="42" r="1.4" fill={peach} stroke="none" />
      </g>

      {/* ── BOTTOM-LEFT ── */}
      <g transform="translate(0,560) scale(1,-1)" stroke={ink} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1">
        <path d="M 10,10 C 30,36 48,64 52,98" />
        <path d="M 32,44 C 50,36 64,22 60,10" />
        <path d="M 60,10 C 74,0 80,-8 66,2 C 52,12 54,24 60,10 Z" fill={ink} fillOpacity="0.12" strokeWidth="0.9" />
        <path d="M 22,28 C 8,22 -2,14 4,6" />
        <path d="M 4,6 C -4,-2 -6,-14 6,-6 C 18,2 14,14 4,6 Z" fill={ink} fillOpacity="0.12" strokeWidth="0.9" />
        <path d="M 44,72 C 28,66 18,54 30,54 C 42,54 46,66 44,72 Z" fill={ink} fillOpacity="0.10" strokeWidth="0.9" />
        <g transform="translate(52,100)">
          {[0,72,144,216,288].map(a => (
            <ellipse key={a} cx="0" cy="-5" rx="1.8" ry="3.2" fill={peach} fillOpacity="0.6" stroke={ink} strokeWidth="0.7" transform={`rotate(${a} 0 0)`} />
          ))}
          <circle cx="0" cy="0" r="2" fill={peach} stroke="none" />
        </g>
        <path d="M 40,58 C 34,50 30,44 32,38" strokeWidth="0.8" opacity="0.7" />
        <circle cx="32" cy="38" r="2" fill={peach} stroke="none" />
        <circle cx="38" cy="42" r="1.4" fill={peach} stroke="none" />
      </g>

      {/* ── BOTTOM-RIGHT ── */}
      <g transform="translate(420,560) scale(-1,-1)" stroke={ink} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1">
        <path d="M 10,10 C 30,36 48,64 52,98" />
        <path d="M 32,44 C 50,36 64,22 60,10" />
        <path d="M 60,10 C 74,0 80,-8 66,2 C 52,12 54,24 60,10 Z" fill={ink} fillOpacity="0.12" strokeWidth="0.9" />
        <path d="M 22,28 C 8,22 -2,14 4,6" />
        <path d="M 4,6 C -4,-2 -6,-14 6,-6 C 18,2 14,14 4,6 Z" fill={ink} fillOpacity="0.12" strokeWidth="0.9" />
        <path d="M 44,72 C 28,66 18,54 30,54 C 42,54 46,66 44,72 Z" fill={ink} fillOpacity="0.10" strokeWidth="0.9" />
        <g transform="translate(52,100)">
          {[0,72,144,216,288].map(a => (
            <ellipse key={a} cx="0" cy="-5" rx="1.8" ry="3.2" fill={peach} fillOpacity="0.6" stroke={ink} strokeWidth="0.7" transform={`rotate(${a} 0 0)`} />
          ))}
          <circle cx="0" cy="0" r="2" fill={peach} stroke="none" />
        </g>
        <path d="M 40,58 C 34,50 30,44 32,38" strokeWidth="0.8" opacity="0.7" />
        <circle cx="32" cy="38" r="2" fill={peach} stroke="none" />
        <circle cx="38" cy="42" r="1.4" fill={peach} stroke="none" />
      </g>

      {/* thin border connecting the corners */}
      <rect x="6" y="6" width="408" height="548" rx="2" stroke={ink} strokeOpacity="0.18" strokeWidth="0.8" />
    </svg>
  )
}
