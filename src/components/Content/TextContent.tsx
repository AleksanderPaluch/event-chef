import React, { useState } from "react";

import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";

interface TextContentProps {
  textTitle?: string;
  text?: string;
  process?: string[];
  description?: string;
  modalDescription: string;
  menu: string[];
  menuIMG: string;
  modalProcess?: ProcessItem[];
  organization: string[];
  chipsTitle?: string;
  chips?: string[];
  secondaryChipsTitle?: string;
  secondaryChips?: string[];
}

interface ProcessItem {
  time: string;
  label: string;
}

export const TextContent: React.FC<TextContentProps> = ({
  textTitle,
  text,
  process,
  description,
  modalDescription = "",
  menu,
  menuIMG,
  modalProcess,
  organization,
  chipsTitle = "",
  chips = [],
  secondaryChipsTitle = "",
  secondaryChips = [],
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="section ">
      <h3 className="section-header">
        Czym jest
        <span className="block  md:inline">
          {" "}
          {textTitle}?
        </span>
      </h3>

      <p className="section-comment">"{text}"</p>

      <div className="section-process">
        {process?.map((step, index) => (
          <React.Fragment key={index}>
            {" "}
            <span>{step}</span>{" "}
            {index < process.length - 1 && <span>•</span>}{" "}
          </React.Fragment>
        ))}
      </div>

      <p className="section-description">{description}</p>

      <div className="section-actions">
        <Button
          text="Poznaj doświadczenie"
          variant="primary"
          size="full"
          onClick={() => setOpen(true)}
        />
        <Button text="Sprawdź ofertę" link variant="ghost" size="full" />
      </div>
      <Modal
        textTitle={textTitle}
        open={open}
        setOpen={setOpen}
        modalDescription={modalDescription}
        menu={menu}
        menuIMG={menuIMG}
        modalProcess={modalProcess}
        organization={organization}
        chipsTitle={chipsTitle}
        chips={chips}
        secondaryChipsTitle={secondaryChipsTitle}
        secondaryChips={secondaryChips}
      />
    </div>
  );
};
