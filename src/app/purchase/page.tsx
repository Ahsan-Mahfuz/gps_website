import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ShippingForm } from "@/components/cart/ShippingForm";
import { PurchaseSummary } from "@/components/cart/PurchaseSummary";

export const metadata: Metadata = {
  title: "Purchase",
  description: "Complete your AccuTrack purchase — enter shipping details and review your order.",
};

export default function PurchasePage() {
  return (
    <Container className="py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Cart", href: "/cart" },
          { label: "Purchase" },
        ]}
      />

      <div className="mt-10 grid gap-12 lg:grid-cols-2">
        <div>
          <h1 className="font-anton text-4xl uppercase sm:text-5xl">Purchase Procedure</h1>
          <p className="mt-2 text-sm text-muted">
            Items in your bag are not reserved — check out now to make them yours.
          </p>
          <div className="mt-8">
            <ShippingForm />
          </div>
        </div>

        <aside>
          <PurchaseSummary />
        </aside>
      </div>
    </Container>
  );
}
