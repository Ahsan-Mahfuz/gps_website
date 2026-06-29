"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Badge, Drawer } from "antd";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { NAV_LINKS } from "@/lib/site";
import { useAppSelector } from "@/lib/store/hooks";
import { cn } from "@/lib/utils";

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
function CartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}
function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const count = useAppSelector((s) =>
    s.cart.items.reduce((n, i) => n + i.quantity, 0)
  );

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-container items-center justify-between px-5 sm:px-8 lg:px-10">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold uppercase tracking-wide transition-colors hover:text-foreground",
                isActive(link.href) ? "text-foreground" : "text-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <button aria-label="Search" className="hidden text-foreground transition-colors hover:text-primary sm:block">
            <SearchIcon />
          </button>
          <Link href="/cart" aria-label="Cart" className="text-foreground transition-colors hover:text-primary">
            <Badge count={count} size="small" color="#FD0010" offset={[2, -2]}>
              <span className="text-foreground"><CartIcon /></span>
            </Badge>
          </Link>
          <Link
            href="/account"
            aria-label="Account"
            className="h-8 w-8 rounded-full border-2 border-primary bg-elevated"
          />
          <ThemeToggle className="hidden sm:grid" />
          <button
            aria-label="Open menu"
            className="text-foreground md:hidden"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      <Drawer
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
        width={280}
        styles={{ body: { padding: 24 } }}
        title={<Logo />}
      >
        <nav className="flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "text-base font-semibold uppercase tracking-wide",
                isActive(link.href) ? "text-primary" : "text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex items-center gap-3">
            <ThemeToggle />
            <span className="text-sm text-muted">Switch theme</span>
          </div>
        </nav>
      </Drawer>
    </header>
  );
}
