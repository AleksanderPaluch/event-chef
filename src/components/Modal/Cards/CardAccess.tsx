export const CardAccess = () => {
  return (
    <div className="flex flex-col justify-center h-full gap-2 mb-6 text-center lg:gap-6">
      <div>
        <p className="h-5 transition-colors lg:h-6 text-md text-zinc-300 lg:text-xl group-hover:text-zinc-50 md:text-sm" >
          Warszawa
        </p>
        <span className="text-sm italic font-light tracking-wide lg:text-sm text-zinc-500">
          Darmowy dojazd
        </span>
      </div>

      <div className="h-px bg-zinc-900 w-[60%] mx-auto" />

      <div>
        <p className="h-5 transition-colors lg:h-6 text-md text-zinc-300 lg:text-xl group-hover:text-zinc-50 md:text-sm">
          Poza Warszawą
        </p>
        <span className="text-sm italic font-light tracking-wide lg:text-sm text-zinc-500">
          2 zł / km
        </span>
      </div>
    </div>
  );
};
