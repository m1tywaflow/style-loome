import FAQ from "@/src/components/organisms/Sections/FAQ/FAQ";

export default function FAQPage() {
  return (
    <>
      <section className="w-7xl mx-auto">
        <div className="p-24">
          <h1 className="text-4xl font-mono text-center">
            Discover Helpful Answers and Information About Our Services,
            Features, and Everything You Need to Know to Get Started
            Successfully
          </h1>
        </div>
        <div>
          <FAQ />
        </div>
      </section>
    </>
  );
}
