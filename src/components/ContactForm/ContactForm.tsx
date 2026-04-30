import { useRef, useState } from "react";
import { Motion } from "../Motion/Motion";
import { Images } from "./Images";
import { Form } from "./Form";
import { type RepresentType } from "./types";

export const ContactForm = () => {
  const [selected, setSelected] = useState<RepresentType>("individual");
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="px-6 py-24 mx-auto lg:py-32 max-w-7xl"
    >
      {/* Header */}
      <div className="mb-8 lg:mb-20">
        <Motion>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-700 dark:text-amber-400 mb-4">
            Kontakt
          </p>
          <h2 className="mb-6 text-4xl font-light tracking-tight md:text-5xl text-zinc-900 dark:text-zinc-100">
            Indywidualna wycena
          </h2>
        </Motion>
        <Motion>
          <p className="max-w-md text-base leading-relaxed text-zinc-400 dark:text-zinc-500">
            Opisz swoje wydarzenie — a my zajmiemy się resztą. W ciągu 24 godzin
            prześlemy propozycję dopasowaną do Twoich potrzeb.
          </p>
        </Motion>
      </div>

      <div className="w-full h-px mb-8 lg:mb-16 bg-zinc-200 dark:bg-zinc-800" />

      {/* Form + Image grid */}
      <div className="grid items-stretch grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-28">
        <div className="order-2 lg:order-1">
          <Form selected={selected} setSelected={setSelected} sectionRef={sectionRef} />
        </div>
        <div className="order-1 lg:order-2">
          <Images selected={selected} />
        </div>
      </div>

      <div className="w-full h-px mt-4 lg:mt-8 bg-zinc-200 dark:bg-zinc-800" />

      {/* GDPR note */}
      <p className="max-w-full mt-6 text-xs leading-relaxed text-justify text-zinc-300 dark:text-zinc-600">
        Administratorem danych osobowych jest Event Chef. Dane osobowe
        przetwarzane są w celu obsługi zapytania. Podanie danych jest
        dobrowolne, ale niezbędne do udzielenia odpowiedzi. Przysługuje Ci prawo
        dostępu do danych, ich poprawiania, usunięcia, ograniczenia
        przetwarzania oraz cofnięcia zgody w dowolnym momencie. Szczegóły
        znajdują się w Polityce Prywatności.
      </p>
    </section>
  );
};
