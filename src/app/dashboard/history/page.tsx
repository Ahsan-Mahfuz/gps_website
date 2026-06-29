"use client";

import { useState } from "react";
import { MapPlaceholder, InfoRow } from "@/components/dashboard/widgets";

const DAYS = [
  { d: "Sat", n: 21 }, { d: "Sun", n: 22 }, { d: "Mon", n: 23 }, { d: "Tue", n: 24 },
  { d: "Wed", n: 25 }, { d: "Thu", n: 26 }, { d: "Fri", n: 27 },
];

// fake speed series for the chart
const SERIES = [10, 28, 45, 60, 52, 70, 64, 80, 40, 55, 30, 48, 62, 75, 50];

export default function HistoryPage() {
  const [active, setActive] = useState(3);
  const max = Math.max(...SERIES);
  const w = 600, h = 180;
  const pts = SERIES.map((v, i) => `${(i / (SERIES.length - 1)) * w},${h - (v / max) * h}`).join(" ");

  return (
    <div className="space-y-6">
      {/* Week strip */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {DAYS.map((day, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex min-w-[64px] flex-col items-center gap-2 rounded-xl border px-3 py-3 transition-colors ${
              active === i ? "border-primary bg-primary/5" : "border-line hover:border-primary/40"
            }`}
          >
            <span className="text-xs text-muted">{day.d}</span>
            <span className={`grid h-9 w-9 place-items-center rounded-full font-anton ${active === i ? "bg-primary text-white" : "bg-elevated text-foreground"}`}>
              {day.n}
            </span>
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          {/* Trip summary */}
          <div className="rounded-2xl border border-line bg-card p-6">
            <h2 className="font-anton text-xl uppercase">June {DAYS[active].n}, 2026</h2>
            <div className="mt-3 divide-y divide-line">
              <InfoRow label="Time" value="08:14 → 09:02" />
              <InfoRow label="Top Speed" value="80 km/h" />
              <InfoRow label="Distance" value="24.6 km" />
            </div>
          </div>

          {/* Speed chart */}
          <div className="rounded-2xl border border-line bg-card p-6">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-muted">Speed (km/h)</h3>
            <svg viewBox={`0 0 ${w} ${h}`} className="h-44 w-full">
              {[0, 0.5, 1].map((g) => (
                <line key={g} x1="0" x2={w} y1={h * g} y2={h * g} stroke="rgb(var(--line))" strokeWidth="1" />
              ))}
              <polyline points={pts} fill="none" stroke="rgb(var(--primary))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <polygon points={`0,${h} ${pts} ${w},${h}`} fill="rgb(var(--primary))" opacity="0.12" />
            </svg>
          </div>
        </div>

        <div className="space-y-4">
          <MapPlaceholder className="h-[320px]" label="Route Playback" />
          <div className="rounded-xl bg-primary px-5 py-3 text-center text-sm font-semibold text-white">
            24.6 km travelled · 48 min trip
          </div>
        </div>
      </div>
    </div>
  );
}
