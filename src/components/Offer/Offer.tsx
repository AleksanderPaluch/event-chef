import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Motion } from "../Motion/Motion";
import { Button } from "../Button/Button";

export type PeopleTab = "8-14" | "15-19" | "20-29" | "30+";

export interface PriceTier {
  basic?: string;
  premium: string;
}

export interface OfferData {
  title: string;
  callout: string;
  features: string[];
  pricing: Partial<Record<PeopleTab, PriceTier>>;
}

export const PEOPLE_TABS: PeopleTab[] = ["8-14", "15-19", "20-29", "30+"];

export const OFFERS: OfferData[] = [
  {
    title: "Live Cooking",
    callout: "Sushi na żywo",
    features: ["Indywidualne menu", "Produkty premium", "Pełna organizacja kulinarna"],
    pricing: {
      "8-14":  { basic: "130", premium: "140" },
      "15-19": { basic: "120", premium: "130" },
      "20-29": { basic: "110", premium: "120" },
      "30+":   { basic: "100", premium: "110" },
    },
  },
  {
    title: "Masterclass",
    callout: "Warsztaty sushi",
    features: ["Interaktywny pokaz", "Nauka krok po kroku", "Degustacja przygotowanych dań"],
    pricing: {
      "8-14":  { basic: "140", premium: "150" },
      "15-19": { basic: "130", premium: "140" },
      "20-29": { basic: "120", premium: "130" },
      "30+":   { basic: "110", premium: "120" },
    },
  },
  {
    title: "Omakase",
    callout: "Ekskluzywna kolacja",
    features: ["Autorskie menu Omakase", "Sezonowe składniki najwyższej jakości", "Indywidualny serwis szefa"],
    pricing: {
      "8-14":  { premium: "350" },
      "15-19": { premium: "300" },
     
    },
  },
  {
    title: "Wesela",
    callout: "Catering weselny",
    features: ["Specjalne menu weselne", "Sushi w formie bufetu", "Realizacja na terenie całej Polski"],
    pricing: {
      "20-29": { basic: "90", premium: "110" },
      "30+":   { basic: "70", premium: "90" },
    },
  },
];

// ─── Tabs ─────────────────────────────────────────────────────────────────────

const PeopleTabs = ({
  tabs,
  selected,
  setSelected,
}: {
  tabs: PeopleTab[];
  selected: PeopleTab;
  setSelected: (t: PeopleTab) => void;
}) => (
  <div className="flex justify-between gap-0 md:justify-start">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => setSelected(tab)}
        className={`relative px-2 md:px-6 py-3 text-sm tracking-wide transition-colors duration-200 ${
          selected === tab
            ? "text-zinc-900 dark:text-zinc-100"
            : "text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300"
        }`}
      >
        {tab} os.
        {selected === tab && (
          <motion.span
            layoutId="offer-tab-underline"
            className="absolute bottom-0 left-0 right-0 h-px bg-zinc-900 dark:bg-zinc-100"
          />
        )}
      </button>
    ))}
  </div>
);

// ─── Animated price value ─────────────────────────────────────────────────────

const PriceValue = ({ value, selectedPeople }: { value: string; selectedPeople: PeopleTab }) => (
  <AnimatePresence mode="wait">
    <motion.span
      key={`${value}-${selectedPeople}`}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="text-2xl font-light text-zinc-900 dark:text-zinc-100"
    >
      {value}{" "}
      <span className="text-sm text-zinc-400">zł / os.</span>
    </motion.span>
  </AnimatePresence>
);

// ─── Animated collapsed price preview ────────────────────────────────────────

const PricePreview = ({ pricing, selectedPeople }: { pricing?: PriceTier; selectedPeople: PeopleTab }) => {
  if (!pricing) return null;
  const value = pricing.basic ?? pricing.premium;

  return (
    <AnimatePresence mode="wait">
      <motion.p
        key={`${value}-${selectedPeople}`}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="hidden text-sm md:block text-zinc-400 dark:text-zinc-500"
      >
        od{" "}
        <span className="font-light text-zinc-900 dark:text-zinc-100">
          {value} zł
        </span>{" "}
        / os.
      </motion.p>
    </AnimatePresence>
  );
};

