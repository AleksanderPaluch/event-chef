export const CardOrganization = ({ items = [] }: { items: string[] }) => (
  <div className="flex flex-col items-center justify-center gap-2 py-12 mx-auto max-w-fit">
    {items.map((item, i) => (
      <div key={i} className="flex items-center  w-full max-w-[610px] gap-4">
        <div className="w-4 h-px md:w-6 shrink-0 bg-amber-500 dark:bg-amber-400" />
        <span className="text-lg lg:text-xl uppercase tracking-[0.1em] opacity-90">
          {item}
        </span>
      </div>
    ))}
  </div>
);