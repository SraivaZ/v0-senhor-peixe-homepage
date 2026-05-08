interface FishLogoProps {
  className?: string
}

export function FishLogo({ className }: FishLogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Stylized fish with decorative fins - elegant design */}
      <g fill="currentColor">
        {/* Main fish body */}
        <path d="M32 48c-8-4-14-10-14-16s6-12 14-16c8 4 14 10 14 16s-6 12-14 16z" fillOpacity="0.9" />
        {/* Top fin decorative element */}
        <path d="M32 16c0 0-2-8-6-12 4 2 6 6 6 12z" />
        <path d="M32 16c0 0 2-8 6-12-4 2-6 6-6 12z" />
        {/* Side fin elements */}
        <path d="M30 10c-2-4-1-8 2-10-1 4 0 7-2 10z" />
        <path d="M34 10c2-4 1-8-2-10 1 4 0 7 2 10z" />
        {/* Tail */}
        <path d="M32 48l-8 12c4-2 6-6 8-12z" />
        <path d="M32 48l8 12c-4-2-6-6-8-12z" />
        {/* Eye */}
        <circle cx="32" cy="30" r="2" fill="currentColor" fillOpacity="0.3" />
      </g>
    </svg>
  )
}
