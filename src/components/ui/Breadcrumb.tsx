import Link from "next/link";

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm">
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-2">
          {it.href ? (
            <Link href={it.href} className="font-semibold text-foreground transition-colors hover:text-primary">
              {it.label}
            </Link>
          ) : (
            <span className="text-muted">{it.label}</span>
          )}
          {i < items.length - 1 && <span className="text-faint">›</span>}
        </span>
      ))}
    </nav>
  );
}
