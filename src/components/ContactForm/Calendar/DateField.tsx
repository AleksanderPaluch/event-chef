import { useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import { AnimatePresence } from "framer-motion";
import { DatePicker } from "./Calendar";
import { FormTranslations } from "../../Translations/translations";
import { FiCalendar } from "react-icons/fi";

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
          <div className="flex items-center justify-between w-full text-zinc-500 dark:text-zinc-400">
           
            <p className="text-zinc-500 dark:text-zinc-400">
              {t.datePlaceholder}
            </p>

             <FiCalendar
          className={`transition-transform duration-200 text-zinc-400 dark:text-zinc-700 ${
            open ? "rotate-180" : ""
          }`}
        />
          </div>
        
          
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
