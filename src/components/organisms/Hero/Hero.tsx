import heroImg from "@/public/Hero/hero.png";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import TextSection from "./TextSection/TextSection";

export default function Hero() {
  return (
    <section className="flex flex-col items-center pt-10">
      <div className="relative inline-block">
        <Image
          src={heroImg}
          loading="eager"
          alt="heroImg"
          className="rounded-t-2xl"
        />
        <div className="absolute left-1/2 bottom-4 translate-y-1/2 -translate-x-1/2">
          <button className="font-sans text-2xl flex items-center bg-[#1F1F1F] gap-2 border-2 border-black border-l-[#AE9B84] border-r-[#AE9B84] hover:bg-white hover:text-black cursor-pointer duration-200 transition rounded-2xl px-6 py-3">
            Shop Now
            <ArrowUpRight />
          </button>
        </div>
      </div>
      <div className="w-full mt-16">
        <TextSection />
      </div>
    </section>
  );
}
