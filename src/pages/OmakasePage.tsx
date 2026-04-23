import omakaseImage from "../assets/omakase.jpg";

import { FAQ } from "../components/FAQ/FAQ";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import { StickyCards } from "../components/StickyCards/StickyCards";
import {  omakaseFAQ } from "../components/Translations/faq";

const cardsData = {
  cardsDescription:
    "Omakase to ekskluzywne doświadczenie kulinarne, w którym goście oddają się w ręce szefa kuchni. Menu powstaje na bieżąco, w oparciu o najlepsze, sezonowe produkty i autorską wizję sushi mastera.",

  menu: ["Sushi i Sashimi", "Premium seafood", "Unikalne dodatki i sosy"],

  cardsProcess: [
    {
      time: "1-2 godz.",
      label: "Przygotowanie stanowiska i produktów",
    },
    {
      time: "2-3 godz.",
      label: "Serwis Omakase na żywo",
    },
    {
      time: "w trakcie",
      label: "Opowieść o produktach i technikach",
    },
  ],

  organization: [
    "pełne zaplecze po stronie szefa kuchni",
    "indywidualny serwis dla gości",
    "możliwość realizacji w dowolnej lokalizacji",
  ],

  chipsTitle: "Dla Firm",
  chips: [
    "Spotkania VIP",
    "Eventy premium",
    "Kolacje biznesowe",
    "Zamknięte wydarzenia",
  ],

  secondaryChipsTitle: "Dla Osób Prywatnych",
  secondaryChips: [
    "Kolacje prywatne",
    "Rocznice",
    "Urodziny premium",
    "Wyjątkowe okazje",
  ],
};

export default function OmakasePage() {
  return (
    <>
      <Hero
        image={omakaseImage}
        eyebrow="Omakase"
        heading={
          <>
            Jedyna w swoim <br /> rodzaju{" "}
            <span className="text-amber-500">kolacja</span>
          </>
        }
      />

   

      <StickyCards
        chipsTitle={cardsData.chipsTitle}
        chips={cardsData.chips}
        secondaryChipsTitle={cardsData.secondaryChipsTitle}
        secondaryChips={cardsData.secondaryChips}
        menu={cardsData.menu}
        organization={cardsData.organization}
        cardsProcess={cardsData.cardsProcess}
        omakase={true}
      />
            <FAQ items={omakaseFAQ} />
              <Footer />

    </>
  );
}
