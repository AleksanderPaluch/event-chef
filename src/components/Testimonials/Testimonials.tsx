import { useState, type Dispatch, type SetStateAction } from "react";
import { motion } from "framer-motion";

export const Testimonials = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="px-3 pt-6 md:px-8 pb-28 lg:py-40 md:mx-auto md:max-w-3xl lg:max-w-6xl">
       <div className="grid items-center grid-cols-1 gap-2 overflow-hidden lg:grid-cols-2 lg:gap-4 md:gap-4">
      <div className="">
        <h3 className="text-2xl font-semibold md:text-3xl ">
          Co o nas myślą nasi klienci
        </h3>
        <p className="my-4 text-zinc-300 ">
          Zawsze staramy się zapewnić naszym klientom najlepszą obsługę i
          najwyższą jakość usług. Oto, co mówią o nas niektórzy z naszych
          klientów:
        </p>
        <SelectBtns
          numTracks={testimonials.length}
          setSelected={setSelected}
          selected={selected}
        />
      </div>
      <Cards
        testimonials={testimonials}
        setSelected={setSelected}
        selected={selected}
      />
    </div>
    </section>
   
  );
};

const SelectBtns = ({
  numTracks,
  setSelected,
  selected,
}: {
  numTracks: number;
  setSelected: Dispatch<SetStateAction<number>>;
  selected: number;
}) => {
  return (
    <div className="flex gap-1 mt-8">
      {Array.from(Array(numTracks).keys()).map((n) => {
        return (
          <button
            key={n}
            onClick={() => setSelected(n)}
            className="h-1.5 w-full bg-slate-300 relative rounded-sm"
          >
            {selected === n ? (
              <motion.span
                className="absolute top-0 bottom-0 left-0 rounded-sm bg-zinc-700"
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 5,
                }}
                onAnimationComplete={() => {
                  setSelected(selected === numTracks - 1 ? 0 : selected + 1);
                }}
              />
            ) : (
              <span
                className="absolute top-0 bottom-0 left-0 rounded-sm bg-zinc-300"
                style={{
                  width: selected > n ? "100%" : "0%",
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

const Cards = ({
  testimonials,
  selected,
  setSelected,
}: {
  testimonials: Testimonial[];
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className=" relative h-[140px] shadow-xl ">
      {testimonials.map((t, i) => {
        return (
          <Card
            {...t}
            key={i}
            position={i}
            selected={selected}
            setSelected={setSelected}
          />
        );
      })}
    </div>
  );
};

const Card = ({
  description,
  name,
  title,
  position,
  selected,
  setSelected,
}: Testimonial & {
  position: number;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}) => {
  const scale = position <= selected ? 1 : 1;
  const offset = position <= selected ? 0 : 95 + (position - selected) * 2;

  const bgClass = position % 2 ? "bg-zinc-900" : "bg-zinc-300";
  const textClass = position % 2 ? "text-zinc-300" : "text-zinc-900";

  return (
    <motion.div
      initial={false}
      style={{
        zIndex: position,
        transformOrigin: "left bottom",
      }}
      animate={{
        x: `${offset}%`,
        scale,
      }}
      whileHover={{
        translateX: position === selected ? 0 : -3,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      onClick={() => setSelected(position)}
      className={`absolute top-0 left-0 w-full min-h-full p-2 pl-6 cursor-pointer  rounded-xl border-2 border-zinc-900
      flex flex-col justify-between ${bgClass} ${textClass}`}
    >
      <p className="text-lg italic font-light lg:text-xl">"{description}"</p>
      <div>
        <span className="block text-lg font-semibold">{name}</span>
        {title && <span className="block text-sm">{title}</span>}
      </div>
    </motion.div>
  );
};

interface Testimonial {
  title?: string;
  name: string;
  description: string;
}

const testimonials = [
  {
    description:
      "Polecam, profesjonalne podejście do klienta i szybka realizacja.",
    name: "Gabriella",
    title: "Goldman Sachs",
  },
  {
    description:
      "Bardzo dobra organizacja live sushi na impreie urodzinowej. Goście byli zachwyceni!",
    name: "Daniel",
  },
  {
    description:
      "Profesjonalna obsługa i pyszne sushi. Z pewnością skorzystam ponownie!",
    name: "Paweł",
  },
  {
    description:
      "Profesjonalna obsługa i pyszne sushi. Z pewnością skorzystam ponownie!",
    name: "Paweł",
  },
];
