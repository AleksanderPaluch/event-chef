import liveImage from "../assets/masterclass1.jpg";
import { Hero } from "../components/Hero/Hero";

export default function MasterclassPage() {
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
