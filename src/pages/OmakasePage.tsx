import liveImage from "../assets/blackieshoot-qLBlMw35508-unsplash.jpg";
import { Button } from "../components/Button/Button";
import { FAQ } from "../components/FAQ/FAQ";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import { Motion } from "../components/Motion/Motion";
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
        image={liveImage}
        eyebrow="Omakase"
        heading={
          <>
            Jedyna w swoim <br /> rodzaju{" "}
            <span className="text-amber-500">kolacja</span>
          </>
        }
      />

      <div className="section">
        <div className="flex flex-col ">
          <Motion>
            {" "}
            <h2 className="text-left section-header lg:text-5xl lg:mb-10">
              Czym jest <br />{" "}
              <span className="text-amber-500 dark:text-amber-400 lg:text-6xl ">
                Omakase
              </span>
              ?
            </h2>
          </Motion>

          <Motion>
            {" "}
            <p className="max-w-3xl ml-0 text-justify lg:max-w-2xl section-comment">
              "Omakase to ekskluzywne doświadczenie kulinarne, w którym goście
              oddają się w ręce szefa kuchni. Menu powstaje na bieżąco, w
              oparciu o najlepsze, sezonowe produkty i autorską wizję sushi
              mastera.",
            </p>
          </Motion>
          <Motion>
            {" "}
            <div className="mt-8 ">
              <Button
                order
                link
                variant="hero"
                text="Otrzymaj indywidualną ofertę"
              />
            </div>
          </Motion>
        </div>
      </div>

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
