import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { NavLeft } from "./NavLeft";
import { NavMenu } from "./NavMenu";
import { useLanguage } from "../Translations/LanguageContext";


export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLanguage();

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    const threshold = isTablet ? 350 : 790;
    setScrolled(latest > threshold);
  });

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : "nav--top"}`}>
      <NavLeft setIsOpen={setIsOpen} isOpen={isOpen} />

      <div className="flex items-center gap-4">
        {/* Language toggle */}
        <button
          onClick={() => setLang(lang === "pl" ? "en" : "pl")}
          className="text-sm font-medium tracking-widest uppercase transition-colors text-zinc-400 hover:text-white"
        >
          {lang === "pl" ? "EN" : "PL"}
        </button>

        <NavMenu setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
    </nav>
  );
};
