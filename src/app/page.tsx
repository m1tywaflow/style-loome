import Hero from "../components/organisms/Hero/Hero";
import NavigatingSec from "../components/organisms/Sections/Navigating/NavigatingSec";
import Trends from "../components/organisms/Sections/CraftingTrends/Trends";
import YellowBanner from "../components/molecules/Banners/YellowBanner";
import Elevate from "../components/organisms/Sections/Elevate/Elevate";
export default function Home() {
  return (
    <>
      <Hero />
      <Trends />
      <NavigatingSec />
      <Elevate />
      <YellowBanner />
    </>
  );
}
