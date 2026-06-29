"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { FOOTER_COLUMNS, FOOTER_LEGAL, SITE } from "@/lib/site";

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-container px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-foreground">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-sm text-muted transition-colors hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-foreground">
              News Letter
            </h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center overflow-hidden rounded-lg border border-input-border bg-input"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-faint focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-12 w-12 shrink-0 place-items-center text-foreground transition-colors hover:text-primary"
              >
                <MailIcon />
              </button>
            </form>
          </div>
        </div>

        <div className="my-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <Logo />
          <div className="flex gap-8">
            <Link href="/about" className="text-sm text-muted transition-colors hover:text-primary">About Us</Link>
            <Link href="/contact" className="text-sm text-muted transition-colors hover:text-primary">Contact Us</Link>
          </div>
        </div>

        <div className="border-t border-line pt-6">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {FOOTER_LEGAL.map((l) => (
              <Link key={l.label} href={l.href} className="text-sm text-muted transition-colors hover:text-primary">
                {l.label}
              </Link>
            ))}
          </div>
          <p className="mt-5 text-sm text-faint">
            Copyright © {SITE.name} — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
