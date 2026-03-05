import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiArrowRight, FiX } from "react-icons/fi";

const SPRING_OPTIONS = {
  mass: 1.5,
  stiffness: 500,
  damping: 100,
};

interface ButtonProps {
  text: string;
  variant?: "primary" | "ghost" | "modal" | "hero";
  size?: "full" | "fit";
  link?: boolean;
   order?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  size = "full",
  link = false,
  order = false,
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

  const variantClasses = {
    primary: "btn-primary custom-border",
    ghost: "btn-ghost   custom-border",
    modal: "btn-modal ",
    hero: "bg-transparent border  border-white/40 hover:text-white hover:border-white/70 max-w-xl mx-auto",
  };

  const sizeClasses = {
    full: "btn-full",
    fit: "btn-fit",
  };

  const className = `
  btn group
  ${variantClasses[variant]}
  ${sizeClasses[size]}
`;

  const content = (
    <>
      <Copy>{text}</Copy>
      {variant === "modal" ? <Close /> : <Arrow />}
    </>
  );

  if (link) {
    return (
      <a href={`${order ? "#Form" : "#Offer"}`} className="inline-flex w-full ">
        <motion.button
          ref={ref}
          style={{ transform }}
          onClick={onClick}
          onMouseDown={handleReset}
          className={className}
        >
          {content}
        </motion.button>
      </a>
    );
  }

  return (
    <motion.button
      ref={ref}
      style={{ transform }}
      onClick={onClick}
      onMouseDown={handleReset}
      className={className }
    >
      {content}
    </motion.button>
  );
};

const Copy = ({ children }: { children: string }) => {
  return (
    <span className="relative overflow-hidden">
      <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute top-0 left-0 block transition-transform duration-300 translate-y-full group-hover:translate-y-0">
        {children}
      </span>
    </span>
  );
};

const Arrow = () => (
  <div className="flex w-6 h-6 overflow-hidden text-2xl pointer-events-none">
    <FiArrowRight className="transition-transform duration-300 -translate-x-full shrink-0 group-hover:translate-x-0" />
    <FiArrowRight className="transition-transform duration-300 -translate-x-full shrink-0 group-hover:translate-x-0" />
  </div>
);

const Close = () => (
  <div className="flex w-6 h-6 overflow-hidden text-3xl pointer-events-none lg:text-4xl lg:w-8 lg:h-8 ">
    <FiX className="transition-transform duration-300 -translate-x-full shrink-0 group-hover:translate-x-0" />
    <FiX className="transition-transform duration-300 -translate-x-full shrink-0 group-hover:translate-x-0" />
  </div>
);
