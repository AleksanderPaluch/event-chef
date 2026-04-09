export const CardAccess = ({ dark }: { dark?: boolean }) => (
  <div className="flex items-center w-full max-w-sm gap-0">
    <div
      className={`flex-1 flex flex-col items-center gap-1.5 px-8 py-5 rounded-xl border ${
        dark
          ? "border-white/10 bg-white/5"
          : "border-black/10 bg-black/4"
      }`}
    >
      <p className={`text-base font-semibold ${dark ? "text-white/90" : "text-black/80"}`}>
        Warszawa
      </p>
      <span className={`text-xs font-medium px-3 py-1 rounded-full ${
        dark ? "bg-white/10 text-white/60" : "bg-black/8 text-black/50"
      }`}>
        Darmowy dojazd
      </span>
    </div>

    <div className={`w-px h-12 shrink-0 mx-4 ${dark ? "bg-white/15" : "bg-black/12"}`} />

    <div
      className={`flex-1 flex flex-col items-center gap-1.5 px-8 py-5 rounded-xl border ${
        dark
          ? "border-white/10 bg-white/5"
          : "border-black/10 bg-black/4"
      }`}
    >
      <p className={`text-base font-semibold ${dark ? "text-white/90" : "text-black/80"}`}>
        Poza Warszawą
      </p>
      <span className={`text-xs font-medium px-3 py-1 rounded-full ${
        dark ? "bg-white/10 text-white/60" : "bg-black/8 text-black/50"
      }`}>
        2 zł / km
      </span>
    </div>
  </div>
);