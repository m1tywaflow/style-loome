import Image from "next/image";
import abstractSun from "@/public/abstract/abstractSun.png";

export default function FirstBanner() {
  return (
    <section className="w-[1600px] mx-auto">
      <div className="relative overflow-hidden border border-dashed border-[#1C1C1C] min-h-42.5 flex items-center py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full pl-6 md:pl-12">
          <div className="max-w-6xl md:py-0 z-10">
            <h1 className="text-white uppercase text-2xl sm:text-3xl md:text-[48px] font-semibold leading-tight tracking-[-0.03em]">
              Navigating the <span className="font-bold">StyleLoom</span>{" "}
              Fashion Journey.
            </h1>
            <p className="mt-4 text-[#676665] text-sm md:text-base leading-relaxed max-w-2xl">
              At StyleLoom, we've designed a straightforward shopping experience
              to make fashion accessible.
            </p>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-full flex items-center">
            <Image
              src={abstractSun}
              alt="Abstract sun"
              priority
              className="h-full w-auto object-contain max-h-70"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
