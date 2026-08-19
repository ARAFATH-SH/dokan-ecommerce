export interface Category {
  id: string;
  slug: string;
  name: string;
  image: string;
  itemCount: number;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  categorySlug: string;
  price: number;
  originalPrice?: number;
  currency: string;
  rating: number;
  reviewCount: number;
  soldCount: number;
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
  stock: number;
  location: string;
  freeShipping: boolean;
}

export interface CartLine {
  productId: string;
  quantity: number;
}
