import React from "react";

interface ProcessItem {
  time: string;
  label: string;
}

interface CardProcessProps {
  modalProcess?: ProcessItem[];
}

export const CardProcess: React.FC<CardProcessProps> = ({
  modalProcess = [],
}) => {
  return (
    <div className="card-process group">
      {modalProcess.map((item, index) => (
        <React.Fragment key={`${item.label}-${index}`}>
          <p className="card-process-label">
            {item.label}
          </p>

          {index < modalProcess.length  && (
            <span className="card-process-time">
              {item.time}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};