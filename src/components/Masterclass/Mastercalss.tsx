import { Section } from "../Content/Section";
import image from "../../assets/masterclass1.jpg";
import imageModal from "../../assets/nigiri.jpeg";

const data = {
  id: "Sushi Masterclass",
  imgUrl: image,
  subheading: "Warsztaty, które uczą, bawią i integrują",
  heading: "Sushi Masterclass",
  textTitle: "Masterclass?",
  text: "Masterclass sushi to praktyczne warsztaty, podczas których uczestnicy tworzą własne rolki pod okiem doświadczonego sushi chefa",
  description:
    "Podczas masterclass szef kuchni krok po kroku pokaże techniki przygotowywania sushi, dzieląc się swoimi sekretami i poradami kulinarnymi.",
  process: ["Wprowadzenie", "Pokaz", "Praktyka", "Degustacja"],
};

const modalData = {
  modalDescription:
    "Live cooking to interaktywny pokaz przygotowywania sushi na żywo, połączony z degustacją serwowaną w trakcie wydarzenia.",
  menu: ["Futomak", "Uramaki", "Hosomaki"],
  menuIMG: imageModal,
  modalProcess: [
    "ok. 1 godz. - przygotowanie stanowiska",
    "2-4 godz. - live sushi cooking",
    "degustacja odbywa się na bieżąco podczas pokazu",
  ],
  organization: [
        "indywidualne stanowiska",
 
    "naukę sushi krok po kroku",
    "tasting sushi uczestników",
    "brak potrzeby dostępu do wody i prądu",
    
    "możliwość realizacji w dowolnym miejscu",
    "pełne zaplecze po stronie szefa kuchni",
  ],
  access: ["Warszawa - bezpłatnie", "realizacje na terenie całej Polsk"],
  chipsTitle: "W ramach warsztatów zapewniamy:",
  chips: [
    "indywidualne stanowiska",
    "produkty premium",
    "naukę sushi krok po kroku",
    "tasting sushi uczestników",
    "przyjazną atmosferę",
    "pamiątkowe zdjęcia",
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
      access={modalData.access}
      chipsTitle={modalData.chipsTitle}
      chips={modalData.chips}
    />
  );
};
