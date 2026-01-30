import React, { useState } from "react";
import { Motion } from "../Motion/Motion";
import { Button } from "../Button/Button";
import { Testimonials } from "../Testimonials/Testimonials";
import { Modal } from "../Modal/Modal";

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
  chipsTitle = "",
  chips = [],
  secondaryChipsTitle = "",
  secondaryChips = [],
  stats = false,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Motion>
      <div className="px-3 md:px-8 pt-6 pb-28 lg:py-40 md:mx-auto   md:max-w-[90%]  lg:max-w-6xl ">
        {stats ? (
          <Testimonials />
        ) : (
          <>
            <h3 className="w-[320px] mx-auto mb-6 text-5xl font-semibold text-center lg:text-6xl md:w-full  leading-tight">
              Czym jest  <span className="text-5xl lg:text-7xl"> {textTitle}</span>
            </h3>

            <p className="max-w-2xl mb-12 italic font-light text-justify md:mx-auto md:text-center text-md lg:mb-24 lg:text-xl text-zinc-500">
              "{text}"
            </p>

            <div className="flex flex-col items-center gap-3 mx-auto mb-12 text-2xl text-center md:text-xl lg:text-3xl lg:mb-8 md:flex-row max-w-fit">
              {process?.map((step, index) => (
                <React.Fragment key={index}>
                  <span>{step}</span>
                  {index < process.length - 1 && <span>•</span>}
                </React.Fragment>
              ))}
            </div>

            <p className="max-w-xl mb-12 text-center md:mb-6 md:mx-auto text-md lg:mb-16 text-zinc-500">
              {description}
            </p>

            <div className="flex flex-col max-w-full gap-3 mx-auto text-justify md:text-center md:flex-row md:max-w-2xl ">
              <Button
                text="Poznaj doświadczenie"
                onClick={() => setOpen(true)}
              />
              <Button link text="Zapytaj o termin i ofertę" />
            </div>

            <Modal
              open={open}
              setOpen={setOpen}
              chipsTitle={chipsTitle}
              chips={chips}
              secondaryChipsTitle={secondaryChipsTitle}
              secondaryChips={secondaryChips}
            />
          </>
        )}
      </div>
    </Motion>
  );
};
