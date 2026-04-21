// AboutSection.tsx — combines O nas, Stats, Testimonials

import { useEffect, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";
import { MdStar, MdStarHalf, MdStarBorder } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { Motion } from "../Motion/Motion";
import { getRelativeDatePL } from "./helpers";

// ─── Data ────────────────────────────────────────────────────────────────────

const STATS = [
  { num: 100, suffix: "%", label: "Zadowolonych klientów" },
  { num: 30, suffix: "+", label: "Eventów zorganizowanych" },
  { num: 10, suffix: "lat+", label: "Doświadczenia zawodowego" },
];

const TESTIMONIALS = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?w=200&q=80",
    name: "Gabriella S.",
    info: "Polecam, profesjonalne podejście do klienta i szybka realizacja.",
    rating: 3.5,
    createdAt: "2026-02-05",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?w=200&q=80",
    name: "Daniel A.",
    info: "Bardzo dobra organizacja live sushi na imprezie urodzinowej. Goście byli zachwyceni!",
    rating: 5,
    createdAt: "2026-02-02",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?w=200&q=80",
    name: "Paweł W.",
    info: "Profesjonalna obsługa i pyszne sushi. Z pewnością skorzystam ponownie!",
    rating: 5,
    createdAt: "2025-02-09",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?w=200&q=80",
    name: "Magdalena S.",
    info: "Polecam, profesjonalne podejście do klienta i szybka realizacja.",
    rating: 4,
    createdAt: "2025-02-09",
  },
];

// ─── Stat counter ─────────────────────────────────────────────────────────────

const StatItem = ({ num, suffix, label }: { num: number; suffix: string; label: string }) => {
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
    <div className="flex flex-col gap-1">
      <p className="text-4xl lg:text-5xl font-light text-zinc-900 dark:text-zinc-100 tracking-tight">
        <span ref={ref}>0</span>
        <span className="text-amber-700 dark:text-amber-400">{suffix}</span>
      </p>
      <p className="text-xs tracking-[0.15em] uppercase text-zinc-400 dark:text-zinc-500">
        {label}
      </p>
    </div>
  );
};

// ─── Review card ─────────────────────────────────────────────────────────────

const ReviewCard = ({
  img,
  name,
  info,
  rating,
  createdAt,
}: {
  img?: string;
  name: string;
  info: string;
  rating: number;
  createdAt: string;
}) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="flex-shrink-0 w-72 lg:w-80 flex flex-col gap-4 p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-950">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {img ? (
            <img src={img} alt={name} className="w-9 h-9 rounded-full object-cover" />
          ) : (
            <div className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-sm font-medium text-zinc-600 dark:text-zinc-300">
              {name[0]}
            </div>
          )}
          <div>
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{name}</p>
            <p className="text-xs text-zinc-400 dark:text-zinc-500">{getRelativeDatePL(createdAt)}</p>
          </div>
        </div>
        <FcGoogle className="text-xl flex-shrink-0" />
      </div>

      <div className="flex gap-0.5">
        {[...Array(full)].map((_, i) => <MdStar key={`f${i}`} className="text-base text-yellow-400" />)}
        {half && <MdStarHalf className="text-base text-yellow-400" />}
        {[...Array(empty)].map((_, i) => <MdStarBorder key={`e${i}`} className="text-base text-yellow-400" />)}
      </div>

      <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{info}</p>
    </div>
  );
};

// ─── Scrolling strip ──────────────────────────────────────────────────────────

const TestimonialStrip = () => (
  <div className="relative overflow-hidden">
    {/* fade edges */}
    <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
    <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

    <div className="flex">
      <motion.div
        initial={{ translateX: "0%" }}
        animate={{ translateX: "-100%" }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex gap-4 px-2"
      >
        {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
          <ReviewCard key={`${t.id}-${i}`} {...t} />
        ))}
      </motion.div>
    </div>
  </div>
);

// ─── Main section ─────────────────────────────────────────────────────────────

export const AboutSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32 flex flex-col gap-20">

      {/* O nas — two column */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-start">
        <Motion>
          <p className="text-[11px] tracking-[0.2em] uppercase text-amber-700 dark:text-amber-400 mb-4">
            O nas
          </p>
          <h2 className="text-4xl md:text-5xl font-light leading-[1.15] text-zinc-900 dark:text-zinc-100 tracking-tight">
            Pasja do sushi,<br />w każdym detalu.
          </h2>
        </Motion>

        <Motion>
          <p className="text-base text-zinc-400 dark:text-zinc-500 leading-relaxed">
            Od początku najwyższą jakość stawiamy na pierwszym miejscu. Nasza
            firma została stworzona przez doświadczonych, utalentowanych
            kucharzy, których pasją jest sushi. Nasze zaangażowanie w
            korzystanie z najlepszych składników widoczne jest w każdej usłudze
            i w każdym zestawie. Dbamy o to, aby każde wydarzenie, które
            obsługujemy, było wyjątkowym, niezapomnianym doświadczeniem
            kulinarnym.
          </p>
        </Motion>
      </div>

      {/* Stats */}
      <Motion>
        <div className="grid grid-cols-3 gap-8 border-t border-zinc-200 dark:border-zinc-800 pt-12">
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </Motion>

      {/* Divider + testimonials header */}
      <div>
        <Motion>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-amber-700 dark:text-amber-400 mb-3">
                Opinie
              </p>
              <h3 className="text-3xl md:text-4xl font-light text-zinc-900 dark:text-zinc-100 tracking-tight">
                Co mówią o nas klienci?
              </h3>
            </div>
          </div>
        </Motion>

        <TestimonialStrip />
      </div>

    </section>
  );
};