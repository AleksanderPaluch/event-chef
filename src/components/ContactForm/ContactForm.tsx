// ContactForm.tsx
import { useState } from "react";
import { AnimatePresence, motion, easeInOut } from "framer-motion";
import { Button } from "../Button/Button";
import { Motion } from "../Motion/Motion";
import { FormTranslations } from "../Translations/translations";
import { FormSelect } from "./FormSelect";
import { DateField } from "./Calendar/DateField";
import { CustomSelect } from "./Calendar/CustomSelect";
import homeSushi from "../../assets/home_sushi.jpg";
import officeSushi from "../../assets/office_sushi.jpg";
import type { RepresentType } from "./Form";

const BASE_TRANSITION = { duration: 0.4, ease: easeInOut };

const inputClass =
  "w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-2 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-300 dark:placeholder:text-zinc-600 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-500 transition-colors duration-200";

const labelClass = "block text-base text-zinc-400 dark:text-zinc-300 mb-0";

// ─── Images ───────────────────────────────────────────────────────────────────

const Images = ({ selected }: { selected: RepresentType }) => (
  <div className="relative overflow-hidden rounded-lg w-full min-h-[320px] lg:min-h-full">
    <motion.div
      initial={false}
      animate={{ x: selected === "individual" ? "0%" : "100%" }}
      transition={{ ease: "anticipate", duration: 0.75 }}
      className="absolute inset-0 bg-center bg-cover"
      style={{ backgroundImage: `url(${homeSushi})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
    </motion.div>
    <motion.div
      initial={false}
      animate={{ x: selected === "company" ? "0%" : "-100%" }}
      transition={{ ease: "anticipate", duration: 0.75 }}
      className="absolute inset-0 bg-center bg-cover"
      style={{ backgroundImage: `url(${officeSushi})` }}
    >
      <div className="absolute inset-0 bg-black/60" />
    </motion.div>
  </div>
);

// ─── Form ─────────────────────────────────────────────────────────────────────

const Form = ({
  selected,
  setSelected,
}: {
  selected: RepresentType;
  setSelected: (v: RepresentType) => void;
}) => {
  const lang = "pl";
  const t = FormTranslations[lang];

  const eventOptions = [
    { value: "live", label: t.eventTypes.live },
    { value: "corporate", label: t.eventTypes.corporate },
    { value: "masterclass", label: t.eventTypes.masterclass },
    { value: "omakase", label: t.eventTypes.omakase },
    { value: "wedding", label: t.eventTypes.wedding },
    { value: "bachelorette", label: t.eventTypes.bachelorette },
    { value: "other", label: t.eventTypes.other },
  ];

  const [formData, setFormData] = useState({
    date: null as Date | null,
    eventType: "" as string,
  });

  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6">

      <div className="grid grid-cols-1 gap-6 lg:gap-36 md:grid-cols-2">
        <div>
          <label className={labelClass}>{t.nameLabel}</label>
          <input type="text" placeholder={t.namePlaceholder} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>{t.representLabel}</label>
          <FormSelect selected={selected} setSelected={setSelected} lang={lang} />
        </div>
      </div>

      <AnimatePresence>
        {selected === "company" && (
          <motion.div
            initial={{ marginTop: -80, opacity: 0 }}
            animate={{ marginTop: 0, opacity: 1 }}
            exit={{ marginTop: -80, opacity: 0 }}
            transition={BASE_TRANSITION}
          >
            <label className={labelClass}>{t.companyNameLabel}</label>
            <input
              type="text"
              name="organization"
              autoComplete="organization"
              placeholder={t.companyNamePlaceholder}
              className={inputClass}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        <label className={labelClass}>{t.emailLabel}</label>
        <input type="email" placeholder={t.emailPlaceholder} className={inputClass} />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className={labelClass}>{t.eventTypeLabel}</label>
          <CustomSelect
            options={eventOptions}
            value={formData.eventType}
            onChange={(value) => setFormData((prev) => ({ ...prev, eventType: value }))}
            placeholder={t.eventTypes.label}
          />
        </div>
        <div>
          <label className={labelClass}>{t.guestsLabel}</label>
          <input type="text" placeholder={t.guestsPlaceholder} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className={labelClass}>{t.dateLabel}</label>
          <DateField
            value={formData.date}
            lang={lang}
            onChange={(date) => setFormData((prev) => ({ ...prev, date }))}
          />
        </div>
        <div>
          <label className={labelClass}>{t.locationLabel}</label>
          <input
            type="text"
            name="city"
            autoComplete="address-level2"
            placeholder={t.locationPlaceholder}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>{t.messageLabel}</label>
        <textarea
          placeholder={t.messagePlaceholder}
          rows={3}
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="consent"
          className="flex-shrink-0 mt-1.5 accent-zinc-900 dark:accent-zinc-100"
        />
        <label htmlFor="consent" className="text-sm leading-relaxed text-zinc-400 dark:text-zinc-500">
          {t.agreements.contact}
        </label>
      </div>

      <div className="">
        <Button  text={t.submit} order />
      </div>

    </form>
  );
};

// ─── Section ──────────────────────────────────────────────────────────────────

export const ContactForm = () => {
  const [selected, setSelected] = useState<RepresentType>("individual");

  return (
    <section id="contact" className="px-6 py-32 mx-auto max-w-7xl">

      <div className="mb-20">
        <Motion>
          <p className="text-[11px] tracking-[0.2em] uppercase text-amber-700 dark:text-amber-400 mb-4">
            Kontakt
          </p>
          <h2 className="mb-6 text-4xl font-light tracking-tight md:text-5xl text-zinc-900 dark:text-zinc-100">
            Indywidualna wycena
          </h2>
        </Motion>
        <Motion>
          <p className="max-w-md text-base leading-relaxed text-zinc-400 dark:text-zinc-500">
            Opisz swoje wydarzenie — a my zajmiemy się resztą. <br /> W ciągu 24 godzin
            prześlemy propozycję dopasowaną do Twoich potrzeb.
          </p>
        </Motion>
      </div>

      <div className="w-full h-px mb-16 bg-zinc-200 dark:bg-zinc-800" />

      <div className="grid items-start grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-28">
        <Form selected={selected} setSelected={setSelected} />
        <Images selected={selected} />
      </div>

      <p className="max-w-full mt-4 text-xs leading-relaxed text-center text-zinc-300 dark:text-zinc-600">
        Administratorem danych osobowych jest Event Chef. Dane osobowe przetwarzane
        są w celu obsługi zapytania. Podanie danych jest dobrowolne, ale niezbędne
        do udzielenia odpowiedzi. Przysługuje Ci prawo dostępu do danych, ich
        poprawiania, usunięcia, ograniczenia przetwarzania oraz cofnięcia zgody
        w dowolnym momencie. Szczegóły znajdują się w Polityce Prywatności.
      </p>

    </section>
  );
};