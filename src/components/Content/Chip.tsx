interface ChipProps {
  children: React.ReactNode;
}

export const Chip: React.FC<ChipProps> = ({ children }) => {
  return (
    <span
      className="inline-block px-0 py-2 font-semibold text-center transition-transform duration-200 ease-out border rounded bg-black/40 text-zinc-300 text-md lg:text-xl md:px-2 border-white/5"
    >
      {children}
    </span>
  );
};
