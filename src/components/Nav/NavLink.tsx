import { motion } from "framer-motion";

interface NavLinkProps {
  text: string;
  href: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ text, href }) => {
  return (
    <a
      href={`#${href}`}
      rel="nofollow"
      className="hidden lg:block h-[40px] overflow-hidden font-medium "
    >
      <motion.div whileHover={{ y: -40 }}>
        <span className="flex items-center h-[40px] tracking-[0.05em] dark:text-zinc-300 text-sm uppercase">
          {text}
        </span>
        <span className="flex items-center h-[40px] tracking-[0.05em] dark:text-zinc-50 text-base uppercase">
          {text}
        </span>
      </motion.div>
    </a>
  );
};
