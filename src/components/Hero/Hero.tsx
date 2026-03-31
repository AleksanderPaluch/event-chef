import { ReactLenis } from "lenis/react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "../../assets/sushiplate.jpg";
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";

const SECTION_HEIGHT = 400;

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isDesktop;
};

// ── Shared static text ────────────────────────────────────────────────────────
const HeroContent = () => (
  <div className="absolute left-0 z-10 w-full max-w-4xl px-6 bottom-72 md:bottom-16 lg:bottom-72 md:px-12 lg:px-20">
    {/* Eyebrow */}
    <span className="uppercase tracking-[0.4em] text-amber-400 text-sm  font-semibold">
      Event Chef
    </span>

    {/* Heading */}
    <h1 className="mt-4 text-4xl font-medium leading-tight lg:mt-5 md:text-5xl lg:text-7xl text-zinc-100">
      Sushi tworzone
      <br />
      w <span className="text-amber-400">Twojej</span> przestrzeni
    </h1>

    {/* Divider accent */}
    <div className="w-16 h-px mt-6 lg:mt-8 bg-amber-400/60" />

    {/* Subtitle */}
    <p className="mt-4 text-sm tracking-wider uppercase md:text-base text-zinc-400">
      Wesela&nbsp;&nbsp;•&nbsp;&nbsp;Eventy firmowe&nbsp;&nbsp;•&nbsp;&nbsp;Prywatne kolacje
    </p>

    {/* CTA */}
    <div className="mt-8 lg:mt-10 ">
      <Button order link variant="hero" text="Otrzymaj indywidualną ofertę" />
    </div>
  </div>
);

// ── Mobile / tablet ───────────────────────────────────────────────────────────
const HeroMobile = () => (
  <section className="relative h-[100svh] w-full ">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
      {/* <div className="absolute inset-0 pointer-events-none bg-gradient-to-b dark:from-zinc-950/0 via-transparent dark:to-zinc-950" /> */}
      <div className="absolute left-0 right-0 -bottom-1 h-1/4 bg-gradient-to-b dark:from-zinc-950/0 dark:to-zinc-950" />
           <div className="absolute inset-0 bg-black/50 dark:bg-zinc-950/50" />
    <HeroContent />
    
  </section>
);

// ── Desktop animated ──────────────────────────────────────────────────────────
const HeroDesktop = () => (
  <section
    style={{ height: `calc(${SECTION_HEIGHT}px + 100svh)` }}
    className="relative w-full"
  >
    <CenterImage />
  </section>
);

const CenterImage = () => {
  const { scrollY } = useScroll();

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["100%", "160%"]
  );



  return (
    <div className="sticky top-0 h-[120svh] w-full overflow-hidden">
      {/* Animated image */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize,
          
        }}
      />
      {/* Gradient overlay */}
    <div className="absolute left-0 right-0 -bottom-1 h-1/4 bg-gradient-to-b dark:from-zinc-950/0 dark:to-zinc-950" />

      {/* Static text — sits above everything, no motion wrapper */}
      <HeroContent />
            <div className="absolute inset-0 bg-black/50 dark:bg-zinc-950/60" />
    </div>
  );
};

// ── Root export ───────────────────────────────────────────────────────────────
export const Hero = () => {
  const isDesktop = useIsDesktop();

  if (!isDesktop) return <HeroMobile />;

  return (
    <div className="overflow-x-hidden">
      <ReactLenis root options={{ lerp: 0.05, syncTouch: true }}>
        <HeroDesktop />
      </ReactLenis>
    </div>
  );
};