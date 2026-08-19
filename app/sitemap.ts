import { MetadataRoute } from "next";
import { products } from "@/lib/data/products";
import { categories } from "@/lib/data/categories";

const baseUrl = "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/products", "/cart", "/search"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));

  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/category/${category.slug}`,
    lastModified: new Date()
  }));

  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: new Date()
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
