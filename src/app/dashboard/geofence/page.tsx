"use client";

import { GEOFENCES } from "@/lib/data/fleet";
import { InfoRow, EmptyState } from "@/components/dashboard/widgets";
import { Button } from "@/components/ui/Button";

export default function GeofencePage() {
  if (GEOFENCES.length === 0) {
    return (
      <EmptyState
        title="No Geofences Yet"
        message="Set up a geofence to get notified when your device enters or exits a zone."
        action={<Button href="/dashboard/geofence/add">Add First Geofence</Button>}
      />
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 rounded-full bg-elevated px-3 py-1.5 text-sm text-foreground">
          <span className="h-2 w-2 rounded-full bg-primary" /> Toyota Hilux · {GEOFENCES.length} zones
        </span>
        <Button href="/dashboard/geofence/add">+ Add Geofence</Button>
      </div>

      {GEOFENCES.map((g) => (
        <div key={g.id} className="rounded-2xl border border-line bg-card p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="9" /></svg>
              </span>
              <div>
                <h3 className="font-anton text-xl uppercase">{g.name}</h3>
                <p className="text-xs text-muted">{g.description}</p>
              </div>
            </div>
            <button className="rounded-full border border-line px-3 py-1 text-xs font-bold uppercase text-foreground hover:border-primary hover:text-primary">Edit</button>
          </div>
          <div className="mt-4 divide-y divide-line border-t border-line pt-2">
            <InfoRow label="Shape" value={g.shape} />
            <InfoRow label="Radius" value={`${g.radius} m`} />
            <InfoRow label="Center" value={g.center} />
            <InfoRow label="Notify On Enter" value={g.onEnter ? "Yes" : "No"} valueClass={g.onEnter ? "text-success" : "text-muted"} />
            <InfoRow label="Notify On Exit" value={g.onExit ? "Yes" : "No"} valueClass={g.onExit ? "text-success" : "text-muted"} />
          </div>
        </div>
      ))}
    </div>
  );
}
