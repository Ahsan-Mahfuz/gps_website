"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ProductCard } from "./ProductCard";
import { PRODUCTS } from "@/lib/data/products";
import { cn } from "@/lib/utils";

const TABS = [
  { key: "all", label: "All Items" },
  { key: "trackers", label: "Trackers" },
  { key: "accessories", label: "Accessories" },
] as const;

export function ProductGrid() {
  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("all");
  // Doubled to mirror the 2-row layout in the reference design.
  const base = tab === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === tab);
  const items = [...base, ...base];

  return (
    <>
      <div className="flex flex-wrap gap-8 border-b border-line pb-1">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={cn(
              "relative pb-3 text-sm font-bold uppercase tracking-wide transition-colors",
              tab === t.key ? "text-foreground" : "text-muted hover:text-foreground"
            )}
          >
            {t.label}
            {tab === t.key && <span className="absolute -bottom-px left-0 h-0.5 w-full bg-primary" />}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((p, i) => (
          <Reveal key={`${p.id}-${i}`} delay={(i % 4) * 60}>
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
    </>
  );
}
