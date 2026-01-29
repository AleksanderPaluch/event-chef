
import { Motion } from "../Motion/Motion";
import { Button } from "../Button/Button";
import { Testimonials } from "../Testimonials/Testimonials";
import React from "react";

interface TextContentProps {
  textTitle?: string;
  text?: string;
  process?: string[];
  description?: string;
  chipsTitle?: string;
  chips?: string[];
  secondaryChipsTitle?: string;
  secondaryChips?: string[];
  stats?: boolean;
}

export const TextContent: React.FC<TextContentProps> = ({
  textTitle,
  text,
  process,
  description,
  chipsTitle,
  chips = [],
  secondaryChipsTitle,
  secondaryChips = [],
  stats = false,
}) => {
  return (
    <Motion>
      <div className="py-40 mx-auto   md:max-w-[90%]  lg:max-w-6xl ">
        {stats ? (
          <Testimonials />
        ) : (
          <>
            <h3 className="mb-6 text-5xl font-semibold text-center lg:text-7xl">
              {textTitle}
            </h3>

            <p className="max-w-2xl mx-auto mb-6 italic font-light text-center lg:mb-24 lg:text-xl text-zinc-500">
              "{text}"
            </p>

<div className="flex flex-col items-center gap-3 mx-auto mb-6 text-3xl text-center lg:mb-8 md:flex-row max-w-fit">
  {process?.map((step, index) => (
    <React.Fragment key={index}>
      <span>{step}</span>
      {index < process.length - 1 && <span>•</span>}
    </React.Fragment>
  ))}
</div>

<p className="max-w-xl mx-auto mb-6 text-center text-md lg:text-md lg:mb-16 text-zinc-500">
  {description}
</p>


            <div className="flex flex-col gap-3 mx-auto text-center md:flex-row max-w-fit ">
              <Button text="Poznaj doświadczenie" />
              <Button ghost={true} text="Zapytaj o termin i ofertę" />
            </div>
          </>
        )}
      </div>
    </Motion>
  );
};
