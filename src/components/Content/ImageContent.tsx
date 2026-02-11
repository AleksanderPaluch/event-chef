import { type ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";



interface ImageContentProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children?: ReactNode;

}

const IMG_PADDING = 12;

export const ImageContent: React.FC<ImageContentProps> = ({
  imgUrl,
  subheading,
  heading,
  children,

}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[110vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading}  />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl "
    >
      <motion.div
        className="absolute inset-0 bg-black/30 dark:bg-black/65 "
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,

}: {
  subheading: string;
  heading: string;

}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-zinc-100 dark:text-zinc-200"
    >
 <h3 className="max-w-xl mx-auto mb-6 text-xl text-center md:text-3xl lg:mb-8 ">
        {subheading}
      </h3>
      <h2 className="text-5xl font-bold text-center lg:text-7xl">{heading}</h2>
           
  
    </motion.div>
  );
};
