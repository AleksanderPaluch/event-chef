import { ImageContent } from "../Content/ImageContent";
import image from "../../assets/chefknife2.jpg";
import { Testimonials } from "../Testimonials/Testimonials";

const data = {
  id: "O nas",
  imgUrl: image,
  subheading: " Dlaczego warto wybrać",
  heading: "EventChef",
  stats: true,
};

export const About = () => {
  return (
    <section id={data.id}>
      <ImageContent
        imgUrl={data.imgUrl}
        heading={data.heading}
        subheading={data.subheading}
        stats={data.stats}
      >
        <Testimonials />
      </ImageContent>
    </section>
  );
};
