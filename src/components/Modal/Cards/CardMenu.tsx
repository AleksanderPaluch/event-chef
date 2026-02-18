import React from "react";

interface CardMenuProps {
  menu: string[];
  note?: string;
  omakase?: boolean;
  info?: string;
}

export const CardMenu: React.FC<CardMenuProps> = ({
  menu,
  note = "Dostępne menu vege oraz bez surowych ryb*",
  info = "Przykładowe menu dla 1 osoby (20 kawałkow sushi):",
  omakase = false,
}) => {
  return (
    <div className="card-menu group">
      {omakase ? (
        <p className="card-menu-info">
          Tworzone indywidualnie dopasowane do charakteru wydarzenia*
        </p>
      ) : (
        <p className="card-menu-info">{info}</p>
      )}

      <div className="card-menu-list">
        {menu.map((item, index) => (
          <React.Fragment key={item}>
            <span className="card-menu-item">{item}</span>
            {index < menu.length - 1 && (
              <span className="card-menu-separator">•</span>
            )}
          </React.Fragment>
        ))}
      </div>

      {omakase ? (
        <div className="card-menu-spacer" />
      ) : (
        <p className="card-menu-note">{note}</p>
      )}
    </div>
  );
};