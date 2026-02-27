import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "./NavLink";

interface NavLeftProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

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

      <NavLink text="Home" href="Home" />
      <NavLink text="Live Cooking" href="Live Cooking" />
      <NavLink text="Sushi Masterclass" href="Sushi Masterclass" />
      <NavLink text="Omakase" href="Omakase" />
      <NavLink text="O nas" href="About" />
      <NavLink text="Oferta" href="Offer" />
      <NavLink text="Indywidualna Wycena" href="Form" />
    </div>
  );
};