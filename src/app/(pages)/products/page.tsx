import Explore from "@/src/components/organisms/products/Explore/Explore";
import Comments from "@/src/components/organisms/Sections/CommentsSection/Comments";
import FAQ from "@/src/components/organisms/Sections/FAQ/FAQ";
import YellowBanner from "@/src/components/molecules/Banners/YellowBanner";
export default function Products() {
  return (
    <>
      <Explore />
      <Comments />
      <FAQ />
      <YellowBanner />
    </>
  );
}
