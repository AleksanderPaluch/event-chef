import { motion } from "framer-motion";

import LiveImage from "../../assets/liveIntro.jpeg";
import MasterclassImage from "../../assets/masterclassIntro.avif";
import OmakaseImage from "../../assets/omakaseIntro.jpg";
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
    <section className="px-6 pb-32 mx-auto max-w-7xl pt-28">
      {/* Header */}
      <div className="max-w-3xl mb-20">
        <Motion>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light leading-[1.15] text-zinc-900 dark:text-zinc-100 mb-6 tracking-tight">
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
          <p className="max-w-md text-base leading-relaxed text-zinc-400 dark:text-zinc-500">
            Przyjeżdżamy, przygotowujemy stanowisko i serwujemy świeże sushi na
            oczach Twoich gości. To nie tylko catering — to doświadczenie.
          </p>
        </Motion>
      </div>

      {/* Divider */}

      <div className="w-full h-px mb-20 bg-zinc-200 dark:bg-zinc-800" />

      {/* Cards */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col group"
          >
            {/* Text above image */}

            <h3 className="mb-4 text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-100">
              {feature.title}
            </h3>
            <p className=" text-sm md:text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 dark:text-amber-400  mb-4">
              {feature.callout}
            </p>
            <p className="mb-8 text-sm leading-relaxed text-zinc-700 dark:text-zinc-400">
              {feature.description}
            </p>

            {/* Image */}
            <div className="relative overflow-hidden aspect-[3/4] mb-6 rounded-lg">
              <motion.img
                src={feature.image}
                alt={feature.title}
                loading="eager"
                decoding="sync"
                className="object-cover w-full h-full"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
              {/* <div className="absolute inset-0 rounded-lg bg-black/70" /> */}
            </div>
            <div className="text-lg">
              <Button
                variant="page"
                text="Poznaj doświadczenie"
                href={feature.href}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
