import { Section } from "../Content/Section";
import image from "../../assets/nigiri.jpeg";
import imageModal from "../../assets/nigiri.jpeg";

const data = {
  id: "Omakase",
  imgUrl: image,

  subheading: "Jedyna w swoim rodzaju kolacja sushi",
  heading: "Omakase",
  textTitle: "Omakase?",
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
    "Live cooking to interaktywny pokaz przygotowywania sushi na żywo, połączony z degustacją serwowaną w trakcie wydarzenia.",
  menu: ["Futomak", "Uramaki", "Hosomaki"],
  menuIMG: imageModal,
   modalProcess: [
  {
    time: "ok. 1 godz.",
    label: "Przygotowanie stanowiska",
  },
  {
    time: "2-4 godz.",
    label: "Live sushi cooking",
  },
  {
    time: "w trakcie",
    label: "Degustacja na bieżąco",
  },
],
  organization: [
    "brak potrzeby dostępu do wody i prądu",
    "możliwość realizacji w dowolnym miejscu",
    "pełne zaplecze po stronie szefa kuchni",
  ],

  chipsTitle: "Dlaczego Omakase?",
  chips: [
    "Unikalne doświadczenie",
    "Sezonowe i świeże składniki",
    "Idealne na specjalne okazje",
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
    />
  );
};
