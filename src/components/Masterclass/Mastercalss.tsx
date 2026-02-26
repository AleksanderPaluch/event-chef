import { Section } from "../Content/Section";
import image from "../../assets/masterclass1.jpg";
import imageModal from "../../assets/nigiri.jpeg";

const data = {
  id: "Sushi Masterclass",
  imgUrl: image,
  subheading: "Warsztaty które uczą, bawią i integrują",
  heading: "Sushi Masterclass",
  textTitle: "Masterclass",
  text: "Masterclass sushi to praktyczne warsztaty, podczas których uczestnicy tworzą własne rolki pod okiem doświadczonego sushi chefa",
  description:
    "Podczas masterclass szef kuchni krok po kroku pokaże techniki przygotowywania sushi, dzieląc się swoimi sekretami i poradami kulinarnymi.",
  process: ["Wprowadzenie", "Pokaz", "Praktyka", "Degustacja"],
};

const modalData = {
  modalDescription:
    "Masterclass sushi to praktyczne warsztaty, podczas których uczestnicy uczą się przygotowywania sushi od podstaw pod okiem doświadczonego sushi mastera.",

  menu: ["Futomaki Philadelfia", "Uramaki z Krewetkami", "Hosomaki Spicy Tuna"],
  menuIMG: imageModal,

  modalProcess: [
    {
      time: "ok. 1 godz.",
      label: "Przygotowanie stanowisk i wprowadzenie",
    },
    {
      time: "2 - 3 godz.",
      label: "Warsztaty sushi krok po kroku",
    },
    {
      time: "1 godz.",
      label: "Degustacja przygotowanych rolek",
    },
  ],

  organization: [
    "indywidualne stanowiska dla uczestników",
    "komplet produktów i narzędzi",
    "opieka sushi chefa",
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

export const Mastercalss = () => {
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
