import React from "react";

interface ProcessItem {
  time: string;
  label: string;
}

export const CardProcess = ({ steps = [] }: { steps: readonly ProcessItem[] }) => (
  <div className="flex flex-col items-center justify-between w-full max-w-3xl gap-1 mx-auto sm:flex-row">
    {steps.map((step, i) => (
      <React.Fragment key={i}>
        <div className="flex flex-col items-center gap-1 px-0 py-4 md:px-2">
          <p className="text-lg text-center uppercase tracking-[0.2em] text-heading max-w-[350px]">
            {step.label}
          </p>
          <span className="text-sm lg:text-xs text-center uppercase tracking-[0.2em] text-muted">
            {step.time}
          </span>
        </div>
        {i < steps.length - 1 && (
          <div className="w-12 h-px shrink-0 bg-amber-500 dark:bg-amber-400" />
        )}
      </React.Fragment>
    ))}
  </div>
);