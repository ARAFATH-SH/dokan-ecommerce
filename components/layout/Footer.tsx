import Link from "next/link";
import { categories } from "@/lib/data/categories";

export default function Footer() {
  return (
    <footer className="bg-ink text-white mt-16">
      <div className="max-w-content mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2 md:col-span-1">
          <span className="text-xl font-extrabold text-brand">Dokan</span>
          <p className="mt-3 text-sm text-white/60 leading-relaxed">
            A simple place to find electronics, fashion, home goods and more, with fair
            prices and fast delivery across Bangladesh.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Shop</h3>
          <ul className="space-y-2 text-sm text-white/60">
            {categories.slice(0, 5).map((category) => (
              <li key={category.id}>
                <Link href={`/category/${category.slug}`} className="hover:text-white transition-colors">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Customer service</h3>
          <ul className="space-y-2 text-sm text-white/60">
            <li><Link href="#" className="hover:text-white transition-colors">Help center</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Returns and refunds</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Shipping information</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Track your order</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Contact us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-white/60">
            <li><Link href="#" className="hover:text-white transition-colors">About Dokan</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Sell on Dokan</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Privacy policy</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Terms of service</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Stay in touch</h3>
          <p className="text-sm text-white/60 mb-3">
            Get updates on new arrivals and special offers.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              aria-label="Email address"
              className="min-w-0 flex-1 rounded-l-md px-3 py-2 text-sm text-ink outline-none"
            />
            <button
              type="submit"
              className="rounded-r-md bg-brand px-3 text-sm font-medium hover:bg-brand-600 transition-colors"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-content mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Dokan. All rights reserved.</p>
          <p>Cash on delivery, cards and mobile banking accepted</p>
        </div>
      </div>
    </footer>
  );
}
