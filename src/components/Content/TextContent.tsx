import { FiArrowUpRight } from "react-icons/fi";
import { Chip } from "./Chip";

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
    <div className="flex flex-col md:max-w-[90%] lg:max-w-5xl mx-auto py-4 md:py-8 ">
      <div className="flex flex-col md:flex-row gap-2 md:gap-6 lg:gap-20  ">
        <div className=" flex flex-col gap-2 lg:gap-4  md:min-w-[338px] ">
          <h2 className=" text-3xl font-bold ">{textTitle}</h2>
          <button className="bg-zinc-800 py-2 text-xl  transition-colors hover:bg-zinc-700 ">
            Więcej <FiArrowUpRight className="inline" />
          </button>
        </div>
        <div className="flex ">
          <p className="text-lg md:text-xl lg:text-2xl text-justify">{text}</p>
        </div>
      </div>
      {/* <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <p>{chipsTitle}</p>
          <div className="flex flex-wrap gap-2">
            {chips.map((chip, index) => (
              <Chip key={index}>{chip}</Chip>
            ))}
          </div>
        </div>
        {hasSecondary && (
          <div className="flex-1">
            <p>{secondaryChipsTitle}</p>
            <div className="flex flex-wrap gap-2">
              {secondaryChips.map((chip, index) => (
                <Chip key={index}>{chip}</Chip>
              ))}
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
};
