export const CardAccess = () => {
  return (
    <div className="flex flex-col gap-6 mt-6 text-center">
      <div>
        <p className="text-zinc-200 lg:text-xl" >
          Warszawa
        </p>
        <span className="mb-1 text-xs tracking-wide uppercase text-zinc-500">
          Darmowy dojazd
        </span>
      </div>

      <div className="h-px bg-zinc-800" />

      <div>
        <p className="mb-1 text-xs tracking-wide uppercase text-zinc-500">
          Poza Warszawą
        </p>
        <span className="text-zinc-200 lg:text-xl">
          2 zł / km
        </span>
      </div>
    </div>
  );
};
