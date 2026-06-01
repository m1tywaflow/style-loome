import { MoveUpRight } from "lucide-react";
export default function About() {
  const features = [
    {
      title: "Curated Collections",
      description:
        "Every piece in our collection is thoughtfully chosen to reflect current trends while maintaining versatility and long-term wearability.",
    },
    {
      title: "Quality First",
      description:
        "We prioritize premium fabrics, attention to detail, and reliable craftsmanship to ensure every item meets our standards.",
    },
    {
      title: "Customer-Centered Experience",
      description:
        "From browsing to checkout, we are committed to providing a seamless and enjoyable shopping journey for every customer.",
    },
    {
      title: "Inclusive Fashion",
      description:
        "Style is for everyone. Our collections are designed to celebrate diversity and accommodate different tastes, lifestyles, and personalities.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="space-y-32">
        <div className="max-w-4xl mx-auto text-center">
          <span className="uppercase tracking-[0.3em] text-sm text-[#808080]">
            About Style.Loom
          </span>
          <h1 className="text-5xl md:text-6xl font-serif mt-4 mb-8">
            Where Style Meets Individuality
          </h1>
          <p className="text-lg md:text-xl text-[#808080] leading-9">
            At Style.Loom, we believe clothing is more than just what you
            wear—it's a way to express who you are. Our mission is to help
            people feel confident, comfortable, and authentic through carefully
            selected fashion that blends modern trends with timeless elegance.
            Founded with a passion for style and quality, Style.Loom offers
            collections designed for everyday life, special occasions, and
            everything in between.
          </p>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-8">Our Vision</h2>

          <p className="text-lg text-[#808080] leading-9">
            We envision a world where fashion is accessible, inspiring, and
            empowering. Style.Loom strives to become a destination for
            individuals who appreciate quality, creativity, and personal style.
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-serif text-center mb-16">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((item) => (
              <div
                key={item.title}
                className="border border-[#AE9B84] rounded-3xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>

                <p className="text-[#808080] leading-8">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-black text-white rounded-[40px] p-12 md:p-20 text-center">
          <h2 className="text-4xl font-serif mb-6">
            Fashion That Tells Your Story
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-9">
            Style.Loom is more than a clothing store—it's a community of people
            who express themselves through fashion. We help you build a wardrobe
            that reflects your personality, confidence, and lifestyle.
          </p>
          <button className="flex gap-2 mx-auto  border bg-[#AE9B84] rounded-2xl p-2 mt-4 text-black font-mono cursor-pointer hover:bg-white duration-200 transition">
            To the shop
            <span>
              <MoveUpRight className="mt-1" width={16} height={16} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
