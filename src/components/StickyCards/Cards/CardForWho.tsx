interface CardForWhoProps {
  chips?: readonly string[];
  secondaryChips?: readonly string[];
  chipsTitle?: string;
  secondaryChipsTitle?: string;
}

export const CardForWho = ({
  chipsTitle,
  chips = [],
  secondaryChipsTitle,
  secondaryChips = [],
}: CardForWhoProps) => (
  <div className="flex flex-col items-center justify-between w-full max-w-2xl mx-auto lg:max-w-3xl sm:flex-row">
    {chipsTitle && <Section title={chipsTitle} items={chips} align="left" />}
    {chipsTitle && secondaryChipsTitle && (
      <div className="block w-16 h-px md:w-px md:h-16 shrink-0 bg-amber-500 dark:bg-amber-400" />
    )}
    {secondaryChipsTitle && (
      <Section
        title={secondaryChipsTitle}
        items={secondaryChips}
        align="right"
      />
    )}
  </div>
);

const Section = ({
  title,
  items,
  align,
}: {
  title: string;
  items: readonly string[];
  align: "left" | "right";
}) => (
  <div className="flex flex-col gap-1 px-2 py-4 md:gap-3 min-w-[300px]">
    <p className="text-sm lg:text-xs text-center uppercase tracking-[0.2em] text-muted dark:opacity-50">
      {title}
    </p>
    <div className="flex flex-col gap-1">
      {items.map((item) => (
        <span
          key={item}
          className={`text-lg uppercase tracking-[0.2em] text-heading text-left ${
            align === "left" ? "md:text-left" : "md:text-right"
          }`}
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);
