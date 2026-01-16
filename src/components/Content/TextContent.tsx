import { Chip } from "./Chip";
import { Motion } from "../Motion/Motion";
import { Button } from "../Button/Button";

interface TextContentProps {
  textTitle: string;
  text: string;
  chipsTitle: string;
  chips: string[];
  secondaryChipsTitle?: string;
  secondaryChips?: string[];
}

export const TextContent: React.FC<TextContentProps> = ({
  textTitle,
  text,
  chipsTitle,
  chips,
  secondaryChipsTitle,
  secondaryChips,
}) => {
  const hasSecondary = secondaryChipsTitle && secondaryChips;

  return (
    <div className="flex flex-col   mx-auto py-4 md:py-8 md:max-w-[90%]  lg:max-w-6xl mx-auto gap-4 md:gap-24">
      <Motion>
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 lg:gap-20 md:max-w-[90%]  lg:max-w-6xl mx-auto ">
          <div className=" flex flex-col gap-2 lg:gap-4  md:min-w-[338px] ">
            <h2 className=" text-3xl font-bold ">{textTitle}</h2>
            <Button text="Więcej" />
          </div>
          <div className="flex align-middle items-center  ">
            <p className="text-lg md:text-xl lg:text-2xl text-justify italic">
              &ldquo;{text}&rdquo;
            </p>
          </div>
        </div>
      </Motion>
      <Motion>
        <div className="flex flex-col md:flex-row pb-4 md:pb-8  md:max-w-[90%]  lg:max-w-full mx-auto lg:mx-0 gap-4">
          <div className=" lg:min-w-[650px] ">
            <p className="text-lg md:text-xl lg:text-3xl font-bold  mb-2 lg:mb-4">
              {chipsTitle}
            </p>
            <div className="grid  grid-cols-3 gap-2">
              {chips.map((chip, index) => (
                <Chip key={index}>{chip}</Chip>
              ))}
            </div>
          </div>
          {hasSecondary && (
            <div className="w-[70%] flex-1 flex flex-col md:items-end ">
              <p className="text-lg md:text-xl lg:text-3xl font-bold mb-2 lg:mb-4 md:text-right">
                {secondaryChipsTitle}
              </p>
              <div className="grid  grid-cols-2 gap-2">
                {secondaryChips.map((chip, index) => (
                  <Chip key={index}>{chip}</Chip>
                ))}
              </div>
            </div>
          )}
        </div>
      </Motion>
    </div>
  );
};
