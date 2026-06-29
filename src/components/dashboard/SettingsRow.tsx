import Link from "next/link";

export function SettingsRow({
  href,
  icon,
  label,
  danger,
  trailing,
  onClick,
}: {
  href?: string;
  icon: React.ReactNode;
  label: string;
  danger?: boolean;
  trailing?: React.ReactNode;
  onClick?: () => void;
}) {
  const inner = (
    <div className="flex items-center justify-between rounded-xl border border-line bg-card px-5 py-4 transition-colors hover:border-primary/40">
      <div className="flex items-center gap-3">
        <span className={danger ? "text-primary" : "text-foreground"}>{icon}</span>
        <span className={`text-sm font-medium ${danger ? "text-primary" : "text-foreground"}`}>{label}</span>
      </div>
      {trailing ?? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted">
          <path d="m9 18 6-6-6-6" />
        </svg>
      )}
    </div>
  );
  if (href) return <Link href={href}>{inner}</Link>;
  if (onClick) return <button type="button" onClick={onClick} className="block w-full text-left">{inner}</button>;
  return inner;
}
