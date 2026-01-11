import { FormSection } from "./components/FormSection/FormSection";
import { Links } from "./components/Links/Links";
import { Live } from "./components/Live/Live";
import { Mastercalss } from "./components/Masterclass/Mastercalss";
import { Nav } from "./components/Nav/Nav";
import { Omakase } from "./components/Omakase/Omakase";
import { Stats } from "./components/Stats/Stats";
import { Table } from "./components/Table/Table";
import { Testimonials } from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      {/* <Nav /> */}
      <Live />
      <Mastercalss />
      <Omakase />

      {/* <Stats />
      <Table />
      <Testimonials />
      <FormSection /> */}
      {/* <Links /> */}
    </>
  );
}

export default App;
