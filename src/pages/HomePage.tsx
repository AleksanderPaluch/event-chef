import { useEffect } from "react";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { Hero } from "../components/Hero/Hero";
import { Intro } from "../components/Intro/Intro";
import { Offer } from "../components/Offer/Offer";
import { smoothScrollTo } from "../components/helpers";
import heroImage from "../assets/hero.png";
import { Footer } from "../components/Footer/Footer";
import { AboutSection } from "../components/AboutUs/AboutUs";
import { useLanguage } from "../components/Translations/LanguageContext";
import { HeroTranslations } from "../components/Translations/HeroTranslations";


export default function HomePage() {
  const { lang } = useLanguage();
  const t = HeroTranslations[lang];

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        smoothScrollTo(hash);
      }, 100);
    }
  }, []);

  const heading = {
    en: (
      <>
      A sushi experience  <br /> brought to
        <span className="text-amber-500 dark:text-amber-400"> Your</span> space
      </>
    ),
    pl: (
      <>
        Sushi tworzone
        <br />w <span className="text-amber-500 dark:text-amber-400">Twojej</span> przestrzeni
      </>
    ),
  };

  return (
    <>
      <Hero
        image={heroImage}
        eyebrow={t.eyebrow}
        heading={heading[lang]}
        subtitle={t.subtitle}
      />
      <Intro />
      <AboutSection />
      <Offer />
      <ContactForm />
      <Footer />
    </>
  );
}