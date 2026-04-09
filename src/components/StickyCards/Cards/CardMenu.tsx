export const CardMenu = ({ menu = [], dark }: { menu: string[]; dark?: boolean }) => (
  <div className="flex flex-col items-center w-full max-w-sm gap-3">
    <p className={`text-xs uppercase tracking-[0.2em] font-semibold mb-2 ${dark ? "opacity-50" : "opacity-40"}`}>
      W skład menu wchodzi
    </p>
    {menu.map((item, i) => (
      <div
        key={item}
        className={`flex items-center justify-between w-full px-5 py-3 rounded-xl text-sm font-medium border ${
          dark
            ? "border-white/10 bg-white/5 text-white/90"
            : "border-black/10 bg-black/4 text-black/80"
        }`}
      >
        <span className={`text-xs font-mono opacity-40 mr-3`}>0{i + 1}</span>
        <span className="flex-1 text-center">{item}</span>
      </div>
    ))}
  </div>
);