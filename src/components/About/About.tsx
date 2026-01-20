import image from "../../assets/chefknife2.jpg";

import { Section } from "../Content/Section";

const data = {
  id: "O nas",
  imgUrl: image,
  subheading: " Dlaczego warto wybrać",
  heading: "EventChef",
  stats: true,
};

export const About = () => {
  return (
    <Section
      id={data.id}
      imgUrl={data.imgUrl}
      subheading={data.subheading}
      heading={data.heading}
      stats={data.stats}
    />
  );
};
