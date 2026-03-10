export function PawIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Main paw pad */}
      <ellipse cx="12" cy="16" rx="4.5" ry="3.5" />
      {/* Top toe pad */}
      <ellipse cx="12" cy="8" rx="1.8" ry="2.2" />
      {/* Left toe pad */}
      <ellipse cx="8" cy="10" rx="1.6" ry="2" transform="rotate(-15 8 10)" />
      {/* Right toe pad */}
      <ellipse cx="16" cy="10" rx="1.6" ry="2" transform="rotate(15 16 10)" />
      {/* Far left toe pad */}
      <ellipse cx="5.5" cy="12.5" rx="1.4" ry="1.8" transform="rotate(-25 5.5 12.5)" />
      {/* Far right toe pad */}
      <ellipse cx="18.5" cy="12.5" rx="1.4" ry="1.8" transform="rotate(25 18.5 12.5)" />
    </svg>
  )
}
