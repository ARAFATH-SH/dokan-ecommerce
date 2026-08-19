import Hero from "@/components/home/Hero";
import CategoryGrid from "@/components/home/CategoryGrid";
import ProductSection from "@/components/home/ProductSection";
import TrustBadges from "@/components/home/TrustBadges";
import Newsletter from "@/components/home/Newsletter";
import { products, getDealProducts } from "@/lib/data/products";

export default function HomePage() {
  const deals = getDealProducts();
  const featured = products.slice(0, 10);
  const groceries = products.filter((p) => p.categorySlug === "groceries");

  return (
    <>
      <Hero />
      <CategoryGrid />
      <ProductSection
        title="Flash deals"
        subtitle="Limited time offers, while stock lasts"
        viewAllHref="/products"
        products={deals}
      />
      <TrustBadges />
      <ProductSection
        title="Popular right now"
        viewAllHref="/products"
        products={featured}
      />
      <ProductSection
        title="Daily groceries"
        viewAllHref="/category/groceries"
        products={groceries}
      />
      <Newsletter />
    </>
  );
}
