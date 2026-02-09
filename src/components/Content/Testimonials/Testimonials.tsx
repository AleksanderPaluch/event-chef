import { motion } from "framer-motion";
import { Stats } from "../Stats/Stats";
import { Card } from "./Card";

export const ScrollingTestimonials = () => {
  return (
    <div className="pt-6 pb-24 lg:pt-32 bg-zinc-950 lg:pb-36">
      <div className="px-4 mb-8">
        <h3 className="w-[320px] mx-auto mb-6 lg:mb-24 text-5xl font-semibold text-center lg:text-6xl md:w-full  leading-tight">
          Dlaczego warto wybrac Event Chef
        </h3>

        <Stats />
        <p className="max-w-2xl mb-12 italic font-light text-justify md:mx-auto md:text-center text-md lg:mb-24 lg:text-xl text-zinc-500">
          Zawsze staramy się zapewnić naszym klientom najlepszą obsługę i
          najwyższą jakość usług. Oto, co mówią o nas niektórzy z naszych
          klientów:
        </p>
      </div>
      <div className="relative p-4 overflow-x-hidden">
        <div className="absolute top-0 bottom-0 left-0 z-10 w-24 bg-gradient-to-r from-zinc-950 to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 z-10 w-24 bg-gradient-to-l from-zinc-950 to-transparent" />
        <div className="flex items-center mb-4">
          <TestimonialList list={testimonials.top} duration={125} />
        </div>
      </div>
    </div>
  );
};

const TestimonialList = ({
  list,
  reverse = false,
  duration = 125,
}: {
  list: typeof testimonials.top;
  reverse?: boolean;
  duration?: number;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {list.map((t) => {
        return (
          <Card
            key={t.id}
            img={t.img}
            name={t.name}
            title={t.title}
            info={t.info}
            rating={t.rating}
            createdAt={t.createdAt}
          />
        );
      })}
    </motion.div>
  );
};

const testimonials = {
  top: [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=703&q=80",
      name: "Gabriella S.",
      title: "Goldman Sachs",
      info: "Polecam, profesjonalne podejście do klienta i szybka realizacja.",
      rating: 3.5,
      createdAt: "2026-02-05",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
      name: "Daniel A.",
      title: "",
      info: "Bardzo dobra organizacja live sushi na impreie urodzinowej. Goście byli zachwyceni!",
      rating: 5,
      createdAt: "2026-02-02",
    },

    {
      id: 3,
      img: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      name: "Paweł W.",
      title: "Founder of XYZ",
      info: "Profesjonalna obsługa i pyszne sushi. Z pewnością skorzystam ponownie!",
      rating: 5,
      createdAt: "2025-02-09",
    },

    {
      id: 4,
      img: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=703&q=80",
      name: "Magdalena S.",
      title: "BMW Group",
      info: "Polecam, profesjonalne podejście do klienta i szybka realizacja.",
      rating: 4,
      createdAt: "2025-02-09",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
      name: "Daniel A.",
      title: "",
      info: "Bardzo dobra organizacja live sushi na impreie urodzinowej. Goście byli zachwyceni!",
      rating: 5,
      createdAt: "2025-01-18",
    },

    {
      id: 6,
      img: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      name: "Paweł W.",
      title: "Founder of XYZ",
      info: "Profesjonalna obsługa i pyszne sushi. Z pewnością skorzystam ponownie!",
      rating: 5,
      createdAt: "2025-02-07",
    },

    {
      id: 7,
      img: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=703&q=80",
      name: "Gabriella S.",
      title: "Goldman Sachs",
      info: "Polecam, profesjonalne podejście do klienta i szybka realizacja.",
      rating: 5,
      createdAt: "2025-02-06",
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
      name: "Daniel A.",
      title: "",
      info: "Bardzo dobra organizacja live sushi na impreie urodzinowej. Goście byli zachwyceni!",
      rating: 5,
      createdAt: "2025-01-18",
    },

    {
      id: 9,
      img: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      name: "Paweł W.",
      title: "Founder of XYZ",
      info: "Profesjonalna obsługa i pyszne sushi. Z pewnością skorzystam ponownie!",
      rating: 5,
      createdAt: "2025-01-18",
    },

    {
      id: 10,
      img: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=703&q=80",
      name: "Magdalena S.",
      title: "BMW Group",
      info: "Polecam, profesjonalne podejście do klienta i szybka realizacja.",
      rating: 5,
      createdAt: "2025-01-18",
    },
    {
      id: 11,
      img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
      name: "Daniel A.",
      title: "",
      info: "Bardzo dobra organizacja live sushi na impreie urodzinowej. Goście byli zachwyceni!",
      rating: 5,
      createdAt: "2025-01-18",
    },

    {
      id: 12,
      img: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      name: "Paweł W.",
      title: "Founder of XYZ",
      info: "Profesjonalna obsługa i pyszne sushi. Z pewnością skorzystam ponownie!",
      rating: 5,
      createdAt: "2025-01-18",
    },
  ],
};
