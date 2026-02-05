import React from "react";

interface CardMenuProps {
  menu: string[];
  note?: string;

  info?: string;
}

export const CardMenu: React.FC<CardMenuProps> = ({
  menu,

  note = "Dostępne menu vege oraz bez surowych ryb*",
  info = "Przykładowe menu dla 1 osoby (20 kawałkow sushi):",
}) => {
  return (
    <div className="flex flex-col justify-between h-full ">
      <p className="text-xs italic fon text-zinc-500 lg:text-sm ">
        {info}
      </p>

      {/* Menu list */}
      <div className="flex flex-col items-center text-md gap-x-2 gap-y-0 text-zinc-300 md:text-md lg:text-xl">
        {menu.map((item, index) => (
          <React.Fragment key={item}>
            <span className="transition-colors group-hover:text-zinc-50">
              {item}
            </span>
            {index < menu.length - 1 && (
              <span className="text-zinc-600">•</span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Note */}
    

        <p className="text-xs italic text-zinc-500 lg:text-sm">
          {note}
        </p>

    </div>
  );
};
