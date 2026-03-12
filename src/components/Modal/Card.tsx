import type { ReactNode } from "react";

interface CardProps {
  title: string;
  icon: ReactNode;
  children?: ReactNode;
  src?: string;
}

export const Card: React.FC<CardProps> = ({ title, icon, children }) => {
  return (
<div className="modal-card modal-card-hover group">

  <div className="modal-card-header">
    <p className="modal-card-title">{title}</p>
    <span className="modal-card-icon">{icon}</span>
  </div>

  <div className="modal-card-body">
    {children}
  </div>

  {/* {src && (
    <div
      className="modal-card-image-overlay"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  )} */}

  <Corners />
</div>
  );
};

const Corners = () => (
  <>
    <span className="modal-card-corner-v left-[1px] top-[1px] origin-top" />
    <span className="modal-card-corner-h left-[1px] top-[1px] origin-left" />

    <span className="modal-card-corner-v bottom-[1px] right-[1px] origin-bottom" />
    <span className="modal-card-corner-h bottom-[1px] right-[1px] origin-right" />

    <span className="modal-card-corner-v bottom-[1px] left-[1px] origin-bottom" />
    <span className="modal-card-corner-h bottom-[1px] left-[1px] origin-left" />

    <span className="modal-card-corner-v right-[1px] top-[1px] origin-top" />
    <span className="modal-card-corner-h right-[1px] top-[1px] origin-right" />
  </>
);
