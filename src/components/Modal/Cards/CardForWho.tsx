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
    <div className="flex justify-between text-md">
      {chipsTitle && (
        <Section  title={chipsTitle}>
          {chips.map((item, i) => (
            <Item key={i}>{item}</Item>
          ))}
        </Section>
      )}

      {secondaryChipsTitle && (
        <Section secondary title={secondaryChipsTitle}>
          {secondaryChips.map((item, i) => (
            <Item key={i}>{item}</Item>
          ))}
        </Section>
      )}
    </div>
  );
};

const Section = ({
  title,
  children,
  secondary = false,
}: {
  title: string;
  children: React.ReactNode;
  secondary?: boolean;
}) => (
  <div >
    <p className="mb-3 text-xs tracking-wide uppercase lg:text-lg text-zinc-500">
      {title}
    </p>
    <div className={`${secondary ? "text-right" : ""} flex flex-col gap-1.5` }>{children}</div>

  </div>
);

const Item = ({ children }: { children: string }) => (
  <span className="transition-colors text-zinc-300 group-hover:text-zinc-100">
    {children}
  </span>
);
