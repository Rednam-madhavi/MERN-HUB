import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Html from "./components/Html";
import Css from "./components/Css";
import JavaScript from "./components/JavaScript";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Add sidebar state

  return (
    <BrowserRouter>
      <Navbar setIsSidebarOpen={setIsSidebarOpen} />  {/* Pass state setter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html/:slug?" element={<Html isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />} />
        <Route path="/css/:slug?" element={<Css />} />
        <Route path="/bootstrap/:slug?" element={<Html />} />
        <Route path="/tailwindCss/:slug?" element={<Html />} />
        <Route path="/javascript/:slug?" element={<JavaScript />} />
        <Route path="/react.js/:slug?" element={<Html />} />
        <Route path="/node.js/:slug?" element={<Html />} />
        <Route path="/express.js/:slug?" element={<Html />} />
        <Route path="/mongodb/:slug?" element={<Html />} />
        <Route path="/next.js/:slug?" element={<Html />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
