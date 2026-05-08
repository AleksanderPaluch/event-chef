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
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-40 flex items-center justify-center px-4 py-2 lg:py-0 transition-all duration-300",
        scrolled
          ? "bg-white border-b border-zinc-200 dark:bg-black dark:border-zinc-900"
          : "bg-transparent border-transparent shadow-none text-zinc-300 dark:bg-transparent dark:border-transparent",
      ].join(" ")}
    >
      <NavLeft setIsOpen={setIsOpen} isOpen={isOpen} />
      <NavMenu setIsOpen={setIsOpen} isOpen={isOpen} />
    </nav>
  );
};
