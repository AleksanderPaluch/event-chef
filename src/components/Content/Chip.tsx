interface ChipProps {
  children: React.ReactNode;
}

export const Chip: React.FC<ChipProps> = ({ children }) => {
  return (
    <span
      className="
        inline-block
        bg-zinc-900
        text-sm lg:text-xl
        py-2 px-0 md:px-2
        font-semibold 
        transition-transform duration-200 ease-out
        hover:scale-110
      
        text-center
      "
    >
      {children}
    </span>
  );
};
