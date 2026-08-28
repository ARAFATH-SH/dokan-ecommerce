"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CartItemRow from "@/components/cart/CartItemRow";
import { useCart } from "@/context/CartContext";
import { products } from "@/lib/data/products";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const router = useRouter();
  const { lines, totalPrice, totalItems, clearCart } = useCart();

  const resolvedLines = lines
    .map((line) => ({
      product: products.find((p) => p.id === line.productId),
      quantity: line.quantity
    }))
    .filter((line) => Boolean(line.product));

  const shipping = totalPrice > 1500 || totalPrice === 0 ? 0 : 60;
  const grandTotal = totalPrice + shipping;

  if (resolvedLines.length === 0) {
    return (
      <div className="max-w-content mx-auto px-4 py-16 text-center">
        <ShoppingBag size={40} className="mx-auto text-ink-muted" strokeWidth={1.5} />
        <h1 className="text-xl font-bold text-ink mt-4">Your cart is empty</h1>
        <p className="text-sm text-ink-muted mt-2">
          Items you add to your cart will appear here.
        </p>
        <Link
          href="/products"
          className="inline-flex mt-6 bg-brand text-white font-medium px-6 py-3 rounded-md hover:bg-brand-600 transition-colors"
        >
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-content mx-auto px-4 py-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cart" }]} />
      <div className="mt-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-ink">Your cart</h1>
        <button
          type="button"
          onClick={clearCart}
          className="text-sm text-ink-muted hover:text-brand transition-colors"
        >
          Clear cart
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          {resolvedLines.map((line) => (
            <CartItemRow key={line.product!.id} product={line.product!} quantity={line.quantity} />
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="rounded-lg border border-black/10 p-5 sticky top-6">
            <h2 className="text-sm font-semibold text-ink mb-4">Order summary</h2>
            <div className="flex items-center justify-between text-sm text-ink-soft mb-2">
              <span>Subtotal ({totalItems} items)</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-ink-soft mb-2">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
            </div>
            <div className="border-t border-black/10 mt-3 pt-3 flex items-center justify-between text-base font-semibold text-ink">
              <span>Total</span>
              <span>{formatPrice(grandTotal)}</span>
            </div>
            <button
              type="button"
              onClick={() => router.push("/checkout")}
              className="mt-5 w-full bg-brand text-white font-medium rounded-md py-3 hover:bg-brand-600 transition-colors uppercase tracking-wider text-sm"
            >
              Proceed to checkout
            </button>
            <p className="text-xs text-ink-muted mt-3 text-center">
              Checkout will be available once payment is connected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
