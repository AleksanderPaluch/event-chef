import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FiX } from "react-icons/fi";

const SPRING_OPTIONS = {
  mass: 1.5,
  stiffness: 500,
  damping: 100,
};

interface ButtonProps {
  text: string;
  ghost?: boolean;
  modal?: boolean;
  link?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  ghost = false,
  modal = false,
  link = false,
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

  const handleReset = () => {
    x.set(0);
    y.set(0);
  };

  if (link) {
    return (
      <>
        <a href="#Form" className="inline-flex w-full group">
          {" "}
          <motion.button
            ref={ref}
            style={{ transform }}
            onClick={onClick}
            onMouseDown={handleReset}
            className="flex items-center justify-between w-full h-full px-8 py-2 text-sm font-semibold border rounded hover:border-white/30 border-white/5 group bg-zinc-950 md:text-md"
          >
            {" "}
            <Copy>{text}</Copy> <Arrow />{" "}
          </motion.button>{" "}
        </a>
      </>
    );
  }

  return (
    <motion.button
      ref={ref}
      style={{ transform }}
      onClick={onClick}
      onMouseDown={handleReset}
      className={`flex items-center justify-between    text-sm font-semibold  rounded group
        ${
          ghost
            ? " p-2"
            : "bg-black/40 border-white/5 hover:border-white/30 px-4 py-2 border"
        }
        
         ${modal ? "w-fit" : "w-full "}
        `}
    >
      <Copy>{text}</Copy>
      {ghost ? <Close /> : <Arrow />}
    </motion.button>
  );
};

const Copy = ({ children }: { children: string }) => {
  return (
    <span className="relative overflow-hidden">
      <span className="inline-block transition-transform duration-300 text-zinc-200 group-hover:-translate-y-full">
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

const Close = () => (
  <div className="flex w-6 h-6 overflow-hidden text-2xl pointer-events-none lg:text-3xl lg:w-8 lg:h-8 ">
    <FiX className="transition-transform duration-300 -translate-x-full shrink-0 text-zinc-50 group-hover:translate-x-0" />
    <FiX className="transition-transform duration-300 -translate-x-full shrink-0 text-zinc-300 group-hover:translate-x-0" />
  </div>
);
