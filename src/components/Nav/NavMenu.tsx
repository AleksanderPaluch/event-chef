// NavMenu.tsx — full rewrite
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React from "react";
import { smoothScrollTo } from "../helpers";

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
  { text: "Home",                href: "/",           type: "page" },
  { text: "Live Cooking",        href: "/live",        type: "page" },
  { text: "Sushi Masterclass",   href: "/masterclass", type: "page" },
  { text: "Omakase",             href: "/omakase",     type: "page" },
  { text: "Oferta",              href: "offer",        type: "section" },
  { text: "Indywidualna Wycena", href: "contact",      type: "section" },
] as const;

export const NavMenu: React.FC<NavMenuProps> = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scaleY: 0.96 }}
          animate={{ opacity: 1, scaleY: 1 }}
          exit={{ opacity: 0, scaleY: 0.96 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="nav-menu"
        >
          {/* Divider at top */}
          <div className="absolute top-0 h-px left-8 right-8 bg-zinc-200 dark:bg-zinc-800" />

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

          {/* Bottom legal */}
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
      className={`text-3xl font-light tracking-tight transition-colors duration-200 text-heading
        ${isSection ? "text-muted hover:text-heading text-xl" : "hover:text-accent"}`}
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