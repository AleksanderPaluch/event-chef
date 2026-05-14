import liveImage from "../assets/live.png";
import { FAQ } from "../components/FAQ/FAQ";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import { StickyCards } from "../components/StickyCards/StickyCards";
import { liveFAQ } from "../components/Translations/faq";
import { useLanguage } from "../components/Translations/LanguageContext";
import { LiveTranslations } from "../components/Translations/LiveTranslations";

export default function LivePage() {
  const { lang } = useLanguage();
  const t = LiveTranslations[lang];

  const heading = {
    en: (
      <>
       Interactive sushi 
        <span className="text-amber-500 dark:text-amber-400"> experience</span>
      </>
    ),
    pl: (
      <>
        Sushi tworzone <br /> na{" "}
        <span className="text-amber-500 dark:text-amber-400">żywo</span>
      </>
    ),
  };

  return (
    <>
      <Hero
        image={liveImage}
        eyebrow={t.eyebrow}
        heading={heading[lang]}
        subtitle={t.subtitle}
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
      <FAQ items={liveFAQ} />
      <Footer />
    </>
  );
}