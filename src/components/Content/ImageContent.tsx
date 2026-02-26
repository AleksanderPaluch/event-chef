import { type ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ImageContentProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children?: ReactNode;
}

export const ImageContent: React.FC<ImageContentProps> = ({
  imgUrl,
  subheading,
  heading,
  children,
}) => {
  return (
    <div>
      <div className="image-section">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
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

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        top: 0,
        scale,
      }}
      ref={targetRef}
      className="image-sticky"
    >
      <motion.div className="image-overlay" style={{ opacity }} />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  //heading,
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
      style={{ y, opacity }}
      ref={targetRef}
      className="image-overlay-copy"
    >
      {/* <p>{heading}</p> */}

      <h2 className="image-heading">{subheading}</h2>
    </motion.div>
  );
};
