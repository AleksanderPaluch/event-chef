import { motion, AnimatePresence } from "framer-motion";
import { TfiLineDouble } from "react-icons/tfi";
import { NavLink } from "./NavLink";
import { FiX } from "react-icons/fi";
import React from "react";

interface NavLeftProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const links = [
  { text: "Home",                  href: "/",           type: "page" },
  { text: "Live Cooking",          href: "/live",        type: "page" },
  { text: "Sushi Masterclass",     href: "/masterclass", type: "page" },
  { text: "Omakase",               href: "/omakase",     type: "page" },
  { text: "Oferta",                href: "offer",        type: "section" },
  { text: "Wycena Twojego Eventu", href: "contact",      type: "section" },
] as const;

export const NavLeft: React.FC<NavLeftProps> = ({ setIsOpen, isOpen }) => {
  return (
    <div className="nav-left">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-50 flex items-center justify-center w-8 h-8 lg:hidden text-zinc-800 dark:text-zinc-200"
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
              <FiX className="text-2xl" />
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
              <TfiLineDouble className="text-3xl" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {links.map((link, index) => (
        <React.Fragment key={link.href}>
          <NavLink text={link.text} href={link.href} type={link.type} />
          {index < links.length - 1 && (
            <span className="hidden lg:inline text-accent opacity-80">•</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};