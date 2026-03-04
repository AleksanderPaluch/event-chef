import {
  type Dispatch,
  type SetStateAction,
  type SyntheticEvent,
  useState,
} from "react";
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

export const DatePicker = ({ selected, onDateSelected }: DatePickerProps) => {
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="top-0 p-3 mt-4 bg-white border rounded-lg shadow-lg dark:bg-zinc-950 border-zinc-600 -right-4 w-fit md:absolute md:mt-0 md:translate-x-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3 text-xl">
        <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
          <FiArrowLeft />
        </button>

        <span className="text-lg font-medium">{format(currentMonth, "LLLL yyyy")}</span>

        <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
          <FiArrowRight />
        </button>
      </div>

      {/* Weekdays */}
      <div className="flex mb-2">
        {WEEKDAY_NAMES.map((weekday) => (
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

          return (
            <button
              key={dayItem.toISOString()}
              onClick={(e) => onDateSelected({ date: dayItem }, e)}
              className={`
                w-[calc(100%_/_7)] rounded  py-1 transition-colors
                ${isSelected ? "bg-zinc-900 text-white" : ""}
                ${!isCurrentMonth ? "text-gray-300" : "hover:bg-indigo-100"}
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

/* ========================================================= */

interface DatePickerProps {
  selected: Date;
  onDateSelected: (
    selectedDate: { date: Date },
    event: SyntheticEvent<Element, Event>,
  ) => void;
}

const WEEKDAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
