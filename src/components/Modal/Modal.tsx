import { type Dispatch, type SetStateAction, type ReactNode } from "react";
import { createPortal } from "react-dom";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
}

export const Modal = ({ open, setOpen, children }: Props) => {
  const [scope, animate] = useAnimate();
  const [drawerRef] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  //   useEffect(() => {
  //     document.body.style.overflow = open ? "hidden" : "";
  //     return () => {
  //       document.body.style.overflow = "";
  //     };
  //   }, [open]);

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
      className="fixed inset-0 z-[9999] bg-neutral-950/70"
    >
      <motion.div
        id="drawer"
        ref={drawerRef}
        onClick={(e) => e.stopPropagation()}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 h-[90vh] overflow-hidden rounded-t-3xl bg-zinc-950/70 backdrop-blur-md"
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
        <div className="absolute top-0 left-0 right-0 z-10 flex justify-center p-4 bg-neutral-900">
          <button
            onPointerDown={(e) => controls.start(e)}
            className="h-2 rounded-full w-14 cursor-grab touch-none bg-neutral-700 active:cursor-grabbing"
          />
        </div>

        {/* Scrollable content */}
        <div className="relative z-0 h-full p-4 pt-12 overflow-y-auto">
          {children}
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};
