import { useEffect } from "react";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { Hero } from "../components/Hero/Hero";
import { Intro } from "../components/Intro/Intro";
import { Offer } from "../components/Offer/Offer";
import { smoothScrollTo } from "../components/helpers";
import sushiPlate from "../assets/sushiplate.jpg";

export default function HomePage() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        smoothScrollTo(hash);
      }, 100);
    }
  }, []);

  return (
    <>
      <Hero
        image={sushiPlate}
        eyebrow="Event Chef"
        heading={
          <>
            Sushi tworzone
            <br />w <span className="text-amber-500 dark:text-amber-400">Twojej</span> przestrzeni
          </>
        }
        subtitle="Wesela • Eventy firmowe • Prywatne kolacje"
        showCta
      />
      <Intro />
      <Offer />
      <ContactForm />
    </>
  );
}
