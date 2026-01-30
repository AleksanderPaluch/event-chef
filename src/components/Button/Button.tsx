import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const SPRING_OPTIONS = {
  mass: 1.5,
  stiffness: 500,
  damping: 100,
};

interface ButtonProps {
  text: string;
  ghost?: boolean;
  modal?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  ghost = false,
  modal = false,
  onClick,
}) => {
  const ref = useRef<HTMLButtonElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, SPRING_OPTIONS);
  const ySpring = useSpring(y, SPRING_OPTIONS);

  const transform = useMotionTemplate`
    translateX(${xSpring}px) translateY(${ySpring}px)
  `;

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;

    const { height, width } = ref.current.getBoundingClientRect();
    const { offsetX, offsetY } = e.nativeEvent;

    x.set(4 + (offsetX / width) * 4);
    y.set(-(4 + (1 - offsetY / height) * 4));
  };

  const handleReset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ transform }}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleReset}
      onMouseDown={handleReset}
      className={`flex items-center justify-between   px-4 py-2 text-sm font-semibold border rounded group
        ${
          ghost
            ? "bg-zinc-950 border-white/5 hover:border-white/30"
            : "bg-black/40 border-white/5 hover:border-white/30"
        }
        
         ${modal ? "w-fit" : "w-full "}
        `
      
       
      }
    >
      <Copy>{text}</Copy>
      <Arrow />
    </motion.button>
  );
};


const Copy = ({ children }: { children: string }) => {
  return (
    <span className="relative overflow-hidden">
      <span className="inline-block transition-transform duration-300 text-zinc-300 group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute top-0 left-0 block transition-transform duration-300 translate-y-full text-zinc-50 group-hover:translate-y-0">
        {children}
      </span>
    </span>
  );
};

const Arrow = () => (
  <div className="flex w-6 h-6 overflow-hidden text-2xl pointer-events-none">
    <FiArrowRight className="transition-transform duration-300 -translate-x-full shrink-0 text-zinc-50 group-hover:translate-x-0" />
    <FiArrowRight className="transition-transform duration-300 -translate-x-full shrink-0 text-zinc-300 group-hover:translate-x-0" />
  </div>
);
