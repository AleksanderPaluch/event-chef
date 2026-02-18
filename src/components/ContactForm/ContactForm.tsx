

import { useState } from "react";
import { Form } from "./Form";
import { Images } from "./Images";


export const ContactForm = () => {
  const [selected, setSelected] = useState<"company" | "individual">(
    "individual"
  );
  return (
    <section id="Form" className="px-3 my-60 ">
      <div className="     md:max-w-[90%]  lg:max-w-8xl  mx-auto shadow-lg flex flex-col-reverse lg:flex-row rounded-3xl overflow-hidden border border-white/5">
        <Form selected={selected} setSelected={setSelected} />
        <Images selected={selected} />
      </div>
    </section>
  );
};




