import { type Dispatch, type SetStateAction } from "react";
import { createPortal } from "react-dom";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";
import { ModalText } from "./ModalText";

import { Button } from "../Button/Button";

interface Props {
  textTitle?: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
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

export const Modal = ({
  textTitle,
  open,
  setOpen,
  modalDescription,
  menu,
  menuIMG,
  modalProcess,
  organization,
  chipsTitle,
  chips,
  secondaryChipsTitle = "",
  secondaryChips = [],
}: Props) => {
  const [scope, animate] = useAnimate();
  const [drawerRef] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    await animate(scope.current, { opacity: 0 }, { duration: 0.2 });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, window.innerHeight],
    });

    y.set(0);
    setOpen(false);
  };

  if (!open) return null;

  return createPortal(
  <motion.div
  ref={scope}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  onClick={handleClose}
  className="modal-backdrop"
>
  <motion.div
    id="drawer"
    ref={drawerRef}
    onClick={(e) => e.stopPropagation()}
    initial={{ y: "100%" }}
    animate={{ y: 0 }}
    transition={{ ease: "easeInOut", duration: 0.3 }}
    className="modal-drawer"
    style={{ y }}
    drag="y"
    dragControls={controls}
    dragListener={false}
    dragConstraints={{ top: 0 }}
    dragElastic={0.5}
    onDragEnd={() => {
      if (y.get() >= 120) {
        handleClose();
      }
    }}
  >
    {/* Drag handle */}
    <div className="modal-drag-area">
      <button
        onPointerDown={(e) => controls.start(e)}
        className="modal-drag-handle"
      />
    </div>

    {/* Close button */}
    <div className="absolute right-[-2px] z-40 top-[-2px] lg:right-16">
      <Button variant="modal" text="" onClick={handleClose} />
    </div>

        {/* Scrollable content */}
        <div className="modal-content modal-scroll">
          <ModalText
          textTitle={textTitle}
            modalDescription={modalDescription}
            menu={menu}
            menuIMG={menuIMG}
            modalProcess={modalProcess}
            organization={organization}
            chipsTitle={chipsTitle}
            secondaryChipsTitle={secondaryChipsTitle}
            chips={chips}
            secondaryChips={secondaryChips}
          />
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  );
};
