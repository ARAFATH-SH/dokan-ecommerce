import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Search results"
};

interface Props {
  searchParams: { q?: string };
}

export default function SearchPage({ searchParams }: Props) {
  const query = (searchParams.q ?? "").trim().toLowerCase();
  const results = query
    ? products.filter((product) => product.title.toLowerCase().includes(query))
    : [];

  return (
    <div className="max-w-content mx-auto px-4 py-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Search" }]} />
      <h1 className="text-2xl font-bold text-ink mt-3 mb-1">
        {query ? `Results for "${searchParams.q}"` : "Search products"}
      </h1>
      <p className="text-sm text-ink-muted mb-6">
        {query ? `${results.length} products found` : "Enter a search term to find products"}
      </p>
      <ProductGrid products={results} />
    </div>
  );
}
