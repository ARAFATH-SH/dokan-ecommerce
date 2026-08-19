"use client";

import Image from "next/image";
import { useState } from "react";
import { cx } from "@/lib/utils";

export default function ProductGallery({
  images,
  title
}: {
  images: string[];
  title: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-square rounded-lg overflow-hidden bg-neutral-100">
        <Image
          src={images[active]}
          alt={title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover"
        />
      </div>
      <div className="mt-3 flex gap-2">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Show image ${index + 1}`}
            className={cx(
              "relative w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden bg-neutral-100 ring-2 transition-colors",
              active === index ? "ring-brand" : "ring-transparent hover:ring-black/10"
            )}
          >
            <Image src={image} alt="" fill sizes="80px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
