import { motion, AnimatePresence } from "framer-motion";
import { TfiLineDouble } from "react-icons/tfi";
import { FiX } from "react-icons/fi";
import React from "react";
import { NavLink } from "./NavLink";
import { useLanguage } from "../Translations/LanguageContext";

interface NavLeftProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const links = [
  { text: "Home",                  href: "/",            type: "page" },
  { text: "Live Cooking",          href: "/live",         type: "page" },
  { text: "Sushi Masterclass",     href: "/masterclass",  type: "page" },
  { text: "Omakase",               href: "/omakase",      type: "page" },
  { text: "Oferta",                href: "offer",         type: "section" },
  { text: "Wycena Twojego Eventu", href: "contact",       type: "section" },
] as const;

export const NavLeft: React.FC<NavLeftProps> = ({ setIsOpen, isOpen }) => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-4 ml-auto lg:ml-0">

      {/* Hamburger — mobile only */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-50 flex items-center justify-center w-8 h-8 lg:hidden"
        onClick={() => setIsOpen((pv) => !pv)}
        aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.2 }}
              className="absolute"
            >
              <FiX className="text-4xl" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ opacity: 0, rotate: 45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -45 }}
              transition={{ duration: 0.2 }}
              className="absolute"
            >
              <TfiLineDouble className="text-4xl" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Desktop links + lang toggle — hidden on mobile */}
      {links.map((link, index) => (
        <React.Fragment key={link.href}>
          <NavLink text={link.text} href={link.href} type={link.type} />
          {index < links.length - 1 && (
            <span className="hidden lg:inline text-amber-500 opacity-80">•</span>
          )}
        </React.Fragment>
      ))}

      {/* Desktop lang toggle */}
      <div className="items-center hidden gap-2 ml-2 lg:flex">
    
        <button
          type="button"
          onClick={() => setLang("pl")}
          className={`text-xs font-semibold uppercase tracking-widest transition-colors ${
            lang === "pl"
              ? "text-amber-500"
              : " hover:text-amber-500 dark:hover:text-amber-400"
          }`}
        >
          PL
        </button>
        <span className="text-xs text-zinc-300 dark:text-zinc-700">|</span>
        <button
          type="button"
          onClick={() => setLang("en")}
          className={`text-xs font-semibold uppercase tracking-widest transition-colors ${
            lang === "en"
              ? "text-amber-500"
              : " hover:text-amber-500 dark:hover:text-amber-400"
          }`}
        >
          EN
        </button>
      </div>

    </div>
  );
};
