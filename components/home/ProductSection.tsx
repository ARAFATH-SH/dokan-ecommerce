import Link from "next/link";
import { Product } from "@/lib/types";
import ProductGrid from "@/components/product/ProductGrid";

export default function ProductSection({
  title,
  subtitle,
  viewAllHref,
  products
}: {
  title: string;
  subtitle?: string;
  viewAllHref: string;
  products: Product[];
}) {
  return (
    <section className="max-w-content mx-auto px-4 py-8">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-ink">{title}</h2>
          {subtitle && <p className="text-sm text-ink-muted mt-1">{subtitle}</p>}
        </div>
        <Link href={viewAllHref} className="text-sm text-brand hover:text-brand-600 transition-colors shrink-0">
          View all
        </Link>
      </div>
      <ProductGrid products={products} />
    </section>
  );
}
