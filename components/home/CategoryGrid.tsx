import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/data/categories";

export default function CategoryGrid() {
  return (
    <section className="max-w-content mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-ink">Shop by category</h2>
        <Link href="/products" className="text-sm text-brand hover:text-brand-600 transition-colors">
          View all
        </Link>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className="group flex flex-col items-center text-center"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-neutral-100 ring-1 ring-black/5 group-hover:ring-brand transition-all">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <span className="mt-2 text-xs sm:text-sm text-ink-soft group-hover:text-brand transition-colors">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
