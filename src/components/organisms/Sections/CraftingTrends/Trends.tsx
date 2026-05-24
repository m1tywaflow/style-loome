import Image from "next/image";

const trends = [
  {
    id: 1,
    image: "/trends/first.png",
    title: "Passionate Craftsmanship",
    info: "Every garment at StyleLoom is crafted with passion, reflecting our commitment to quality and innovation.",
  },
  {
    id: 2,
    image: "/trends/second.png",
    title: "Fashion Forward",
    info: "We're more than a brand; we're trendsetters, curating styles that empower and inspire confidence.",
  },
  {
    id: 3,
    image: "/trends/third.png",
    title: "Customer-Centric Approach",
    info: "At StyleLoom, our customers are at the heart of everything we do. Your satisfaction is our measure of success.",
  },
  {
    id: 4,
    image: "/trends/fourth.png",
    title: "Global Inspiration",
    info: "Influenced by global trends, we bring you a diverse and dynamic collection, embodying the spirit of fashion from around the world.",
  },
  {
    id: 5,
    image: "/trends/fifth.png",
    title: "Empowering Your Style",
    info: "Beyond clothing, StyleLoom is a lifestyle. Join us on a journey of self-expression and empowerment through fashion.",
  },
  {
    id: 6,
    image: "/trends/sixth.png",
    title: "Sustainable Practices",
    info: "StyleLoom is committed to sustainability, integrating eco-friendly practices into our production process.",
  },
];

export default function Trends() {
  return (
    <>
      <section className="w-[1600px] mx-auto font-mono">
        <header className=" p-10 border rounded-t-2xl border-dashed border-[#1C1C1C]">
          <h1 className="text-4xl">Crafting Trends, Inspiring Confidence</h1>
          <p className="text-sm text-[#676665]">
            Explore a world of fashion at StyleLoom, where trends meet
            affordability.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-dashed border-[#1C1C1C]">
          {trends.map(({ id, image, title, info }) => (
            <div key={id} className="border p-8 border-dashed border-[#1C1C1C]">
              <Image
                src={image}
                alt={title}
                width={70}
                height={70}
                sizes="70px"
              />
              <h2 className="text-2xl pt-4">{title}</h2>
              <p className="text-sm text-[#676665] pt-2">{info}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
