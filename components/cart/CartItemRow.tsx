"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X } from "lucide-react";
import { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

export default function CartItemRow({
  product,
  quantity
}: {
  product: Product;
  quantity: number;
}) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-4 py-5 border-b border-black/5">
      <Link href={`/product/${product.slug}`} className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-md overflow-hidden bg-neutral-100 shrink-0">
        <Image src={product.image} alt={product.title} fill sizes="96px" className="object-cover" />
      </Link>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3">
          <Link href={`/product/${product.slug}`} className="text-sm font-medium text-ink hover:text-brand transition-colors line-clamp-2">
            {product.title}
          </Link>
          <button
            type="button"
            onClick={() => removeItem(product.id)}
            aria-label="Remove item"
            className="text-ink-muted hover:text-brand transition-colors shrink-0"
          >
            <X size={18} />
          </button>
        </div>

        <p className="text-sm font-semibold text-brand mt-1">
          {formatPrice(product.price, product.currency)}
        </p>

        <div className="mt-3 flex items-center border border-black/15 rounded-md w-fit">
          <button
            type="button"
            onClick={() => updateQuantity(product.id, quantity - 1)}
            className="p-1.5 text-ink-soft hover:text-brand transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={14} />
          </button>
          <span className="w-8 text-center text-sm">{quantity}</span>
          <button
            type="button"
            onClick={() => updateQuantity(product.id, quantity + 1)}
            className="p-1.5 text-ink-soft hover:text-brand transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>

      <p className="text-sm font-semibold text-ink shrink-0">
        {formatPrice(product.price * quantity, product.currency)}
      </p>
    </div>
  );
}
