import { MotionValue, useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { type IconType } from "react-icons";
import React from "react";
import {
  FiUsers,
  FiSettings,
  FiWatch,
  FiBookOpen,
  FiMapPin,
} from "react-icons/fi";
import { CardForWho } from "./Cards/CardForWho";
import { CardMenu } from "./Cards/CardMenu";
import { CardOrganization } from "./Cards/CardOrganization";
import { CardProcess } from "./Cards/CardProcess";
import { CardAccess } from "./Cards/CardAccess";
import { useLanguage } from "../Translations/LanguageContext";
import { StickyCardsTranslations, type StickyCardsT } from "../Translations/StickyCardsTranslations";

// --- Types ---

interface ProcessItem {
  time: string;
  label: string;
}

export interface StickyCardsProps {
  chipsTitle?: string;
  chips?: readonly string[];
  secondaryChipsTitle?: string;
  secondaryChips?: readonly string[];
  menu?: readonly string[];
  organization?: readonly string[];
  cardsProcess?: readonly ProcessItem[];
  omakase?: boolean;
}

type CardType = {
  id: number;
  Icon: IconType;
  title: string;
  content: React.ReactNode;
};

// ─── Builder ───────────────────────────────────────────────────────────────────

function buildCards(props: StickyCardsProps, titles: StickyCardsT["cards"]): CardType[] {
  return [
    {
      id: 1,
      Icon: FiWatch,
      title: titles.process,
      content: <CardProcess steps={props.cardsProcess ?? []} />,
    },
    {
      id: 2,
      Icon: FiUsers,
      title: titles.forWho,
      content: (
        <CardForWho
          chipsTitle={props.chipsTitle}
          chips={props.chips}
          secondaryChipsTitle={props.secondaryChipsTitle}
          secondaryChips={props.secondaryChips}
        />
      ),
    },
    {
      id: 3,
      Icon: FiBookOpen,
      title: titles.menu,
      content: <CardMenu menu={props.menu ?? []} omakase={props.omakase} />,
    },
    {
      id: 4,
      Icon: FiSettings,
      title: titles.organization,
      content: <CardOrganization items={props.organization ?? []} />,
    },
    {
      id: 5,
      Icon: FiMapPin,
      title: titles.access,
      content: <CardAccess />,
    },
  ];
}

// ─── Card ──────────────────────────────────────────────────────────────────────

const CARD_HEIGHT = 550;

interface CardProps {
  position: number;
  total: number;
  card: CardType;
  scrollYProgress: MotionValue;
}

const Card = ({ position, total, card, scrollYProgress }: CardProps) => {
  const scaleFromPct = (position - 1) / total;
  const y = useTransform(scrollYProgress, [scaleFromPct, 1], [0, -CARD_HEIGHT]);
  const isOdd = position % 2 !== 0;

  return (
    <motion.div
      style={{
        height: CARD_HEIGHT,
        y: position === total ? undefined : y,
      }}
      className={`
        sticky top-0 flex flex-col items-center justify-center w-full px-6 origin-top
        ${isOdd ? "bg-white dark:bg-black" : "bg-zinc-100 dark:bg-zinc-950"}
      `}
    >
      <card.Icon className="mb-3 text-3xl text-center lg:text-4xl opacity-80 text-amber-500 dark:text-amber-400" />
      <h3 className="mb-8 text-4xl font-light tracking-tight md:text-5xl text-zinc-950 dark:text-zinc-50">
        {card.title}
      </h3>
      <div className="flex justify-center w-full lg:mb-12">{card.content}</div>
    </motion.div>
  );
};

// ─── StickyCards ───────────────────────────────────────────────────────────────

export const StickyCards: React.FC<StickyCardsProps> = (props) => {
  const { lang } = useLanguage();
  const t = StickyCardsTranslations[lang];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const cards = buildCards(props, t.cards);

  return (
    <>
      <div ref={ref} className="relative">
        {cards.map((c, idx) => (
          <Card
            key={c.id}
            card={c}
            scrollYProgress={scrollYProgress}
            position={idx + 1}
            total={cards.length}
          />
        ))}
      </div>
      <div className="w-90% h-px mx-auto mb-20 max-w-7xl bg-zinc-200 dark:bg-zinc-800" />
    </>
  );
};