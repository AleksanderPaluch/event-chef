interface ChipProps {
  children: React.ReactNode;
}

export const Chip: React.FC<ChipProps> = ({ children }) => {
  return (
    <span
      className="
   inline-block rounded bg-zinc-500 text-sm px-2 py-1  md:px-4 md:py-2  md:text-lg font-semibold uppercase gap-4"
    >
      {children}
    </span>
  );
};
