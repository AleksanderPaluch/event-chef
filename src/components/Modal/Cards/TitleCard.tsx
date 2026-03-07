import type { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  modalDescription: string;
  textTitle?: string;
}

export const TitleCard: React.FC<CardProps> = ({
  icon,
  textTitle,
  modalDescription,
}) => {
  return (
    <div className="title-card group">
      <span className="title-card-icon peer">
        {icon}
      </span>

      <h2 className="title-card-title">
        Poznaj <br /> {textTitle}
      </h2>

      {/* <p className="title-card-description">
        {modalDescription}
      </p> */}
    </div>
  );
};

