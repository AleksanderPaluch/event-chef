import React from "react";

interface CardMenuProps {
  menu: string[];
  note?: string;
  omakase?: boolean;
  info?: string;
}

export const CardMenu: React.FC<CardMenuProps> = ({
  menu,
  // noteSecond = "Zawsze indywidualne i dopasowane do wydarzenia",
  note = "Dostępne menu vege oraz bez surowych ryb*",
  info = "Przykładowe menu dla 1 osoby (20 kawałkow sushi):",
  omakase = false,
}) => {
  return (
    <div className="flex flex-col justify-between h-full ">
      {omakase ? (
        <p className="text-xs italic text-zinc-500 lg:text-sm">
           Tworzone indywidualnie dopasowane do charakteru
          wydarzenia*
        </p>
      ) : (
        <p className="text-xs italic fon text-zinc-500 lg:text-sm ">{info}</p>
      )}

      {/* Menu list */}
      <div className="flex flex-col items-center text-md gap-x-2 gap-y-0 text-zinc-300 lg:text-xl md:text-sm">
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

      {omakase ? (
        <span className="text-zinc-950">.</span>
      ) : (
        <p className="text-xs italic text-zinc-500 lg:text-sm">{note}</p>
      )}

      {/* <p className="text-xs italic text-zinc-500 lg:text-sm">
          {noteSecond}
        </p> */}
    </div>
  );
};
