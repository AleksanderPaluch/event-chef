import { FiArrowUpRight } from "react-icons/fi";

interface TextContentProps {
  textTitle: string;
  text: string;
}

export const TextContent: React.FC<TextContentProps> = ({
  textTitle,
  text,
}) => (
  <div className="mx-auto flex flex-col max-w-6xl md:flex-row gap-4 md:gap-2 px-1 md:px-6  lg:pb-24 lg:pt-12 ">
    <div className="flex flex-col gap-4 w-full ">
      <h2 className=" text-3xl font-bold ">{textTitle}</h2>
      <button className="w-full  bg-zinc-800 px-9 py-4 text-xl  transition-colors hover:bg-neutral-700 md:w-fit">
        Więcej <FiArrowUpRight className="inline" />
      </button>
    </div>

    <div className="">
      <p className=" text-xl  md:text-2xl text-justify">{text}</p>
    </div>
  </div>
);
