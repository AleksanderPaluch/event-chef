import { Button } from "../Button/Button";
import backgroundPhoto from "../../assets/sushiplate.jpg";
import { Intro } from "./Intro";


export const Hero = () => {
  return (
    <>
      <section
        id="Home"
        className="relative flex justify-center w-full h-screen lg:h-[110vh] overflow-hidden text-center"
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
        <div className="absolute inset-0 bg-black/70" />

        {/* Bottom gradient fade */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-b dark:from-zinc-950/0 dark:to-zinc-950" /> */}

        {/* Content */}
        <div className="absolute z-10  px-6 mx-auto text-center top-1/3 md:top-1/4 lg:top-[30%] w-full">
          <span className="  uppercase  tracking-[0.5em] text-zinc-300 text-sm md:text-xl font-medium">
            Event Chef
          </span>

          <h1 className="mt-8 text-4xl font-medium leading-normal md:mt-4 lg:mt-10 text-zinc-200 md:text-5xl lg:text-7xl">
          Sushi tworzone  w <span className="block ">  <span className="text-amber-400">  Twojej</span> przestrzeni</span> 
          </h1>

          <div className="mt-14 lg:mt-14 md:mt-4">
            <Button order link variant="hero" text="Otrzymaj indywidualną ofertę" />
          </div>

          <p className="mt-4 text-base lg:mt-9 md:text-lg text-zinc-300">
            Wesela • Eventy firmowe • Prywatne kolacje
          </p>
        </div>
      </section>

      <Intro />
    </>
  );
};
