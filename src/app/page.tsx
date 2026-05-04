import Hero from "../components/organisms/Hero/Hero";
import NavigatingSec from "../components/organisms/Sections/Navigating/NavigatingSec";
import Trends from "../components/organisms/Sections/CraftingTrends/Trends";

export default function Home() {
  return (
    <>
      <Hero />
      <Trends />
      <NavigatingSec />
    </>
  );
}
