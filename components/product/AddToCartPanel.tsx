"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Minus, Plus } from "lucide-react";
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";

export default function AddToCartPanel({ product }: { product: Product }) {
  const { addItem } = useCart();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product.id, quantity);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2000);
  }

  function handleBuyNow() {
    addItem(product.id, quantity);
    router.push("/cart");
  }

  return (
    <div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-ink-soft">Quantity</span>
        <div className="flex items-center border border-black/15 rounded-md">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="p-2 text-ink-soft hover:text-brand transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={16} />
          </button>
          <span className="w-10 text-center text-sm">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
            className="p-2 text-ink-soft hover:text-brand transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={16} />
          </button>
        </div>
        <span className="text-xs text-ink-muted">{product.stock} available</span>
      </div>

      <div className="mt-5 flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={handleAdd}
          className="flex-1 border border-brand text-brand font-medium rounded-md py-3 hover:bg-brand-50 transition-colors focus-ring"
        >
          {added ? "Added to cart" : "Add to cart"}
        </button>
        <button
          type="button"
          onClick={handleBuyNow}
          className="flex-1 bg-brand text-white font-medium rounded-md py-3 hover:bg-brand-600 transition-colors focus-ring"
        >
          Buy now
        </button>
      </div>
    </div>
  );
}
