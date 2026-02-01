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
    <div className="flex flex-col justify-center h-full gap-3 md:gap-8 md:pt-4">
      {chipsTitle && (
        <Section title={chipsTitle} items={chips} />
      )}

      {secondaryChipsTitle && (
        <Section title={secondaryChipsTitle} items={secondaryChips} />
      )}
    </div>
  );
};


const Section = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => (
  <div>
    <p className="text-xs tracking-wide lg:text-sm text-zinc-500 ">
      {title}
    </p>

    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 lg:gap-x-2 text-md lg:text-xl md:text-md">
      {items.map((item, index) => (
        <React.Fragment key={item}>
          <Item>{item}</Item>
          {index < items.length - 1  && (
            <span className="text-zinc-600">•</span>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);


const Item = ({ children }: { children: string }) => (
  <span className="transition-colors text-zinc-300 group-hover:text-zinc-100 ">
    {children}
  </span>
);
