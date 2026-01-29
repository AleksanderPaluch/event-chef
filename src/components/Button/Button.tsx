import React, { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Modal } from "../Modal/Modal";

const SPRING_OPTIONS = {
  mass: 1.5,
  stiffness: 500,
  damping: 100,
};

interface ButtonProps {
  text: string;
  ghost?: boolean;
}

export const Button:React.FC<ButtonProps> = ({text, ghost = false }) => {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLButtonElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, SPRING_OPTIONS);
  const ySpring = useSpring(y, SPRING_OPTIONS);

  const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;

  const handleMove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!ref.current) return;

    const { height, width } = ref.current.getBoundingClientRect();
    const { offsetX, offsetY } = e.nativeEvent;

    const xPct = offsetX / width;
    const yPct = 1 - offsetY / height;

    const newY = 4 + yPct * 4;
    const newX = 4 + xPct * 4;

    x.set(newX);
    y.set(-newY);
  };

  const handleReset = () => {
    x.set(0);
    y.set(0);
  };

    if (ghost) {
    return (
      <div className="rounded bg-black/20 w-[300px]">
          <a href="#Form" className="inline-flex group w-[300px]">
         <motion.button
          ref={ref}
          style={{
            transform,
          }}
          onClick={() => setOpen(true)}
          onMouseMove={handleMove}
          onMouseLeave={handleReset}
          onMouseDown={handleReset}
          className="flex items-center justify-between w-full h-full px-8 py-2 text-sm font-semibold border rounded hover:border-white/30 border-white/5 group bg-zinc-950 md:text-md"
        >
          <Copy>{text}</Copy>
          <Arrow />
        </motion.button>
      </a>
      </div>
    
    );
  }

  return (
    <section className="">
      <div className="rounded bg-black/20 w-[300px]">
        <motion.button
          ref={ref}
          style={{
            transform,
          }}
          onClick={() => setOpen(true)}
          onMouseMove={handleMove}
          onMouseLeave={handleReset}
          onMouseDown={handleReset}
          className="flex items-center justify-between w-full h-full px-8 py-2 text-sm font-semibold border rounded border-white/5 hover:border-white/30 group bg-black/40 md:text-md"
        >
          <Copy>{text}</Copy>
          <Arrow />
        </motion.button>
      </div>
      <Modal open={open} setOpen={setOpen} />
    </section>
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

