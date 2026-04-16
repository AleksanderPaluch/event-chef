import { motion } from "framer-motion";
import { Button } from "../Button/Button";

type FeatureVariant = "wedding";

interface Row {
  people: string;
  basic: string;
  premium: string;
  variant?: FeatureVariant;
}

interface CardsProps {
  rows: Row[];
  features: string[];
  featuresByVariant?: string[];
}

export const Cards = ({ rows, features, featuresByVariant }: CardsProps) => {
  return (
    <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] ">
      {rows.map((row, index) => {
        const isWedding = row.variant === "wedding";

        const activeFeatures =
          isWedding && featuresByVariant ? featuresByVariant : features;

        return (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04, y: -6 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="p-5 custom-border sm:p-6 rounded-3xl bg-zinc-50 dark:bg-[#010000]  backdrop-blur "
          >
            <div className="flex flex-col h-full gap-4">
              {/* PEOPLE */}
              <div>
                <p className="text-2xl font-semibold ">{row.people}</p>
                <p className="text-sm text-zinc-600 dark:text-white/60">
                  liczba osób
                </p>
              </div>

              {/* FEATURES */}
              <ul className="mt-2 space-y-2 text-sm font-light text-zinc-700 dark:text-white/70">
                {activeFeatures.map((feature) => (
                  <li key={feature}>
                    <span className="mr-1 font-light text-green-800">✔</span>{" "}
                    {feature}
                  </li>
                ))}
              </ul>

              {/* PRICES */}
              <div className="py-2 mt-auto space-y-2 md:py-4 ">
                {row.basic && (
                  <div className="flex items-baseline justify-between">
                    <span className="uppercase text-md text-zinc-800 dark:text-white/60">
                      Basic
                    </span>
                    <span className="text-2xl font-semibold ">
                      {row.basic} zł
                    </span>
                  </div>
                )}

                <div className="flex items-baseline justify-between">
                  <span className="uppercase text-md text-zinc-800 dark:text-white/60">
                    Premium
                  </span>
                  <span className="text-2xl font-semibold ">
                    {row.premium} zł
                  </span>
                </div>
              </div>

              {/* CTA */}
              <Button  order text="Poproś o ofertę" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
