"use client";

import { useState } from "react";
import { Modal } from "antd";
import { DEALER_DEVICES } from "@/lib/data/dealer";
import { InfoRow } from "@/components/dashboard/widgets";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Dev = (typeof DEALER_DEVICES)[number];
const FILTERS = ["All Devices", "Sold Device", "Unsold Device"] as const;

export default function DealerDevicesPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All Devices");
  const [detail, setDetail] = useState<Dev | null>(null);

  const list = DEALER_DEVICES.filter((d) =>
    filter === "All Devices" ? true : filter === "Sold Device" ? d.sold : !d.sold
  );

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full px-4 py-1.5 text-xs font-semibold transition-colors",
              filter === f ? "bg-primary text-white" : "bg-elevated text-muted hover:text-foreground"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {list.map((d) => (
        <div key={d.id} className="flex items-center justify-between rounded-xl border border-line bg-card px-5 py-4">
          <div>
            <p className="text-xs text-muted">Device ID</p>
            <p className="font-semibold text-foreground">{d.id}</p>
          </div>
          <button
            onClick={() => setDetail(d)}
            className="rounded-lg border border-line px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-foreground hover:border-primary hover:text-primary"
          >
            {d.sold ? "View" : "Assign"}
          </button>
        </div>
      ))}

      <Modal
        open={!!detail}
        onCancel={() => setDetail(null)}
        footer={null}
        centered
        styles={{ content: { background: "rgb(var(--card))", borderRadius: 16 } }}
      >
        {detail && (
          <div>
            <h3 className="font-anton text-xl uppercase">Device Details</h3>
            <div className="mt-4 divide-y divide-line">
              <InfoRow label="Device ID" value={detail.id} />
              <InfoRow label="IMEI" value={detail.imei} />
            </div>
            {detail.sold && (
              <>
                <h3 className="mt-6 font-anton text-xl uppercase">Assigned Customer</h3>
                <div className="mt-4 divide-y divide-line">
                  <InfoRow label="Customer Name" value={detail.customer} />
                  <InfoRow label="Email" value={detail.email} />
                  <InfoRow label="Subscription" value={detail.subscription} valueClass={detail.subscription === "Active" ? "text-success" : "text-muted"} />
                </div>
              </>
            )}
            {!detail.sold && <Button href="/dealer/assign" className="mt-6 w-full">Assign Device</Button>}
          </div>
        )}
      </Modal>
    </div>
  );
}
