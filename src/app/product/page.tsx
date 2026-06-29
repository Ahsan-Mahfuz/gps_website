import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProductGrid } from "@/components/product/ProductGrid";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Professional-grade GPS tracking hardware engineered for the harshest conditions. Browse AccuTrack trackers and accessories.",
};

export default function ProductPage() {
  return (
    <Container className="py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Product" }]} />

      <div className="mt-10">
        <SectionLabel>Product</SectionLabel>
        <h1 className="font-anton text-5xl uppercase leading-[0.95] sm:text-6xl">
          Built to<br />Perform Hard
        </h1>
        <p className="mt-4 max-w-md text-muted">
          Professional-grade hardware engineered for the harshest conditions.
        </p>
      </div>

      <div className="mt-12">
        <ProductGrid />
      </div>
    </Container>
  );
}
