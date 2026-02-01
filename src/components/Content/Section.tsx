import { Testimonials } from "../Testimonials/Testimonials";
import { ImageContent } from "./ImageContent";
import { TextContent } from "./TextContent";

interface SectionProps {
  id: string;
  imgUrl: string;
  subheading: string;
  heading: string;
  textTitle?: string;
  text?: string;
  description?: string;
  process?: string[];
  modalDescription?: string;
  menu?: string[];
  menuIMG?: string;
  modalProcess?: string[];
  organization?: string[];
  Access?: string[];
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
  description,
  process,
  modalDescription = "",
  menu = [],
  menuIMG = "",
  modalProcess = [],
  organization = [],
  Access = [],
  chipsTitle,
  chips,
  secondaryChipsTitle,
  secondaryChips,
  stats = false,
}) => {
  return (
    <section id={id}>
      <ImageContent
        imgUrl={imgUrl}
        heading={heading}
        subheading={subheading}
        stats={stats}
      >
        {stats ? (
          <Testimonials />
        ) : (
          <TextContent
            textTitle={textTitle}
            text={text}
            description={description}
            process={process}
            modalDescription={modalDescription}
            menu={menu}
            menuIMG={menuIMG}
            modalProcess={modalProcess}
            organization={organization}
            Access={Access}
            chipsTitle={chipsTitle}
            chips={chips}
            secondaryChipsTitle={secondaryChipsTitle}
            secondaryChips={secondaryChips}
          />
        )}
      </ImageContent>
    </section>
  );
};
