import { motion, useInView } from "framer-motion";
import {
  type Dispatch,
  type SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import LiveImage from "../../assets/liveImage.jpg";
import MasterclassImage from "../../assets/masterclass1.jpg";
import OmakaseImage from "../../assets/nigiri.jpeg";
import { Button } from "../Button/Button";
import { Motion } from "../Motion/Motion";

export const Intro = () => {
  return (
    <div className="section max-w-7xl">
      <div className="flex flex-col items-center px-4 py-16 text-center md:py-0">
        {/* <span className="mb-4 text-sm tracking-widest uppercase text-amber-400">
          Catering Sushi
        </span> */}
        <Motion>
          {" "}
          <h2 className="max-w-4xl lg:mb-10 section-header">
            Sushi, które staje się częścią Twojego wydarzenia
          </h2>
        </Motion>
  

              <Motion>
          {" "}
          <p className="max-w-2xl text-justify lg:mb-24 section-comment">
            "Przyjeżdżamy na miejsce, przygotowujemy stanowisko i serwujemy
            świeże sushi na oczach Twoich gości. To nie tylko catering — to
            doświadczenie, które angażuje, zachwyca i zostaje w pamięci"
          </p>
        </Motion>

        
        <Motion>
          <h3 className="max-w-4xl mb-0 text-xl section-description">
            Wybierz format dopasowany do charakteru Twojego wydarzenia:
          </h3>
        </Motion>
      </div>
      <SwapColumnFeatures />
    </div>
  );
};

const SwapColumnFeatures = () => {
  const [featureInView, setFeatureInView] = useState<FeatureType>(features[0]);

  return (
    <section className="relative mx-auto max-w-7xl">
      <SlidingFeatureDisplay featureInView={featureInView} />
      <div className="-mt-[100vh] hidden md:block" />
      {features.map((s) => (
        <Content
          key={s.id}
          featureInView={s}
          setFeatureInView={setFeatureInView}
          {...s}
        />
      ))}
    </section>
  );
};

const SlidingFeatureDisplay = ({
  featureInView,
}: {
  featureInView: FeatureType;
}) => {
  return (
    <div
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-end" : "flex-start",
      }}
      className="sticky top-0 z-10 items-center hidden w-full h-screen pointer-events-none md:flex"
    >
      <motion.div
        layout
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        // transition={{ duration: 1, ease: "easeInOut" }}
        className="w-3/5 p-8 h-fit rounded-xl"
      >
        <ExampleFeature featureInView={featureInView} />
      </motion.div>
    </div>
  );
};

const Content = ({
  setFeatureInView,
  featureInView,
}: {
  setFeatureInView: Dispatch<SetStateAction<FeatureType>>;
  featureInView: FeatureType;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-150px" });

  useEffect(() => {
    if (isInView) setFeatureInView(featureInView);
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative z-0 flex h-fit md:h-screen"
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-start" : "flex-end",
      }}
    >
      <div className="grid w-full h-full px-4 py-12 place-content-center md:w-2/5 md:px-8 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <span className="block mb-2 text-xs tracking-widest uppercase text-amber-500 dark:amber-400">
            {featureInView.callout}
          </span>
          <p className="section-header text-start ">{featureInView.title}</p>
          <p className="mb-6 text-justify section-comment">
            {featureInView.description}
          </p>
          <Button
            text="Poznaj doświadczenie"
            variant="primary"
            size="full"
            href={featureInView.href}
          />
        </motion.div>

        {/* image shown on mobile only */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="block mt-8 md:hidden"
        >
          <ExampleFeature featureInView={featureInView} />
        </motion.div>
      </div>
    </section>
  );
};

const ExampleFeature = ({ featureInView }: { featureInView: FeatureType }) => {
  return (
    <div className="relative w-full overflow-hidden shadow-xl h-96 bg-zinc-900 rounded-xl">
      <img
        key={featureInView.id}
        src={featureInView.image}
        alt={featureInView.title}
        className="object-cover w-full h-full"
      />
      {/* <motion.img
        key={featureInView.id}
        src={featureInView.image}
        alt={featureInView.title}
        // initial={{ opacity: 0, scale: 1.25 }}
        // animate={{ opacity: 1, scale: 1 }}
        // transition={{ duration: 0.5, ease: "easeOut" }}
        className="object-cover w-full h-full"
      /> */}
      {/* subtle dark overlay so text remains readable if ever overlaid */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  );
};

type FeatureType = {
  id: number;
  callout: string;
  title: string;
  description: string;
  contentPosition: "l" | "r";
  image: string;
  href: string;
};

const features: FeatureType[] = [
  {
    id: 1,
    callout: "Sushi przygotowywane na żywo",
    title: "Live Cooking",
    description:
      "Live cooking to pokaz przygotowywania sushi na żywo, prosto przed Twoimi gośćmi. To połączenie gotowania i efektownego show.",
    contentPosition: "r",
    image: LiveImage,
    href: "/live",
  },
  {
    id: 2,
    callout: "Warsztaty Sushi",
    title: "Masterclass",
    description:
      "Masterclass sushi to praktyczne warsztaty, podczas których uczestnicy tworzą własne rolki pod okiem doświadczonego sushi chefa.",
    contentPosition: "l",
    image: MasterclassImage,
    href: "/masterclass",
  },
  {
    id: 3,
    callout: "Ekskluzywna kolacja",
    title: "Sushi Omakase",
    description:
      "Omakase to wyjątkowe doświadczenie kulinarne, które pozwala Ci zaufać szefowi kuchni i cieszyć się starannie dobranym menu.",
    contentPosition: "r",
    image: OmakaseImage,
    href: "/omakase",
  },
];
