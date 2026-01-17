import { Section } from "../Content/Section";
import image from "../../assets/sushak.jpg";

const data = {
  id: "Live",
  imgUrl: image,
  subheading: "Wyjątkowe Doświadczenie Kulinarne na Twoim Wydarzeniu",
  heading: "Sushi Live Cooking",
  textTitle: "Czym jest Live Cooking?",
  text: "Live cooking to pokaz przygotowywania sushi na żywo, prosto przed Twoimi gośćmi. To połączenie gotowania i efektownego show.",
  chipsTitle: "Dla Firm",
  chips: [
    "Eventy firmowe",
    "Targi",
    "Konferencje",
    "Wigilie",
    "Gale",
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
      chipsTitle={data.chipsTitle}
      chips={data.chips}
      secondaryChipsTitle={data.secondaryChipsTitle}
      secondaryChips={data.secondaryChips}
    />
  );
};
