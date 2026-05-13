import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Motion } from "../Motion/Motion";
import { Button } from "../Button/Button";
import { useLanguage } from "../Translations/LanguageContext";
import  { OfferTranslations } from "../Translations/OfferTranslations";


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

// ─── Tabs ─────────────────────────────────────────────────────────────────────

const PeopleTabs = ({
  tabs,
  selected,
  setSelected,
  personSuffix,
}: {
  tabs: PeopleTab[];
  selected: PeopleTab;
  setSelected: (t: PeopleTab) => void;
  personSuffix: string;
}) => (
  <div className="flex justify-between gap-0 md:justify-start">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => setSelected(tab)}
        className={`relative px-2 md:px-6 py-3 text-sm lg:text-base tracking-wide font-medium transition-colors duration-200 ${
          selected === tab
            ? "text-heading"
            : "text-muted hover:text-black dark:hover:text-zinc-300"
        }`}
      >
        {tab} {personSuffix}
        {selected === tab && (
          <motion.span
            layoutId="offer-tab-underline"
            className="absolute bottom-0 left-0 right-0 h-px bg-zinc-700 dark:bg-zinc-100"
          />
        )}
      </button>
    ))}
  </div>
);

const PriceValue = ({
  value,
  selectedPeople,
  personTab,
}: {
  value: string;
  selectedPeople: PeopleTab;
  personTab: string;
}) => (
  <AnimatePresence mode="wait">
    <motion.span
      key={`${value}-${selectedPeople}`}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="text-2xl text-heading"
    >
      {value}{" "}
      <span className="text-sm text-muted">zł {personTab}</span>
    </motion.span>
  </AnimatePresence>
);

const PricePreview = ({
  pricing,
  selectedPeople,
  from,
  personTab,
}: {
  pricing?: PriceTier;
  selectedPeople: PeopleTab;
  from: string;
  personTab: string;
}) => {
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
        className="hidden text-sm font-medium md:block text-muted"
      >
        {from}{" "}
        <span className="text-heading">{value} zł</span>{" "}
        {personTab}
      </motion.p>
    </AnimatePresence>
  );
};

const AccordionItem = ({
  offer,
  pricing,
  index,
  isOpen,
  onToggle,
  selectedPeople,
  t,
}: {
  offer: OfferData;
  pricing?: PriceTier;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  selectedPeople: PeopleTab;
  t: typeof OfferTranslations.pl;
}) => (
  <div className="border-b border-subtle">
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full gap-8 py-6 text-left group"
    >
      <div className="flex items-baseline gap-6">
        <span className="w-4 text-xs text-ghost tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <p className="text-2xl font-light tracking-tight md:text-3xl text-heading">
            {offer.title}
          </p>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mt-1">
            {offer.callout}
          </p>
        </div>
      </div>

      <div className="flex items-center flex-shrink-0 gap-8">
        {!isOpen && (
          <PricePreview
            pricing={pricing}
            selectedPeople={selectedPeople}
            from={t.from}
            personTab={t.personTab}
          />
        )}

        <div className="relative flex-shrink-0 w-5 h-5">
          <span className="absolute left-0 w-full h-px transition-colors -translate-y-1/2 top-1/2 bg-zinc-700 dark:bg-zinc-500 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-100" />
          <motion.span
            animate={{ scaleY: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 w-px h-full -translate-x-1/2 left-1/2 bg-zinc-400 dark:bg-zinc-700 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-100"
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
              <p className="text-[11px] tracking-[0.2em] uppercase text-muted mb-4">
                {t.includes}
              </p>
              <ul className="space-y-2">
                {offer.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-body">
                    <span className="text-green-800">✔</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <div className="md:col-span-1">
              <p className="text-sm tracking-[0.2em] uppercase text-muted mb-4">
                {t.pricing}
              </p>
              {pricing ? (
                <div className="space-y-3">
                  {pricing.basic && (
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs tracking-[0.15em] uppercase font-semibold text-muted">
                        Basic
                      </span>
                      <PriceValue value={pricing.basic} selectedPeople={selectedPeople} personTab={t.personTab} />
                    </div>
                  )}
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs tracking-[0.15em] uppercase font-semibold text-muted">
                      Premium
                    </span>
                    <PriceValue value={pricing.premium} selectedPeople={selectedPeople} personTab={t.personTab} />
                  </div>
                </div>
              ) : (
                <p className="text-sm italic text-muted">{t.askForQuote}</p>
              )}
            </div>

            {/* CTA */}
            <div className="flex text-sm md:col-span-1 md:justify-end md:items-end">
              <Button variant="page" order text={t.cta} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const Offer = () => {
  const { lang } = useLanguage();
  const t = OfferTranslations[lang];

  const [selectedPeople, setSelectedPeople] = useState<PeopleTab>("30+");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="offer" className="py-24 section-padding lg:py-24">
      <div className="mb-20">
        <Motion>
          <h2 className="mb-6 text-4xl font-light tracking-tight md:text-5xl text-heading">
            {t.heading}
          </h2>
        </Motion>
        <Motion>
          <p className="max-w-lg text-base leading-relaxed text-muted">
            {t.description}
          </p>
        </Motion>
      </div>

      <PeopleTabs
        tabs={PEOPLE_TABS}
        selected={selectedPeople}
        setSelected={setSelectedPeople}
        personSuffix={t.personSuffix}
      />

      <div className="border-t border-subtle">
        {t.offers.map((offer, i) => (
          <AccordionItem
            key={offer.title}
            offer={offer}
            pricing={offer.pricing[selectedPeople]}
            index={i}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            selectedPeople={selectedPeople}
            t={t}
          />
        ))}
      </div>
    </section>
  );
};