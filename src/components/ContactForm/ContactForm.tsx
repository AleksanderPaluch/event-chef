import { useRef, useState } from "react";
import { Motion } from "../Motion/Motion";
import { Images } from "./Images";
import { Form } from "./Form";
import { type RepresentType } from "./types";
import { useLanguage } from "../Translations/LanguageContext";
import { ContactFormTranslations } from "../Translations/ContactFormTranslations";


export const ContactForm = () => {
  const [selected, setSelected] = useState<RepresentType>("individual");
  const sectionRef = useRef<HTMLElement>(null);
  const { lang } = useLanguage();
  const t = ContactFormTranslations[lang];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="px-6 py-24 mx-auto lg:py-32 max-w-7xl"
    >
      {/* Header */}
      <div className="mb-8 lg:mb-20">
        <Motion>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            {t.eyebrow}
          </p>
          <h2 className="mb-6 text-4xl font-light tracking-tight md:text-5xl text-heading">
            {t.heading}
          </h2>
        </Motion>
        <Motion>
          <p className="max-w-lg text-base leading-relaxed text-muted">
            {t.description}
          </p>
        </Motion>
      </div>

      <div className="mb-8 divider lg:mb-16" />

      {/* Form + Image grid */}
      <div className="grid items-stretch grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-28">
        <div className="order-2 lg:order-1">
          <Form selected={selected} setSelected={setSelected} sectionRef={sectionRef} />
        </div>
        <div className="order-1 lg:order-2">
          <Images selected={selected} />
        </div>
      </div>

      <div className="mt-4 divider lg:mt-8" />

      {/* GDPR note */}
      <p className="max-w-full mt-6 text-xs leading-relaxed text-justify text-muted">
        {t.gdpr}
      </p>
    </section>
  );
};