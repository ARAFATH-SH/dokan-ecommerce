import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Star, Truck, ShieldCheck } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ProductGallery from "@/components/product/ProductGallery";
import AddToCartPanel from "@/components/product/AddToCartPanel";
import ProductSection from "@/components/home/ProductSection";
import { getCategoryBySlug } from "@/lib/data/categories";
import { products, getProductBySlug, getRelatedProducts } from "@/lib/data/products";
import { formatPrice, discountPercent } from "@/lib/utils";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [{ url: product.image }]
    }
  };
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const category = getCategoryBySlug(product.categorySlug);
  const related = getRelatedProducts(product);
  const discount = discountPercent(product.price, product.originalPrice);

  return (
    <div className="max-w-content mx-auto px-4 py-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "All products", href: "/products" },
          ...(category ? [{ label: category.name, href: `/category/${category.slug}` }] : []),
          { label: product.title }
        ]}
      />

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <ProductGallery images={product.gallery} title={product.title} />
        </div>

        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold text-ink leading-snug">{product.title}</h1>

          <div className="mt-2 flex items-center gap-3 text-sm text-ink-muted">
            <span className="flex items-center gap-1">
              <Star size={15} className="fill-brand text-brand" />
              {product.rating.toFixed(1)}
            </span>
            <span>{product.reviewCount} reviews</span>
            <span>&middot;</span>
            <span>{product.soldCount} sold</span>
          </div>

          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-3xl font-bold text-brand">
              {formatPrice(product.price, product.currency)}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-base text-ink-muted line-through">
                  {formatPrice(product.originalPrice, product.currency)}
                </span>
                {discount && (
                  <span className="text-sm font-medium text-brand">{discount} percent off</span>
                )}
              </>
            )}
          </div>

          <ul className="mt-5 space-y-2">
            {product.highlights.map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-ink-soft">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-black/5 pt-6">
            <AddToCartPanel product={product} />
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-ink-soft">
            <div className="flex items-center gap-2">
              <Truck size={18} className="text-brand shrink-0" strokeWidth={1.75} />
              {product.freeShipping ? "Free shipping on this item" : "Standard shipping rates apply"}
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-brand shrink-0" strokeWidth={1.75} />
              Ships from {product.location}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="rounded-lg border border-black/10 p-4">
            <h2 className="text-sm font-semibold text-ink mb-2">About this item</h2>
            <p className="text-sm text-ink-soft leading-relaxed">{product.description}</p>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <ProductSection
          title="You may also like"
          viewAllHref={`/category/${product.categorySlug}`}
          products={related}
        />
      )}
    </div>
  );
}
