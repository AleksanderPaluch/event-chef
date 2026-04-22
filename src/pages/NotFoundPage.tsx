import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-zinc-100 dark:bg-black">

      {/* Big 404 */}
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-[160px] md:text-[240px] font-light leading-none tracking-tight text-zinc-200 dark:text-zinc-800 select-none"
      >
        404
      </motion.p>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-16 h-px mb-8 origin-left bg-zinc-300 dark:bg-zinc-700"
      />

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-3 mb-12"
      >
        <p className="text-[11px] tracking-[0.2em] uppercase text-accent">
          Strona nie istnieje
        </p>
        <h1 className="text-2xl font-light tracking-tight text-center md:text-3xl text-heading">
          Zgubiłeś się?
        </h1>
        <p className="max-w-xs text-sm leading-relaxed text-center text-body">
          Strona, której szukasz, nie istnieje lub została przeniesiona.
        </p>
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-8"
      >
        <button
          onClick={() => navigate("/")}
          className="text-sm underline transition-colors text-heading underline-offset-4 decoration-zinc-300 dark:decoration-zinc-600 hover:decoration-zinc-900 dark:hover:decoration-zinc-100"
        >
          Wróć na stronę główną
        </button>

        <span className="text-xs text-ghost">lub</span>

        <button
          onClick={() => navigate(-1)}
          className="text-sm transition-colors text-muted hover:text-heading"
        >
          Cofnij
        </button>
      </motion.div>

    </div>
  );
};