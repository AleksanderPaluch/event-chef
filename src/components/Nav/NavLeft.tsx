import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "./NavLink";




interface NavLeftProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavLeft: React.FC<NavLeftProps> = ({ setIsOpen }) => {
  return (
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-zinc-50 text-2xl"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        <FiMenu />
      </motion.button>
      {/* <img src={logo} alt="logo" className="w-8 h-8" /> */}
      <NavLink text="Live" />
      <NavLink text="Masterclass" />
      <NavLink text="Omakase" />
      <NavLink text="Oferta" />
      <NavLink text="O nas" />
    </div>
  );
};


