import { useState } from "react";
import { NavLeft } from "./NavLeft";
import { NavMenu } from "./NavMenu";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-1  bg-zinc-950/70 backdrop-blur-md">
      <NavLeft setIsOpen={setIsOpen} />
      <NavMenu  setIsOpen={setIsOpen} isOpen={isOpen} />
    </nav>
  );
};
