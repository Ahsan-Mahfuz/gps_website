import { StatCard, PanelLabel, InfoRow } from "@/components/dashboard/widgets";
import { Button } from "@/components/ui/Button";
import { DEALER_STATS, UNSOLD_DEVICES } from "@/lib/data/dealer";

export default function DealerDashboard() {
  return (
    <div className="space-y-8">
      <section>
        <PanelLabel>Overview</PanelLabel>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <StatCard label="Total Devices" value={DEALER_STATS.totalDevices} accent="primary" large />
          </div>
          <StatCard label="Sold" value={DEALER_STATS.sold} accent="green" />
          <StatCard label="Unsold" value={DEALER_STATS.unsold} accent="muted" />
        </div>
      </section>

      <section>
        <PanelLabel>Unsold Devices</PanelLabel>
        <div className="space-y-3">
          {UNSOLD_DEVICES.map((d) => (
            <div key={d.id} className="flex items-center justify-between rounded-xl border border-line bg-card px-5 py-4">
              <div>
                <p className="font-semibold text-foreground">{d.id}</p>
                <p className="text-xs text-muted">IMEI: {d.imei}</p>
              </div>
              <Button href="/dealer/assign" className="px-5 py-2 text-xs">Assign</Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
