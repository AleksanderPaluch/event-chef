import { type SyntheticEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
} from "date-fns";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FormTranslations } from "../../Translations/translations";
import { isBefore, startOfToday } from "date-fns";
import { pl, enUS } from "date-fns/locale";

interface DatePickerProps {
  selected: Date;
  onDateSelected: (
    selectedDate: { date: Date },
    event: SyntheticEvent<Element, Event>,
  ) => void;
  lang?: "en" | "pl";
}

export const DatePicker = ({
  selected,
  onDateSelected,
  lang = "pl",
}: DatePickerProps) => {
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(selected));

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);

  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });

  const days: Date[] = [];
  let day = calendarStart;

  while (day <= calendarEnd) {
    days.push(day);
    day = addDays(day, 1);
  }

  const t = FormTranslations[lang];

  const today = startOfToday();
  const locale = lang === "pl" ? pl : enUS;

  const isPrevMonthDisabled = isBefore(
    subMonths(currentMonth, 1),
    startOfMonth(today),
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
className="top-0 right-0 p-4 bg-white border rounded-lg shadow-sm dark:bg-black border-zinc-200 dark:border-zinc-800 w-fit md:absolute md:mt-0 md:translate-x-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3 text-xl">
        <button
          disabled={isPrevMonthDisabled}
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className={isPrevMonthDisabled ? "opacity-30 " : ""}
        >
          <FiArrowLeft />
        </button>

        <span className="text-lg font-medium">
          {format(currentMonth, "LLLL yyyy", { locale })}
        </span>

        <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
          <FiArrowRight />
        </button>
      </div>

      {/* Weekdays */}
      <div className="flex mb-2">
        {t.weekday.map((weekday) => (
          <div
            key={weekday}
            className="block w-[calc(100%_/_7)] text-center text-sm font-medium"
          >
            {weekday}
          </div>
        ))}
      </div>

      {/* Grid */}
      <div className="flex flex-wrap w-64">
        {days.map((dayItem) => {
          const isCurrentMonth = isSameMonth(dayItem, monthStart);
          const isSelected = isSameDay(dayItem, selected);
          const isPast = isBefore(dayItem, today);

          const disabled = !isCurrentMonth || isPast;

          return (
            <button
              key={dayItem.toISOString()}
              disabled={disabled}
              onClick={(e) => !disabled && onDateSelected({ date: dayItem }, e)}
              className={`
        w-[calc(100%_/_7)] rounded py-1 transition-colors

        ${isSelected ? "font-semibold bg-zinc-800 text-white dark:bg-zinc-300 dark:text-zinc-950" : ""}

        ${
          disabled
            ?  "text-zinc-300 dark:text-zinc-800 "
            : "hover:bg-zinc-300 dark:hover:bg-zinc-700"
        }
      `}
            >
              {format(dayItem, "d")}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
};
