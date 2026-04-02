import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const Intro2 = () => {
  return (
    <>
      <div className="relative h-fit bg-indigo-50">
        <Features />
      </div>

      <div className="h-[50vh] bg-white" />
    </>
  );
};

const Features = () => {
  return (
    <div className="relative grid w-full h-full grid-cols-1 gap-8 px-4 mx-auto max-w-7xl md:grid-cols-2">
      <Copy />
      <Carousel />
    </div>
  );
};

const Copy = () => {
  return (
    <div className="flex flex-col justify-center w-full py-12 h-fit md:sticky md:top-0 md:h-screen">
      <span className="px-4 py-2 text-sm text-indigo-100 uppercase bg-indigo-500 rounded-full w-fit">
        Lorem ipsum dolor
      </span>
      <h2 className="mt-2 mb-4 text-5xl font-medium leading-tight">
        Learn and grow with Lorem Ipsum Dolor
      </h2>
      <p className="text-lg text-indigo-950">
        Lorem ipsum dolor sit amet consectetur. Dolor quis a leo lobortis orci
        tortor eget. Enim proin aliquam nulla a lacus pellentesque quam in. Nec
        vel vel nulla nunc vel in molestie proin convallis. Leo et vulputate
        tincidunt justo a varius et elementum.
      </p>
    </div>
  );
};

const Carousel = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <div className="relative w-full">
      <Gradient />

      <div ref={ref} className="relative z-0 flex flex-col gap-6 md:gap-12">
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={1}
          numItems={4}
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={2}
          numItems={4}
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={3}
          numItems={4}
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={4}
          numItems={4}
        />
      </div>

      <Buffer />
    </div>
  );
};

const CarouselItem = ({
  scrollYProgress,
  position,
  numItems,
}: {
  scrollYProgress: MotionValue<number>;
  position: number;
  numItems: number;
}) => {
  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

  return (
    <motion.div
      style={{
        opacity,
        scale,
      }}
      className="grid w-full aspect-video shrink-0 place-content-center rounded-2xl bg-neutral-900"
    >
      <span className="text-lg text-neutral-600">Feature demo here</span>
    </motion.div>
  );
};

const Gradient = () => (
  <div className="sticky top-0 z-10 hidden w-full h-24 bg-gradient-to-b from-indigo-50 to-indigo-50/0 md:block" />
);

const Buffer = () => <div className="w-full h-24 md:h-48" />;