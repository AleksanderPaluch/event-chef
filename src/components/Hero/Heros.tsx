import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../Button/Button";
import backgroundPhoto from "../../assets/sushiplate.jpg";

export const Heros = () => {
  const introRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start end", "start start"],
  });

  // Intro плавно піднімається вгору
  const y = useTransform(scrollYProgress, [0, 1], [120, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <>
      {/* HERO */}
      <section
        id="Home"
        className="relative flex  justify-center w-full h-[110vh] overflow-hidden text-center"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-bottom "
          style={{
            backgroundImage: `url(${backgroundPhoto})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Bottom gradient fade */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-b from-white/0 to-white dark:from-black/0 dark:to-zinc-950" /> */}

        {/* Content */}
        <div className="absolute z-10 max-w-4xl px-6 top-28 ">
          <span className="uppercase tracking-[0.3em] text-zinc-300 text-xs md:text-sm">
            Event Chef
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-7xl">
            Twoje wydarzenie. Sushi przygotowywane na żywo.
          </h1>

          <div className="mt-10">
            <Button order link variant="hero" text="Sprawdź dostępny termin" />
          </div>

          <p className="mt-6 text-base text-zinc-200">
            Wesela • Eventy firmowe • Prywatne kolacje
          </p>
        </div>
      </section>

      {/* INTRO */}
      <div
        ref={introRef}
        style={{ y, opacity }}
        className="relative py-32 "
      >
        <div className="max-w-3xl px-6 mx-auto text-center">
          <motion.h2 className="text-3xl font-semibold md:text-4xl">
            Sushi experience dopasowane do Twojego wydarzenia
          </motion.h2>  


          <p className="mt-8 text-lg leading-relaxed text-zinc-300">
            Tworzymy wyjątkowe doświadczenia kulinarne w Twojej przestrzeni.
            Przyjeżdżamy na miejsce, przygotowujemy stanowisko i na oczach gości
            serwujemy świeże, autorskie sushi.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-zinc-300">
            Możesz wybrać formułę dopasowaną do charakteru wydarzenia —
            live cooking, interaktywny masterclass lub ekskluzywne omakase.
          </p>
        </div>
      </div>
    </>
  );
};