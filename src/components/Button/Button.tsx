import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiArrowRight, FiCheck, FiLoader } from "react-icons/fi";
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
variant?: "hero" | "page" | "submit";
onSubmit?: () => Promise<void>;
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
        className="underline transition-colors text-heading underline-offset-4 decoration-zinc-300 dark:decoration-zinc-600 hover:decoration-zinc-900 dark:hover:decoration-zinc-100 w-fit"
      >
        {text}
      </button>
    );
  }

  if (variant === "submit") {
  return <SubmitButton text={text} onClick={onClick} />;
}

  return (
    <motion.button
      ref={ref}
      style={{ transform }}
      onClick={handleClick}
      onMouseDown={handleReset}
      className="relative flex items-center justify-between w-full max-w-sm gap-6 px-5 py-3 overflow-hidden transition-colors duration-500 border rounded-lg bg-black/80 group md:ml-0 border-white/15 hover:border-white/40"
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

import { useEffect, useState } from "react";

const TypewriterText = ({ text }: { text: string }) => {
  const [count, setCount] = useState(0);
  const chars = text.split("");
  const done = count >= chars.length;

  useEffect(() => {
    // initial delay before typing starts
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


const SubmitButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) => {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const handleSubmit = async () => {
    setStatus("loading");
    try {
      // replace with your actual email service call
      // e.g. EmailJS, Resend, Formspree etc.
      await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "form submitted" }),
      });
      setStatus("done");
      onClick?.();
    } catch {
      setStatus("error");
    }
  };

  return (
    <button
      type="submit"
      onClick={handleSubmit}
      disabled={status === "loading" || status === "done"}
      className="flex items-center gap-2 text-lg underline transition-colors md:text-base underline-offset-4 decoration-zinc-300 dark:decoration-zinc-600 hover:decoration-zinc-900 dark:hover:decoration-zinc-100 text-zinc-700 dark:text-zinc-400 disabled:opacity-50 disabled:pointer-events-none w-fit"
    >
      {status === "loading" && (
        <FiLoader className="flex-shrink-0 animate-spin text-zinc-400" />
      )}
      {status === "done" && (
        <FiCheck className="flex-shrink-0 text-green-600" />
      )}
      <span>
        {status === "loading"
          ? "Wysyłanie..."
          : status === "done"
          ? "Wysłano!"
          : status === "error"
          ? "Spróbuj ponownie"
          : text}
      </span>
    </button>
  );
};