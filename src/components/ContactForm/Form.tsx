import { AnimatePresence, motion, type Transition  } from "framer-motion";
import { type Dispatch, type SetStateAction } from "react";
import { Button } from "../Button/Button";

const BASE_TRANSITION: Transition = {
  ease: "anticipate",
  duration: 0.75,
};

export const Form = ({
  selected,
  setSelected,
}: {
  selected: "company" | "individual";
  setSelected: Dispatch<SetStateAction<"company" | "individual">>;
}) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="
        p-8 w-full
        transition-colors duration-[750ms]
        bg-white 
        dark:bg-zinc-950 
      "
    >


      {/* Name input */}
      <div className="mb-6">
        <p className="mb-2 text-2xl">Cześć 👋! Mam na imię...</p>
        <input
          type="text"
          placeholder="Twoje imie..."
          className="
            w-full p-2 rounded-md focus:outline-none
            transition-colors duration-[750ms]
            bg-zinc-100 text-zinc-900 placeholder-zinc-500
            dark:bg-zinc-800 dark:text-white dark:placeholder-white/60 border border-black/15 focus:border-black/40 dark:border-white/5 dark:focus:border-white/30
          "
        />
      </div>

      {/* Toggle */}
      <div className="mb-6">
        <p className="mb-2 text-2xl">and I represent...</p>
        <FormSelect selected={selected} setSelected={setSelected} />
      </div>

      {/* Company name */}
      <AnimatePresence>
        {selected === "company" && (
          <motion.div
            initial={{ marginTop: -104, opacity: 0 }}
            animate={{ marginTop: 0, opacity: 1 }}
            exit={{ marginTop: -104, opacity: 0 }}
            transition={BASE_TRANSITION}
            className="mb-6"
          >
            <p className="mb-2 text-2xl">by the name of...</p>
            <input
              type="text"
              placeholder="Your company name..."
              className="
                w-full p-2 rounded-md focus:outline-none
                transition-colors duration-[750ms]
                bg-zinc-100 text-zinc-900 placeholder-zinc-500
                dark:bg-zinc-800 dark:text-white dark:placeholder-white/60
              "
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info */}
      <div className="mb-6">
        <p className="mb-2 text-2xl">I'd love to ask about...</p>
        <textarea
          placeholder="Whatever your heart desires :)"
          className="
            w-full p-2 rounded-md min-h-[150px] resize-none focus:outline-none
            transition-colors duration-[750ms]
            bg-zinc-100 text-zinc-900 placeholder-zinc-500
            dark:bg-zinc-800 dark:text-white dark:placeholder-white/60
          "
        />
      </div>

      {/* Submit */}
<Button text="Wyślij" />
    </form>
  );
};

const FormSelect = ({
  selected,
  setSelected,
}: {
  selected: "company" | "individual";
  setSelected: Dispatch<SetStateAction<"company" | "individual">>;
}) => {
  return (
    <div
      className="overflow-hidden font-medium border rounded w-fit border-zinc-300 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900"
    >
      {/* Individual */}
      <button
        type="button"
        onClick={() => setSelected("individual")}
        className={`
          relative px-3 py-1.5 text-sm transition-colors duration-[750ms]
          ${
            selected === "individual"
              ? "text-white"
              : "text-zinc-700 dark:text-zinc-300"
          }
        `}
      >
        <span className="relative z-10">An individual</span>

        {selected === "individual" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 z-0 bg-zinc-900 dark:bg-zinc-700"
          />
        )}
      </button>

      {/* Company */}
      <button
        type="button"
        onClick={() => setSelected("company")}
        className={`
          relative px-3 py-1.5 text-sm transition-colors duration-[750ms]
          ${
            selected === "company"
              ? "text-white"
              : "text-zinc-700 dark:text-zinc-300"
          }
        `}
      >
        <span className="relative z-10">A company</span>

        {selected === "company" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 z-0 bg-zinc-800 dark:bg-zinc-600"
          />
        )}
      </button>
    </div>
  );
};
