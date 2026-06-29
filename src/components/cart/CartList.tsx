"use client";

import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { incrementQty, decrementQty, removeItem } from "@/lib/store/slices/cartSlice";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";

function TrashIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

export function CartList() {
  const items = useAppSelector((s) => s.cart.items);
  const dispatch = useAppDispatch();

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-line bg-card p-12 text-center">
        <p className="text-muted">Your cart is empty.</p>
        <Link href="/product" className="mt-4 inline-block font-semibold text-primary">
          Browse products →
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div key={item.id} className="relative flex flex-col gap-5 rounded-2xl border border-line bg-card p-5 sm:flex-row sm:p-6">
          <div className="relative h-32 w-full shrink-0 rounded-xl bg-elevated sm:w-40">
            <Image src={item.image} alt={item.name} fill className="object-contain p-3" />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <h3 className="font-anton text-2xl uppercase">{item.name}</h3>
              <button
                aria-label="Remove item"
                onClick={() => dispatch(removeItem(item.id))}
                className="text-primary transition-transform hover:scale-110"
              >
                <TrashIcon />
              </button>
            </div>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{item.description}</p>
            <div className="mt-5 flex items-center justify-between">
              <div className="inline-flex items-center rounded-lg border border-input-border bg-input">
                <button
                  aria-label="Decrease"
                  onClick={() => dispatch(decrementQty(item.id))}
                  className="grid h-11 w-11 place-items-center text-lg text-foreground hover:text-primary"
                >
                  −
                </button>
                <span className="w-8 text-center font-anton text-foreground">{item.quantity}</span>
                <button
                  aria-label="Increase"
                  onClick={() => dispatch(incrementQty(item.id))}
                  className="grid h-11 w-11 place-items-center text-lg text-foreground hover:text-primary"
                >
                  +
                </button>
              </div>
              <span className="font-anton text-2xl text-foreground">{formatPrice(item.price)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
