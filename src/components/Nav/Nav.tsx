import { useState } from "react";
import { NavLeft } from "./NavLeft";
import { NavMenu } from "./NavMenu";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" py-1 px-4 z-10 flex items-center justify-between fixed left-0 right-0 top-0  bg-zinc-950/70 backdrop-blur-md ">
      <NavLeft setIsOpen={setIsOpen} />
      <NavMenu isOpen={isOpen} />
    </nav>
  );
};
