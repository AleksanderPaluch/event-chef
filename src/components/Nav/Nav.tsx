import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { NavLeft } from "./NavLeft";
import { NavMenu } from "./NavMenu";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
useMotionValueEvent(scrollY, "change", (latest) => {
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
  const threshold = isTablet ? 350 : 790;
  setScrolled(latest > threshold);
});

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : "nav--top"}`}>
      <NavLeft setIsOpen={setIsOpen} />
      <NavMenu setIsOpen={setIsOpen} isOpen={isOpen} />
    </nav>
  );
};