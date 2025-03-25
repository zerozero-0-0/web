import { Header } from "./components/Header/Header";
import { Introduction } from "./components/Introduction/Introduction";
import { History } from "./components/About/About";
import { Projects } from "./components/Develop/Projects";
import { NotFound } from "./components/NotFound/NotFound";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router";

const Home = () => {
  return (
    <>
      <Introduction />
      <History />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/develop" element={<Projects />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
