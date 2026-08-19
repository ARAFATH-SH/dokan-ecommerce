import Link from "next/link";
import { categories } from "@/lib/data/categories";
import { cx } from "@/lib/utils";

export default function CategorySidebar({ activeSlug }: { activeSlug?: string }) {
  return (
    <aside className="w-full sm:w-56 shrink-0">
      <h2 className="text-sm font-semibold text-ink mb-3">Categories</h2>
      <ul className="space-y-1">
        <li>
          <Link
            href="/products"
            className={cx(
              "block rounded-md px-3 py-2 text-sm transition-colors",
              !activeSlug
                ? "bg-brand-50 text-brand font-medium"
                : "text-ink-soft hover:bg-neutral-50"
            )}
          >
            All products
          </Link>
        </li>
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              href={`/category/${category.slug}`}
              className={cx(
                "block rounded-md px-3 py-2 text-sm transition-colors",
                activeSlug === category.slug
                  ? "bg-brand-50 text-brand font-medium"
                  : "text-ink-soft hover:bg-neutral-50"
              )}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
