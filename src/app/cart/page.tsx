import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CartList } from "@/components/cart/CartList";
import { OrderSummary } from "@/components/cart/OrderSummary";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review the items in your AccuTrack cart and proceed to checkout.",
};

export default function CartPage() {
  return (
    <Container className="py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Cart" }]} />

      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_380px]">
        <div>
          <h1 className="font-anton text-4xl uppercase sm:text-5xl">Your Cart</h1>
          <p className="mt-2 text-sm text-muted">
            Items in your bag are not reserved — check out now to make them yours.
          </p>
          <div className="mt-8">
            <CartList />
          </div>
        </div>

        <aside className="h-fit lg:sticky lg:top-24">
          <OrderSummary cta="Checkout" ctaHref="/purchase" requireAuth />
        </aside>
      </div>
    </Container>
  );
}
