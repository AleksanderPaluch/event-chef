import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "./NavLink";
import React from "react";

interface NavLeftProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const links = [
  { text: "Home", href: "Home" },
  { text: "Live Cooking", href: "Live" },
  { text: "Sushi Masterclass", href: "Masterclass" },
  { text: "Omakase", href: "Omakase" },
  { text: "O nas", href: "About" },
  { text: "Oferta", href: "Offer" },
  { text: "Wycena Twojego Eventu", href: "Form" },
];

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
          <NavLink text={link.text} href={link.href} />
          {index < links.length - 1 && (
            <span className="hidden lg:inline text-zinc-400/70">•</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};