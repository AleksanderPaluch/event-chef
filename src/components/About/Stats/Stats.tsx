import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export const Stats = () => {
  return (
    <div className="stats-section">
      <div className="stats-wrapper">
        <Stat num={100} suffix="%" subheading="Zadowolonych klientów" />

        <div className="stats-divider" />

        <Stat num={30} suffix="+" subheading="Eventów zorganizowanych" />

        <div className="stats-divider" />

        <Stat num={10} suffix="lat+" subheading="Doświadczenia zawodowego" />
      </div>
    </div>
  );
};

interface Props {
  num: number;
  suffix: string;
  decimals?: number;
  subheading: string;
}

const Stat = ({ num, suffix, decimals = 0, subheading }: Props) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="stat-card">
      <p className="stat-value">
        <span ref={ref}></span>
        {suffix}
      </p>

      <p className="stat-subheading">{subheading}</p>
    </div>
  );
};
