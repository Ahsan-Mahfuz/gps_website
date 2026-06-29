"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Modal } from "antd";
import { PRODUCTS } from "@/lib/data/products";

export function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return PRODUCTS;
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.shortDescription.toLowerCase().includes(term) ||
        p.category.includes(term)
    );
  }, [q]);

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      closable={false}
      width={620}
      styles={{ content: { background: "rgb(var(--card))", borderRadius: 16, padding: 0 } }}
    >
      <div className="p-5">
        <div className="flex items-center gap-3 rounded-xl border border-input-border bg-input px-4">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-muted">
            <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
          </svg>
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search products…"
            className="w-full bg-transparent py-3.5 text-sm text-foreground placeholder:text-faint focus:outline-none"
          />
          {q && (
            <button onClick={() => setQ("")} aria-label="Clear" className="text-muted hover:text-foreground">✕</button>
          )}
        </div>

        <div className="mt-4 max-h-[60vh] space-y-2 overflow-y-auto">
          {results.length === 0 ? (
            <p className="py-8 text-center text-sm text-muted">No products found for “{q}”.</p>
          ) : (
            results.map((p) => (
              <Link
                key={p.id}
                href={`/product/${p.slug}`}
                onClick={onClose}
                className="flex items-center gap-4 rounded-xl border border-line bg-background px-3 py-3 transition-colors hover:border-primary/50"
              >
                <div className="relative h-14 w-14 shrink-0 rounded-lg bg-elevated">
                  <Image src={p.image} alt={p.name} fill className="object-contain p-1.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-anton text-base uppercase text-foreground">{p.name}</p>
                  <p className="truncate text-xs text-muted">{p.shortDescription}</p>
                </div>
                <span className="font-anton text-sm text-primary">${p.price}</span>
              </Link>
            ))
          )}
        </div>
      </div>
    </Modal>
  );
}
