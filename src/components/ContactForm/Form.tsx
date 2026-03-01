import { type Dispatch, type SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../Button/Button";
import { translations } from "../Translations/translations";
import { FormSelect } from "./FormSelect";
import { easeInOut } from "framer-motion";

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
  const t = translations[lang];

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
            required
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
              required
            />
          </motion.div>
        )}
      </AnimatePresence>



      <div className="grid grid-cols-2 gap-4 md:gap-x-6 gap-y-0">

          {/* Email */}
        <div className="form-group">
          <p className="form-label">{t.emailLabel}</p>
          <input
            type="email"
            placeholder={t.emailPlaceholder}
            className="form-input"
            required
          />
        </div>

        {/* Phone */}
        <div className="form-group">
          <p className="form-label">{t.phoneLabel}</p>
          <input
            type="tel"
            placeholder={t.phonePlaceholder}
            className="form-input"
          />
        </div>

        {/* Typ eventu */}
        <div className="form-group">
          <p className="form-label">{t.eventTypeLabel}</p>
          <select className=" form-input" defaultValue="" required>
            {" "}
            <option value="" hidden>
              Wybierz typ eventu
            </option>
            <option value="Live">Event prywatny / Urodziny / Domówki</option>
            <option value="corporate">Event firmowy / Targi / Wigilie</option>
            <option value="masterclass">Warsztaty / Masterclass</option>
            <option value="omakase">Kolacja Omakase</option>
            <option value="wedding">Wesela</option>
            <option value="other">Inne</option>
          </select>
        </div>

        {/* Data */}
        <div className="form-group">
          <p className="form-label">{t.dateLabel}</p>
          <input type="date" className="form-input" required />
        </div>

        {/* Liczba gości */}
        <div className="form-group">
          <p className="form-label">{t.guestsLabel}</p>
          <input
            type="text"
            placeholder={t.guestsPlaceholder}
            className="form-input"
            required
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
            required
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
            required
          />
          <label htmlFor="consent" className="form-label">
            Zgoda na kontakt
          </label>
        </div>

        <p className="block text-xs text-zinc-600">
          {" "}
          Wyrażam zgodę na przetwarzanie moich danych osobowych w celu kontaktu
          w sprawie oferty Event Chef.
        </p>
      </div>

      <Button text={t.submit} />
    </form>
  );
};
