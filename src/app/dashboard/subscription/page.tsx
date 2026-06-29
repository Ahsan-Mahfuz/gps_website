"use client";

import { Button } from "@/components/ui/Button";

const FEATURES = [
  "Track All Vehicles On One Map",
  "Live Speed Monitoring",
  "Device Battery Status",
  "Route Tracking",
  "Detailed Trip History",
  "Daily Speed Graphs",
  "Multiple Vehicle Management",
];

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-primary">
      <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export default function SubscriptionPage() {
  return (
    <div className="mx-auto max-w-lg">
      <div className="flex items-baseline gap-2">
        <span className="font-anton text-5xl text-primary">$21.99</span>
        <span className="text-sm text-muted">/ tracker / month</span>
      </div>

      <div className="mt-6 rounded-2xl border border-success/25 bg-success/10 p-5">
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="rgb(var(--success))"><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.3 7.2 16.7l.9-5.4L4.2 7.7l5.4-.8z" /></svg>
          <p className="font-bold text-success">7-Day Free Trial Available</p>
        </div>
        <p className="mt-2 text-sm text-muted">
          After 7 days, $21.99/tracker will be charged automatically. Cancel anytime.
        </p>
      </div>

      <h2 className="mt-8 text-sm font-bold uppercase tracking-widest text-muted">What You Get</h2>
      <ul className="mt-4 space-y-3">
        {FEATURES.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm text-foreground">
            <Check /> {f}
          </li>
        ))}
      </ul>

      <div className="mt-8 space-y-3">
        <Button href="/dashboard/add-device/done" className="w-full py-4">Subscribe Now • $21.99/mo</Button>
        <Button href="/dashboard/add-device/done" variant="outline" className="w-full py-4">Start 7-Day Free Trial</Button>
        <p className="text-center text-xs text-muted">No charge for 7 days. Cancel anytime before trial ends.</p>
      </div>
    </div>
  );
}
