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
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light leading-[1.15] text-heading mb-6 tracking-tight">
            Tworzymy wyjątkowe sushi
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl">
              na <span className="text-accent">Twoim</span> wydarzeniu
            </span>
          </h2>
        </Motion>
        <Motion>
          <p className="max-w-md text-base leading-relaxed text-muted">
            Przyjeżdżamy, przygotowujemy stanowisko i serwujemy świeże sushi na
            oczach Twoich gości. To nie tylko catering — to doświadczenie.
          </p>
        </Motion>
      </div>

      {/* Divider */}
      <div className="mb-20 divider" />

      {/* Cards */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
        {features.map((feature) => (
          <div key={feature.id} className="flex flex-col group">
            <h3 className="mb-4 text-4xl font-light tracking-tight text-heading">
              {feature.title}
            </h3>
            <p className="text-sm md:text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
              {feature.callout}
            </p>
            <p className="mb-8 text-sm leading-relaxed text-body">
              {feature.description}
            </p>

            {/* Image */}
            <div className="relative overflow-hidden aspect-[3/4] mb-6 rounded-lg">
              <a href={feature.href} className="block w-full h-full">
                <motion.img
                  src={feature.image}
                  alt={feature.title}
                  loading="eager"
                  decoding="sync"
                  className="object-cover w-full h-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
              </a>
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
