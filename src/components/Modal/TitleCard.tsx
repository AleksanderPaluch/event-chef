import type { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
}

export const TitleCard: React.FC<CardProps> = ({ icon }) => {
  return (
    <div className="relative flex flex-col justify-between text-zinc-300 group bg-neutral-950 md:h-80 md:p-9">
      <h2 className="text-4xl leading-tight uppercase">
        Poznaj
        <br />
        <span className="transition-colors duration-500 group-hover:text-red-500">
          Live Cooking
        </span>
      </h2>

      <span className="absolute z-10 text-2xl transition-colors right-3 top-4 text-zinc-300 group-hover:text-zinc-50">
        {icon}
      </span>
    </div>
  );
};
