import image from "../../assets/About.jpg";

import { Section } from "../Content/Section";
import { Stats } from "./Stats/Stats";
import { Testimonials } from "./Testimonials/Testimonials";

const data = {
  id: "About",
  imgUrl: image,
  subheading: "Twój partner w organizacji  wydarzeń",
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
      <div className="section">
        <Stats />
        <Testimonials />
      </div>
    </>
  );
};
