import Image from "next/image";
import abstract from "public/abstract/abstractDevBanner.png";
import { ArrowUpRight } from "lucide-react";

export default function YellowBanner() {
  return (
    <section className="w-[1600px] mx-auto pb-20 ">
      <div className="bg-[#C2B4A3] rounded-2xl  flex items-center justify-between overflow-hidden">
        <div className="max-w-5xl p-10">
          <h2 className="text-4xl font-semibold uppercase tracking-wide text-black">
            Elevate your wardrobe
          </h2>
          <p className="text-sm font-sans text-[#2b2b2b] mt-4 leading-relaxed">
            Don't miss out – experience the epitome of fashion by clicking 'Buy
            Now' and embrace a world of chic elegance delivered to your
            doorstep. Your style journey begins here.
          </p>
        </div>
        <div className="flex items-center gap-6 relative">
          <button className="bg-black border-2 font-bold border-black cursor-pointer hover:bg-white hover:text-black transition duration-200 text-white px-5 py-2.5 rounded-lg text-sm flex items-center gap-2 z-10">
            Shop Now{" "}
            <span>
              <ArrowUpRight />
            </span>
          </button>
          <div className="relative w-65 h-45">
            <Image
              src={abstract}
              alt="abstract"
              fill
              className="object-contain opacity-40"
              sizes="260px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
