import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

interface NavMenuProps {
  isOpen: boolean;
}

interface MenuLinkProps {
  text: string;
  href: string;
}

export const NavMenu: React.FC<NavMenuProps> = ({ isOpen }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute left-0 right-0 flex flex-col gap-6 p-4 origin-top shadow-lg h-[100vh] bg-zinc-950/95 backdrop-blur top-full"
    >
      <MenuLink text="Home" href="Home"/>
      <MenuLink text="Live Cooking" href="Live Cooking"/>
      <MenuLink text="Sushi Masterclass" href="Sushi Masterclass"/>
      <MenuLink text="Omakase" href="Omakase"/>

      <MenuLink text="O nas" href="O nas"/>
      <MenuLink text="Oferta" href="Oferta"/>
      <MenuLink text="Zarezerwuj" href="Form" />
    </motion.div>
  );
};

const MenuLink: React.FC<MenuLinkProps> = ({ text, href }) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href={`#${href}`}
      className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[30px] text-zinc-400" />
      </motion.span>
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-400">{text}</span>
        <span className="flex items-center h-[30px] text-zinc-100">{text}</span>
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
