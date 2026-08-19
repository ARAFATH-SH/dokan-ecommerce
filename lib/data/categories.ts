import { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    id: "cat-1",
    slug: "electronics",
    name: "Electronics",
    image: "https://loremflickr.com/600/600/electronics,gadget?lock=101",
    itemCount: 128
  },
  {
    id: "cat-2",
    slug: "fashion",
    name: "Fashion",
    image: "https://loremflickr.com/600/600/fashion,clothing?lock=102",
    itemCount: 214
  },
  {
    id: "cat-3",
    slug: "home-living",
    name: "Home and Living",
    image: "https://loremflickr.com/600/600/homedecor,furniture?lock=103",
    itemCount: 96
  },
  {
    id: "cat-4",
    slug: "beauty-care",
    name: "Beauty and Care",
    image: "https://loremflickr.com/600/600/skincare,cosmetics?lock=104",
    itemCount: 87
  },
  {
    id: "cat-5",
    slug: "sports-outdoor",
    name: "Sports and Outdoor",
    image: "https://loremflickr.com/600/600/sports,fitness?lock=105",
    itemCount: 63
  },
  {
    id: "cat-6",
    slug: "bags-shoes",
    name: "Bags and Shoes",
    image: "https://loremflickr.com/600/600/handbag,shoes?lock=106",
    itemCount: 141
  },
  {
    id: "cat-7",
    slug: "groceries",
    name: "Groceries",
    image: "https://loremflickr.com/600/600/grocery,vegetables?lock=107",
    itemCount: 175
  },
  {
    id: "cat-8",
    slug: "toys-kids",
    name: "Toys and Kids",
    image: "https://loremflickr.com/600/600/toys,kids?lock=108",
    itemCount: 58
  }
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
