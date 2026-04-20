import { useState } from "react";
import { Form } from "./Form";
import { Images } from "./Images";

export const ContactForm = () => {
  const [selected, setSelected] = useState<"company" | "individual">(
    "individual",
  );

  return (
    <section id="contact" className=" contact-section">
      <h3 className="section-header ">Indywidualna Wycena</h3>

      <p className="section-description">
        <span className="block">
          {" "}
          Opisz swoje wydarzenie — a my zajmiemy się resztą.
        </span>
        W ciągu 24 godzin prześlemy propozycję dopasowaną do Twojego wydarzenia.
      </p>

      <div className="contact-wrapper">
        <Form selected={selected} setSelected={setSelected} />
        <Images selected={selected} />
      </div>
      <p className="max-w-full px-4 mt-4 text-xs section-description lg:mt-8">
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
