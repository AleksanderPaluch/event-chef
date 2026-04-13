import React from "react";

interface ProcessItem {
  time: string;
  label: string;
}

export const CardProcess = ({ steps = [] }: { steps: ProcessItem[] }) => (
  <div className="flex flex-col items-center justify-center w-full max-w-3xl gap-0 sm:flex-row">
    {steps.map((step, i) => (
      <React.Fragment key={i}>
        <div className="flex flex-col items-center gap-1 px-2 py-4">
          <p className="text-lg font-semibold text-center  uppercase tracking-[0.2em]  opacity-90">
            {step.label}
          </p>
          <span className="text-sm text-zinc-400 dark:text-zinc-500">
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