import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "dark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  outline: "border border-line text-foreground hover:border-primary hover:text-primary",
  ghost: "text-foreground hover:text-primary",
  dark: "bg-elevated text-foreground hover:bg-card border border-line",
};

interface Props {
  variant?: Variant;
  href?: string;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({
  variant = "primary",
  href,
  className,
  children,
  type = "button",
  onClick,
  disabled,
}: Props) {
  const classes = cn(base, variants[variant], className);
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
