interface Row {
  people: string;
  basic: string;
  premium: string;
}

interface CardsProps {
  rows: Row[];
}

export const Cards = ({ rows }: CardsProps) => {
  return (
    <div className="mt-8 space-y-4">
      {rows.map((row, index) => (
        <div
          key={index}
          className="p-5 transition border rounded-3xl border-white/10 bg-black/40 backdrop-blur sm:p-6 hover:border-white/30"
        >
          {/* MAIN GRID */}
          <div
            className="
              grid gap-6
              grid-cols-1
              md:grid-cols-[1fr_2fr]
              lg:grid-cols-[160px_1fr_120px_140px_150px]
              items-center
            "
          >
            {/* PEOPLE */}
            <div>
              <p className="text-lg font-semibold text-white">
                {row.people}
              </p>
              <p className="text-xs text-white/60">
                liczba osób
              </p>
            </div>

            {/* FEATURES */}
            <ul className="space-y-1 text-sm text-white/70">
              <li>✔ Bezpłatny dojazd na terenie Warszawy</li>
              <li>✔ Adaptacyjne menu</li>
              <li>✔ Produkty premium</li>
            </ul>

            {/* BASIC */}
            <div className="flex justify-between lg:block">
              <span className="text-xs uppercase text-white/60 lg:hidden">
                Basic
              </span>
              <div className="text-right">
                <p className="hidden text-xs uppercase text-white/60 lg:block">
                  Basic
                </p>
                <p className="text-2xl font-semibold text-white lg:text-3xl">
                  {row.basic} zł
                </p>
              </div>
            </div>

            {/* PREMIUM */}
            <div className="flex justify-between lg:block">
              <span className="text-xs uppercase text-white/60 lg:hidden">
                Premium
              </span>
              <div className="text-right">
                <p className="hidden text-xs uppercase text-white/60 lg:block">
                  Premium
                </p>
                <p className="text-2xl font-semibold text-white lg:text-3xl">
                  {row.premium} zł
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="lg:pl-2">
              <button
                className="w-full py-3 text-sm font-medium transition border rounded-full border-white/20 hover:bg-zinc-300 hover:text-black"
               
              >
                <a  href="#Form">  + Zamów</a>
              
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
