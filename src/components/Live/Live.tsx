import { Section } from "../Content/Section";

const data = {
  id: "Live",
  imgUrl:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  subheading: "Wyjątkowe Doświadczenie Kulinarne na Twoim Wydarzeniu",
  heading: "Sushi Live Cooking",
  textTitle: "Czym jest Live Cooking?",
  text: "Live cooking to pokaz przygotowywania sushi na żywo, prosto przed Twoimi gośćmi. To połączenie gotowania, zabawy i efektownego show.",
  chipsTitle: "Dla Firm",
  chips: [
    "Eventy firmowe",
    "Targi",
    "Konferencje",
    "Wigilie",
    "Gale...",
    "Premiery produktów",
  ],
  secondaryChipsTitle: "Dla Osób Prywatnych",
  secondaryChips: [
    "Wesela",
    "Urodziny..",
    "Domówki...",
    "Wieczory panieńskie",
    "Garden party",
  ],
};

export const Live = () => {
  return (
    <Section
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
