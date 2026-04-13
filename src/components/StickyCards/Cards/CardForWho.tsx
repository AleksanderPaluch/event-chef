import React from "react";

interface CardForWhoProps {
  chipsTitle?: string;
  chips?: string[];
  secondaryChipsTitle?: string;
  secondaryChips?: string[];
}

export const CardForWho = ({
  chipsTitle,
  chips = [],
  secondaryChipsTitle,
  secondaryChips = [],
}: CardForWhoProps) => (
  <div className="flex flex-col items-center justify-center w-full max-w-3xl gap-0 md:gap-8 sm:flex-row">
    {chipsTitle && (
      <Section title={chipsTitle} items={chips} align="left" />
    )}
    {chipsTitle && secondaryChipsTitle && (
      <div className="block w-16 h-px md:w-px md:h-16 shrink-0 bg-amber-500 dark:bg-amber-400" />
    )}
    {secondaryChipsTitle && (
      <Section title={secondaryChipsTitle} items={secondaryChips} align="right" />
    )}
  </div>
);

const Section = ({
  title,
  items,
  align,
}: {
  title: string;
  items: string[];
  align: "left" | "right";
}) => (
  <div className="flex flex-col items-center gap-3 px-2 py-4">
    <p className="text-sm lg:text-xs font-semibold text-center uppercase tracking-[0.2em] opacity-50">
      {title}
    </p>
    <div className="flex flex-col gap-1">
      {items.map((item) => (
        <span
          key={item}
          className={`text-lg lg:text-xl uppercase tracking-[0.25em] opacity-90 text-left ${
            align === "left" ? "md:text-left" : "md:text-right"
          }`}
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);