import { motion } from "framer-motion";
import { Button } from "../Button/Button";

/* =======================
   TYPES
======================= */

type FeatureVariant = "default" | "wedding";

interface Row {
  people: string;
  basic: string;
  premium: string;
  variant?: FeatureVariant;
}

interface CardsProps {
  rows: Row[];
  features: string[];
  featuresByVariant?: Record<FeatureVariant, string[]>;
}

/* =======================
   HELPERS
======================= */

const resolveFeatures = (
  rowVariant: FeatureVariant | undefined,
  baseFeatures: string[],
  variantMap?: Record<FeatureVariant, string[]>
): string[] => {
  if (rowVariant && variantMap?.[rowVariant]) {
    return variantMap[rowVariant];
  }
  return baseFeatures;
};

/* =======================
   COMPONENT
======================= */

export const Cards = ({
  rows,
  features,
  featuresByVariant,
}: CardsProps) => {
  return (
    <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
      {rows.map((row, index) => {
        const activeFeatures = resolveFeatures(
          row.variant,
          features,
          featuresByVariant
        );

        return (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04, y: -6 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="p-5 border sm:p-6 rounded-3xl border-white/10 bg-black/40 backdrop-blur hover:border-white/30"
          >
            <div className="flex flex-col h-full gap-4">
              {/* PEOPLE */}
              <div>
                <p className="text-xl font-semibold text-white">
                  {row.people}
                </p>
                <p className="text-xs text-white/60">
                  liczba osób
                </p>
              </div>

              {/* FEATURES */}
              <ul className="space-y-1 text-sm text-white/70">
                {activeFeatures.map((feature) => (
                  <li key={feature}>✔ {feature}</li>
                ))}
              </ul>

              {/* PRICES */}
              <div className="mt-auto space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs uppercase text-white/60">
                    Basic
                  </span>
                  <span className="text-2xl font-semibold text-white">
                    {row.basic} zł
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-xs uppercase text-white/60">
                    Premium
                  </span>
                  <span className="text-2xl font-semibold text-white">
                    {row.premium} zł
                  </span>
                </div>
              </div>

              {/* CTA */}
                <Button link text="Zamów" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
