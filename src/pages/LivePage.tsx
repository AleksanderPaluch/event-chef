import liveImage from "../assets/LiveChef.png";
import { Hero } from "../components/Hero/Hero";

export default function LivePage() {
  return (
    <Hero
      image={liveImage}
      eyebrow="Live Cooking"
      heading={
        <>
          Gotowanie na <span className="text-amber-500">żywo</span>
        </>
      }
      subtitle="Spektakl kulinarny przy Twoim stole"
    />
  );
}
