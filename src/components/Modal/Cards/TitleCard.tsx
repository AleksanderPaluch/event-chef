import type { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  modalDescription: string;
  textTitle: string;
}

export const TitleCard: React.FC<CardProps> = ({ icon, textTitle }) => {
  return (
    <div className="relative flex flex-col justify-between px-4 py-2 text-zinc-300 group bg-neutral-950 lg:h-80 md:p-9">
      <h2 className="text-3xl leading-tight uppercase lg:text-4xl">
        Poznaj
        <br />
        <span className="transition-colors duration-500 group-hover:text-red-500">
          {textTitle}
        </span>
      </h2>
      {/* <p>{modalDescription}</p> */}

      <span className="absolute z-10 text-2xl transition-colors right-2 top-2 text-zinc-300 group-hover:text-zinc-50">
        {icon}
      </span>
    </div>
  );
};
 