
import { ImageContent } from "./ImageContent";
import { TextContent } from "./TextContent";

interface SectionProps {
  id: string;
  imgUrl: string;
  subheading: string;
  heading: string;
  textTitle?: string;
  text?: string;
  chipsTitle?: string;
  chips?: string[];
  secondaryChipsTitle?: string;
  secondaryChips?: string[];
  stats?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  id,
  imgUrl,
  subheading,
  heading,
  textTitle,
  text,
  chipsTitle,
  chips,
  secondaryChipsTitle,
  secondaryChips,
  stats = false,
}) => {
  return (
    <section id={id}>
      <ImageContent imgUrl={imgUrl} heading={heading} subheading={subheading}>
        <TextContent
          stats={stats} 
          textTitle={textTitle}
          text={text}
          chipsTitle={chipsTitle}
          chips={chips}
          secondaryChipsTitle={secondaryChipsTitle}
          secondaryChips={secondaryChips}
        />
      </ImageContent>
     
    </section>
  );
};
