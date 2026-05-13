import { motion } from "framer-motion";
import homeSushi from "../../assets/home_sushi.jpg";
import officeSushi from "../../assets/office_sushi.jpg";
import { type RepresentType } from "./types";

export const Images = ({ selected }: { selected: RepresentType }) => (
  <div className="relative overflow-hidden rounded-lg w-full min-h-[220px] lg:min-h-full">
    <motion.div
      initial={false}
      animate={{ x: selected === "individual" ? "0%" : "100%" }}
      transition={{ ease: "anticipate", duration: 0.75 }}
      className="absolute inset-0 bg-center bg-cover"
      style={{ backgroundImage: `url(${homeSushi})` }}
    >
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40" />
    </motion.div>
    <motion.div
      initial={false}
      animate={{ x: selected === "company" ? "0%" : "-100%" }}
      transition={{ ease: "anticipate", duration: 0.75 }}
      className="absolute inset-0 bg-center bg-cover"
      style={{ backgroundImage: `url(${officeSushi})` }}
    >
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40" />
    </motion.div>
  </div>
);
