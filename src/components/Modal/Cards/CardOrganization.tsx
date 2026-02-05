import { FiArrowRight } from "react-icons/fi";

interface CardOrganizationProps {
  items: string[];
}

export const CardOrganization: React.FC<CardOrganizationProps> = ({
  items,
}) => {
  return (
    <div className="">
      <p className="text-xs italic font-light tracking-wide lg:text-sm text-zinc-500">
        Minimalne wymagania, pełna swoboda
      </p>

      <ul className="flex flex-col gap-3 mt-7 lg:gap-4 lg:mt-12 text-zinc-300 text-md lg:text-lg md:text-sm">
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
