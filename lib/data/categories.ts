import { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    id: "cat-1",
    slug: "electronics",
    name: "Electronics",
    image: "https://picsum.photos/seed/electronics/600/600",
    itemCount: 128
  },
  {
    id: "cat-2",
    slug: "fashion",
    name: "Fashion",
    image: "https://picsum.photos/seed/fashion/600/600",
    itemCount: 214
  },
  {
    id: "cat-3",
    slug: "home-living",
    name: "Home and Living",
    image: "https://picsum.photos/seed/home/600/600",
    itemCount: 96
  },
  {
    id: "cat-4",
    slug: "beauty-care",
    name: "Beauty and Care",
    image: "https://picsum.photos/seed/beauty/600/600",
    itemCount: 87
  },
  {
    id: "cat-5",
    slug: "sports-outdoor",
    name: "Sports and Outdoor",
    image: "https://picsum.photos/seed/sports/600/600",
    itemCount: 63
  },
  {
    id: "cat-6",
    slug: "bags-shoes",
    name: "Bags and Shoes",
    image: "https://picsum.photos/seed/bags/600/600",
    itemCount: 141
  },
  {
    id: "cat-7",
    slug: "groceries",
    name: "Groceries",
    image: "https://picsum.photos/seed/groceries/600/600",
    itemCount: 175
  },
  {
    id: "cat-8",
    slug: "toys-kids",
    name: "Toys and Kids",
    image: "https://picsum.photos/seed/toys/600/600",
    itemCount: 58
  }
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
