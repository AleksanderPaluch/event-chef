import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export const CustomSelect = ({
  options,
  value,
  onChange,
  placeholder,
}: Props) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((o) => o.value === value);

  /* Close on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={wrapperRef}>
      {/* Trigger */}
      <div
        onClick={() => setOpen((p) => !p)}
        className="flex items-center justify-between cursor-pointer form-input"
      >
        <span
          className={
            selectedOption ? "" : "text-zinc-400"
          }
        >
          {selectedOption?.label ?? placeholder}
        </span>

        <FiChevronDown
          className={`transition-transform duration-200 text-zinc-400 dark:text-zinc-700 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Hidden input (якщо форма native) */}
      <input type="hidden" value={value} required />

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -6 }}
            transition={{ duration: 0.18 }}
            className="absolute z-20 mt-2 overflow-hidden bg-white border rounded-lg shadow-lg w-72 -right-14 dark:bg-zinc-950 custom-border"
          >
            {options.map((option) => {
              const isSelected = option.value === value;

              return (
                <div
                  key={option.value}
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                  className={`
                    px-4 py-2 cursor-pointer transition-colors
                    ${
                      isSelected
                        ? "bg-zinc-800 text-white dark:bg-zinc-300 dark:text-zinc-950"
                        : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    }
                  `}
                >
                  {option.label}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};