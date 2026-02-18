import { FiArrowRight } from "react-icons/fi";

interface CardOrganizationProps {
  items: string[];
}



export const CardOrganization: React.FC<CardOrganizationProps> = ({
  items,
}) => {
  return (
    <div className="card-organization group">
      <p className="card-organization-title">
        Minimalne wymagania, pełna swoboda
      </p>

      <ul className="card-organization-list">
        {items.map((item, index) => (
          <li key={index} className="card-organization-item">
            <span className="card-organization-icon">
              <FiArrowRight />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};