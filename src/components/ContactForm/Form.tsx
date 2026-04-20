import { useState, type Dispatch, type SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../Button/Button";
import { FormTranslations } from "../Translations/translations";
import { FormSelect } from "./FormSelect";
import { easeInOut } from "framer-motion";

import { DateField } from "./Calendar/DateField";
import { CustomSelect } from "./Calendar/CustomSelect";

export type Lang = "en" | "pl";
export type RepresentType = "company" | "individual";



type FormProps = {
  selected: RepresentType;
  setSelected: Dispatch<SetStateAction<RepresentType>>;
  // lang: Lang;
};

const BASE_TRANSITION = {
  duration: 0.4,
  ease: easeInOut,
};

export const Form = ({ selected, setSelected }: FormProps) => {
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
    <form onSubmit={(e) => e.preventDefault()} className="contact-form">
      <div className="flex flex-col md:flex-row md:gap-4">
        {/* Name */}
        <div className="form-group md:w-full">
          <p className="form-label">{t.nameLabel}</p>
          <input
            type="text"
            placeholder={t.namePlaceholder}
            className="form-input"
          />
        </div>

        {/* Represent */}
        <div className="form-group min-w-60">
          <p className="form-label">{t.representLabel}</p>
          <FormSelect
            selected={selected}
            setSelected={setSelected}
            lang={lang}
          />
        </div>
      </div>

      {/* Company Name */}
      <AnimatePresence>
        {selected === "company" && (
          <motion.div
            initial={{ marginTop: -104, opacity: 0 }}
            animate={{ marginTop: 0, opacity: 1 }}
            exit={{ marginTop: -104, opacity: 0 }}
            transition={BASE_TRANSITION}
            className="form-group"
          >
            <p className="form-label">{t.companyNameLabel}</p>
            <input
              type="text"
              name="organization"
              autoComplete="organization"
              placeholder={t.companyNamePlaceholder}
              className="form-input"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid gap-4 md:grid-cols-2 md:gap-x-6 gap-y-0">
        {/* Email */}
        <div className="form-group">
          <p className="form-label">{t.emailLabel}</p>
          <input
            type="email"
            placeholder={t.emailPlaceholder}
            className="form-input"
          />
        </div>

        {/* Phone */}
        <div className="form-group">
          <p className="form-label">{t.phoneLabel}</p>
          <input
            type="tel"
            placeholder={t.phonePlaceholder}
            className="form-input"
            inputMode="numeric"
            maxLength={9}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:gap-x-6 gap-y-0">
        {/* Typ eventu */}
        <div className="form-group">
          <p className="form-label">{t.eventTypeLabel}</p>

          <CustomSelect
            options={eventOptions}
            value={formData.eventType}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, eventType: value }))
            }
            placeholder={t.eventTypes.label}
          />
        </div>

        {/* Liczba gości */}
        <div className="form-group">
          <p className="form-label">{t.guestsLabel}</p>
          <input
            type="text"
            placeholder={t.guestsPlaceholder}
            className="form-input"
          />
        </div>

        {/* Data */}
        <div className="form-group">
          <p className="form-label">{t.dateLabel}</p>

          <DateField
            value={formData.date}
            lang={lang}
            onChange={(date) => setFormData((prev) => ({ ...prev, date }))}
          />
        </div>

        {/* Miejscowość */}
        <div className="form-group">
          <p className="form-label">{t.locationLabel}</p>
          <input
            type="text"
            name="city"
            autoComplete="address-level2"
            placeholder={t.locationPlaceholder}
            className="form-input"
          />
        </div>
      </div>

      {/* Message */}
      <div className="form-group">
        <p className="form-label">{t.messageLabel}</p>
        <textarea
          placeholder={t.messagePlaceholder}
          className="form-textarea"
        />
      </div>

      {/* Zgoda na kontakt */}
      <div className="flex flex-col form-group">
        <div className="flex items-center ">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            className="mr-2 w-4 h-4 lg:mb-[2px]  border-black/15 dark:border-white/5 "
          />
          <label htmlFor="consent" className="form-label">
            {t.agreements.contact}
          </label>
        </div>

        <p className="block text-xs text-zinc-600">
          {" "}
          {t.agreements.personalData}
        </p>
      </div>
      <p className="mb-1 text-xs text-zinc-600">{t.fields}</p>
      <Button text={t.submit} />
    </form>
  );
};
