"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const HERO_SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1600&q=80",
    subheading: "Season sale is live",
    heading: "Everything you need, at a price you will like",
    description: "Browse electronics, fashion, home goods and more from sellers across the country.",
    buttonText: "Start shopping",
    buttonLink: "/products",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80",
    subheading: "New Arrivals",
    heading: "Step into the new season with style",
    description: "Discover the latest trends in fashion and accessories for men and women.",
    buttonText: "Shop fashion",
    buttonLink: "/category/fashion",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1600&q=80",
    subheading: "Tech Week",
    heading: "Upgrade your gear with amazing discounts",
    description: "Get up to 40% off on top-brand smartphones, laptops, and smart home devices.",
    buttonText: "Explore tech",
    buttonLink: "/category/electronics",
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-content mx-auto px-4 pt-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 relative rounded-xl overflow-hidden bg-ink min-h-[260px] sm:min-h-[340px]">
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 h-full w-full"
            >
              <Image
                src={HERO_SLIDES[currentIndex].image}
                alt={HERO_SLIDES[currentIndex].heading}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover opacity-70"
              />
              <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-10 py-10 sm:py-0">
                <p className="text-brand-300 font-medium text-sm mb-2">
                  {HERO_SLIDES[currentIndex].subheading}
                </p>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white max-w-md leading-tight">
                  {HERO_SLIDES[currentIndex].heading}
                </h1>
                <p className="text-white/80 mt-3 max-w-sm text-sm sm:text-base">
                  {HERO_SLIDES[currentIndex].description}
                </p>
                <Link
                  href={HERO_SLIDES[currentIndex].buttonLink}
                  className="mt-6 inline-flex w-fit items-center bg-brand text-white font-medium px-6 py-3 rounded-md hover:bg-brand-600 transition-colors"
                >
                  {HERO_SLIDES[currentIndex].buttonText}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-20">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-brand w-6" : "bg-white/50 w-2 hover:bg-white"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-rows-2 gap-4">
          <div className="relative rounded-xl overflow-hidden bg-neutral-100 min-h-[120px]">
            <Image
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
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
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80"
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
