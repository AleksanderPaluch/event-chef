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
  const lang =  "pl";
  const t = translations[lang];

  return (
  <form onSubmit={(e) => e.preventDefault()} className="contact-form">
  {/* Name */}
  <div className="form-group">
    <p className="form-label">{t.nameLabel}</p>
    <input
      type="text"
      placeholder={t.namePlaceholder}
      className="form-input"
    />
  </div>

  {/* Represent */}
  <div className="form-group">
    <p className="form-label">{t.representLabel}</p>
    <FormSelect selected={selected} setSelected={setSelected} lang={lang} />
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
          placeholder={t.companyNamePlaceholder}
          className="form-input"
        />
      </motion.div>
    )}
  </AnimatePresence>

  {/* Message */}
  <div className="form-group">
    <p className="form-label">{t.messageLabel}</p>
    <textarea
      placeholder={t.messagePlaceholder}
      className="form-textarea"
    />
  </div>

  <Button text={t.submit} />
</form>
  );
};
