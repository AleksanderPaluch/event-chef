import { MotionValue, useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { type IconType } from "react-icons";
import React from "react";
import {
  FiAward,
  FiCalendar,
  FiCopy,
  FiDatabase,
  FiMapPin,
  FiClock,
} from "react-icons/fi";
import { CardForWho } from "./Cards/CardForWho";
import { CardMenu } from "./Cards/CardMenu";
import { CardOrganization } from "./Cards/CardOrganization";
import { CardProcess } from "./Cards/CardProcess";
import { CardAccess } from "./Cards/CardAccess";

// --- Types ---

interface ProcessItem {
  time: string;
  label: string;
}

export interface StickyCardsProps {
  chipsTitle?: string;
  chips?: string[];
  secondaryChipsTitle?: string;
  secondaryChips?: string[];
  menu?: string[];
  organization?: string[];
  cardsProcess?: ProcessItem[];
}

type CardType = {
  id: number;
  Icon: IconType;
  title: string;
  content: React.ReactNode;
};

// ─── Sub-components ────────────────────────────────────────────────────────────

// ─── Builder ───────────────────────────────────────────────────────────────────

function buildCards(props: StickyCardsProps): CardType[] {
  return [
    {
      id: 1,
      Icon: FiAward,
      title: "Przebieg",
      content: <CardProcess steps={props.cardsProcess ?? []} />,
    },

    {
      id: 2,
      Icon: FiCalendar,
      title: "Dla kogo?",
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
      Icon: FiDatabase,
      title: "Menu",
      content: <CardMenu menu={props.menu} />,
    },
    {
      id: 4,
      Icon: FiCopy,
      title: "Organizacja",
      content: <CardOrganization items={props.organization ?? []} dark />,
    },

    {
      id: 5,
      Icon: FiMapPin,
      title: "Dojazd",
      content: <CardAccess dark />, // dark because position 5 is odd
    },
  ];
}

// ─── Card ──────────────────────────────────────────────────────────────────────

const CARD_HEIGHT = 500;

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
        background: isOdd ? "black" : "#0a0a0a",
        color: isOdd ? "#f5f5f0" : "#f5f5f0",
      }}
      className="sticky top-0 flex flex-col items-center justify-center w-full px-6 origin-top"
    >
      <card.Icon className="mb-3 text-3xl opacity-60" />
      <h3 className="mb-8 text-3xl font-semibold tracking-tight text-center md:text-5xl">
        {card.title}
      </h3>
      <div className="flex justify-center w-full">{card.content}</div>
    </motion.div>
  );
};

// ─── StickyCards ───────────────────────────────────────────────────────────────

export const StickyCards: React.FC<StickyCardsProps> = (props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const cards = buildCards(props);

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
      <div className="h-screen bg-black" />
    </>
  );
};
