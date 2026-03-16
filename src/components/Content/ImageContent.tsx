import { type ReactNode } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

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
  return (
    <div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

        top: 0,
      }}
      className="image-sticky h-screen lg:h-[115vh]"
    >
      <div className="image-overlay" />
      {/* <div className="absolute left-0 right-0 -top-1 h-1/4 bg-gradient-to-t dark:from-zinc-950/0 dark:to-zinc-950" />
      <div className="absolute left-0 right-0 -bottom-1 h-1/4 bg-gradient-to-b dark:from-zinc-950/0 dark:to-zinc-950" /> */}
    </div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  return (
    <div className="image-overlay-copy">
      <h2 className="image-heading">{heading}</h2>

      <h3 className="image-subheading">{subheading}</h3>
    </div>
  );
};
