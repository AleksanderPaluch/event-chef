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
    <div className="flex flex-col gap-6 px-3 text-md lg:px-6">
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
    <p className="text-xs tracking-wide uppercase lg:text-base text-zinc-500 ">
      {title}
    </p>

    <div className="flex flex-wrap items-center gap-x-4">
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
  <span className="transition-colors text-md text-zinc-300 group-hover:text-zinc-100 lg:text-xl">
    {children}
  </span>
);
