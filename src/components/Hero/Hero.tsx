import { Button } from "../Button/Button";
import backgroundPhoto from "../../assets/sushiplate.jpg";
import { Intro } from "./Intro";

export const Hero = () => {
  return (
    <>
      <section
        id="Home"
        className="relative flex  justify-center w-full h-screen lg:h-[120vh] overflow-hidden text-center"
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
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-b from-white/0 to-white dark:from-black/0 dark:to-zinc-950" />

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

      <Intro />
    </>
  );
};
