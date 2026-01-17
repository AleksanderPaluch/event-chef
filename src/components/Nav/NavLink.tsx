import { motion } from "framer-motion";

interface NavLinkProps {
  text: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ text }) => {
  return (
    <a
      href={`#${text}`}
      rel="nofollow"
      className="hidden lg:block h-[40px] overflow-hidden font-medium"
    >
      <motion.div whileHover={{ y: -40 }}>
        <span className="flex items-center h-[40px] text-zinc-400 text-lg">
          {text}
        </span>
        <span className="flex items-center h-[40px] text-zinc-100 text-lg">
          {text}
        </span>
      </motion.div>
    </a>
  );
};
