import Link from "next/link";
import { categories } from "@/lib/data/categories";

export default function CategoryNav() {
  return (
    <div className="hidden sm:block bg-white border-b border-black/5">
      <nav className="max-w-content mx-auto px-4">
        <ul className="flex items-center gap-6 overflow-x-auto py-2.5 text-sm">
          {categories.map((category) => (
            <li key={category.id} className="shrink-0">
              <Link
                href={`/category/${category.slug}`}
                className="text-ink-soft hover:text-brand transition-colors"
              >
                {category.name}
              </Link>
            </li>
          ))}
          <li className="shrink-0">
            <Link
              href="/products"
              className="text-brand font-medium hover:text-brand-600 transition-colors"
            >
              All deals
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
