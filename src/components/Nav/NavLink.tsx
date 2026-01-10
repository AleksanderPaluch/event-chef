import { motion } from "framer-motion";

interface NavLinkProps {
  text: string;
}


export const NavLink: React.FC<NavLinkProps> = ({ text }) => {
  return (
    <a
      href={`#${text}`}
      rel="nofollow"
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-zinc-400">{text}</span>
        <span className="flex items-center h-[30px] text-zinc-100">{text}</span>
      </motion.div>
    </a>
  );
};