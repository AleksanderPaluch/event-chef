import { motion } from "framer-motion";
import LiveImage from "../../assets/liveIntro.jpeg";
import MasterclassImage from "../../assets/masterclassIntro.avif";
import OmakaseImage from "../../assets/omakaseIntro.jpg";
import { Button } from "../Button/Button";
import { Motion } from "../Motion/Motion";
import { useLanguage } from "../Translations/LanguageContext";
import { IntroTranslations } from "../Translations/IntroTranslations";
import { Link } from "react-router-dom";


const images = [LiveImage, MasterclassImage, OmakaseImage];

export const Intro = () => {
  const { lang } = useLanguage();
  const t = IntroTranslations[lang];

  return (
    <section className="px-6 pb-32 mx-auto max-w-7xl pt-28">
      {/* Header */}
      <div className="max-w-3xl mb-20">
        <Motion>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light leading-[1.15] text-heading mb-6 tracking-tight">
            {t.heading1}
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl">
              {t.heading2} <span className="text-accent">{t.heading2Accent}</span> {t.heading3}
            </span>
          </h2>
        </Motion>
        <Motion>
          <p className="max-w-lg text-base leading-relaxed text-muted">
            {t.description}
          </p>
        </Motion>
      </div>

      {/* Divider */}
      <div className="mb-20 divider" />

      {/* Cards */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 ">
        {t.features.map((feature, index) => (
          <div key={feature.id} className="flex flex-col group">
            <h3 className="mb-4 text-4xl font-light tracking-tight text-heading">
              {feature.title}
            </h3>
            <p className="text-sm md:text-xs lg:text-sm font-bold tracking-[0.1em] uppercase text-accent mb-4">
              {feature.callout}
            </p>
            <p className="mb-8 text-sm leading-relaxed text-body">
              {feature.description}
            </p>

            {/* Image */}
            <div className="relative overflow-hidden aspect-[3/4] mb-6 rounded-lg">
              <Link to={feature.href} className="block w-full h-full">
                <motion.img
                  src={images[index]}
                  alt={feature.title}
                  loading="eager"
                  decoding="sync"
                  className="object-cover w-full h-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
              </Link>
            </div>
            <div className="text-lg">
              <Button variant="page" text={t.cta} href={feature.href} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};