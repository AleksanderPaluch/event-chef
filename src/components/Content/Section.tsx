import { ImageContent } from "./ImageContent";
import { TextContent } from "./TextContent";

interface SectionProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  textTitle: string;
  text: string;
}

export const Section: React.FC<SectionProps> = ({ imgUrl, subheading, heading, textTitle, text }) => {
  return (
    <ImageContent imgUrl={imgUrl}  heading={heading} subheading={subheading}>
      <TextContent textTitle={textTitle} text={text} />
    </ImageContent>
  );
};
