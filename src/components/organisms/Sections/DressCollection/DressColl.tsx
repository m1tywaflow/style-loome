import abstractStar from "public/abstract/abstractStar.png";
import Image from "next/image";
import { shop } from "@/src/data/shopItems";
import { DressCard } from "@/src/components/molecules/Card/DressCard";

export default function DressColl() {
  return (
    <>
      <section className="w-[1600px] mx-auto font-mono p-20">
        <div className="relative overflow-hidden border border-dashed border-[#1C1C1C] min-h-42.5 flex items-center py-10 rounded-t-2xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full pl-6 md:pl-12">
            <div className="max-w-6xl md:py-0 z-10">
              <h1 className="text-white uppercase text-2xl sm:text-3xl md:text-[44px] font-semibold leading-tight tracking-[-0.03em]">
                Explore the Latest Trends and Timeless Classics
              </h1>
              <p className="mt-4 text-[#676665] text-sm  leading-relaxed max-w-2xl">
                Dive into the world of fashion excellence at StyleLoom. Our
                curated selection brings together the latest trends and timeless
                classics
              </p>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-full flex items-center">
              <Image
                src={abstractStar}
                alt="Abstract sun"
                priority
                className="h-full w-auto object-contain max-h-70"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {shop.map((item) => (
            <DressCard key={item.id} shop={item} />
          ))}
        </div>
      </section>
    </>
  );
}
