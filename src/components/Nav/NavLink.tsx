import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React from "react";
import { smoothScrollTo } from "../helpers";

interface NavLinkProps {
  text: string;
  href: string;
  type: "page" | "section";
}



export const NavLink: React.FC<NavLinkProps> = ({ text, href, type }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      smoothScrollTo(href);
    } else {
      navigate(`/#${href}`);
    }
  };

  const handlePageClick = (e: React.MouseEvent) => {
    if (href === "/" && pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const inner = (
    <motion.div whileHover={{ y: -40 }}>
      <span className="flex items-center h-[40px] tracking-[0.1em] opacity-80 text-xs  uppercase">
        {text}
      </span>
      <span className="flex items-center h-[40px] tracking-[0.1em] text-amber-500 dark:text-amber-400 text-xs uppercase">
        {text}
      </span>
    </motion.div>
  );

  if (type === "section") {
    return (
      <a
        href={`/#${href}`}
        onClick={handleSectionClick}
        className="hidden lg:block h-[40px] overflow-hidden font-medium"
      >
        {inner}
      </a>
    );
  }

  return (
    <Link
      to={href}
      onClick={handlePageClick}
      className="hidden lg:block h-[40px] overflow-hidden font-medium"
    >
      {inner}
    </Link>
  );
};

// import { motion } from "framer-motion";
// import { Link, useLocation } from "react-router-dom";
// import React from "react";

// interface NavLinkProps {
//   text: string;
//   href: string;
//   type: "page" | "section";
// }

// export const NavLink: React.FC<NavLinkProps> = ({ text, href, type }) => {
//   const { pathname } = useLocation();

//   const handlePageClick = (e: React.MouseEvent) => {
//     if (href === "/" && pathname === "/") {
//       e.preventDefault();
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   const inner = (
//     <motion.div whileHover={{ y: -40 }}>
//       <span className="flex items-center h-[40px] tracking-[0.1em] dark:text-zinc-300 text-xs font-thin uppercase">
//         {text}
//       </span>
//       <span className="flex items-center h-[40px] tracking-[0.1em] text-amber-500 dark:text-amber-400 text-xs uppercase">
//         {text}
//       </span>
//     </motion.div>
//   );

//   if (type === "section") {
//     return (
//       <a
//         href={`/#${href}`}
//         className="hidden lg:block h-[40px] overflow-hidden font-medium"
//       >
//         {inner}
//       </a>
//     );
//   }

//   return (
//     <Link
//       to={href}
//       onClick={handlePageClick}
//       className="hidden lg:block h-[40px] overflow-hidden font-medium"
//     >
//       {inner}
//     </Link>
//   );
// };
