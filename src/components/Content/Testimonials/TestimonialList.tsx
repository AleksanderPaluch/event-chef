import { ReviewCard } from "./ReviewCard";
import { motion } from "framer-motion";

const TESTEMONIALS_DATA = {
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
      title: "dddd",
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

  ],
};

interface TestimonialListProps {
  list?: typeof TESTEMONIALS_DATA.top;
  reverse?: boolean;
  duration?: number;
}

export const TestimonialList = ({
    list = TESTEMONIALS_DATA.top,
  reverse = false,
  duration = 125,
}: TestimonialListProps) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {list.map((t) => {
        return (
          <ReviewCard
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

