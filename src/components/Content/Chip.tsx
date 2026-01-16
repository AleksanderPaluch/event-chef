interface ChipProps {
  children: React.ReactNode;
}

export const Chip: React.FC<ChipProps> = ({ children }) => {
  return (
    <span
      className="
   inline-block  bg-zinc-700 text-sm px-2 py-1  lg:px-6 lg:py-2  md:text-md lg:text-lg font-semibold uppercase gap-4"
    >
      {children}
    </span>
  );
};
