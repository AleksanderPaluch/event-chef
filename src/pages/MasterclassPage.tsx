import masterclassImage from "../assets/masterclass2.png";
import masterclassMobileImage from "../assets/masterclass-mobile.png.png";
import { FAQ } from "../components/FAQ/FAQ";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import { StickyCards } from "../components/StickyCards/StickyCards";
import { useFAQ } from "../components/Translations/FaqTranslations";

import { useLanguage } from "../components/Translations/LanguageContext";
import { MasterclassTranslations } from "../components/Translations/MasterclassTranslations";

export default function MasterclassPage() {
  const { lang } = useLanguage();
  const t = MasterclassTranslations[lang];
    
    const faqItems = useFAQ("live", lang);
  

  const heading = {
    en: (
      <>
        <span className="text-amber-500 dark:text-amber-400">Workshop</span>{" "}
        that teach, entertain, and connect
      </>
    ),
    pl: (
      <>
        <span className="text-amber-500 dark:text-amber-400">Warsztaty</span>{" "}
        które <br /> uczą, bawią i integrują
      </>
    ),
  };

  return (
    <>
      <Hero
        image={masterclassImage}
        mobileImage={masterclassMobileImage}
        eyebrow={t.eyebrow}
        heading={heading[lang]}
      />

      <StickyCards
        chipsTitle={t.chipsTitle}
        chips={t.chips}
        secondaryChipsTitle={t.secondaryChipsTitle}
        secondaryChips={t.secondaryChips}
        menu={t.menu}
        organization={t.organization}
        cardsProcess={t.cardsProcess}
      />
      <FAQ items={faqItems} />
      <Footer />
    </>
  );
}