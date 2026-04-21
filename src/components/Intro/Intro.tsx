import { motion } from "framer-motion";

import LiveImage from "../../assets/image-asset (2).jpeg";
import MasterclassImage from "../../assets/shutterstock_38046517.avif";
import OmakaseImage from "../../assets/pexels-qui-nguyen-7862521-29422357.jpg";
import { Button } from "../Button/Button";
import { Motion } from "../Motion/Motion";

type FeatureType = {
  id: number;
  callout: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

const features: FeatureType[] = [
  {
    id: 1,
    callout: "Sushi przygotowywane na żywo",
    title: "Live Cooking",
    description:
      "Widowiskowy pokaz przygotowywania sushi bezpośrednio przed Twoimi gośćmi. Smak, interakcja i show w jednym.",
    image: LiveImage,
    href: "/live",
  },
  {
    id: 2,
    callout: "Warsztaty Sushi",
    title: "Masterclass",
    description:
      "Uczestnicy samodzielnie tworzą sushi pod okiem chefa. Idealne na integrację — angażujące i pełne zabawy.",
    image: MasterclassImage,
    href: "/masterclass",
  },
  {
    id: 3,
    callout: "Ekskluzywna kolacja",
    title: "Omakase",
    description:
      "Kameralne doświadczenie, w którym oddajesz się w ręce chefa. Starannie skomponowane menu, najwyższa jakość.",
    image: OmakaseImage,
    href: "/omakase",
  },
];

export const Intro = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-28 pb-32">
      {/* Header */}
      <div className="mb-20 max-w-3xl">
        <Motion>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] text-zinc-900 dark:text-zinc-100 mb-6 tracking-tight">
            Tworzymy wyjątkowe sushi
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl ">
              na{" "}
              <span className="text-amber-700 dark:text-amber-400">Twoim</span>{" "}
              wydarzeniu
            </span>
          </h2>
        </Motion>
        <Motion>
          <p className="text-base text-zinc-400 dark:text-zinc-500 leading-relaxed max-w-md">
            Przyjeżdżamy, przygotowujemy stanowisko i serwujemy świeże sushi na
            oczach Twoich gości. To nie tylko catering — to doświadczenie.
          </p>
        </Motion>
      </div>

      {/* Divider */}
      <Motion>
        <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800 mb-20" />
      </Motion>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        {features.map((feature, i) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.1,
            }}
            className="group flex flex-col"
          >
            {/* Text above image */}

            <h3 className="text-4xl  font-light text-zinc-900 dark:text-zinc-100 mb-4 tracking-tight">
              {feature.title}
            </h3>
            <p className=" text-sm md:text-xs font-semibold tracking-[0.2em] uppercase text-amber-700 dark:text-amber-400  mb-4">
              {feature.callout}
            </p>
            <p className="text-sm text-zinc-700 dark:text-zinc-400 leading-relaxed mb-8">
              {feature.description}
            </p>

            {/* Image */}
            <div className="relative overflow-hidden aspect-[3/4] mb-6 rounded-lg">
              <motion.img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
            {/* <div className="absolute inset-0 bg-black/20 rounded-lg" /> */}
            </div>
            <Button text="Poznaj doświadczenie" href={feature.href} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
