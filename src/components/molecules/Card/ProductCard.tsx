import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

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
        <div className="absolute bottom-3 font-mono left-3 right-3 flex justify-between items-center">
          <span className="text-xs  px-3 py-1 bg-[#1F1F1F]/90 rounded-full backdrop-blur">
            {product.category}
          </span>
          <Link
            href={`/items/${product.id}`}
            className="flex items-center gap-1 text-xs px-3 py-1 rounded-full border border-[#AE9B84] bg-[#1F1F1F]/90 hover:bg-white hover:text-black duration-200 cursor-pointer transition"
          >
            Shop Now
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-mono tracking-wide">{product.title}</h3>
        <p className="text-sm font-mono text-[#676665] mt-2">
          Fit · {product.fit}
          <span className="mx-2 font-mono text-white">
            Price · ${product.price}
          </span>
        </p>
      </div>
    </div>
  );
}
