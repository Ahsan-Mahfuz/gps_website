"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs } from "antd";
import { Button } from "@/components/ui/Button";
import { Stars } from "@/components/ui/Stars";
import { QuantitySelector } from "@/components/ui/QuantitySelector";
import { AddedToCartModal } from "./AddedToCartModal";
import { useAppDispatch } from "@/lib/store/hooks";
import { addItem } from "@/lib/store/slices/cartSlice";
import type { Product } from "@/lib/data/products";
import { cn } from "@/lib/utils";

const ASSURANCES = [
  { title: "2-Year Warranty", sub: "Hardware Replacement Covered" },
  { title: "Free Shipping", sub: "On Orders Over $50" },
  { title: "30-Day Returns", sub: "No Questions Asked" },
];

export function ProductDetail({ product }: { product: Product }) {
  const dispatch = useAppDispatch();
  const [qty, setQty] = useState(1);
  const [active, setActive] = useState(0);
  const [modal, setModal] = useState(false);

  const handleAdd = () => {
    dispatch(
      addItem({
        id: `${product.id}-${Date.now()}`,
        name: product.name,
        description: product.shortDescription,
        price: product.price,
        image: product.image,
        quantity: qty,
      })
    );
    setModal(true);
  };

  return (
    <>
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Gallery */}
        <div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-card">
            <Image src={product.gallery[active]} alt={product.name} fill className="object-contain p-10" priority />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {product.gallery.map((g, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={cn(
                  "relative aspect-[4/3] overflow-hidden rounded-xl border bg-card transition-colors",
                  active === i ? "border-primary" : "border-line hover:border-primary/40"
                )}
              >
                <Image src={g} alt={`${product.name} view ${i + 1}`} fill className="object-contain p-4" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <h1 className="font-anton text-4xl uppercase sm:text-5xl">{product.name}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Stars rating={product.rating} size={18} />
            <span className="text-sm font-bold text-foreground">{product.rating}</span>
            <span className="text-sm text-muted">· {product.reviews} Reviews</span>
            <span className="text-sm text-muted">· {product.sold.toLocaleString()} Sold</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">{product.shortDescription}</p>

          <div className="mt-7">
            <span className="font-anton text-4xl text-foreground">${product.price}</span>
            <p className="mt-1 text-xs text-muted">
              One-Time Hardware Cost. Requires AccuTrack Subscription Plan (From $4.99/Mo).
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <QuantitySelector value={qty} onChange={setQty} />
            <Button onClick={handleAdd} className="flex-1 sm:flex-none">
              Add to cart
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </Button>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {ASSURANCES.map((a) => (
              <div key={a.title} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-md bg-primary text-white">
                  <span className="h-4 w-4 rounded-sm bg-white/90" />
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">{a.title}</p>
                  <p className="text-xs text-muted">{a.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-16">
        <Tabs
          defaultActiveKey="overview"
          items={[
            {
              key: "overview",
              label: "Overview",
              children: <Overview product={product} />,
            },
            {
              key: "specs",
              label: "Specifications",
              children: <SpecList product={product} />,
            },
            {
              key: "reviews",
              label: "Reviews",
              children: (
                <p className="py-8 text-muted">
                  {product.reviews} verified reviews · {product.rating} average rating.
                </p>
              ),
            },
            {
              key: "faqs",
              label: "FAQ's",
              children: <Faqs />,
            },
          ]}
        />
      </div>

      <AddedToCartModal open={modal} onClose={() => setModal(false)} product={product} />
    </>
  );
}

function Overview({ product }: { product: Product }) {
  return (
    <div className="grid gap-10 py-8 lg:grid-cols-2">
      <div>
        <h2 className="font-anton text-2xl uppercase">Built for the long haul</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">{product.longDescription}</p>

        <h2 className="mt-10 font-anton text-2xl uppercase">Key Highlights</h2>
        <ul className="mt-4 space-y-2.5">
          {product.highlights.map((h, i) => (
            <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {h}
            </li>
          ))}
        </ul>

        <h2 className="mt-10 font-anton text-2xl uppercase">Professional Installation Recommended</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          While experienced users can self-install in under 30 minutes, we recommend professional installation for the relay and ignition-wire connections. Find a certified installer near you, or contact our support team for a guided video walkthrough.
        </p>
      </div>

      <aside className="h-fit rounded-2xl border border-line bg-card p-8">
        <h3 className="font-anton text-xl uppercase">What's in the box</h3>
        <ul className="mt-5 space-y-4">
          {product.boxContents.map((b, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {b}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

function SpecList({ product }: { product: Product }) {
  const specs = [
    ["Network", "4G LTE Cat 1 / 2G fallback"],
    ["GPS Accuracy", "±1.5m (GLONASS + Galileo)"],
    ["Update Rate", "Every 3 seconds"],
    ["Backup Battery", "Pre-installed Li-ion"],
    ["Rating", "IP67 Waterproof"],
    ["Warranty", "2 Years"],
    ["Price", `$${product.price}`],
  ];
  return (
    <div className="max-w-2xl py-8">
      <dl className="divide-y divide-line">
        {specs.map(([k, v]) => (
          <div key={k} className="flex justify-between py-3.5">
            <dt className="text-sm text-muted">{k}</dt>
            <dd className="text-sm font-semibold text-foreground">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Faqs() {
  const faqs = [
    ["Do I need a subscription?", "Yes — live tracking requires an AccuTrack plan from $4.99/mo. The device is a one-time hardware cost."],
    ["Is installation included?", "Self-install takes under 30 minutes. Professional installation is recommended for hardwire and relay connections."],
    ["What's the warranty?", "Every device ships with a 2-year hardware replacement warranty."],
  ];
  return (
    <div className="max-w-2xl space-y-4 py-8">
      {faqs.map(([q, a]) => (
        <details key={q} className="rounded-xl border border-line bg-card p-5">
          <summary className="cursor-pointer font-semibold text-foreground">{q}</summary>
          <p className="mt-3 text-sm text-muted">{a}</p>
        </details>
      ))}
    </div>
  );
}
