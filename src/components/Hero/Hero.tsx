
import { Button } from "../Button/Button";
import backgroundPhoto from "../../assets/sushiplate.jpg";



export const Hero = () => {
  return (
    <section
      id="Home"
      className="relative flex items-center justify-center w-full h-screen mb-32 overflow-hidden text-center"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${backgroundPhoto})`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <span className="uppercase tracking-[0.3em] text-zinc-300 text-xs md:text-sm">
          Event Chef
        </span>

        <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-7xl">
          Twoje wydarzenie. Sushi przygotowywane na żywo.
        </h1>

        {/* <p className="max-w-2xl mx-auto mt-6 text-lg text-zinc-200">
          Ekskluzywne sushi show, które zachwyca gości i tworzy wyjątkową atmosferę.
        </p> */}

        <div className="mt-10">
          <Button link order variant="hero"  text="Sprawdź dostępny termin" />
        </div>

        <p className="mt-6 text-base text-zinc-200">
          Wesela • Eventy firmowe • Prywatne kolacje
        </p>
      </div>
    </section>
  );
};