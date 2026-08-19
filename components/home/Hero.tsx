import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-content mx-auto px-4 pt-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 relative rounded-xl overflow-hidden bg-ink min-h-[260px] sm:min-h-[340px]">
          <Image
            src="https://loremflickr.com/1600/900/shopping,retail?lock=900"
            alt="Shopping bags from a seasonal sale"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover opacity-70"
          />
          <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-10 py-10 sm:py-0">
            <p className="text-brand-300 font-medium text-sm mb-2">Season sale is live</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white max-w-md leading-tight">
              Everything you need, at a price you will like
            </h1>
            <p className="text-white/80 mt-3 max-w-sm text-sm sm:text-base">
              Browse electronics, fashion, home goods and more from sellers across the
              country.
            </p>
            <Link
              href="/products"
              className="mt-6 inline-flex w-fit items-center bg-brand text-white font-medium px-6 py-3 rounded-md hover:bg-brand-600 transition-colors"
            >
              Start shopping
            </Link>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-4">
          <div className="relative rounded-xl overflow-hidden bg-neutral-100 min-h-[120px]">
            <Image
              src="https://loremflickr.com/800/500/electronics,headphones?lock=901"
              alt="Featured electronics deals"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-5">
              <p className="text-white font-semibold">Electronics deals</p>
              <Link href="/category/electronics" className="text-brand-300 text-sm mt-1 hover:underline">
                Shop now
              </Link>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden bg-neutral-100 min-h-[120px]">
            <Image
              src="https://loremflickr.com/800/500/fashion,clothing?lock=902"
              alt="Featured fashion arrivals"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-5">
              <p className="text-white font-semibold">New fashion arrivals</p>
              <Link href="/category/fashion" className="text-brand-300 text-sm mt-1 hover:underline">
                Shop now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
