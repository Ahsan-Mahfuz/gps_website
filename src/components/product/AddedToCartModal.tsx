"use client";

import Image from "next/image";
import { Modal } from "antd";
import { Button } from "@/components/ui/Button";
import type { Product } from "@/lib/data/products";

function CheckBadge() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#28A745">
      <path d="M12 2l2.4 1.8 3-.3 1 2.8 2.8 1-.3 3L23 16l-1.8 2.4.3 3-2.8 1-1 2.8-3-.3L12 22l-2.4-1.8-3 .3-1-2.8-2.8-1 .3-3L1 12l1.8-2.4-.3-3 2.8-1 1-2.8 3 .3z" />
      <path d="m8.5 12 2.5 2.5 4.5-4.5" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AddedToCartModal({
  open,
  onClose,
  product,
}: {
  open: boolean;
  onClose: () => void;
  product: Product;
}) {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      width={640}
      styles={{ content: { background: "rgb(var(--card))", padding: 0, borderRadius: 16 } }}
    >
      <div className="p-7">
        <div className="mb-6 flex items-center gap-2">
          <CheckBadge />
          <span className="font-anton text-lg uppercase tracking-wide text-foreground">Added to Cart</span>
        </div>
        <div className="flex flex-col gap-6 sm:flex-row">
          <div className="relative h-40 w-40 shrink-0 rounded-xl bg-elevated">
            <Image src={product.image} alt={product.name} fill className="object-contain p-3" />
          </div>
          <div>
            <h3 className="font-anton text-2xl uppercase text-foreground">{product.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{product.shortDescription.slice(0, 130)}…</p>
            <p className="mt-3 font-anton text-xl text-foreground">
              ${product.price} <span className="text-xs font-normal text-muted">(Tax Included)</span>
            </p>
          </div>
        </div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <Button href="/purchase">Purchase Procedure</Button>
          <Button href="/cart" variant="dark">Check your cart</Button>
        </div>
      </div>
    </Modal>
  );
}
