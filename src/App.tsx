import { Content } from "./components/Content/Content";
import { FormSection } from "./components/FormSection/FormSection";
import { Links } from "./components/Links/Links";
import { Nav } from "./components/Nav/Nav";
import { Stats } from "./components/Stats/Stats";
import { Table } from "./components/Table/Table";
import { Testimonials } from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Nav />
      <Content />
      <Stats />
      <Table />
      <Testimonials />
      <FormSection />
      <Links />
    </>
  );
}

export default App;
