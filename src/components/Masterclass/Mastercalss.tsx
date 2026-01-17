import { Section } from "../Content/Section";
import image from "../../assets/sushak.jpg";

const data = {
  id: "Masterclass",
  imgUrl: image,
  subheading: "Warsztaty, które uczą, bawią i integrują",
  heading: "Sushi Masterclass",
  textTitle: "Czym jest Masterclass?",
  text: "Masterclass sushi to praktyczne warsztaty, podczas których uczestnicy tworzą własne rolki pod okiem doświadczonego sushi chefa",

  chipsTitle: "W ramach warsztatów zapewniamy:",
  chips: [
    "indywidualne stanowiska",
    "produkty premium",
    "naukę technik sushi krok po kroku",
    "sushi przygotowane przez uczestników",
    "przyjazną atmosferę",
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
