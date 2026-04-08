



import liveImage from "../assets/heroChef23.png";
import { Hero } from "../components/Hero/Hero";

export default function OmakasePage() {
  return (
    <Hero
      image={liveImage}
      eyebrow="Omakase"
      heading={
        <>
          Gotowanie na <span className="text-amber-500">żywo</span>
        </>
      }
      subtitle="Spektakl kulinarny przy Twoim stole"
    />
  );
}
