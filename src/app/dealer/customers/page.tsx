import Link from "next/link";
import { CUSTOMERS } from "@/lib/data/dealer";

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-line bg-card p-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold uppercase tracking-widest text-muted">Total Income</span>
          <button className="rounded-lg border border-line px-3 py-1 text-xs text-foreground">Year ▾</button>
        </div>
        <p className="mt-2 font-anton text-4xl text-primary">$12,480.00</p>
        <Link href="/dealer/payments" className="mt-2 inline-block text-sm font-semibold text-primary">History →</Link>
      </div>

      <div className="overflow-hidden rounded-2xl border border-line">
        <div className="grid grid-cols-2 bg-elevated px-5 py-3 text-xs font-bold uppercase tracking-wide text-muted">
          <span>Customer</span>
          <span>Device ID</span>
        </div>
        {CUSTOMERS.map((c, i) => (
          <div key={i} className="grid grid-cols-2 items-center border-t border-line bg-card px-5 py-4">
            <div>
              <p className="text-sm font-semibold text-foreground">{c.name}</p>
              <p className="text-xs text-muted">{c.email}</p>
            </div>
            <span className="text-sm text-foreground">{c.deviceId}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
