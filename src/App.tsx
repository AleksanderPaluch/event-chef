import { useEffect } from "react";
import { About } from "./components/About/About";
import { Live } from "./components/Live/Live";
import { Mastercalss } from "./components/Masterclass/Mastercalss";
import { Nav } from "./components/Nav/Nav";
import { Omakase } from "./components/Omakase/Omakase";
import { Offer } from "./components/Offer/Offer";
import { FormSection } from "./components/FormSection/FormSection";
import ShuffleHero from "./components/Hero/Hero";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <Nav />
      <ShuffleHero />
      <Live />
      <Mastercalss />
      <Omakase />
      <About />
      <Offer />
      <FormSection />
    </>
  );
}

export default App;
