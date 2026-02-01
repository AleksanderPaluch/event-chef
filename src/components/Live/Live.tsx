import { Section } from "../Content/Section";
import image from "../../assets/heroChef23.png";
import imageModal from "../../assets/nigiri.jpeg";

const data = {
  id: "Live Cooking",
  imgUrl: image,
  subheading: "Wyjątkowe Doświadczenie Kulinarne na Twoim Wydarzeniu",
  heading: "Sushi Live Cooking",
  textTitle: "Live Cooking?",
  text: "Live cooking to pokaz przygotowywania sushi na żywo, prosto przed Twoimi gośćmi. To połączenie gotowania i efektownego show.",
  description:
    "Pracujemy na produktach premium i dopasujemy menu do harakteru wydarzenia",
  process: ["Przygotowanie ", "Sushi show", "Degustacja & interakcja"],
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
    "brak potrzeby dostępu do wody i prądu",
    "możliwość realizacji w dowolnym miejscu",
    "pełne zaplecze po stronie szefa kuchni",
  ],
  access: ["Warszawa - bezpłatnie", "realizacje na terenie całej Polsk"],
  chipsTitle: "Dla Firm",
  chips: [
    "Eventy firmowe",
    "Wigilie",
    "Targi",
    "Konferencje",
    "Premiery produktów",
  ],
  secondaryChipsTitle: "Dla Osób Prywatnych",
  secondaryChips: ["Wesela", "Urodziny", "Domówki", "Wieczory panieńskie"],
};

export const Live = () => {
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
      secondaryChipsTitle={modalData.secondaryChipsTitle}
      secondaryChips={modalData.secondaryChips}
    />
  );
};
