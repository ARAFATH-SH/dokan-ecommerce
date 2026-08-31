import { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    id: "cat-1",
    slug: "electronics",
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=600&q=80",
    itemCount: 128
  },
  {
    id: "cat-2",
    slug: "fashion",
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=600&q=80",
    itemCount: 214
  },
  {
    id: "cat-3",
    slug: "home-living",
    name: "Home and Living",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    itemCount: 96
  },
  {
    id: "cat-4",
    slug: "beauty-care",
    name: "Beauty and Care",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80",
    itemCount: 87
  },
  {
    id: "cat-5",
    slug: "sports-outdoor",
    name: "Sports and Outdoor",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80",
    itemCount: 63
  },
  {
    id: "cat-6",
    slug: "bags-shoes",
    name: "Bags and Shoes",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
    itemCount: 141
  },
  {
    id: "cat-7",
    slug: "groceries",
    name: "Groceries",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80",
    itemCount: 175
  },
  {
    id: "cat-8",
    slug: "toys-kids",
    name: "Toys and Kids",
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80",
    itemCount: 58
  }
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
