import { FiArrowRight } from "react-icons/fi";

interface CardOrganizationProps {
  items: string[];
}

export const CardOrganization: React.FC<CardOrganizationProps> = ({
  items,
}) => {
  return (

<div className="flex flex-col justify-center h-full gap-3 md:pt-4">
    <p className="text-xs tracking-wide text-zinc-500 lg:text-sm">
  Minimalne wymagania, pełna swoboda
</p>
 
        <ul className="flex flex-col gap-2 mt-4 text-zinc-300 text-md lg:text-lg md:text-sm">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-2 transition-colors group-hover:text-zinc-100"
        >
          <span className="mt-1 text-zinc-500"><FiArrowRight /></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
</div>


  );
};
