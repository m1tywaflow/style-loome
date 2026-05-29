import ContactBanner from "@/src/components/molecules/Banners/ContactBanner";
import ReturnPolicy from "@/src/components/organisms/SmallSection/ReturnPolicy";
import Cancellation from "@/src/components/organisms/SmallSection/CancellationPolicy";
import Comments from "@/src/components/organisms/Sections/CommentsSection/Comments";
import FAQ from "@/src/components/organisms/Sections/FAQ/FAQ";
import YellowBanner from "@/src/components/molecules/Banners/YellowBanner";
export default function Contact() {
  return (
    <>
      <ContactBanner />
      <ReturnPolicy />
      <Cancellation />
      <Comments />
      <FAQ />
      <YellowBanner />
    </>
  );
}
