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
      <div className="py-4 px-4 md:py-10 lg:py-20 md:px-12  lg:px-8 mb-12  md:mb-16 md:mt-8 lg:mb-28 lg:mt-10     md:max-w-[90%]  lg:max-w-[1200px]  gap-8 md:gap-20  border border-white/5 rounded-3xl flex flex-col mx-auto">
        {stats ? (
          <Testimonials />
        ) : (
          <>
            {" "}
            <Motion>
              <div className="flex flex-col gap-2 mx-auto md:flex-row md:gap-6 lg:gap-12 ">
                <div className=" flex flex-col gap-2 lg:gap-4  md:min-w-[338px] ">
                  <h2 className="text-2xl font-bold md:text-3xl ">
                    {textTitle}
                  </h2>
                  <Button text="Więcej" />
                </div>
                <div className="flex align-middle ">
                  <p className="text-lg italic font-light text-justify lg:text-2xl">
                    &ldquo;{text}&rdquo;
                  </p>
                </div>
              </div>
            </Motion>
            <Motion>
              <div className="flex flex-col gap-6 mx-auto lg:gap-2 lg:flex-row ">
                <div
                  className={`${hasSecondary ? "lg:w-[60%] lg:min-w-[650px]" : "w-full"} `}
                >
                  <p className="mb-2 text-2xl font-bold md:text-3xl lg:mb-4">
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
                    <p className="mb-2 text-2xl font-bold md:text-3xl lg:mb-4 lg:text-right">
                      {secondaryChipsTitle}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {secondaryChips.map((chip, index) => (
                        <Chip key={index}>{chip}</Chip>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Motion>
          </>
        )}
      </div>
    </Motion>
  );
};


