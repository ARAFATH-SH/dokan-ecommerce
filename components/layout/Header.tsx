"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search, Heart, ShoppingCart, User, Store } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import LoginModal from "@/components/auth/LoginModal";
import RegisterModal from "@/components/auth/RegisterModal";
import SellerLoginModal from "@/components/auth/SellerLoginModal";
import SellerRegisterModal from "@/components/auth/SellerRegisterModal";

export default function Header() {
  const router = useRouter();
  const { totalItems } = useCart();
  const { user } = useAuth();
  const [query, setQuery] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isSellerLoginModalOpen, setIsSellerLoginModalOpen] = useState(false);
  const [isSellerRegisterModalOpen, setIsSellerRegisterModalOpen] = useState(false);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    router.push(trimmed ? `/search?q=${encodeURIComponent(trimmed)}` : "/search");
  }

  return (
    <>
      <header className="bg-white border-b border-black/5">
        <div className="max-w-content mx-auto px-4 py-3 flex items-center gap-4 sm:gap-8">
          <Link href="/" className="shrink-0 flex items-baseline gap-1">
            <span className="text-2xl font-extrabold text-brand tracking-tight">Dokan</span>
          </Link>

          <form onSubmit={handleSearch} className="flex-1 flex">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for products, brands and categories"
              aria-label="Search products"
              className="w-full rounded-l-md border border-r-0 border-black/15 px-4 py-2.5 text-sm focus-ring outline-none placeholder:text-ink-muted"
            />
            <button
              type="submit"
              className="rounded-r-md bg-brand px-4 sm:px-6 flex items-center justify-center text-white hover:bg-brand-600 transition-colors"
              aria-label="Search"
            >
              <Search size={18} strokeWidth={2} />
            </button>
          </form>

          <nav className="hidden md:flex items-center gap-6 shrink-0">
            <button
              type="button"
              onClick={() => setIsSellerLoginModalOpen(true)}
              className="flex flex-col items-center text-xs text-ink-soft hover:text-brand transition-colors"
            >
              <Store size={20} strokeWidth={1.75} />
              <span className="mt-0.5">Seller</span>
            </button>
            {user ? (
              <Link
                href="/account"
                className="flex flex-col items-center text-xs text-ink-soft hover:text-brand transition-colors"
              >
                <User size={20} strokeWidth={1.75} />
                <span className="mt-0.5">My Account</span>
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => setIsLoginModalOpen(true)}
                className="flex flex-col items-center text-xs text-ink-soft hover:text-brand transition-colors"
              >
                <User size={20} strokeWidth={1.75} />
                <span className="mt-0.5">Login</span>
              </button>
            )}
            <Link
              href="#"
              className="flex flex-col items-center text-xs text-ink-soft hover:text-brand transition-colors"
            >
              <Heart size={20} strokeWidth={1.75} />
              <span className="mt-0.5">Wishlist</span>
            </Link>
            <Link
              href="/cart"
              className="relative flex flex-col items-center text-xs text-ink-soft hover:text-brand transition-colors"
            >
              <span className="relative">
                <ShoppingCart size={20} strokeWidth={1.75} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-brand text-white text-[10px] leading-none rounded-full h-4 w-4 flex items-center justify-center">
                    {totalItems > 9 ? "9+" : totalItems}
                  </span>
                )}
              </span>
              <span className="mt-0.5">Cart</span>
            </Link>
          </nav>

          <Link href="/cart" className="md:hidden relative shrink-0" aria-label="Cart">
            <ShoppingCart size={22} strokeWidth={1.75} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand text-white text-[10px] leading-none rounded-full h-4 w-4 flex items-center justify-center">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </Link>
        </div>
      </header>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        onSwitchToRegister={() => {
          setIsLoginModalOpen(false);
          setIsRegisterModalOpen(true);
        }}
      />
      <RegisterModal 
        isOpen={isRegisterModalOpen} 
        onClose={() => setIsRegisterModalOpen(false)} 
        onSwitchToLogin={() => {
          setIsRegisterModalOpen(false);
          setIsLoginModalOpen(true);
        }}
      />
      <SellerLoginModal 
        isOpen={isSellerLoginModalOpen} 
        onClose={() => setIsSellerLoginModalOpen(false)} 
        onSwitchToRegister={() => {
          setIsSellerLoginModalOpen(false);
          setIsSellerRegisterModalOpen(true);
        }}
      />
      <SellerRegisterModal 
        isOpen={isSellerRegisterModalOpen} 
        onClose={() => setIsSellerRegisterModalOpen(false)} 
        onSwitchToLogin={() => {
          setIsSellerRegisterModalOpen(false);
          setIsSellerLoginModalOpen(true);
        }}
      />
    </>
  );
}