// ─── Accordion item ───────────────────────────────────────────────────────────

const AccordionItem = ({
  offer,
  pricing,
  index,
  isOpen,
  onToggle,
  selectedPeople,
}: {
  offer: OfferData;
  pricing?: PriceTier;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  selectedPeople: PeopleTab;
}) => (
  <div className="border-b border-zinc-200 dark:border-zinc-800">
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full gap-8 py-6 text-left group"
    >
      <div className="flex items-baseline gap-6">
        <span className="w-4 text-xs text-zinc-300 dark:text-zinc-600 tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <p className="text-2xl font-light tracking-tight md:text-3xl text-zinc-900 dark:text-zinc-100">
            {offer.title}
          </p>
          <p className="text-[11px] tracking-[0.2em] uppercase text-amber-700 dark:text-amber-400 mt-1">
            {offer.callout}
          </p>
        </div>
      </div>

      <div className="flex items-center flex-shrink-0 gap-8">
        {!isOpen && <PricePreview pricing={pricing} selectedPeople={selectedPeople} />}

        <div className="relative flex-shrink-0 w-5 h-5">
          <span className="absolute left-0 w-full h-px transition-colors -translate-y-1/2 top-1/2 bg-zinc-400 dark:bg-zinc-500 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-100" />
          <motion.span
            animate={{ scaleY: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 w-px h-full -translate-x-1/2 left-1/2 bg-zinc-400 dark:bg-zinc-500 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-100"
          />
        </div>
      </div>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="grid grid-cols-1 gap-10 pb-8 pl-10 md:grid-cols-3 md:gap-16">

            {/* Features */}
            <div className="md:col-span-1">
              <p className="text-[11px] tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-500 mb-4">
                Co zawiera
              </p>
              <ul className="space-y-2">
                {offer.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="text-green-800">✔</span>
                  
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <div className="md:col-span-1">
              <p className="text-sm  tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-500 mb-4">
                Cennik
              </p>
              {pricing ? (
                <div className="space-y-3">
                  {pricing.basic && (
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs tracking-[0.15em] uppercase text-zinc-400 dark:text-zinc-500">
                        Basic
                      </span>
                      <PriceValue value={pricing.basic} selectedPeople={selectedPeople} />
                    </div>
                  )}
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs tracking-[0.15em] uppercase text-zinc-400 dark:text-zinc-500">
                      Premium
                    </span>
                    <PriceValue value={pricing.premium} selectedPeople={selectedPeople} />
                  </div>
                </div>
              ) : (
                <p className="text-sm italic text-zinc-400">Zapytaj o wycenę</p>
              )}
            </div>

            {/* CTA */}
            <div className="flex text-sm md:col-span-1 md:justify-end md:items-end">
           <Button variant="page" order text="Zapytaj o wycenę" />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// ─── Section ──────────────────────────────────────────────────────────────────

export const Offer = () => {
  const [selectedPeople, setSelectedPeople] = useState<PeopleTab>("30+");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="offer" className="px-6 py-24 mx-auto lg:py-32 max-w-7xl">

      <div className="mb-20">
        <Motion>
   
          <h2 className="mb-6 text-4xl font-light tracking-tight md:text-5xl text-zinc-900 dark:text-zinc-100">
            Oferta
          </h2>
        </Motion>
        <Motion>
          <p className="max-w-lg text-base leading-relaxed text-zinc-400 dark:text-zinc-500">
            Ceny mają charakter orientacyjny i mogą się różnić w zależności od
            lokalizacji, liczby gości oraz indywidualnych ustaleń.
          </p>
        </Motion>
      </div>

      <PeopleTabs
        tabs={PEOPLE_TABS}
        selected={selectedPeople}
        setSelected={setSelectedPeople}
      />

      <div className="border-t border-zinc-200 dark:border-zinc-800">
        {OFFERS.map((offer, i) => (
          <AccordionItem
            key={offer.title}
            offer={offer}
            pricing={offer.pricing[selectedPeople]}
            index={i}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            selectedPeople={selectedPeople}
          />
        ))}
      </div>

    </section>
  );
};