import Comments from "@/src/components/organisms/Sections/CommentsSection/Comments";

export default function Testimonials() {
  return (
    <>
      <section>
        <div className="font-mono mt-10 grid grid-cols-3 w-7xl mx-auto text-center border-y border-dashed border-[#1C1C1C]">
          <div className="p-10 border-l border-r border-dashed border-[#1C1C1C]">
            <h2 className="text-4xl font-semibold">10,000+</h2>
            <p>Happy Clients</p>
          </div>

          <div className="p-10 border-r border-dashed border-[#1C1C1C]">
            <h2 className="text-4xl font-semibold">4.9/5</h2>
            <p>Average Rating</p>
          </div>

          <div className="p-10 border-r border-dashed border-[#1C1C1C]">
            <h2 className="text-4xl font-semibold">15+</h2>
            <p>Years of Experience</p>
          </div>
        </div>
        <div className="w-7xl mx-auto">
          <Comments />
        </div>
      </section>
    </>
  );
}
