import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Wordmark logo. Styled with the Anton display face and the brand red accent.
 * Swap for the SVG asset later if needed — kept as text for crisp theming.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="AccuTrack home" className={cn("inline-flex items-end leading-none", className)}>
      <span className="font-anton text-2xl uppercase tracking-tight text-foreground">
        Accu
      </span>
      <span className="font-anton text-2xl uppercase tracking-tight text-primary italic">
        Track
      </span>
    </Link>
  );
}
