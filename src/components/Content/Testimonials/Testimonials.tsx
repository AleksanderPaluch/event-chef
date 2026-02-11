import { TestimonialList } from "./TestimonialList";


export const Testimonials = () => {
  return (
    <>
      <div className="px-4 mb-8">
        <h3 className="w-[320px] mx-auto mb-6 lg:mb-24 text-5xl font-semibold text-center lg:text-6xl md:w-full  leading-tight">
          Co mówią o nas klienci?
        </h3>

        <p className="max-w-2xl mb-12 italic font-light text-justify md:mx-auto md:text-center text-md lg:mb-24 lg:text-xl text-zinc-500">
          Zawsze staramy się zapewnić naszym klientom najlepszą obsługę i
          najwyższą jakość usług. Oto, co mówią o nas niektórzy z naszych
          klientów:
        </p>
      </div>
      <div className="relative p-4 overflow-x-hidden">
        <div className="absolute top-0 bottom-0 left-0 z-10 w-24 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 z-10 w-24 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent" />
        <div className="flex items-center mb-4">
          <TestimonialList  />
        </div>
      </div>
    </>
  );
};
