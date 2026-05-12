import  { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

interface FAQItem {
  title: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export const FAQ = ({ items }: FAQProps) => {
  return (
    <div className="px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm  font-semibold text-center uppercase tracking-[0.2em] opacity-70 mb-8">
          FAQ
        </p>
        {items.map((item, i) => (
          <Question key={i} title={item.title} defaultOpen={i === 0}>
            <span>{item.answer}</span>
          </Question>
        ))}
      </div>
    </div>
  );
};

const Question = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b border-zinc-200 dark:border-zinc-800"
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex items-center justify-between w-full gap-4 py-4"
      >
        <span
          className={`text-base uppercase tracking-[0.2em] text-left transition-opacity duration-200 ${
            open ? "opacity-80" : "opacity-90"
          }`}
        >
          {title}
        </span>
        <motion.span
          variants={{
            open: { rotate: "180deg" },
            closed: { rotate: "0deg" },
          }}
          className="text-amber-500 dark:text-amber-400 shrink-0"
        >
          <FiChevronDown className="text-xl" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? height : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden"
      >
        <p
          ref={ref}
          className="text-sm lg:text-xs  uppercase tracking-[0.15em] opacity-90 leading-relaxed"
        >
          {children}
        </p>
      </motion.div>
    </motion.div>
  );
};