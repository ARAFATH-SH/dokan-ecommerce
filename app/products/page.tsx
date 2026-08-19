import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CategorySidebar from "@/components/product/CategorySidebar";
import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "All products",
  description: "Browse the full catalog of products available on Dokan."
};

export default function ProductsPage() {
  return (
    <div className="max-w-content mx-auto px-4 py-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "All products" }]} />
      <h1 className="text-2xl font-bold text-ink mt-3 mb-6">All products</h1>
      <div className="flex flex-col sm:flex-row gap-8">
        <CategorySidebar />
        <div className="flex-1">
          <p className="text-sm text-ink-muted mb-4">{products.length} products</p>
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}
