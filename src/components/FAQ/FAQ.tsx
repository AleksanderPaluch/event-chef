import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { useLanguage } from "../Translations/LanguageContext";

const faqLabels = {
  en: { heading: "Frequently asked questions" },
  pl: { heading: "Najczęściej zadawane pytania" },
} as const;

interface FAQItem {
  title: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export const FAQ = ({ items }: FAQProps) => {
  const { lang } = useLanguage();
  const t = faqLabels[lang];

  return (
    <section className="px-6 py-24 mx-auto max-w-7xl md:px-12 lg:px-20">
      <div className="flex items-center gap-3 mb-12 lg:mb-16">
        <h2 className="text-2xl font-light tracking-tight md:text-4xl text-heading">
          {t.heading}
        </h2>
      </div>

      <div className="max-w-7xl">
        {items.map((item, i) => (
          <Question key={i} title={item.title} defaultOpen={i === 0}>
            {item.answer}
          </Question>
        ))}
      </div>
    </section>
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
        className="flex items-center justify-between w-full gap-8 py-6 text-left group"
      >
        <span
          className={`text-sm uppercase tracking-[0.2em] transition-colors duration-200 ${
            open
              ? "text-zinc-400 dark:text-zinc-500"
              : "text-zinc-900 dark:text-zinc-100"
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
          className="text-sm lg:text-xs uppercase tracking-[0.15em] leading-relaxed text-muted pb-2"
        >
          {children}
        </p>
      </motion.div>
    </motion.div>
  );
};