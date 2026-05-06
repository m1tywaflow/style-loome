"use client";

import { comments } from "@/src/data/comments";
import { FaTwitter } from "react-icons/fa";
import { Star } from "lucide-react";
import Image from "next/image";
import abstract from "public/abstract/abstractComments.png";

export default function CommentsCard() {
  return (
    <section className="max-w-[1600px] mx-auto py-20">
      <div className="border border-dashed border-[#1C1C1C] flex justify-between rounded-t-2xl">
        <div className="p-20">
          <h1 className="text-5xl font-sans uppercase">
            The StyleLoom Testimonial Collection.
          </h1>
          <p className="text-sm pt-4 text-[#676665]">
            At StyleLoom, our customers are the heartbeat of our brand.
          </p>
        </div>
        <Image
          src={abstract}
          alt="abstractImg"
          width={240}
          height={240}
          sizes="240px"
        />
      </div>
      <div className="border border-dashed border-[#1C1C1C] rounded-b-2xl">
        <div className="grid grid-cols-3 divide-x divide-y divide-dashed divide-[#1C1C1C]">
          {comments.map((item) => (
            <div key={item.id} className="p-10 ">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-white font-semibold">{item.name}</h3>
                    <p className="text-[#676665] text-sm">{item.location}</p>
                  </div>
                </div>
                <FaTwitter className="text-[#C2B4A3] text-4xl" />
              </div>
              <div className="flex gap-1 mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-[#81807E] mt-6 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
