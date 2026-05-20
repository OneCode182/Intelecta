export default function Logo({ dark = false, size = 28, withTagline = false }) {
  return (
    <div className="flex items-center gap-3">
      <svg width={size} height={size * 1.05} viewBox="0 0 60 64" fill="none" aria-label="Intelecta">
        <rect x="22" y="6" width="16" height="52" fill={dark ? '#f9faf7' : '#111827'} />
        <path
          d="M30 10 C 44 14, 52 28, 44 50 C 40 56, 30 58, 26 56"
          stroke="#5b1e2d"
          strokeWidth="5.5"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M44 36 L 52 30 L 50 40 Z" fill="#5b1e2d" />
      </svg>
      <div className="leading-tight">
        <div
          className={`h-display text-[22px] ${dark ? 'text-ivory' : 'text-ink'}`}
          style={{ letterSpacing: '-0.01em' }}
        >
          Intelecta
        </div>
        {withTagline && (
          <div
            className={`eyebrow ${dark ? 'text-ivory/70' : 'text-mist'}`}
            style={{ fontSize: '9px', letterSpacing: '0.3em' }}
          >
            Business Consulting
          </div>
        )}
      </div>
    </div>
  );
}
