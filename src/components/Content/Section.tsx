import { ImageContent } from "./ImageContent";
import { TextContent } from "./TextContent";

export const Section = ({ imgUrl, subheading, heading, text }) => {
  return (
    <ImageContent imgUrl={imgUrl}  heading={heading} subheading={subheading}>
      <TextContent subheading={subheading} text={text} />
    </ImageContent>
  );
};
