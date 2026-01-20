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
    <Motion>
      <div className="py-4 px-4 md:py-10 lg:py-20 md:px-12  lg:px-20 mb-12  md:mb-16 md:mt-8 lg:mb-28 lg:mt-10     md:max-w-[90%]  lg:max-w-7xl  gap-8 md:gap-20 bg-zinc-900/20 rounded-3xl flex flex-col mx-auto">
        <Motion>
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 lg:gap-20  mx-auto ">
            <div className=" flex flex-col gap-2 lg:gap-4  md:min-w-[338px] ">
              <h2 className="text-2xl md:text-3xl font-bold ">{textTitle}</h2>
              <Button text="Więcej" />
            </div>
            <div className="flex align-middle items-center  ">
              <p className="text-lg lg:text-2xl text-justify italic font-light">
                &ldquo;{text}&rdquo;
              </p>
            </div>
          </div>
        </Motion>
        <Motion>
          <div className="flex flex-col lg:flex-row     mx-auto  gap-6 ">
            <div
              className={`${hasSecondary ? "lg:w-[60%] lg:min-w-[650px]" : "w-full"} `}
            >
              <p className="text-2xl md:text-3xl font-bold  mb-2 lg:mb-4">
                {chipsTitle}
              </p>
              <div
                className={`grid md:grid-cols-3 gap-2  ${hasSecondary ? " grid-cols-2  " : " grid-cols-1 "}  `}
              >
                {chips.map((chip, index) => (
                  <Chip key={index}>{chip}</Chip>
                ))}
              </div>
            </div>
            {hasSecondary && (
              <div className="lg:w-[70%] flex-1 flex flex-col lg:items-end ">
                <p className="text-2xl md:text-3xl font-bold  mb-2 lg:mb-4 lg:text-right">
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
    </Motion>
  );
};

// border-zinc-900 border-2 rounded-3xl//
