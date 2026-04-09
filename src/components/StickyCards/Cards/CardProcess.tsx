import React from "react";
import { FiClock } from "react-icons/fi";

interface ProcessItem {
  time: string;
  label: string;
}

export const CardProcess = ({
  steps = [],
  dark,
}: {
  steps: ProcessItem[];
  dark?: boolean;
}) => (
  <div className="flex flex-col items-center justify-center w-full max-w-lg gap-0 sm:flex-row">
    {steps.map((step, i) => (
      <React.Fragment key={i}>
        <div className="flex flex-col items-center gap-2 px-6 py-4">
          <div
            className={`flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1 rounded-full border ${
              dark
                ? "border-white/20 bg-white/8 text-white/70"
                : "border-black/15 bg-black/5 text-black/60"
            }`}
          >
            <FiClock className="text-[11px]" />
            {step.time}
          </div>
          <p
            className={`text-sm font-medium text-center ${
              dark ? "text-white/90" : "text-black/80"
            }`}
          >
            {step.label}
          </p>
        </div>
        {i < steps.length - 1 && (
          <div
            className={`hidden sm:block w-8 h-px shrink-0 ${
              dark ? "bg-white/20" : "bg-black/15"
            }`}
          />
        )}
      </React.Fragment>
    ))}
  </div>
);