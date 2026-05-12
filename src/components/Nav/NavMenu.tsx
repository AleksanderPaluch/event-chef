import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React from "react";
import { smoothScrollTo } from "../helpers";
import { useLanguage } from "../Translations/LanguageContext";
import { useTheme } from "../../hooks/useTheme";
import { FiSun, FiMoon } from "react-icons/fi";

interface NavMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MenuLinkProps {
  text: string;
  href: string;
  type: "page" | "section";
  index: number;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const links = [
  { text: "Home",                href: "/",            type: "page" },
  { text: "Live Cooking",        href: "/live",         type: "page" },
  { text: "Sushi Masterclass",   href: "/masterclass",  type: "page" },
  { text: "Omakase",             href: "/omakase",      type: "page" },
  { text: "Oferta",              href: "offer",         type: "section" },
  { text: "Indywidualna Wycena", href: "contact",       type: "section" },
] as const;



export const NavMenu: React.FC<NavMenuProps> = ({ isOpen, setIsOpen }) => {
  const { lang, setLang } = useLanguage();
  const { isDark, toggle } = useTheme();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scaleY: 0.96 }}
          animate={{ opacity: 1, scaleY: 1 }}
          exit={{ opacity: 0, scaleY: 0.96 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-40 flex flex-col justify-center gap-2 px-8 origin-top bg-zinc-100 dark:bg-black"
        >
          {/* Top divider */}
          <div className="absolute top-0 h-px left-8 right-8 bg-zinc-200 dark:bg-zinc-800" />

          {/* Links */}
          <nav className="flex flex-col gap-1">
            {links.map((link, i) => (
              <MenuLink
                key={link.href}
                text={link.text}
                href={link.href}
                type={link.type}
                index={i}
                setIsOpen={setIsOpen}
              />
            ))}
          </nav>

          {/* Lang + theme toggle — bottom right */}
          <div className="absolute flex items-center gap-3 bottom-8 right-8">
            <button
              type="button"
              onClick={() => setLang("pl")}
              className={`text-sm uppercase tracking-widest transition-colors ${
                lang === "pl"
                  ? "text-amber-500"
                  : "text-muted hover:text-heading"
              }`}
            >
              PL
            </button>
            <span className="text-ghost">|</span>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`text-sm uppercase tracking-widest transition-colors ${
                lang === "en"
                  ? "text-amber-500"
                  : "text-muted hover:text-heading"
              }`}
            >
              EN
            </button>
            <span className="text-ghost">|</span>
            <motion.button
              type="button"
              onClick={toggle}
              whileTap={{ scale: 0.85 }}
              aria-label="Toggle theme"
              className="transition-colors text-muted hover:text-heading"
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.span
                    key="sun"
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.2 }}
                    className="block"
                  >
                    <FiSun className="text-base" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={{ opacity: 0, rotate: 45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -45 }}
                    transition={{ duration: 0.2 }}
                    className="block"
                  >
                    <FiMoon className="text-base" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Copyright — bottom left */}
          <p className="absolute text-xs bottom-8 left-8 text-ghost">
            © {new Date().getFullYear()} Event Chef
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const MenuLink: React.FC<MenuLinkProps> = ({ text, href, type, index, setIsOpen }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const close = () => setIsOpen(false);

  const handleSectionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    close();
    if (pathname === "/") smoothScrollTo(href);
    else navigate(`/#${href}`);
  };

  const handlePageClick = () => {
    close();
    if (href === "/" && pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isSection = type === "section";

  const inner = (
    <motion.span
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={[
        "transition-colors duration-200",
        isSection
          ? "text-xl font-light tracking-tight text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
          : "text-3xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 hover:text-amber-500 dark:hover:text-amber-400",
      ].join(" ")}
    >
      {text}
    </motion.span>
  );

  if (type === "section") {
    return (
      <a href={`/#${href}`} onClick={handleSectionClick} className="py-2 w-fit">
        {inner}
      </a>
    );
  }

  return (
    <Link to={href} onClick={handlePageClick} className="py-2 w-fit">
      {inner}
    </Link>
  );
};
