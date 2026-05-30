import Image from "next/image";
import { notFound } from "next/navigation";
import { shop } from "@/src/data/shopItems";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = shop.find((item) => item.id === Number(id));

  if (!product) {
    notFound();
  }

  const relatedProducts = shop
    .filter(
      (item) => item.category === product.category && item.id !== product.id
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[32px] border border-white/10">
            <Image
              src={product.image}
              alt={product.title}
              width={1000}
              height={1200}
              priority
              className="h-[750px] w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="mb-4 w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400">
              {product.category}
            </span>
            <h1 className="text-4xl font-semibold lg:text-5xl">
              {product.title}
            </h1>
            <p className="mt-6 text-3xl font-bold">
              ${product.price.toFixed(2)}
            </p>
            <div className="mt-8 space-y-4 text-zinc-400">
              <p>
                <span className="font-medium text-white">Fit:</span>{" "}
                {product.fit}
              </p>
              <p>
                Crafted with premium materials and designed for modern elegance.
                Perfect for everyday wear and special occasions.
              </p>
            </div>
            <div className="mt-10">
              <h3 className="mb-4 text-sm uppercase tracking-wider text-zinc-500">
                Size
              </h3>
              <div className="flex gap-3">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="h-12 w-12 rounded-xl border border-white/10 transition hover:border-white"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-10 flex gap-4">
              <button className="flex-1 rounded-2xl bg-white py-4 font-medium text-black transition hover:opacity-90">
                Add to Cart
              </button>
              <button className="rounded-2xl border border-white/10 px-6 transition hover:border-white">
                ♡
              </button>
            </div>
            <div className="mt-12 rounded-3xl border border-white/10 p-6">
              <h3 className="mb-4 text-lg font-medium">Product Details</h3>
              <ul className="space-y-3 text-zinc-400">
                <li>Premium quality materials</li>
                <li>Comfortable fit</li>
                <li>Modern elegant design</li>
                <li>Worldwide shipping available</li>
              </ul>
            </div>
          </div>
        </div>
        <section className="mt-28">
          <h2 className="mb-8 text-3xl font-semibold">You May Also Like</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-[28px] border border-white/10"
              >
                <div className="overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={600}
                    className="h-[380px] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm text-zinc-500">{item.category}</p>
                  <h3 className="mt-2 text-lg font-medium">{item.title}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{item.fit}</p>
                  <p className="mt-4 font-semibold">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
