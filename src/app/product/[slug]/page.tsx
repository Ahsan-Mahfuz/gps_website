import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProductDetail } from "@/components/product/ProductDetail";
import { PRODUCTS, getProduct } from "@/lib/data/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: { images: [product.image] },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <Container className="py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Product", href: "/product" },
          { label: "Tracker" },
        ]}
      />
      <div className="mt-10">
        <ProductDetail product={product} />
      </div>
    </Container>
  );
}
