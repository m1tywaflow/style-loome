"use client";

import { useState } from "react";
import Image from "next/image";
import abstractStar from "@/public/abstract/abstractStar.png";
import { products } from "@/src/data/products";
import { ProductCard } from "@/src/components/molecules/Card/ProductCard";

export default function Elevate() {
  const categories = ["All", "Mens", "Womens", "Kids"];
  const [active, setActive] = useState("Womens");

  return (
    <>
      <section className="w-[1600px] mx-auto pb-10 font-mono">
        <div className="relative overflow-hidden border border-dashed border-[#1C1C1C] min-h-42.5 flex items-center py-10 rounded-t-2xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full pl-6 md:pl-12">
            <div className="max-w-7xl md:py-0 z-10">
              <h1 className="text-white uppercase text-2xl sm:text-3xl md:text-[48px] font-semibold leading-tight tracking-[-0.03em]">
                Elevate Your Style with Our Latest Collection
              </h1>
              <p className="mt-4 text-[#676665] text-sm md:text-base leading-relaxed max-w-2xl">
                Each piece is crafted to enhance your fashion statement.
              </p>
              <div className="pt-5 flex gap-4">
                {categories.map((item) => (
                  <button
                    key={item}
                    onClick={() => setActive(item)}
                    className={`
            px-5 py-2 text-sm rounded-xl border transition
            ${
              active === item
                ? "bg-[#C2B4A3] text-black "
                : "text-[#B3B3B2] border-dashed border-[#1C1C1C] hover:text-white"
            }
          `}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-full flex items-center">
              <Image
                src={abstractStar}
                alt="Abstract-Star"
                priority
                className="h-full w-auto object-contain max-h-70"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </>
  );
}
