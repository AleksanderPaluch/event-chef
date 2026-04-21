import { useEffect } from "react";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { Hero } from "../components/Hero/Hero";
import { Intro } from "../components/Intro/Intro";
import { Offer } from "../components/Offer/Offer";
import { smoothScrollTo } from "../components/helpers";
import sushiPlate from "../assets/PHOTO-2024-12-10-17-19-05.webp";
import { Footer } from "../components/Footer/Footer";
import { AboutSection } from "../components/AboutUs/AboutUs";
import { Testimonials } from "../components/About/Testimonials/Testimonials";
import { Stats } from "../components/About/Stats/Stats";

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
      <AboutSection />
      {/* <Testimonials />
      <Stats /> */}
      <Offer />
      <ContactForm />
        <Footer />

    </>
  );
}
