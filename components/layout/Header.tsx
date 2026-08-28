"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Search, Heart, ShoppingCart, User, Store, Smile, Package, Star, XCircle, LogOut } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import LoginModal from "@/components/auth/LoginModal";
import RegisterModal from "@/components/auth/RegisterModal";
import SellerLoginModal from "@/components/auth/SellerLoginModal";
import SellerRegisterModal from "@/components/auth/SellerRegisterModal";

export default function Header() {
  const router = useRouter();
  const { totalItems } = useCart();
  const { user, logout } = useAuth();
  const [query, setQuery] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isSellerLoginModalOpen, setIsSellerLoginModalOpen] = useState(false);
  const [isSellerRegisterModalOpen, setIsSellerRegisterModalOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const accountMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (accountMenuRef.current && !accountMenuRef.current.contains(event.target as Node)) {
        setIsAccountMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
              <div className="relative" ref={accountMenuRef}>
                <button
                  onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
                  className={`flex flex-col items-center text-xs transition-colors ${isAccountMenuOpen ? 'text-brand' : 'text-ink-soft hover:text-brand'}`}
                >
                  <User size={20} strokeWidth={1.75} />
                  <span className="mt-0.5 truncate max-w-[70px]">{user.displayName ? user.displayName.split(" ")[0] : "Account"}</span>
                </button>

                {isAccountMenuOpen && (
                  <div className="absolute top-full right-0 mt-3 w-64 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] rounded-sm z-50 border border-gray-100">
                    <div className="absolute -top-[5px] right-4 w-2.5 h-2.5 bg-white rotate-45 border-l border-t border-gray-100"></div>
                    <div className="relative bg-white flex flex-col py-2 z-10 rounded-sm">
                      <Link 
                        href="/account" 
                        onClick={() => setIsAccountMenuOpen(false)}
                        className="flex items-center gap-3 px-5 py-2.5 hover:bg-gray-50 hover:text-brand text-gray-600 text-[13px] transition-colors"
                      >
                        <Smile size={18} className="text-gray-400 stroke-[1.5]" />
                        Manage My Account
                      </Link>
                      <Link 
                        href="/account" 
                        onClick={() => setIsAccountMenuOpen(false)}
                        className="flex items-center gap-3 px-5 py-2.5 hover:bg-gray-50 hover:text-brand text-gray-600 text-[13px] transition-colors"
                      >
                        <Package size={18} className="text-gray-400 stroke-[1.5]" />
                        My Orders
                      </Link>
                      <Link 
                        href="/account" 
                        onClick={() => setIsAccountMenuOpen(false)}
                        className="flex items-center gap-3 px-5 py-2.5 hover:bg-gray-50 hover:text-brand text-gray-600 text-[13px] transition-colors"
                      >
                        <Heart size={18} className="text-gray-400 stroke-[1.5]" />
                        My Wishlist & Followed Stores
                      </Link>
                      <Link 
                        href="/account" 
                        onClick={() => setIsAccountMenuOpen(false)}
                        className="flex items-center gap-3 px-5 py-2.5 hover:bg-gray-50 hover:text-brand text-gray-600 text-[13px] transition-colors"
                      >
                        <Star size={18} className="text-gray-400 stroke-[1.5]" />
                        My Reviews
                      </Link>
                      <Link 
                        href="/account" 
                        onClick={() => setIsAccountMenuOpen(false)}
                        className="flex items-center gap-3 px-5 py-2.5 hover:bg-gray-50 hover:text-brand text-gray-600 text-[13px] transition-colors"
                      >
                        <XCircle size={18} className="text-gray-400 stroke-[1.5]" />
                        My Returns & Cancellations
                      </Link>
                      <button 
                        onClick={async () => {
                          setIsAccountMenuOpen(false);
                          await logout();
                          router.push("/");
                        }}
                        className="flex items-center gap-3 px-5 py-2.5 hover:bg-gray-50 hover:text-brand text-gray-600 text-[13px] w-full text-left transition-colors"
                      >
                        <LogOut size={18} className="text-gray-400 stroke-[1.5]" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
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
