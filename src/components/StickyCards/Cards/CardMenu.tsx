export const CardMenu = ({ menu = [], omakase = false }: { menu: string[]; omakase?: boolean }) => {


  return (
    <div className="flex flex-col items-center justify-center w-full max-w-3xl">
      <p className="text-sm lg:text-xs  text-center uppercase tracking-[0.2em] opacity-50 mb-4">
        {omakase ? "Autorskie menu degustacyjne" : "Przykładowe menu dla 1 osoby:"}
      </p>
      <div className="flex flex-col items-center w-full gap-2 md:pl-6">
        {menu.map((item, i) => (
          <div key={item} className="flex items-center w-full max-w-md gap-4">
            {!omakase && (
              <span className="text-sm lg:text-xs  uppercase tracking-[0.2em] opacity-50 shrink-0">
                {i % 2 === 0 ? 6 : 8}<span className="text-[10px]">szt</span>
              </span>
            )}
            <div className="w-4 h-px opacity-100 md:w-6 bg-amber-500 dark:bg-amber-400" />
            <span className="text-lg  uppercase tracking-[0.2em] opacity-90">
              {item}
            </span>
          </div>
        ))}
      </div>
      <p className="text-sm lg:text-xs max-w-[320px] md:max-w-[420px] lg:max-w-sm f uppercase tracking-[0.2em] opacity-50 py-10 lg:py-6 text-justify">
        Każde menu jest tworzone indywidualnie dopasowane do charakteru wydarzenia*
      </p>
    </div>
  );
};