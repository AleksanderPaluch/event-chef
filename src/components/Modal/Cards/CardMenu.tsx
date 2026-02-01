import React from "react";

interface CardMenuProps {
  menu: string[];
  note?: string;

  info?: string;
}

export const CardMenu: React.FC<CardMenuProps> = ({
  menu,

  note = "dostępne menu vege oraz bez surowych ryb*",
  info = "przykładowe menu dla 1 osoby (20 kawałkow sushi)*:",
}) => {
  return (
    <div className="flex flex-col justify-between h-full md:pt-4">
      <p className="text-xs tracking-wide text-zinc-500 lg:text-sm ">
        {info}
      </p>

      {/* Menu list */}
      <div className="flex flex-col items-center uppercase text-md gap-x-2 gap-y-0 text-zinc-300 md:text-md lg:text-xl">
        {menu.map((item, index) => (
          <React.Fragment key={item}>
            <span className="transition-colors group-hover:text-zinc-100">
              {item}
            </span>
            {index < menu.length - 1 && (
              <span className="text-zinc-600">•</span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Note */}
    

        <p className="text-xs italic tracking-wide text-zinc-500 lg:text-sm">
          {note}
        </p>

    </div>
  );
};
