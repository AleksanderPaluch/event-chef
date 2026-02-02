import React from "react";

interface ProcessItem {
  time: string;
  label: string;
}

interface CardProcessProps {
  modalProcess?: ProcessItem[];
}

export const CardProcess: React.FC<CardProcessProps> = ({ modalProcess = [] }) => {
  return (
    <div className="flex flex-col items-center uppercase text-md gap-x-2 gap-y-0 text-zinc-300 md:text-md lg:text-xl">
      {modalProcess.map((item, index) => (
        <React.Fragment key={`${item.label}-${index}`}>
          <span className="transition-colors group-hover:text-zinc-100">
            {item.label}
          </span>

          {index < modalProcess.length - 0 && (
            <span className="text-zinc-600">
              {item.time}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
