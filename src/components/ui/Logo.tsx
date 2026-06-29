import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

/** Brand logo (raster wordmark). White artwork — reads on dark; inverts on light theme. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="AccuTrack home" className={cn("inline-flex items-center", className)}>
      <Image
        src="/logo/logo.svg"
        alt="AccuTrack"
        width={163}
        height={60}
        priority
        className="h-12 w-auto"
      />
    </Link>
  );
}
