import eligibilityIcon from "public/social/eligibilityIcon.png";
import processIcon from "public/social/processIcon.png";
import refundIcon from "public/social/refundIcon.png";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";

const info = [
  {
    id: 1,
    img: eligibilityIcon,
    title: "Eligibility",
    description:
      "Items must be unused, with tags attached, and returned within 30 days of delivery.",
  },
  {
    id: 2,
    img: processIcon,
    title: "Process",
    description:
      "Initiate returns through our Return Center for a smooth and efficient process.",
  },
  {
    id: 3,
    img: refundIcon,
    title: "Refund",
    description:
      "Expect a refund to your original payment method within 7-10 business days.",
  },
];

export default function ReturnPolicy() {
  return (
    <>
      <section className="w-[1570px] mx-auto border border-dashed border-[#262626] rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between px-8 py-8">
          <h2 className="text-white text-3xl font-medium uppercase">
            Return Policy
          </h2>
          <button className="px-6 py-3 border border-[#333] rounded-xl text-white flex items-center gap-2 hover:bg-[#111] transition">
            Read Return Policy
            <span>
              <MoveUpRight width={16} height={16} />
            </span>
          </button>
        </div>
        <div className="grid grid-cols-3 border-t border-dashed border-[#262626]">
          {info.map((item, index) => (
            <div
              key={item.id}
              className={`min-h-[220px] p-10
          ${
            index !== info.length - 1
              ? "border-r border-dashed border-[#262626]"
              : ""
          }
        `}
            >
              <div className="flex gap-6">
                <div className="w-20 h-20 rounded-full border border-[#262626] flex items-center justify-center shrink-0">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={67}
                    height={67}
                  />
                </div>
                <div>
                  <h3 className="text-white text-2xl font-medium mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#81807E] leading-7 max-w-[320px]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
