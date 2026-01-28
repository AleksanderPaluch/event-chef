import { Chip } from "./Chip";
import { Motion } from "../Motion/Motion";
import { Button } from "../Button/Button";
import { Testimonials } from "../Testimonials/Testimonials";

interface TextContentProps {
  textTitle?: string;
  text?: string;
  chipsTitle?: string;
  chips?: string[];
  secondaryChipsTitle?: string;
  secondaryChips?: string[];
  stats?: boolean;
}

export const TextContent: React.FC<TextContentProps> = ({
  textTitle,
  text,
  chipsTitle,
  chips = [],
  secondaryChipsTitle,
  secondaryChips = [],
  stats = false,
}) => {
  const hasSecondary = secondaryChipsTitle && secondaryChips;

  return (
    <Motion>
      <div className="py-40 mx-auto   md:max-w-[90%]  lg:max-w-6xl ">
        {stats ? (
          <Testimonials />
        ) : (
          <>
        <h3 className="mb-6 text-5xl font-semibold text-center lg:text-7xl">
         {textTitle}
        </h3>
        <p className="max-w-lg mx-auto mb-8 text-center">
{text}
        </p>
            <Button text="Więcej" />
          </>
        )}
      </div>
    </Motion>






  );
};
