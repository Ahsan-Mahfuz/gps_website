"use client";

import { useState } from "react";
import { MapPlaceholder, StatusDot } from "@/components/dashboard/widgets";
import { Button } from "@/components/ui/Button";
import { DEVICES, type Device } from "@/lib/data/fleet";

export default function MapPage() {
  const [filter, setFilter] = useState<"all" | "online" | "offline">("all");
  const [selected, setSelected] = useState<Device>(DEVICES[0]);

  const list = DEVICES.filter((d) =>
    filter === "all" ? true : filter === "online" ? d.online : !d.online
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
      <div className="relative">
        <MapPlaceholder className="h-[420px] lg:h-[640px]" label="Tracking Device" />
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white">
          <span className="h-2 w-2 animate-pulse rounded-full bg-white" /> Live Tracking · {selected.name}
        </div>
      </div>

      <aside className="rounded-2xl border border-line bg-card p-5">
        <div className="flex items-center justify-between">
          <h2 className="font-anton text-lg uppercase">All Devices</h2>
          <span className="rounded-full bg-elevated px-2.5 py-0.5 text-xs text-muted">{DEVICES.length} devices</span>
        </div>

        <div className="mt-4 flex gap-2">
          {(["all", "online", "offline"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-3 py-1 text-xs font-semibold capitalize transition-colors ${
                filter === f ? "bg-primary text-white" : "bg-elevated text-muted hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-4 space-y-2">
          {list.map((d) => (
            <button
              key={d.id}
              onClick={() => setSelected(d)}
              className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition-colors ${
                selected.id === d.id ? "border-primary bg-primary/5" : "border-line hover:border-primary/40"
              }`}
            >
              <div className="flex items-center gap-3">
                <StatusDot online={d.online} />
                <div>
                  <p className="text-sm font-semibold text-foreground">{d.name}</p>
                  <p className="text-xs text-muted">{d.deviceId}</p>
                </div>
              </div>
              <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">{d.speed} km/h</span>
            </button>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <Button href="/dashboard/history" variant="outline" className="w-full">History</Button>
          <Button className="w-full">Track Live</Button>
        </div>
      </aside>
    </div>
  );
}
