import { Section } from "../Content/Section";

const data = {
  id: "Mastercalss",
  imgUrl:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  subheading: "Warsztaty, które uczą, bawią i integrują",
  heading: "Sushi Masterclass",
  textTitle: "Czym jest Masterclass?",
  text: "Masterclass sushi to praktyczne warsztaty, podczas których uczestnicy tworzą własne rolki pod okiem doświadczonego sushi chefa",

  chipsTitle: "W ramach warsztatów zapewniamy:",
  chips: [
    "indywidualne stanowiska",
    "produkty premium",
    "przyjazną atmosferę",
    "naukę technik sushi krok po kroku",
    "sushi przygotowane przez uczestników",
  ],
};

export const Mastercalss = () => {
  return (
    <Section
      imgUrl={data.imgUrl}
      subheading={data.subheading}
      heading={data.heading}
      textTitle={data.textTitle}
      text={data.text}
    />
  );
};
