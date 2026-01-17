import { Section } from "../Content/Section";
import image from "../../assets/sushak.jpg";

const data = {
  id: "Omakase",
  imgUrl: image,

  subheading: "Jedyna w swoim rodzaju kolacja sushi",
  heading: "Omakase",
  textTitle: "Czym jest Omakase?",
  text: "Omakase to wyjątkowe doświadczenie kulinarne, które pozwala Ci zaufać szefowi kuchni i cieszyć się starannie dobranym menu.",
  chipsTitle: "Dlaczego Omakase?",
  chips: ["Unikalne doświadczenie kulinarne", "Sezonowe i świeże składniki", "Idealne na specjalne okazje"],
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
      chipsTitle={data.chipsTitle}
      chips={data.chips}
    />
  );
};
