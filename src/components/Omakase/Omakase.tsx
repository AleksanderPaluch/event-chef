import { Section } from "../Content/Section";
import image from "../../assets/nigiri.jpeg";
import imageModal from "../../assets/nigiri.jpeg";

const data = {
  id: "Omakase",
  imgUrl: image,

  subheading: "Jedyna w swoim rodzaju kolacja sushi",
  heading: "Omakase",
  textTitle: "Omakase",
  text: "Omakase to wyjątkowe doświadczenie kulinarne, które pozwala Ci zaufać szefowi kuchni i cieszyć się starannie dobranym menu.",
  description:
    "Omakase to kameralna kolacja, w której goście powierzają wybór dań szefowi kuchni, odkrywając smaki starannie dobrane specjalnie na ten wieczór.",

  process: [
    "Najlepsze produkty",
    "Menu degustacyjne",
    "Unikalne doświadczenie",
  ],
};

const modalData = {
  modalDescription:
    "Omakase to ekskluzywne doświadczenie kulinarne, w którym goście oddają się w ręce szefa kuchni. Menu powstaje na bieżąco, w oparciu o najlepsze, sezonowe produkty i autorską wizję sushi mastera.",

  menu: [
 
    "Autorskie menu degustacyjne",
    "Premium seafood",
    "Unikalne dodatki i sosy",
  ],

  menuIMG: imageModal,

  modalProcess: [
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
    "produkty najwyższej jakości",
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

export const Omakase = () => {
  return (
    <Section
      id={data.id}
      imgUrl={data.imgUrl}
      subheading={data.subheading}
      heading={data.heading}
      textTitle={data.textTitle}
      text={data.text}
      description={data.description}
      process={data.process}
      modalDescription={modalData.modalDescription}
      menu={modalData.menu}
      menuIMG={modalData.menuIMG}
      modalProcess={modalData.modalProcess}
      organization={modalData.organization}
      chipsTitle={modalData.chipsTitle}
      chips={modalData.chips}
      secondaryChipsTitle={modalData.secondaryChipsTitle}
      secondaryChips={modalData.secondaryChips}
    />
  );
};
