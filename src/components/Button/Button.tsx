import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { smoothScrollTo } from "../helpers";

const SPRING_OPTIONS = {
  mass: 1.5,
  stiffness: 500,
  damping: 100,
};

interface ButtonProps {
  text: string;
  order?: boolean;
  href?: string;
  onClick?: () => void;
  variant?: "hero" | "page";
}

export const Button: React.FC<ButtonProps> = ({
  text,
  order = false,
  href,
  onClick,
  variant = "hero",
}) => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, SPRING_OPTIONS);
  const ySpring = useSpring(y, SPRING_OPTIONS);
  const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;

  const handleReset = () => {
    x.set(0);
    y.set(0);
  };

  const handleClick = () => {
    onClick?.();

    if (href) {
      navigate(href);
      return;
    }

    const sectionId = order ? "contact" : "offer";
    if (pathname === "/") {
      smoothScrollTo(sectionId);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  if (variant === "page") {
    return (
      <button
        onClick={handleClick}
        className="text-sm underline transition-colors text-zinc-900 dark:text-zinc-100 underline-offset-4 decoration-zinc-300 dark:decoration-zinc-600 hover:decoration-zinc-900 dark:hover:decoration-zinc-100 w-fit"
      >
        {text}
      </button>
    );
  }

  return (
    <motion.button
      ref={ref}
      style={{ transform }}
      onClick={handleClick}
      onMouseDown={handleReset}
      className="w-full mx-auto bg-transparent border btn group lg:text-lg border-white/10 text-zinc-50/40 hover:text-zinc-200 hover:border-white/70 md:ml-0"
    >
      <Copy>{text}</Copy>
      <Arrow />
    </motion.button>
  );
};

const Copy = ({ children }: { children: string }) => (
  <span className="relative overflow-hidden">
    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
      {children}
    </span>
    <span className="absolute top-0 left-0 block transition-transform duration-300 translate-y-full group-hover:translate-y-0">
      {children}
    </span>
  </span>
);

const Arrow = () => (
  <div className="flex w-6 h-6 overflow-hidden text-2xl pointer-events-none">
    <FiArrowRight className="transition-transform duration-300 -translate-x-full shrink-0 group-hover:translate-x-0" />
    <FiArrowRight className="transition-transform duration-300 -translate-x-full shrink-0 group-hover:translate-x-0" />
  </div>
);