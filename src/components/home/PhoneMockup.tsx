/** Stylised phone showing a live-tracking map — pure SVG/CSS, themes cleanly. */
export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="relative aspect-[9/19] w-full rounded-[2.5rem] border-4 border-elevated bg-card p-3 shadow-2xl">
        <div className="absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-elevated" />
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-surface">
          {/* fake map grid */}
          <svg className="absolute inset-0 h-full w-full opacity-40" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgb(var(--line))" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          {/* route line */}
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 240 480" fill="none">
            <path d="M40 420 C 80 360, 60 300, 120 260 S 200 200, 160 120 L 180 60" stroke="#FD0010" strokeWidth="4" strokeLinecap="round" />
            <circle cx="40" cy="420" r="7" fill="#FD0010" />
            <circle cx="180" cy="60" r="9" fill="#FD0010" />
            <circle cx="180" cy="60" r="16" fill="#FD0010" opacity="0.25" />
          </svg>
          {/* top bar */}
          <div className="absolute left-4 right-4 top-10">
            <div className="rounded-xl border border-line bg-card/90 px-4 py-3 backdrop-blur">
              <p className="font-anton text-sm uppercase text-foreground">Tracking</p>
              <p className="text-[10px] text-muted">Live · New York</p>
            </div>
          </div>
          {/* bottom card */}
          <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-line bg-card/90 px-4 py-3 backdrop-blur">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted">Speed</span>
              <span className="font-anton text-lg text-primary">64 km/h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
