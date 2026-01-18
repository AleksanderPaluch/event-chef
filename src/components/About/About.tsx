import { ImageContent } from "../Content/ImageContent";
import image from "../../assets/nigiri.jpeg";
import { Testimonials } from "../Testimonials/Testimonials";

const data = {
  imgUrl: image,
  subheading: " Dlaczego warto wybrać",
  heading: "EventChef",
  stats: true,
};

export const About = () => {
  return (
    <ImageContent
      imgUrl={data.imgUrl}
      heading={data.heading}
      subheading={data.subheading}
      stats={data.stats}
    >
      <Testimonials />
    </ImageContent>
  );
};
