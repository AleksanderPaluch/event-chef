import { useState } from "react";
import { Form } from "./Form";
import { Images } from "./Images";

export const ContactForm = () => {
  const [selected, setSelected] = useState<"company" | "individual">(
    "individual",
  );
  return (
    <section id="Form" className="md:max-w-[90%] section">
      <h3 className="mb-6 section-header ">
        Skontaktuj się z nami
      </h3>

      <p className="max-w-full section-description">
Wypełnij formularz, a my skontaktujemy się z Tobą w ciągu 24 godzin.
      </p>
      <div className="flex flex-col-reverse mx-auto overflow-hidden border lg:flex-row rounded-3xl border-black/15 dark:border-white/5 ">
        <Form selected={selected} setSelected={setSelected} />
        <Images selected={selected} />
      </div>
    </section>
  );
};
