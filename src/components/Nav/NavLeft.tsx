import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "./NavLink";

interface NavLeftProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavLeft: React.FC<NavLeftProps> = ({ setIsOpen }) => {
  return (
    <div className="flex items-center gap-6 ml-auto lg:ml-0">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="block text-3xl lg:hidden text-zinc-50"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        <FiMenu />
      </motion.button>
      {/* <img src={logo} alt="logo" className="w-8 h-8" /> */}
   
      <NavLink text="Home" href="Home"/>
      <NavLink text="Live Cooking" href="Live Cooking"/>
      <NavLink text="Sushi Masterclass" href="Sushi Masterclass"/>
      <NavLink text="Omakase" href="Omakase"/>

      <NavLink text="O nas" href="O nas"/>
      <NavLink text="Oferta" href="Oferta"/>
      <NavLink text="Zarezerwuj" href="Form" />
    </div>
  );
};
