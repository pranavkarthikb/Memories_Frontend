import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddMemory from "./components/AddMemory";
import Memories from "./components/Memory/Memories";
import About from "./components/About";
import MemoryDetail from "./components/Memory/MemoryDetail";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddMemory />} exact />
          <Route path="/memories" element={<Memories />} exact />
          <Route path="/memories/:id" element={<MemoryDetail />} exact />
          <Route path="/about" element={<About />} exact />

        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
