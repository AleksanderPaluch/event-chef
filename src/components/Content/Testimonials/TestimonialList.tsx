import { ReviewCard } from "./ReviewCard";
import { motion } from "framer-motion";


export const TestimonialList = ({
  list,
  reverse = false,
  duration = 125,
}: {
  list: typeof TESTEMONIALS.top;
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

