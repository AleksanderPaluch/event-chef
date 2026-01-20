interface ChipProps {
  children: React.ReactNode;
}

export const Chip: React.FC<ChipProps> = ({ children }) => {
  return (
    <span
      className="
   
        inline-block
        bg-zinc-900
        text-zinc-300
        text-md lg:text-xl
        py-2 px-0 md:px-2
        font-semibold 
        transition-transform duration-200 ease-out

        rounded
       border-zinc-950
        text-center
      "
    >
      {children}
    </span>
  );
};
