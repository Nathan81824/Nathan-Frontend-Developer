import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Shared/Navbar";
import Footer from "./Components/Shared/Footer";

import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Projects from "./Components/Pages/Projects";
import Contact from "./Components/Pages/Contact";
import WhatsAppButton from "./Components/WhatsApp/WhatsAppButton";
import Skills from "./Components/Pages/Skills";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <WhatsAppButton/>
      <Footer />
    </>
  );
}

export default App;