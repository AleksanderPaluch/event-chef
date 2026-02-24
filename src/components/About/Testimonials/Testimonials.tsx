

import { TestimonialList } from "./TestimonialList";

export const Testimonials = () => {
  return (
    <>
      <div className="">
        <h3 className="section-header">
          Co mówią o nas?
        </h3>

        <p className="section-description">
               Zawsze staramy się zapewnić naszym klientom najlepszą obsługę i
          najwyższą jakość usług. Oto, co mówią o nas niektórzy z naszych
          klientów:
        </p>
      </div>

      <div className="scroll-wrapper">
        <div className="scroll-fade-left" />
        <div className="scroll-fade-right" />

        <div className="scroll-content">
          <TestimonialList />
        </div>
      </div>
    </>
  );
};