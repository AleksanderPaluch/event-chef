import { motion } from "framer-motion";

interface MotionProps {
  children: React.ReactNode;
}



export const Motion: React.FC<MotionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    
    
    >{children}</motion.div>
  )
}