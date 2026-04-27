import { useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import { AnimatePresence } from "framer-motion";
import { DatePicker } from "./Calendar";
import { FormTranslations } from "../../Translations/FormTranslations";
import { FiCalendar } from "react-icons/fi";

interface Props {
  value: Date | null;
  onChange: (date: Date) => void;
  required?: boolean;
  lang?: "en" | "pl";
}

export const DateField = ({ value, onChange, required, lang = "pl" }: Props) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const t = FormTranslations[lang];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={wrapperRef}>

      {/* Trigger */}
      <div
        onClick={() => setOpen((p) => !p)}
        className="flex items-center justify-between w-full py-2 text-sm transition-colors duration-200 bg-transparent border-b cursor-pointer border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-500"
      >
        <span className={value ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-300 dark:text-zinc-600"}>
          {value ? format(value, "dd.MM.yyyy") : t.datePlaceholder}
        </span>
        <FiCalendar className="flex-shrink-0 text-zinc-300 dark:text-zinc-600" />
      </div>

      <input
        type="hidden"
        value={value ? value.toISOString() : ""}
        required={required}
      />

      {/* Calendar */}
      <AnimatePresence>
        {open && (
          <div className="absolute z-20 mt-2">
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