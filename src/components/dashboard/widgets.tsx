import { cn } from "@/lib/utils";

/** Stat card — big value + label, optional accent color. */
export function StatCard({
  label,
  value,
  accent = "primary",
  large,
}: {
  label: string;
  value: string | number;
  accent?: "primary" | "green" | "muted";
  large?: boolean;
}) {
  const color =
    accent === "green" ? "text-success" : accent === "muted" ? "text-foreground" : "text-primary";
  return (
    <div className={cn("rounded-2xl border border-line bg-card p-6", large && "flex flex-col justify-center")}>
      <span className={cn("font-anton", large ? "text-5xl" : "text-3xl", color)}>{value}</span>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}

/** label : value row used inside detail sheets/cards. */
export function InfoRow({ label, value, valueClass }: { label: string; value: React.ReactNode; valueClass?: string }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2.5">
      <span className="text-sm text-muted">{label}</span>
      <span className={cn("text-sm font-semibold text-foreground", valueClass)}>{value}</span>
    </div>
  );
}

/** Section heading inside dashboard pages. */
export function PanelLabel({ children, action }: { children: React.ReactNode; action?: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-sm font-bold uppercase tracking-widest text-muted">{children}</h2>
      {action}
    </div>
  );
}

/** Reusable map placeholder (styled, since real map needs integration). */
export function MapPlaceholder({ className, label = "Live Map" }: { className?: string; label?: string }) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl border border-line bg-surface", className)}>
      <svg className="absolute inset-0 h-full w-full opacity-40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dgrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgb(var(--line))" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dgrid)" />
      </svg>
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 600 400" fill="none">
        <path d="M60 340 C 160 280, 140 200, 240 180 S 420 120, 380 60" stroke="rgb(var(--primary))" strokeWidth="4" strokeLinecap="round" />
        <circle cx="60" cy="340" r="8" fill="rgb(var(--primary))" />
        <circle cx="380" cy="60" r="10" fill="rgb(var(--primary))" />
        <circle cx="380" cy="60" r="18" fill="rgb(var(--primary))" opacity="0.25" />
      </svg>
      <div className="absolute left-4 top-4 rounded-lg border border-line bg-background/80 px-3 py-1.5 text-xs font-semibold text-foreground backdrop-blur">
        {label}
      </div>
    </div>
  );
}

/** Empty / error state. */
export function EmptyState({
  title,
  message,
  action,
}: {
  title: string;
  message?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="grid place-items-center rounded-2xl border border-dashed border-line bg-card px-6 py-16 text-center">
      <div className="mb-4 h-12 w-12 rounded-full border-2 border-primary/40 bg-primary/10" />
      <h3 className="font-anton text-lg uppercase">{title}</h3>
      {message && <p className="mt-2 max-w-sm text-sm text-muted">{message}</p>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

/** Status dot. */
export function StatusDot({ online }: { online: boolean }) {
  return (
    <span className={cn("inline-block h-2.5 w-2.5 rounded-full", online ? "bg-success" : "bg-primary")} />
  );
}
