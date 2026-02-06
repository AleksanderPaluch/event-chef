import { motion } from "framer-motion";
import { Button } from "../Button/Button";

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
    <div
      className="
        grid gap-3
        [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]
      "
    >
      {rows.map((row, index) => (
        <motion.div
          key={index}
          whileHover={{
            scale: 1.04,
            y: -6,
          }}
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 22,
          }}
          className="p-6 border rounded-3xl border-white/10 bg-black/40 backdrop-blur hover:border-white/30"
        >
          <div className="flex flex-col h-full gap-4">
            {/* PEOPLE */}
            <div>
              <p className="text-xl font-semibold text-white">{row.people}</p>
              <p className="text-sm text-zinc-500">liczba osób</p>
            </div>

            {/* FEATURES */}
            <ul className="space-y-1 text-md lg:text-xs text-white/70">
        
              <li>✔ Indywidualne menu</li>
              <li>✔ Produkty premium</li>
                    <li>✔ Bezpłatny dojazd na terenie Warszawy</li>
            </ul>

            {/* PRICES */}
            <div className="flex flex-col gap-4 my-4 mt-auto lg:my-5">
              <div className="flex flex-col ">
                <p className="text-lg uppercase text-zinc-500">Basic</p>
                <div className="">
                  <p className="text-2xl font-semibold text-white h-7 ">
                    {row.basic} zł
                    <span className="text-sm text-zinc-500"> / osoba</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col ">
                <p className="text-lg uppercase text-zinc-500">Premium</p>
                <div className="">
                  <p className="text-2xl font-semibold text-white h-7 ">
                    {row.premium} zł
                    <span className="text-sm text-zinc-500"> / osoba</span>
                  </p>
                </div>
              </div>
            </div>

            {/* 
            <div className="flex w-full gap-4 mt-auto">
                <div className="w-full text-center">
                  <p className="text-xl text-white/60">Basic</p>
                  <p className="text-lg text-white">od {row.basic} zł </p>
                       <p className="text-xs text-white/60">osoba</p>
                </div>
                <div className="w-full text-center">
                  <p className="text-xs text-white/60">Premium</p>
                   <p className="text-xs text-white">od {row.premium} zł / osoba</p>
                </div>
            </div> */}

            {/* CTA */}
    <Button link text="Zamów" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
