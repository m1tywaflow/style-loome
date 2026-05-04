export default function TextSection() {
  const categories = ["All", "Mens", "Womens", "Kids"];

  return (
    <section className=" text-white w-full flex  justify-center px-6 py-12">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 border border-dashed border-[#1C1C1C]">
        <div className="p-10 border-b lg:border-b-0 lg:border-r border-dashed border-[#1C1C1C]">
          <div className="flex gap-3 mb-10 flex-wrap">
            {categories.map((item) => (
              <button
                key={item}
                className="px-5 py-2 text-sm text-[#B3B3B2] border border-dashed border-[#1C1C1C] rounded-xl cursor-pointer hover:text-white transition"
              >
                {item}
              </button>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold uppercase leading-tight max-w-xl mb-8">
            Elevate Your Style With StyleLoom
          </h1>
          <p className="text-[#676665] text-base leading-7 max-w-2xl">
            Explore a world of fashion at StyleLoom, where trends meet
            affordability. Immerse yourself in the latest styles and seize
            exclusive promotions.
          </p>
        </div>
        <div className="grid grid-cols-2">
          {[
            ["1,500 +", "Fashion Products"],
            ["50 +", "New arrivals every month."],
            ["30%", "OFF on select items."],
            ["95%", "Customer Satisfaction Rate"],
          ].map(([title, desc], index) => (
            <div
              key={index}
              className="p-10 border border-dashed border-[#1C1C1C] flex flex-col justify-center min-h-[180px]"
            >
              <h2 className="text-4xl font-semibold mb-3">{title}</h2>
              <p className="text-[#676665] text-base">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
