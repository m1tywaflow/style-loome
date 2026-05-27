import Comments from "@/src/components/organisms/Sections/CommentsSection/Comments";
import FAQ from "@/src/components/organisms/Sections/FAQ/FAQ";
import YellowBanner from "@/src/components/molecules/Banners/YellowBanner";
import DressColl from "@/src/components/organisms/Sections/DressCollection/DressColl";
export default function Products() {
  return (
    <>
      <DressColl />
      <Comments />
      <FAQ />
      <YellowBanner />
    </>
  );
}
