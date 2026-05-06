import FirstBanner from "@/src/components/molecules/Banners/FirstBanner";

const info = [
  {
    step: "Step 01",
    title: "Discover Trends",
    text: "Explore our curated collection of over 1000 styles, spanning global fashion trends.",
  },
  {
    step: "Step 02",
    title: "Effortless Navigation",
    text: "Intuitive filters and categories help you find the perfect pieces tailored to your style.",
  },
  {
    step: "Step 03",
    title: "Secure Checkout",
    text: "Multiple payment options and encrypted transactions ensure a safe and hassle-free purchase.",
  },
  {
    step: "Step 04",
    title: "Unbox Happiness",
    text: "Unbox a fashion-forward experience delivered right to your door, ready to elevate your style.",
  },
];

export default function NavigatingSec() {
  return (
    <section className="w-[1600px] mx-auto py-10 ">
      <FirstBanner />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        {info.map((item) => (
          <div
            key={item.step}
            className="p-6 border border-dashed border-[#1C1C1C]"
          >
            <span className="text-sm text-[#676665] uppercase tracking-wide">
              {item.step}
            </span>
            <h3 className="mt-4 text-white text-xl font-semibold">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#676665]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
