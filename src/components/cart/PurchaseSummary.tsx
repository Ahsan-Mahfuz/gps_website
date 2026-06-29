"use client";

import Image from "next/image";
import { useAppSelector } from "@/lib/store/hooks";
import { OrderSummary } from "./OrderSummary";

export function PurchaseSummary() {
  const items = useAppSelector((s) => s.cart.items);

  return (
    <div>
      <OrderSummary />
      <div className="mt-8 space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4 rounded-2xl border border-line bg-card p-4">
            <div className="relative h-24 w-28 shrink-0 rounded-xl bg-elevated">
              <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
            </div>
            <div className="flex-1">
              <h3 className="font-anton text-xl uppercase">{item.name}</h3>
              <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">{item.description}</p>
              <p className="mt-2 font-anton text-lg text-foreground">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
