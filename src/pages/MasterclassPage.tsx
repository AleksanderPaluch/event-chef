import liveImage from "../assets/masterclass1.jpg";
import { Button } from "../components/Button/Button";
import { FAQ } from "../components/FAQ/FAQ";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import { Motion } from "../components/Motion/Motion";
import { StickyCards } from "../components/StickyCards/StickyCards";
import { masterclassFAQ } from "../components/Translations/faq";

const cardsData = {
  cardsDescription:
    "Masterclass sushi to praktyczne warsztaty, podczas których uczestnicy uczą się przygotowywania sushi od podstaw pod okiem doświadczonego sushi mastera.",

  menu: ["Futomaki Philadelfia", "Uramaki z Krewetkami", "Hosomaki Spicy Tuna"],

  cardsProcess: [
    {
      time: "ok. 1 godz.",
      label: "Przygotowanie stanowisk",
    },
    {
      time: "2 - 3 godz.",
      label: "Warsztaty  krok po kroku",
    },
    {
      time: "1 godz.",
      label: "Degustacja sushi",
    },
  ],

  organization: [
    "indywidualne stanowiska dla uczestników",
    "komplet produktów i narzędzi",

    "możliwość realizacji w dowolnej lokalizacji",
  ],

  chipsTitle: "Dla Firm",
  chips: [
    "Integracje zespołowe",
    "Eventy firmowe",
    "Szkolenia kulinarne",
    "Spotkania biznesowe",
  ],

  secondaryChipsTitle: "Dla Osób Prywatnych",
  secondaryChips: [
    "Urodziny",
    "Spotkania z przyjaciółmi",
    "Wieczory tematyczne",

    "Prezent kulinarny",
  ],
};

export default function MasterclassPage() {
  return (
    <>
      <Hero
        image={liveImage}
        eyebrow="Sushi Masterclass"
        heading={
          <>
            <span className="text-amber-500 dark:text-amber-400">
              Warsztaty
            </span>{" "}
            które <br /> uczą, bawią i integrują
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
                Masterclass
              </span>
              ?
            </h2>
          </Motion>

          <Motion>
            {" "}
            <p className="max-w-3xl ml-0 text-justify lg:max-w-2xl section-comment">
              "Masterclass sushi to praktyczne warsztaty, podczas których
              uczestnicy uczą się przygotowywania sushi od podstaw pod okiem
              doświadczonego sushi mastera."
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
      />
       <FAQ items={masterclassFAQ} />
         <Footer />

    </>
  );
}
