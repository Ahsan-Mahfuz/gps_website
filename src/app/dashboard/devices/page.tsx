"use client";

import Link from "next/link";
import { DEVICES } from "@/lib/data/fleet";
import { InfoRow } from "@/components/dashboard/widgets";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const subColor: Record<string, string> = {
  Active: "text-success",
  Trial: "text-primary",
  None: "text-muted",
};

function CarIcon({ className }: { className?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M5 17h14M5 17a2 2 0 1 1-4 0M5 17l1.5-6h11L19 17m0 0a2 2 0 1 0 4 0M3 11h18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function DevicesPage() {
  return (
    <div className="space-y-5">
      <div className="flex justify-end">
        <Button href="/dashboard/add-device">+ Add Device</Button>
      </div>

      {DEVICES.map((d) => (
        <div key={d.id} className="rounded-2xl border border-line bg-card p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <span className={cn("grid h-11 w-11 place-items-center rounded-lg bg-elevated", subColor[d.subscription])}>
                <CarIcon />
              </span>
              <div>
                <h3 className="font-anton text-xl uppercase">{d.name}</h3>
                <p className="text-xs text-muted">IMEI: {d.imei}</p>
              </div>
            </div>
            <button aria-label="Delete" className="text-primary transition-transform hover:scale-110">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>
            </button>
          </div>

          <div className="mt-4 divide-y divide-line border-t border-line pt-2">
            <InfoRow label="Device ID" value={d.deviceId} />
            <InfoRow label="Subscription" value={d.subscription} valueClass={subColor[d.subscription]} />
            <InfoRow label="Expiry Date" value={d.expiry} />
          </div>

          {(d.subscription === "Active" || d.subscription === "Trial") && (
            <Button variant="outline" className="mt-5">Cancel Subscription</Button>
          )}
        </div>
      ))}

      <p className="text-center text-sm text-muted">
        Need a new tracker?{" "}
        <Link href="/product" className="font-semibold text-primary">Browse products →</Link>
      </p>
    </div>
  );
}
