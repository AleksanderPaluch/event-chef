import React from "react";

interface ProcessItem {
  time: string;
  label: string;
}

export const CardProcess = ({ steps = [] }: { steps: ProcessItem[] }) => (
  <div className="flex flex-col items-center justify-between w-full max-w-3xl gap-0 sm:flex-row">
    {steps.map((step, i) => (
      <React.Fragment key={i}>
        <div className="flex flex-col items-center gap-1 px-0 py-4 md:px-2">
          <p className="text-lg lg:text-xl text-center  uppercase tracking-[0.2em]  opacity-90">
            {step.label}
          </p>
          <span className="text-sm lg:text-xs font-semibold text-center uppercase tracking-[0.2em] opacity-60">
            {step.time}
          </span>
        </div>
        {i < steps.length - 1 && (
          <div className="hidden w-12 h-px sm:block shrink-0 bg-amber-500 dark:bg-amber-400" />
        )}
      </React.Fragment>
    ))}
  </div>
);