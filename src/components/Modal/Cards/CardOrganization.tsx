import { FiArrowRight } from "react-icons/fi";

interface CardOrganizationProps {
  items: string[];
}

export const CardOrganization: React.FC<CardOrganizationProps> = ({
  items,
}) => {
  return (
    <div className="">
      <p className="text-sm italic font-light tracking-wide lg:text-sm text-zinc-500">
        Minimalne wymagania, pełna swoboda
      </p>

      <ul className="flex flex-col gap-2 mt-8 tracking-tight lg:gap-2 lg:mt-8 text-zinc-300 text-md lg:text-xl md:text-sm">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-2 transition-colors group-hover:text-zinc-50"
          >
            <span className="mt-1 text-zinc-500">
              <FiArrowRight />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
