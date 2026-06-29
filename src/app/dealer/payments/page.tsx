import { PAYMENTS } from "@/lib/data/dealer";
import { formatPrice } from "@/lib/utils";

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      {/* Summary header */}
      <div className="rounded-2xl bg-primary p-6 text-white">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-white/70">Total Revenue</p>
            <p className="font-anton text-3xl">$12,480</p>
          </div>
          <div>
            <p className="text-sm text-white/70">Your Earnings</p>
            <p className="font-anton text-3xl">$2,496</p>
          </div>
        </div>
        <div className="mt-5 border-t border-white/20 pt-4 text-center text-sm">
          96 Active Subscriptions
        </div>
      </div>

      <h2 className="text-sm font-bold uppercase tracking-widest text-muted">Recent Transactions</h2>
      <div className="space-y-3">
        {PAYMENTS.map((p, i) => (
          <div key={i} className="rounded-2xl border border-line bg-card p-5">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" /></svg>
                </span>
                <div>
                  <p className="font-semibold text-foreground">{p.customer}</p>
                  <p className="text-xs text-muted">{p.device}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-anton text-lg text-success">+{formatPrice(p.amount)}</p>
                <span className="rounded bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">{p.plan}</span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-line pt-3 text-xs">
              <div><p className="text-faint">DATE</p><p className="text-foreground">{p.date}</p></div>
              <div><p className="text-faint">STATUS</p><p className={p.status === "Active" ? "text-success" : "text-primary"}>{p.status}</p></div>
              <div><p className="text-faint">COMMISSION</p><p className="text-foreground">{formatPrice(p.commission)}</p></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
