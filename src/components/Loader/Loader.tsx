import { type Variants, motion } from "framer-motion";



const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
} as Variants;

export const Loader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      className="flex gap-1"
    >
      <motion.div variants={variants} className="w-2 h-12 bg-white" />
      <motion.div variants={variants} className="w-2 h-12 bg-white" />
      <motion.div variants={variants} className="w-2 h-12 bg-white" />
      <motion.div variants={variants} className="w-2 h-12 bg-white" />
      <motion.div variants={variants} className="w-2 h-12 bg-white" />
    </motion.div>
  );
};




