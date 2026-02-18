import { useState } from "react";
import { NavLeft } from "./NavLeft";
import { NavMenu } from "./NavMenu";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <NavLeft setIsOpen={setIsOpen} />
      <NavMenu setIsOpen={setIsOpen} isOpen={isOpen} />
    </nav>
  );
};