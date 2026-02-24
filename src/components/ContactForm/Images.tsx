import { motion, type Transition } from "framer-motion";
import homeSushi from "../../assets/home_sushi.jpg";
import officeSushi from "../../assets/office_sushi.jpg";


const BASE_TRANSITION: Transition = {
  ease: "anticipate",
  duration: 0.75,
};

export const Images = ({ selected }: { selected: "company" | "individual" }) => {
  return (
    <div className="bg-white dark:bg-zinc-950 relative overflow-hidden w-full min-h-[100px]">
      <motion.div
        initial={false}
        animate={{
          x: selected === "individual" ? "0%" : "100%",
        }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-slate-200"
        style={{
          backgroundImage: `url(${homeSushi})`,
              
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <motion.div
        initial={false}
        animate={{
          x: selected === "company" ? "0%" : "-100%",
        }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-slate-100"
        style={{
          backgroundImage: `url(${officeSushi})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};

