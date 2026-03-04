import { useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import { AnimatePresence } from "framer-motion";
import { DatePicker } from "./Calendar";


interface Props {
  value: Date | null;
  onChange: (date: Date) => void;
  required?: boolean;
}

export const DateField = ({ value, onChange, required }: Props) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);


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
          <span className="">Wybierz datę</span>
        )}
      </div>

      {/* hidden для required */}
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