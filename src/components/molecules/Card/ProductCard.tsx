import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function ProductCard({ product }) {
  return (
    <div className="border border-dashed border-[#1C1C1C] p-4">
      <div className="relative">
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={400}
          className="rounded-xl w-full object-cover"
        />
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
          <span className="text-xs px-3 py-1 bg-[#1F1F1F]/90 rounded-full backdrop-blur">
            {product.category}
          </span>
          <button className="flex items-center gap-1 text-xs px-3 py-1 rounded-full border border-[#AE9B84] bg-[#1F1F1F]/90 backdrop-blur hover:bg-white hover:text-black transition">
            Shop Now
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium tracking-wide">{product.title}</h3>
        <p className="text-sm text-[#676665] mt-2">
          Fit · {product.fit}
          <span className="mx-2">Price · ${product.price}</span>
        </p>
      </div>
    </div>
  );
}
