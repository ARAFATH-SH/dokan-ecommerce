"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Product } from "@/lib/types";
import { formatPrice, discountPercent } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const discount = discountPercent(product.price, product.originalPrice);

  return (
    <div className="group relative bg-white rounded-lg border border-black/5 shadow-card hover:shadow-cardHover transition-shadow overflow-hidden flex flex-col">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-square bg-neutral-100">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {discount && (
            <span className="absolute top-2 left-2 bg-brand text-white text-xs font-semibold px-2 py-1 rounded">
              -{discount}% off
            </span>
          )}
        </div>
      </Link>

      <div className="p-3 flex flex-col flex-1">
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-sm text-ink leading-snug line-clamp-2 min-h-[2.5rem] hover:text-brand transition-colors">
            {product.title}
          </h3>
        </Link>

        <div className="mt-1.5 flex items-baseline gap-2">
          <span className="text-base font-semibold text-brand">
            {formatPrice(product.price, product.currency)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-ink-muted line-through">
              {formatPrice(product.originalPrice, product.currency)}
            </span>
          )}
        </div>

        <div className="mt-1 flex items-center gap-1 text-xs text-ink-muted">
          <Star size={13} className="fill-brand text-brand" />
          <span>{product.rating.toFixed(1)}</span>
          <span>&middot;</span>
          <span>{product.soldCount} sold</span>
        </div>

        <button
          type="button"
          onClick={() => addItem(product.id)}
          className="mt-3 w-full text-sm font-medium border border-brand text-brand rounded-md py-1.5 hover:bg-brand hover:text-white transition-colors focus-ring"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
