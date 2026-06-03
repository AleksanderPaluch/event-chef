import { ReactLenis } from "lenis/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { HeroTranslations } from "../Translations/HeroTranslations";
import { useLanguage } from "../Translations/LanguageContext";

const SECTION_HEIGHT = 150;

export interface HeroProps {
  image: string;
  eyebrow?: string;
  heading: React.ReactNode;
  subtitle?: string;
  mobileImage?: string;
}

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

const HeroContent = ({ eyebrow, heading, subtitle }: Omit<HeroProps, "image">) => {
  const { lang } = useLanguage();
  const t = HeroTranslations[lang];

  return (
    <div className="absolute left-0 z-10 w-full max-w-4xl px-4 bottom-32 md:bottom-16 lg:bottom-52 md:px-12 lg:px-20">
      {eyebrow && (
        <span className="uppercase tracking-[0.4em] text-amber-500 dark:text-amber-400 text-sm font-semibold">
          {eyebrow}
        </span>
      )}

      <h1 className="mt-4 text-4xl leading-tight lg:mt-5 md:text-5xl lg:text-6xl text-zinc-100">
        {heading}
      </h1>

      <div className="w-16 h-px mt-6 lg:mt-8 bg-amber-500/60" />

      {subtitle && (
        <p className="mt-32 text-sm font-semibold tracking-wide uppercase md:mt-6 text-zinc-300">
          {subtitle}
        </p>
      )}

      <div className="max-w-lg mt-4 lg:mt-7">
        <Button order text={t.cta} />
      </div>
    </div>
  );
};

const HeroMobile = ({ image, mobileImage, ...contentProps }: HeroProps) => (
  <section id="home" className="relative h-[100svh] w-full">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url(${mobileImage || image})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    />
    <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-b dark:from-black/0 dark:to-black" />
    <div className="absolute inset-0 bg-black/20 dark:bg-black/50" />
    <HeroContent {...contentProps} />
  </section>
);

const CenterImage = ({ image, ...contentProps }: HeroProps) => {
  const { scrollY } = useScroll();
  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["100%", "160%"]
  );

  return (
    <div className="sticky top-0 h-[115svh] w-full overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize,
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-b dark:from-black/0 dark:to-black" />
      <HeroContent {...contentProps} />
      <div className="absolute inset-0 bg-black/20 dark:bg-black/50" />
    </div>
  );
};

const HeroDesktop = (props: HeroProps) => (
  <section
    style={{ height: `calc(${SECTION_HEIGHT}px + 100svh)` }}
    className="relative w-full"
  >
    <CenterImage {...props} />
  </section>
);

export const Hero = (props: HeroProps) => {
  const isDesktop = useIsDesktop();

  if (!isDesktop) return <HeroMobile {...props} />;

  return (
    <div id="Home" className="overflow-x-hidden">
      <ReactLenis root options={{ lerp: 0.05, syncTouch: true }}>
        <HeroDesktop {...props} />
      </ReactLenis>
    </div>
  );
};