import type { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  modalDescription: string;
  textTitle?: string;
}

export const TitleCard: React.FC<CardProps> = ({
  icon,
  textTitle,
  modalDescription,
}) => {
  return (
    <div className="relative px-4 py-2 bg-neutral-950 text-zinc-300 md:p-9 lg:h-80">
      {/* Іконка — peer (ВАЖЛИВО: ПЕРШОЮ) */}
      <span className="absolute z-30 text-2xl cursor-pointer peer right-2 top-2">
        {icon}
      </span>

      {/* Заголовок */}
      <h2 className="relative z-10 text-3xl uppercase">
        Poznaj <br /> {textTitle}
      </h2>

      {/* Tooltip ПІСЛЯ peer */}
      <p
        className="
          absolute left-0 right-0
          top-0
          lg:top-[calc(1.5rem+5rem)]
          z-20
          mt-2
          rounded-md bg-neutral-950
          px-2
          lg:px-7 py-2
        h-20
          opacity-0 translate-y-2
          pointer-events-none
          transition-all duration-300
          peer-hover:opacity-100
          peer-hover:translate-y-0
          text-xs italic fon text-zinc-500 lg:text-sm
        "
      >
        {modalDescription}
      </p>
    </div>
  );
};
