export const CardOrganization = ({
  items = [],
  dark,
}: {
  items: string[];
  dark?: boolean;
}) => (
  <div className="flex flex-col w-full max-w-sm gap-3">
    {items.map((item, i) => (
      <div
        key={i}
        className={`flex items-start gap-3 px-5 py-3.5 rounded-xl text-sm border ${
          dark
            ? "border-white/10 bg-white/5 text-white/80"
            : "border-black/10 bg-black/4 text-black/70"
        }`}
      >
        <span
          className={`mt-0.5 w-1.5 h-1.5 rounded-full shrink-0 ${
            dark ? "bg-white/50" : "bg-black/40"
          }`}
        />
        {item}
      </div>
    ))}
  </div>
);
