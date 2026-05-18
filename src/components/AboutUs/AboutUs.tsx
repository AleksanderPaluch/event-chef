import { useEffect, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";
import { MdStar, MdStarHalf, MdStarBorder } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { Motion } from "../Motion/Motion";
import { getRelativeDatePL } from "./helpers";
import { useLanguage } from "../Translations/LanguageContext";
import { AboutTranslations } from "../Translations/AboutTranslations";



// ─── Stat counter ─────────────────────────────────────────────────────────────

const StatItem = ({
  num,
  suffix,
  label,
}: {
  num: number;
  suffix: string;
  label: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (ref.current) ref.current.textContent = Math.round(value).toString();
      },
    });
  }, [isInView, num]);

  return (
    <div className="flex flex-col mb-4 lg:mt-8">
      <div className="text-4xl tracking-tight lg:text-5xl text-zinc-900 dark:text-zinc-100">
        <span ref={ref}>0</span>
        <span className="ml-1 text-amber-700 dark:text-amber-400">{suffix}</span>
        <p className="display-block text-sm mt-2 lg:mt-3 tracking-[0.15em] uppercase font-medium text-zinc-800 dark:text-zinc-400">
          {label}
        </p>
      </div>
    </div>
  );
};

// ─── Review card ─────────────────────────────────────────────────────────────

const AVATAR_COLORS = [
  "bg-blue-500",
  "bg-red-500",
  "bg-green-600",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
];

const ReviewCard = ({
  name,
  info,
  rating,
  createdAt,
}: {
  name: string;
  info: string;
  rating: number;
  createdAt: string;
}) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  const colorClass =
    AVATAR_COLORS[
      name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) % AVATAR_COLORS.length
    ];

  return (
    <div className="flex flex-col flex-shrink-0 gap-3 p-5 bg-white border shadow-sm w-72 rounded-xl dark:bg-zinc-950 border-zinc-300 dark:border-zinc-800 dark:shadow-none">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full ${colorClass} flex items-center justify-center text-white text-sm font-medium flex-shrink-0`}
          >
            {name[0]}
          </div>
          <div>
            <p className="text-sm font-medium leading-tight text-zinc-900 dark:text-zinc-100">
              {name}
            </p>
            <p className="text-xs text-zinc-400 dark:text-zinc-500 leading-tight mt-0.5">
              {getRelativeDatePL(createdAt)}
            </p>
          </div>
        </div>
        <FcGoogle className="flex-shrink-0 text-2xl" />
      </div>

      <div className="flex items-center gap-0.5">
        {[...Array(full)].map((_, i) => (
          <MdStar key={`f${i}`} className="text-[#FBBC04] text-lg" />
        ))}
        {half && <MdStarHalf className="text-[#FBBC04] text-lg" />}
        {[...Array(empty)].map((_, i) => (
          <MdStarBorder key={`e${i}`} className="text-[#FBBC04] text-lg" />
        ))}
      </div>

      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {info}
      </p>
    </div>
  );
};

// ─── Scrolling strip ──────────────────────────────────────────────────────────

type Testimonial = {
  id: number;
  name: string;
  info: string;
  rating: number;
  createdAt: string;
};

const TestimonialStrip = ({ testimonials }: { testimonials: readonly Testimonial[] }) => (
  <div className="relative overflow-hidden">
    <div className="absolute top-0 bottom-0 left-0 z-10 w-16 pointer-events-none bg-gradient-to-r from-white dark:from-black to-transparent" />
    <div className="absolute top-0 bottom-0 right-0 z-10 w-16 pointer-events-none bg-gradient-to-l from-white dark:from-black to-transparent" />

    <div className="flex">
      <motion.div
        initial={{ translateX: "0%" }}
        animate={{ translateX: "-100%" }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="flex gap-4 px-2"
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <ReviewCard key={`${t.id}-${i}`} {...t} />
        ))}
      </motion.div>
    </div>
  </div>
);

// ─── Main section ─────────────────────────────────────────────────────────────

export const AboutSection = () => {
  const { lang } = useLanguage();
  const t = AboutTranslations[lang];

  return (
    <section className="flex flex-col gap-20 px-6 py-24 mx-auto max-w-7xl lg:py-32 lg:pb-24 lg:gap-28">
      {/* About us — two column */}
      <div className="flex flex-col gap-16 md:flex-row md:justify-between">
        <Motion>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            {t.eyebrow}
          </p>
          <h2 className="text-4xl md:text-4xl font-light leading-[1.15] text-heading tracking-tight">
            {t.heading1}
            <br />
            {t.heading2}
          </h2>
        </Motion>

        <Motion>
          <p className="max-w-md text-base leading-relaxed md:mt-10 text-muted">
            {t.description}
          </p>
        </Motion>
      </div>

      {/* Stats */}
      <Motion>
        <div className="flex flex-col items-center justify-between gap-3 pt-12 text-center border-t lg:gap-12 md:flex-row lg:px-0 border-subtle">
          {t.stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </Motion>

      {/* Testimonials */}
      <div>
        <Motion>
          <div className="flex items-end justify-between mb-12">
            <h3 className="text-3xl font-light tracking-tight md:text-4xl text-heading">
              {t.testimonialsHeading}
            </h3>
          </div>
        </Motion>

        <TestimonialStrip testimonials={t.testimonials} />
      </div>
    </section>
  );
};