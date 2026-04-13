

import liveImage from "../assets/heroChef23.png";
import { Hero } from "../components/Hero/Hero";
import { StickyCards } from "../components/StickyCards/StickyCards";



const cardsData = {




 

   cardsDescription:
 "Omakase to ekskluzywne doświadczenie kulinarne, w którym goście oddają się w ręce szefa kuchni. Menu powstaje na bieżąco, w oparciu o najlepsze, sezonowe produkty i autorską wizję sushi mastera.",
  
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
  
      "Prezent kulinarny",]
  
};

export default function OmakasePage() {
  return (
    <>
     <Hero
      image={liveImage}
      eyebrow="Omakase"
      heading={
        <>
          Jedyna w swoim <br /> rodzaju <span className="text-amber-500">kolacja</span> 
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
          />
    </>
   
  );
}
