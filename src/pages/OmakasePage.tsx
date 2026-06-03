import omakaseImage from "../assets/omakase.jpg";
import { FAQ } from "../components/FAQ/FAQ";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import { StickyCards } from "../components/StickyCards/StickyCards";
import { useFAQ } from "../components/Translations/FaqTranslations.ts";
import { useLanguage } from "../components/Translations/LanguageContext";
import { OmakaseTranslations } from "../components/Translations/OmakaseTranslations.ts";


export default function OmakasePage() {
  const { lang } = useLanguage();
  const t = OmakaseTranslations[lang];
      const faqItems = useFAQ("live", lang);


  const heading = {
    en: (
      <>
        A one-of-a-kind <br />{" "}
        <span className="text-amber-500 dark:text-amber-400">dining</span> experience
      </>
    ),
    pl: (
      <>
        Jedyna w swoim <br /> rodzaju{" "}
        <span className="text-amber-500 dark:text-amber-400">kolacja</span>
      </>
    ),
  };

  return (
    <>
      <Hero
        image={omakaseImage}
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
        omakase={true}
      />
      <FAQ items={faqItems} />
      <Footer />
    </>
  );
}