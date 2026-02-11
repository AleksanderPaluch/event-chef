import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export const Stats = () => {
  return (
    <div className="pb-6 mx-auto lg:pb-28">


      <div className="flex flex-col items-center justify-center sm:flex-row">
        <Stat
          num={100}
          suffix="%"
          subheading="Zadowolonych klientów"
        />
        <div className="h-[1px] w-12 bg-zinc-100 sm:h-12 sm:w-[1px]" />
        <Stat
          num={30}
        
          suffix="+"
          subheading="Eventów zorganizowanych"
        />
                <div className="h-[1px] w-12 bg-zinc-100 sm:h-12 sm:w-[1px]" />

        <Stat
          num={10}
          suffix="lat+"
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
    <div className="flex flex-col items-center py-8 w-52 lg:w-80 sm:py-0">
      <p className="mb-2 text-6xl font-semibold text-center lg:mb-3 lg:text-7xl md:text-5xl">
        <span ref={ref}></span>
        {suffix}
      </p>
      <p className="text-center md:max-w-52 lg:max-w-72 text-md md:text-sm lg:text-lg text-zinc-500 ">{subheading}</p>
    </div>
  );
};