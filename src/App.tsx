import { useEffect } from "react";
import { Live } from "./components/Live/Live";
import { Mastercalss } from "./components/Masterclass/Mastercalss";
import { Nav } from "./components/Nav/Nav";

import { Omakase } from "./components/Omakase/Omakase";
import { Stats } from "./components/Stats/Stats";
import { About } from "./components/About/About";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      {/* <Nav /> */}
      <Live />
      <Mastercalss />
      <Omakase />
      {/* <Stats /> */}
      <About />
            <Omakase />
      {/* <Table />
      <Testimonials />
      <FormSection /> */}
      {/* <Links /> */}
    </>
  );
}

export default App;
