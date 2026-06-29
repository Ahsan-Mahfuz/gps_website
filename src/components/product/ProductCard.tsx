import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-line bg-card transition-colors group-hover:border-primary/50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-4 font-anton text-xl uppercase text-foreground transition-colors group-hover:text-primary">
        {product.name}
      </h3>
    </Link>
  );
}
