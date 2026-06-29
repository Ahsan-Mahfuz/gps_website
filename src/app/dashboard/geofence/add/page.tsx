"use client";

import { useState } from "react";
import { Slider, Switch } from "antd";
import { MapPlaceholder } from "@/components/dashboard/widgets";
import { Button } from "@/components/ui/Button";

const FIELD =
  "w-full rounded-lg border border-input-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-faint focus:border-primary focus:outline-none";

export default function AddGeofencePage() {
  const [radius, setRadius] = useState(500);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
      <div className="relative">
        <MapPlaceholder className="h-[420px] lg:h-[600px]" label="Tap on map to set zone center" />
      </div>

      <aside className="rounded-2xl border border-line bg-card p-6">
        <h2 className="font-anton text-xl uppercase">Zone Details</h2>

        <div className="mt-6">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wide text-muted">Zone Radius</label>
            <span className="font-anton text-foreground">{radius} m</span>
          </div>
          <Slider min={100} max={5000} step={100} value={radius} onChange={setRadius} />
          <div className="flex justify-between text-xs text-faint">
            <span>100 m</span><span>5 km</span>
          </div>
        </div>

        <div className="mt-5 space-y-4">
          <input placeholder="Zone Name (e.g. Home, Office)" className={FIELD} />
          <input placeholder="Description (optional)" className={FIELD} />
        </div>

        <div className="mt-6">
          <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-muted">Notifications</h3>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-sm text-foreground">Notify when device enters zone</span>
              <Switch defaultChecked />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm text-foreground">Notify when device exits zone</span>
              <Switch />
            </label>
          </div>
        </div>

        <Button href="/dashboard/geofence" className="mt-7 w-full py-3.5">Create Geofence</Button>
      </aside>
    </div>
  );
}
