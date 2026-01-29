import { Section } from "../Content/Section";
import image from "../../assets/nigiri.jpeg";

const data = {
  id: "Omakase",
  imgUrl: image,

  subheading: "Jedyna w swoim rodzaju kolacja sushi",
  heading: "Omakase",
  textTitle: "Czym jest Omakase?",
  text: "Omakase to wyjątkowe doświadczenie kulinarne, które pozwala Ci zaufać szefowi kuchni i cieszyć się starannie dobranym menu.",
  description:
    "Pracujemy na świeżych produktach i dopasujemy menu do harakteru wydarzenia",
  process: [
    "Przygotowanie stanowiska",
    "Live sushi show",
    "Degustacja & interakcja",
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
      chipsTitle={data.chipsTitle}
      chips={data.chips}
    />
  );
};
