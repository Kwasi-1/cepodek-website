"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight } from "lucide-react";
// import product1 from "@/assets/images/products-1.jpg";
// import product2 from "@/assets/images/products-2.jpg";
import product3 from "@/assets/images/product-3.jpg";

const products = [
  {
    title: "Ubuntu Fixed Deposit Investment",
    icon: product3,
    href: "#",
  },
  {
    title: "Ubuntu Future Investment Plan",
    icon: product3,
    href: "#",
  },
  {
    title: "Salaried Loans",
    icon: product3,
    href: "https://digital.foundry-platform.com/ubuntu-capital",
  },
  {
    title: "FastSME Loans",
    icon: product3,
    href: "https://digital.foundry-platform.com/ubuntu-capital",
  },
  {
    title: "Business Loans",
    icon: product3,
    href: "https://digital.foundry-platform.com/ubuntu-capital",
  },
];

export default function ProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    align: "start",
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return undefined;
    }

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative mx-auto">
      <div
        className="overflow-hidden px-6 sm:px-12 xl:px-[calc((100vw-1280px)/2)]"
        ref={emblaRef}
      >
        <div className="flex gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="embla__slide relative group cursor-pointer min-w-[260px] sm:min-w-[320px] max-w-[320px] shrink-0 rounded-xl overflow-hidden bg-gray-100 shadow-md h-full"
              onClick={() =>
                product.href && window.open(product.href, "_blank")
              }
            >
              <img
                src={product.icon}
                alt={product.title}
                className="w-full h-full object-contain "
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold text-center px-4">
                  {product.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end mt-6 px-6 gap-4">
        <button
          type="button"
          title="Scroll to previous"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className={`bg-white shadow rounded-full p-2 transition ${
            canScrollPrev
              ? "hover:bg-gray-100"
              : "opacity-50 cursor-not-allowed"
          }`}
        >
          <ChevronRight className="rotate-180 w-6 h-6 text-gray-800" />
        </button>
        <button
          type="button"
          title="Scroll to next"
          onClick={scrollNext}
          disabled={!canScrollNext}
          className={`bg-white shadow rounded-full p-2 transition ${
            canScrollNext
              ? "hover:bg-gray-100"
              : "opacity-50 cursor-not-allowed"
          }`}
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>
    </div>
  );
}
