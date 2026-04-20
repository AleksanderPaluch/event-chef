import { motion } from "framer-motion";

import LiveImage from "../../assets/liveImage.jpg";
import MasterclassImage from "../../assets/masterclass1.jpg";
import OmakaseImage from "../../assets/nigiri.jpeg";
import { Button } from "../Button/Button";
import { Motion } from "../Motion/Motion";

type FeatureType = {
  id: number;
  number: string;
  callout: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

const features: FeatureType[] = [
  {
    id: 1,
    number: "01",
    callout: "Sushi przygotowywane na żywo",
    title: "Live Cooking",
    description:
      "Widowiskowy pokaz przygotowywania sushi na żywo, bezpośrednio przed Twoimi gośćmi. Połączenie smaku, interakcji i efektownego show, które przyciąga uwagę i buduje atmosferę.",
    image: LiveImage,
    href: "/live",
  },
  {
    id: 2,
    number: "02",
    callout: "Warsztaty Sushi",
    title: "Masterclass",
    description:
      "Interaktywne warsztaty, podczas których uczestnicy samodzielnie tworzą sushi pod okiem doświadczonego chefa. Idealne połączenie integracji, zabawy i nauki.",
    image: MasterclassImage,
    href: "/masterclass",
  },
  {
    id: 3,
    number: "03",
    callout: "Ekskluzywna kolacja sushi",
    title: "Omakase",
    description:
      "Kameralne doświadczenie kulinarne, w którym oddajesz się w ręce sushi chefa. Starannie skomponowane menu i najwyższa jakość składników.",
    image: OmakaseImage,
    href: "/omakase",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.13,
    },
  }),
};

export const Intro = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 pt-28 pb-24">
      {/* Header */}
      <div className="mb-16">
        <Motion>
          <p className="text-xs tracking-[0.25em] uppercase font-semibold text-amber-500 dark:text-amber-400 mb-4">
            Wybierz format dopasowany do charakteru wydarzenia
          </p>
        </Motion>

        <Motion>
          <h2 className="text-4xl md:text-6xl font-light leading-tight text-zinc-900 dark:text-zinc-100 mb-6">
            Tworzymy wyjątkowe sushi
            <br />
            na{" "}
            <span className="font-semibold text-amber-500 dark:text-amber-400">
              Twoim
            </span>{" "}
            wydarzeniu
          </h2>
        </Motion>

        <Motion>
          <p className="max-w-xl text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Przyjeżdżamy na miejsce, przygotowujemy stanowisko i serwujemy
            świeże sushi na oczach Twoich gości. To nie tylko catering —
            to doświadczenie, które angażuje, zachwyca i zostaje w pamięci.
          </p>
        </Motion>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-stretch">
        {features.map((feature, i) => (
          <motion.div
            key={feature.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={cardVariants}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-amber-400 dark:hover:border-amber-500 transition-colors duration-500"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-72 md:h-80 lg:h-96 flex-shrink-0">
              <motion.img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Big number */}
              <span className="absolute top-5 left-6 font-bold text-7xl leading-none text-white/20 select-none tracking-tight">
                {feature.number}
              </span>

              {/* Callout tag */}
              <span className="absolute bottom-4 left-4 text-[10px] tracking-[0.2em] uppercase font-semibold text-amber-400 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                {feature.callout}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6 lg:p-8">
              <h3 className="text-2xl lg:text-3xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3 leading-tight">
                {feature.title}
              </h3>
              <p className="text-sm lg:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8 flex-1">
                {feature.description}
              </p>
              <div>
                <Button text="Poznaj doświadczenie" href={feature.href} />
              </div>
            </div>

            {/* Amber bottom accent line — grows on hover */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-amber-400 group-hover:w-full transition-all duration-500 ease-out" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};