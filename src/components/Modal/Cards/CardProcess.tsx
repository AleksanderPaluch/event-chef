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
    <div className="flex flex-col items-center justify-center h-full mb-4 text-md text-zinc-300 lg:text-xl md:text-sm">
      {modalProcess.map((item, index) => (
        <React.Fragment key={`${item.label}-${index}`}>
          <p className="transition-colors group-hover:text-zinc-50">
            {item.label}
          </p>

          {index < modalProcess.length - 0 && (
            <span className="mb-2 text-xs italic font-light tracking-wide lg:text-sm text-zinc-500">
              {item.time}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
