import image from "../../assets/About.jpg";

import { Section } from "../Content/Section";
import { Stats } from "./Stats/Stats";
import { Testimonials } from "./Testimonials/Testimonials";

const data = {
  id: "O nas",
  imgUrl: image,
  subheading: " Dlaczego warto wybrać",
  heading: "Event Chef",
  stats: true,
};

export const About = () => {
  return (
    <>
      <Section
        id={data.id}
        imgUrl={data.imgUrl}
        subheading={data.subheading}
        heading={data.heading}
        stats={data.stats}
      />
      <div className="pt-6 pb-24 lg:pt-32 lg:pb-36">
        <Stats />
        <Testimonials />
      </div>
    </>
  );
};
