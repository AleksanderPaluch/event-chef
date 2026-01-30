import { type Dispatch, type SetStateAction, type ReactNode } from "react";
import { createPortal } from "react-dom";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";
import { ModalText } from "./ModalText";
import { FiX } from "react-icons/fi";
import { Button } from "../Button/Button";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;

  chipsTitle?: string;
  chips?: string[];
  secondaryChipsTitle?: string;
  secondaryChips?: string[];
}

export const Modal = ({
  open,
  setOpen,

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
      className="fixed inset-0 z-[9999] bg-zinc-950/70"
    >
      <motion.div
        id="drawer"
        ref={drawerRef}
        onClick={(e) => e.stopPropagation()}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 h-[100vh] overflow-hidden rounded-t-3xl bg-zinc-950/80 backdrop-blur-md"
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
        <div className="absolute top-0 left-0 right-0 z-10 flex justify-center p-4 bg-zinc-950">
          <button
            onPointerDown={(e) => controls.start(e)}
            className="h-2 rounded-full w-14 cursor-grab touch-none bg-zinc-800 active:cursor-grabbing"
          />
        </div>

        {/* Close button */}
 <div className="absolute z-20 top-4 right-4">
  <Button
    ghost
    modal
    text=""
    onClick={handleClose}
  />
</div>

        {/* Scrollable content */}
        <div className="relative h-full p-2 pt-12 overflow-y-auto modal-scroll md:p-4">
          <ModalText
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
