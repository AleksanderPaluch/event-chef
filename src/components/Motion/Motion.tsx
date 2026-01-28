import { motion } from "framer-motion";

interface MotionProps {
  children: React.ReactNode;
}



export const Motion: React.FC<MotionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.6 }}
    
    
    >{children}</motion.div>
  )
}