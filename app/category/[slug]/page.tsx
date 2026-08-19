import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CategorySidebar from "@/components/product/CategorySidebar";
import ProductGrid from "@/components/product/ProductGrid";
import { categories, getCategoryBySlug } from "@/lib/data/categories";
import { getProductsByCategory } from "@/lib/data/products";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const category = getCategoryBySlug(params.slug);
  if (!category) return {};
  return {
    title: category.name,
    description: `Shop ${category.name.toLowerCase()} on Dokan. Compare prices and find the right product for you.`
  };
}

export default function CategoryPage({ params }: Props) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();

  const items = getProductsByCategory(category.slug);

  return (
    <div className="max-w-content mx-auto px-4 py-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "All products", href: "/products" },
          { label: category.name }
        ]}
      />
      <h1 className="text-2xl font-bold text-ink mt-3 mb-6">{category.name}</h1>
      <div className="flex flex-col sm:flex-row gap-8">
        <CategorySidebar activeSlug={category.slug} />
        <div className="flex-1">
          <p className="text-sm text-ink-muted mb-4">{items.length} products</p>
          <ProductGrid products={items} />
        </div>
      </div>
    </div>
  );
}
