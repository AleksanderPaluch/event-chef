import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "./NavLink";
import React from "react";

interface NavLeftProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const links = [
  { text: "Home",                   href: "/",           type: "page" },
  { text: "Live Cooking",           href: "/live",        type: "page" },
  { text: "Sushi Masterclass",      href: "/masterclass", type: "page" },
  { text: "Omakase",                href: "/omakase",     type: "page" },
  { text: "Oferta",                 href: "offer",        type: "section" },
  { text: "Wycena Twojego Eventu",  href: "contact",      type: "section" },
] as const;

export const NavLeft: React.FC<NavLeftProps> = ({ setIsOpen }) => {
  return (
    <div className="nav-left">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="nav-menu-button"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        <FiMenu />
      </motion.button>

      {links.map((link, index) => (
        <React.Fragment key={link.href}>
          <NavLink text={link.text} href={link.href} type={link.type} />
          {index < links.length - 1 && (
            <span className="hidden lg:inline text-amber-500 dark:text-amber-400 opacity-70">•</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};