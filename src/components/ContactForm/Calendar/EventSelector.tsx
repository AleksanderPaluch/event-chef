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
 
export const EventSelector = ({ options, value, onChange, placeholder }: Props) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const selectedOption = options.find((o) => o.value === value);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
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
        className="flex items-center justify-between w-full py-2 text-sm transition-colors duration-200 bg-transparent border-b cursor-pointer border-subtle text-heading hover:border-zinc-400 dark:hover:border-zinc-500"
      >
        <span className={selectedOption ? "" : "text-ghost"}>
          {selectedOption?.label ?? placeholder}
        </span>
        <FiChevronDown
          className={`transition-transform duration-200 text-ghost flex-shrink-0 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      <input type="hidden" value={value} required />

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-0 z-20 w-full mt-1 overflow-hidden bg-white border rounded-lg shadow-sm dark:bg-black border-subtle"
          >
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <li
                  key={option.value}
                  onClick={() => { onChange(option.value); setOpen(false); }}
                  className={`px-4 py-2.5 text-sm cursor-pointer transition-colors duration-150 ${
                    isSelected
                      ? "text-heading bg-zinc-100 dark:bg-zinc-950"
                      : "text-muted hover:text-heading hover:bg-zinc-200 dark:hover:bg-zinc-900"
                  }`}
                >
                  {option.label}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>

    </div>
  );
};