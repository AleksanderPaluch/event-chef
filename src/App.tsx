
import { About } from "./components/About/About";
import { Live } from "./components/Live/Live";
import { Mastercalss } from "./components/Masterclass/Mastercalss";
import { Nav } from "./components/Nav/Nav";
import { Omakase } from "./components/Omakase/Omakase";



// import { Offer } from "./components/Offer/Offer";

function App() {
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "auto" });
  // }, []);

  return (
    <>
      <Nav />
      <Live />
      <Mastercalss />
      <Omakase />
      <About />

      {/* <Offer /> */}

      {/* <FormSection /> */}
      {/* <Links /> */}
    </>
  );
}

export default App;
