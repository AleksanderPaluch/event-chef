import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

interface NavMenuProps {
  isOpen: boolean;
      setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MenuLinkProps {
  text: string;
  href: string;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavMenu: React.FC<NavMenuProps> = ({ isOpen, setIsOpen }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="nav-menu"
    >
      <MenuLink setIsOpen={setIsOpen} text="Home" href="Home" />
      <MenuLink setIsOpen={setIsOpen} text="Live Cooking" href="Live" />
      <MenuLink setIsOpen={setIsOpen} text="Sushi Masterclass" href="Masterclass" />
      <MenuLink setIsOpen={setIsOpen} text="Omakase" href="Omakase" />
      <MenuLink setIsOpen={setIsOpen} text="O nas" href="About" />
      <MenuLink setIsOpen={setIsOpen} text="Oferta" href="Offer" />
      <MenuLink setIsOpen={setIsOpen} text="Indywidualna Wycena" href="Form" />
    </motion.div>
  );
};

const MenuLink: React.FC<MenuLinkProps> = ({ text, href, setIsOpen }) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href={`#${href}`}
     
      className="menu-link"
      onClick={() => setIsOpen((pv) => !pv)}
    >
      <motion.span variants={menuLinkArrowVariants} className="menu-link-arrow">
        <FiArrowRight className="h-[30px]" />
      </motion.span>

      <motion.div whileHover={{ y: -30 }}>
        <span className="menu-link-text-base">{text}</span>
        <span className="menu-link-text-hover">{text}</span>
      </motion.div>
    </motion.a>
  );
};

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};
