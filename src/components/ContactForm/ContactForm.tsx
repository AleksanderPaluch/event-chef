import { useState } from "react";
import { Form } from "./Form";
import { Images } from "./Images";

export const ContactForm = () => {
  const [selected, setSelected] = useState<"company" | "individual">(
    "individual",
  );

  return (
    <section id="Form" className="contact-section">
      <h3 className="section-header">Zarezerwuj swój termin</h3>

      <p className="section-description">
        <span className="block"> Opisz swoje wydarzenie — a my zajmiemy się resztą.</span>
        W ciągu 24 godzin otrzymasz indywidualną ofertę dopasowaną do Twoich
        potrzeb.
      </p>

      <div className="contact-wrapper">
        <Form selected={selected} setSelected={setSelected} />
        <Images selected={selected} />
      </div>
    </section>
  );
};
