import Image from "next/image";
import abstractSunshine from "public/abstract/abstractSunshine.png";
import emailIcon from "public/social/emailIcon.png";
import phoneIcon from "public/social/phoneIcon.png";
import locationIcon from "public/social/locationIcon.png";

export default function ContactBanner() {
  const contacts = [
    {
      icon: emailIcon,
      title: "Email",
      value: "support@StyleLoom.com",
    },
    {
      icon: phoneIcon,
      title: "Phone",
      value: "+1 (555) 123-4567",
    },
    {
      icon: locationIcon,
      title: "Location",
      value: "Get Direction",
    },
  ];

  return (
    <section className="w-[1600px] mx-auto font-mono p-4 pt-30">
      <div className="relative overflow-hidden border border-dashed border-[#1C1C1C] min-h-[170px] flex items-center py-10 rounded-t-2xl">
        <div className="flex justify-between items-center w-full px-12 z-10">
          <div className="max-w-5xl">
            <h1 className="text-white uppercase text-[48px] font-semibold leading-tight tracking-[-0.03em]">
              Your Partner in Every Step of Your Fashion Journey.
            </h1>
            <p className="mt-4 text-[#676665] text-base leading-relaxed max-w-2xl">
              24/7 Assistance for Seamless Shopping and Unmatched Customer
              Satisfaction.
            </p>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-full flex items-center">
            <Image
              src={abstractSunshine}
              alt="Abstract sun"
              priority
              className="h-full w-auto object-contain max-h-[280px]"
            />
          </div>
        </div>
      </div>
      <div className="border border-dashed border-[#1C1C1C] rounded-b-2xl overflow-hidden">
        <div className="border-b border-dashed border-[#1C1C1C] px-7 py-6">
          <h2 className="uppercase text-white text-[26px]">
            Contact Information
          </h2>
        </div>
        <div className="grid grid-cols-3">
          {contacts.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center py-16 px-8 ${
                index !== contacts.length - 1
                  ? "border-r border-dashed border-[#1C1C1C]"
                  : ""
              }`}
            >
              <Image src={item.icon} alt={item.title} width={70} height={70} />
              <h3 className="text-white text-xl mt-7">{item.title}</h3>
              <div className="mt-6 w-full max-w-[260px] h-[54px] rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center">
                <p className="text-[#D8D0C4] text-sm">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
