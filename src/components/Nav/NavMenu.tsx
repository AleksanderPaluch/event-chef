import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
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
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const links = [
  { text: "Home",                 href: "/",            type: "page" },
  { text: "Live Cooking",         href: "/live",         type: "page" },
  { text: "Sushi Masterclass",    href: "/masterclass",  type: "page" },
  { text: "Omakase",              href: "/omakase",      type: "page" },
  { text: "Oferta",               href: "offer",         type: "section" },
  { text: "Indywidualna Wycena",  href: "contact",       type: "section" },
] as const;

export const NavMenu: React.FC<NavMenuProps> = ({ isOpen, setIsOpen }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="nav-menu"
    >
      {links.map((link) => (
        <MenuLink
          key={link.href}
          text={link.text}
          href={link.href}
          type={link.type}
          setIsOpen={setIsOpen}
        />
      ))}
    </motion.div>
  );
};

const MenuLink: React.FC<MenuLinkProps> = ({ text, href, type, setIsOpen }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const close = () => setIsOpen(false);

  const handleSectionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    close();
    if (pathname === "/") {
      smoothScrollTo(href);
    } else {
      navigate(`/#${href}`);
    }
  };

  const handlePageClick = () => {
    close();
    if (href === "/" && pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const inner = (
    <>
      <motion.span variants={menuLinkArrowVariants} className="menu-link-arrow">
        <FiArrowRight className="h-[30px]" />
      </motion.span>
      <motion.div whileHover={{ y: -30 }}>
        <span className="menu-link-text-base">{text}</span>
        <span className="menu-link-text-hover">{text}</span>
      </motion.div>
    </>
  );

  if (type === "section") {
    return (
      <motion.a
        variants={menuLinkVariants}
        href={`/#${href}`}
        onClick={handleSectionClick}
        className="menu-link"
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.div variants={menuLinkVariants} className="menu-link">
      <Link to={href} onClick={handlePageClick} className="contents">
        {inner}
      </Link>
    </motion.div>
  );
};

const menuVariants = {
  open: {
    scaleY: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.1 },
  },
  closed: {
    scaleY: 0,
    transition: { when: "afterChildren", staggerChildren: 0.1 },
  },
};

const menuLinkVariants = {
  open:   { y: 0,   opacity: 1 },
  closed: { y: -10, opacity: 0 },
};

const menuLinkArrowVariants = {
  open:   { x: 0  },
  closed: { x: -4 },
};