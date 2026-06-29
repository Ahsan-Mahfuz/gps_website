"use client";

import { useState } from "react";
import Link from "next/link";
import { StatCard, PanelLabel, StatusDot } from "@/components/dashboard/widgets";
import { DeviceDetailModal } from "@/components/dashboard/DeviceDetailModal";
import { DEVICES, type Device } from "@/lib/data/fleet";

export default function DashboardHome() {
  const [selected, setSelected] = useState<Device | null>(null);
  const online = DEVICES.filter((d) => d.online).length;

  return (
    <div className="space-y-8">
      <section>
        <PanelLabel>Overview</PanelLabel>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:row-span-2 lg:row-span-1">
            <StatCard label="Total Devices" value={DEVICES.length} accent="primary" large />
          </div>
          <StatCard label="Online" value={online} accent="green" />
          <StatCard label="Offline" value={DEVICES.length - online} accent="muted" />
          <StatCard label="Active Subscriptions" value={DEVICES.filter((d) => d.subscription === "Active").length} accent="primary" />
        </div>
      </section>

      <section>
        <PanelLabel>Device List</PanelLabel>
        <div className="space-y-3">
          {DEVICES.map((d) => (
            <div key={d.id} className="flex items-center justify-between rounded-xl border border-line bg-card px-5 py-4">
              <div className="flex items-center gap-3">
                <StatusDot online={d.online} />
                <div>
                  <p className="font-semibold text-foreground">{d.name}</p>
                  <p className="text-xs text-muted">{d.deviceId}</p>
                </div>
              </div>
              <button
                onClick={() => setSelected(d)}
                className="rounded-lg border border-line px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                View
              </button>
            </div>
          ))}
        </div>
        <Link href="/dashboard/devices" className="mt-4 inline-block text-sm font-semibold text-primary">
          Manage all devices →
        </Link>
      </section>

      <DeviceDetailModal device={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
