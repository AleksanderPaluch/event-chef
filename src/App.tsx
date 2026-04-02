import { useEffect } from "react";


import { Nav } from "./components/Nav/Nav";

import { Offer } from "./components/Offer/Offer";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { Hero } from "./components/Hero/Hero";
import { Intro } from "./components/Intro/Intro";


function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Intro />
      {/* <Live />
      <Mastercalss />
      <Omakase /> */}
      {/* <About /> */}
      <Offer />
      <ContactForm />
 
    </>
  );
}

export default App;
