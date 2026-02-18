import React from "react";

interface CardForWhoProps {
  chipsTitle?: string;
  chips?: string[];
  secondaryChipsTitle?: string;
  secondaryChips?: string[];
}

export const CardForWho: React.FC<CardForWhoProps> = ({
  chipsTitle,
  chips = [],
  secondaryChipsTitle,
  secondaryChips = [],
}) => {
  return (
    <div className="card-for-who group">
      {chipsTitle && <Section title={chipsTitle} items={chips} />}
      {secondaryChipsTitle && (
        <Section title={secondaryChipsTitle} items={secondaryChips} />
      )}
    </div>
  );
};

const Section = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <p className="card-for-who-title">{title}</p>

    <div className="card-for-who-items">
      {items.map((item, index) => (
        <React.Fragment key={item}>
          <Item>{item}</Item>
          {index < items.length - 1 && (
            <span className="card-for-who-separator">•</span>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

const Item = ({ children }: { children: string }) => (
  <span className="card-for-who-item">
    {children}
  </span>
);

