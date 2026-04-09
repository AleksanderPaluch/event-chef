export interface StickyCardsProps {
  chipsTitle?: string;
  chips?: string[];
  secondaryChipsTitle?: string;
  secondaryChips?: string[];
  menu?: string[];
  organization?: string[];
  cardsProcess?: ProcessItem[];
}

interface ProcessItem {
  time: string;
  label: string;
}


export const CardForWho = ({
  chipsTitle,
  chips = [],
  secondaryChipsTitle,
  secondaryChips = [],
}: Pick<StickyCardsProps, "chipsTitle" | "chips" | "secondaryChipsTitle" | "secondaryChips">) => (
  <div className="flex flex-col w-full max-w-xl gap-6">
    {chipsTitle && <ChipSection title={chipsTitle} items={chips} dark />}
    {secondaryChipsTitle && <ChipSection title={secondaryChipsTitle} items={secondaryChips} dark />}
  </div>
);

const ChipSection = ({
  title,
  items,
  dark,
}: {
  title: string;
  items: string[];
  dark?: boolean;
}) => (
  <div className="flex flex-col items-center gap-3">
    <p
      className="text-xs uppercase tracking-[0.2em] font-semibold opacity-50"
    >
      {title}
    </p>
    <div className="flex flex-wrap justify-center gap-2">
      {items.map((item) => (
        <span
          key={item}
          className={`px-4 py-1.5 rounded-full text-sm font-medium border ${
            dark
              ? "border-white/20 text-white/90 bg-white/5"
              : "border-black/15 text-black/80 bg-black/5"
          }`}
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);