"use client";

import { useAppSelector } from "@/lib/store/hooks";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";

const SALES_TAX = 40;
const DELIVERY = 5;

export function OrderSummary({
  cta,
  ctaHref,
  children,
}: {
  cta?: string;
  ctaHref?: string;
  children?: React.ReactNode;
}) {
  const items = useAppSelector((s) => s.cart.items);
  const count = items.reduce((n, i) => n + i.quantity, 0);
  const subtotal = items.reduce((n, i) => n + i.price * i.quantity, 0);
  const total = subtotal + SALES_TAX + DELIVERY;

  return (
    <div>
      <h2 className="font-anton text-3xl uppercase sm:text-4xl">Order Summary</h2>
      <dl className="mt-8 space-y-4">
        <Row label={`${count} items`} value={formatPrice(subtotal)} />
        <Row label="Sales Tax" value={formatPrice(SALES_TAX)} />
        <Row label="Delivery" value={formatPrice(DELIVERY)} />
        <div className="flex justify-between border-t border-line pt-4">
          <dt className="text-lg font-bold text-foreground">Total</dt>
          <dd className="font-anton text-xl text-foreground">{formatPrice(total)}</dd>
        </div>
      </dl>

      {cta && ctaHref && (
        <Button href={ctaHref} className="mt-8 w-full py-4">
          {cta}
        </Button>
      )}
      {children}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <dt className="text-sm text-muted">{label}</dt>
      <dd className="text-sm font-semibold text-foreground">{value}</dd>
    </div>
  );
}
