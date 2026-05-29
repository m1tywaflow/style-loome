import cancellationWindowIcon from "public/social/cancellationIcon.png";
import cancellationProcessIcon from "public/social/cancellationProcessIcon.png";
import refundTimelineIcon from "public/social/refundTimelineIcon.png";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";

const info = [
  {
    id: 1,
    img: cancellationWindowIcon,
    title: "Cancellation Window",
    description:
      "Orders can be canceled within 24 hours of placement for a full refund.",
  },
  {
    id: 2,
    img: cancellationProcessIcon,
    title: "Cancellation Process",
    description:
      "Visit our Order Management section to cancel your order effortlessly.",
  },
  {
    id: 3,
    img: refundTimelineIcon,
    title: "Refund Timeline",
    description:
      "Refunds for canceled orders are processed within 5-7 business days.",
  },
];

export default function Cancellation() {
  return (
    <>
      <section className="w-[1570px] mt-10 mx-auto border border-dashed border-[#262626] rounded-2xl overflow-hidden">
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
