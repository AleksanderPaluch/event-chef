export const CardAccess = () => (
  <div className="flex flex-col items-center justify-between w-full max-w-md py-6 mb-16 lg:py-6 md:flex-row">
    <div className="flex flex-col items-center gap-1 py-4 w-[300px]">
      <span className="text-lg  uppercase tracking-[0.25em] opacity-90">
        Warszawa
      </span>
      <span className="text-sm lg:text-xs  uppercase tracking-[0.2em] opacity-50">
        Darmowy dojazd
      </span>
    </div>

    <div className="w-6 h-px mx-4 md:w-px md:h-6 shrink-0 bg-amber-500 dark:bg-amber-400" />

    <div className="flex flex-col items-center gap-1 px-2 py-4 w-[300px]">
      <span className="text-lg  uppercase tracking-[0.25em] opacity-90">
        Cała Polska
      </span>
      <span className="text-sm lg:text-xs  uppercase tracking-[0.2em] opacity-50">
        2 zł / km
      </span>
    </div>
  </div>
);