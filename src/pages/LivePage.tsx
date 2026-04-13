import liveImage from "../assets/LiveChef.png";
// import { TextContent } from "../components/Content/TextContent";
import { Hero } from "../components/Hero/Hero";
import { StickyCards } from "../components/StickyCards/StickyCards";

// const data = {
//   id: "Live",

//   subheading: "Wyjątkowe Doświadczenie Kulinarne",
//   heading: "Live Cooking",
//   textTitle: "Live Cooking",
//   text: "Live cooking to pokaz przygotowywania sushi na żywo, prosto przed Twoimi gośćmi. To połączenie gotowania i efektownego show.",
//   description:
//     "Pracujemy na produktach premium i dopasujemy menu do harakteru wydarzenia",
//   process: ["Przygotowanie ", "Sushi show", "Degustacja & interakcja"],
// };

const cardsData = {
  cardsDescription:
    "Live cooking to interaktywny pokaz przygotowywania sushi na żywo, połączony z degustacją serwowaną w trakcie wydarzenia.",
  menu: ["Futomaki Philadelfia", "Uramaki z Krewetkami", "Hosomaki Spicy Tuna"],

  cardsProcess: [
    {
      time: "ok. 1 godz.",
      label: "Przygotowanie stanowiska",
    },
    {
      time: "2-4 godz.",
      label: "Sushi live cooking",
    },
    {
      time: "w trakcie",
      label: "Serwowanie i degustacja",
    },
  ],

  organization: [
    "Brak potrzeby dostępu do wody i prądu",
    "Możliwość realizacji w dowolnym miejscu",
    "Pełne zaplecze po stronie szefa kuchni",
  ],

  chipsTitle: "Dla Firm",
  chips: [
    "Eventy firmowe",
    "Konferencje",
    "Premiery produktów",
    "Targi",
    "Wigilie",
  ],
  secondaryChipsTitle: "Dla Osób Prywatnych",
  secondaryChips: ["Wesela", "Urodziny", "Domówki", "Wieczory panieńskie"],
};

export default function LivePage() {
  return (
    <>
      <Hero
        image={liveImage}
        eyebrow="Live Cooking"
        heading={
          <>
            Gotowanie na <span className="text-amber-500">żywo</span>
          </>
        }
        subtitle="Wyjątkowe Doświadczenie Kulinarne"
      />

      <StickyCards
        chipsTitle={cardsData.chipsTitle}
        chips={cardsData.chips}
        secondaryChipsTitle={cardsData.secondaryChipsTitle}
        secondaryChips={cardsData.secondaryChips}
        menu={cardsData.menu}
        organization={cardsData.organization}
        cardsProcess={cardsData.cardsProcess}
      />
    </>
  );
}
