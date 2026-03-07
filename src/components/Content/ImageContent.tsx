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






  return (
    <div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        top: 0,
   
      }}
    
      className="image-sticky"
    >
      <div className="image-overlay"  />
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
    <div

        className="image-overlay-copy"
      >
      <h2 className="image-heading">{heading}</h2>

      <h3 className="image-subheading">{subheading}</h3>
    </div>
  );
};
