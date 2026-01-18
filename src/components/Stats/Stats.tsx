import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export const Stats = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-6 md:py-12">


      <div className="flex flex-col items-center justify-center sm:flex-row">
        <Stat
          num={100}
          suffix="%"
          subheading="Zadowolonych klientów"
        />
        <div className="h-[1px] w-12 bg-zinc-100 sm:h-12 sm:w-[1px]" />
        <Stat
          num={50}
        
          suffix="+"
          subheading="Eventów zorganizowanych"
        />
                <div className="h-[1px] w-12 bg-zinc-100 sm:h-12 sm:w-[1px]" />

        <Stat
          num={10}
          suffix="lat"
          subheading="Doświadczenia zawodowego"
        />
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
    <div className="flex w-72 flex-col items-center py-8 sm:py-0">
      <p className="mb-2 text-center text-7xl font-semibold sm:text-6xl">
        <span ref={ref}></span>
        {suffix}
      </p>
      <p className="max-w-52 text-center  text-zinc-300">{subheading}</p>
    </div>
  );
};