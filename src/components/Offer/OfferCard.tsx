import { motion } from "framer-motion";
import { Button } from "../Button/Button";
import type { PriceTier } from "./Offer";

interface OfferCardProps {
  title: string;

  features: string[];
  pricing?: PriceTier;
}

export const OfferCard = ({ title,  features, pricing }: OfferCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="p-5 sm:p-4 custom-border rounded-3xl bg-zinc-50 dark:bg-[#010000]"
    >
      <div className="flex flex-col h-full gap-4">

        {/* Header */}
        <div>
          <p className="text-3xl font-semibold">{title}</p>
          <p className=" text-xs lg:text-[9px] tracking-[0.2em] uppercase font-semibold text-amber-500 dark:text-amber-400">
        typ wydarzenia
          </p>
        </div>

        {/* Features */}
        <ul className="mt-1 space-y-2 text-sm font-light lg:text-xs text-zinc-700 dark:text-white/70">
          {features.map((f) => (
            <li key={f}>
              <span className="mr-1 text-green-700">✔</span> {f}
            </li>
          ))}
        </ul>

        {/* Prices */}
        <div className="pt-4 mt-auto space-y-2 ">
          {pricing ? (
            <>
              {pricing.basic && (
                <div className="flex items-baseline justify-between">
                  <span className="text-sm uppercase text-zinc-500 dark:text-white/50">Basic</span>
                  <span className="text-2xl font-semibold">{pricing.basic} zł</span>
                </div>
              )}
              <div className="flex items-baseline justify-between">
                <span className="text-sm uppercase text-zinc-500 dark:text-white/50">Premium</span>
                <span className="text-2xl font-semibold">{pricing.premium} zł</span>
              </div>
     
            </>
          ) : (
            <p className="text-sm italic text-zinc-400 dark:text-white/30">
              Zapytaj o wycenę
            </p>
          )}
        </div>

        {/* CTA */}
        <Button order text="Zapytaj o wycenę" />
      </div>
    </motion.div>
  );
};