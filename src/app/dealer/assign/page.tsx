"use client";

import { useState } from "react";
import { CUSTOMERS } from "@/lib/data/dealer";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const FIELD =
  "w-full rounded-lg border border-input-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-faint focus:border-primary focus:outline-none";

export default function AssignPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <input placeholder="Search by email..." className={FIELD} />

      <div className="space-y-3">
        {CUSTOMERS.map((c) => (
          <button
            key={c.email}
            onClick={() => setSelected(c.email)}
            className={cn(
              "flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors",
              selected === c.email ? "border-primary bg-primary/5" : "border-line hover:border-primary/40"
            )}
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-elevated font-anton text-primary">
              {c.name.charAt(0)}
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground">{c.name}</p>
              <p className="text-xs text-muted">{c.email}</p>
            </div>
            {selected === c.email && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(var(--primary))" strokeWidth="2"><path d="m5 12 5 5L20 7" /></svg>
            )}
          </button>
        ))}
      </div>

      {selected && (
        <div className="rounded-xl border border-line bg-card p-4">
          <p className="text-sm text-muted">Assigning to: <span className="font-semibold text-foreground">{selected}</span></p>
          <Button href="/dealer/devices" className="mt-3 w-full">Assign Device</Button>
        </div>
      )}
    </div>
  );
}
