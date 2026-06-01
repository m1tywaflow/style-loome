import { Astroid } from "lucide-react";

export default function WhyUs() {
  const reasons = [
    {
      title: "Premium Quality",
      description:
        "Every item is carefully selected to ensure exceptional comfort, durability, and timeless style.",
    },
    {
      title: "Latest Trends",
      description:
        "We stay ahead of fashion trends, bringing you fresh collections inspired by global style movements.",
    },
    {
      title: "Affordable Luxury",
      description:
        "Luxury-inspired fashion without the luxury price tag. Look your best without overspending.",
    },
    {
      title: "Fast Delivery",
      description:
        "Quick and reliable shipping so you can enjoy your new favorite outfits sooner.",
    },
    {
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We provide support every step of your shopping journey.",
    },
    {
      title: "Unique Collections",
      description:
        "Discover exclusive pieces designed to help you stand out and express your individuality.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center max-w-5xl mx-auto mb-32">
        <span className="uppercase tracking-[0.35em] text-[#AE9B84] font-semibold">
          Why Choose Style.Loom
        </span>
        <h1 className="text-5xl md:text-7xl font-serif mt-6 mb-8">
          Fashion Designed
          <span className="block text-[#AE9B84]">Around You</span>
        </h1>
        <p className="text-lg md:text-xl text-[#808080] leading-9">
          At Style.Loom, we don't just sell clothes. We create experiences,
          inspire confidence, and help people express their unique identity
          through modern fashion. Every collection is built around quality,
          comfort, and individuality.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
        <div className="rounded-3xl p-8 text-center border border-[#C2B4A3]">
          <h3 className="text-4xl font-bold text-[#AE9B84]">10K+</h3>
          <p className="mt-2 text-[#808080]">Happy Customers</p>
        </div>
        <div className=" rounded-3xl p-8 text-center border border-[#C2B4A3]">
          <h3 className="text-4xl font-bold text-[#AE9B84]">500+</h3>
          <p className="mt-2 text-[#808080]">Fashion Products</p>
        </div>
        <div className=" rounded-3xl p-8 text-center border border-[#C2B4A3]">
          <h3 className="text-4xl font-bold text-[#AE9B84]">24/7</h3>
          <p className="mt-2 text-[#808080]">Customer Support</p>
        </div>
        <div className=" rounded-3xl p-8 text-center border border-[#C2B4A3]">
          <h3 className="text-4xl font-bold text-[#AE9B84]">99%</h3>
          <p className="mt-2 text-[#808080]">Positive Reviews</p>
        </div>
      </div>
      <div className="mb-32">
        <h2 className="text-4xl font-serif text-center mb-16">
          What Makes Us Different
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group bg-[#AE9B84] border border-amber-100 rounded-3xl p-8 hover:bg-amber-50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center text-2xl mb-6">
                <span>
                  <Astroid className="text-black" />
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">
                {reason.title}
              </h3>
              <p className="text-black leading-8">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden bg-gradient-to-r from-[#AE9B84] via-yellow-100 to-[#AE9B84] rounded-[40px] p-16 text-center">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="relative z-10">
          <h2 className="text-5xl font-serif text-black mb-6">
            More Than Fashion
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-black/80 leading-9">
            We believe style should empower, inspire, and tell your story.
            That's why every piece at Style.Loom is selected with purpose —
            helping you look confident and feel exceptional every day.
          </p>
        </div>
      </div>
    </section>
  );
}
