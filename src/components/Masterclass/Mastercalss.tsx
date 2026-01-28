import { Section } from "../Content/Section";
import image from "../../assets/masterclass1.jpg";

const data = {
  id: "Sushi Masterclass",
  imgUrl: image,
  subheading: "Warsztaty, które uczą, bawią i integrują",
  heading: "Sushi Masterclass",
  textTitle: "Czym jest Masterclass?",
  text: "Masterclass sushi to praktyczne warsztaty, podczas których uczestnicy tworzą własne rolki pod okiem doświadczonego sushi chefa",

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
      chipsTitle={data.chipsTitle}
      chips={data.chips}
    />
  );
};
