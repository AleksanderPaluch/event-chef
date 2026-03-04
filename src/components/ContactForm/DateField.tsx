import { useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import { AnimatePresence } from "framer-motion";
import { DatePicker } from "./Calendar";
import { FormTranslations } from "../Translations/translations";

interface Props {
  value: Date | null;
  onChange: (date: Date) => void;
  required?: boolean;
  lang?: "en" | "pl";
}

export const DateField = ({
  value,
  onChange,
  required,
  lang = "pl",
}: Props) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const t = FormTranslations[lang];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={wrapperRef}>
      {/* INPUT LOOK */}
      <div
        onClick={() => setOpen((p) => !p)}
        className="flex items-center cursor-pointer form-input"
      >
        {value ? (
          format(value, "dd.MM.yyyy")
        ) : (
          <span className="text-zinc-500 dark:text-zinc-400">
            {t.datePlaceholder}
          </span>
        )}
      </div>

      {/* hidden dla required */}
      <input
        type="hidden"
        value={value ? value.toISOString() : ""}
        required={required}
      />

      {/* CALENDAR */}
      <AnimatePresence>
        {open && (
          <div className="absolute z-50 mt-2">
            <DatePicker
              lang={lang}
              selected={value ?? new Date()}
              onDateSelected={({ date }) => {
                onChange(date);
                setOpen(false);
              }}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
