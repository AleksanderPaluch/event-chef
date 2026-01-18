import { ImageContent } from "../Content/ImageContent";
import image from "../../assets/nigiri.jpeg";

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
    />
   
  
  );
};
