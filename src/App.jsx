import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Html from "./components/Html";
import Css from "./components/Css";
import JavaScript from "./components/JavaScript";
import Bootstrap from "./components/Bootstrap";
import TailwindCss from "./components/TailwindCss";
import ReactJs from "./components/ReactJs";
import MongoDB from "./components/MongoDB";
import NodeJs from "./components/NodeJs";
import Express from "./components/Express";
import NextJs from "./components/NextJs";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <Navbar setIsSidebarOpen={setIsSidebarOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html/:slug?" element={<Html isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />} />
        <Route path="/css/:slug?" element={<Css isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />} />
        <Route path="/bootstrap/:slug?" element={<Bootstrap />} />
        <Route path="/tailwindcss/:slug?" element={<TailwindCss />} />
        <Route path="/javascript/:slug?" element={<JavaScript isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />} />
        <Route path="/react/:slug?" element={<ReactJs isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />} />
        <Route path="/node.js/:slug?" element={<NodeJs isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />} />
        <Route path="/express/:slug?" element={<Express isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />} />
        <Route path="/mongodb/:slug?" element={<MongoDB isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />} />
        <Route path="/next.js/:slug?" element={<NextJs isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
