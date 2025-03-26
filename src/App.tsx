import { Header } from "./components/Header/Header";
import { Introduction } from "./components/Introduction/Introduction";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import { NotFound } from "./components/NotFound/NotFound";
import { Comp_Prog } from "./components/CompetitiveProgramming/Comp_Prog";
import { Access } from "./components/Access/Access";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router";

const Home = () => {
  return (
    <>
      <Introduction />
      <About />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/comp_prog" element={<Comp_Prog />} />
        <Route path="/access" element={<Access />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
