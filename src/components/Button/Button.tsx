import React, { useEffect, useState, useRef } from "react";
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

  const handleReset = () => { x.set(0); y.set(0); };

  const handleClick = () => {
    onClick?.();
    if (href) { navigate(href); return; }
    const sectionId = order ? "contact" : "offer";
    if (pathname === "/") smoothScrollTo(sectionId);
    else navigate(`/#${sectionId}`);
  };

  if (variant === "page") {
    return (
      <button
        onClick={handleClick}
        className="underline transition-colors text-heading underline-offset-4 decoration-zinc-500 dark:decoration-zinc-600 hover:decoration-zinc-900 dark:hover:decoration-zinc-100 w-fit"
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
      className="relative flex items-center justify-between w-full max-w-sm px-5 py-3 overflow-hidden transition-colors duration-500 border rounded-lg bg-black/80 group md:ml-0 border-white/15 hover:border-white/40"
    >
      {/* Shimmer */}
      <span
        className="absolute inset-0 transition-transform duration-700 ease-in-out -translate-x-full pointer-events-none group-hover:translate-x-full"
        style={{
          background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.2) 50%, transparent 65%)",
        }}
      />
      <TypewriterText text={text} />
      <FiArrowRight className="relative flex-shrink-0 text-xl text-zinc-300" />
    </motion.button>
  );
};

// ─── Typewriter ───────────────────────────────────────────────────────────────

const TypewriterText = ({ text }: { text: string }) => {
  const [count, setCount] = useState(0);
  const chars = text.split("");
  const done = count >= chars.length;

  useEffect(() => {
    const start = setTimeout(() => {
      const interval = setInterval(() => {
        setCount((c) => {
          if (c >= chars.length) { clearInterval(interval); return c; }
          return c + 1;
        });
      }, 45);
      return () => clearInterval(interval);
    }, 400);
    return () => clearTimeout(start);
  }, []);

  return (
    <span className="relative font-semibold text-sm uppercase tracking-[0.15em] text-zinc-300">
      {chars.slice(0, count).join("").replace(/ /g, "\u00A0")}
      {!done && (
        <motion.span
          className="inline-block w-px h-[1em] bg-zinc-300 align-middle ml-px"
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
        />
      )}
    </span>
  );
};