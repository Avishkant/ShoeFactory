import React, { useEffect } from "react";
import "./App.css";
import "../src/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShoeRange from "./components/ShoeRange";
import WhoWeAre from "./components/WhoWeAre";
import HowWeWork from "./components/HowWeWork";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { initScrollReveal } from "./hooks/scrollReveal";

function App() {
  const Home = (
    <>
      <main className="pt-20">
        <Hero />
        <ShoeRange />
        <WhoWeAre />
        <HowWeWork />
      </main>
    </>
  );

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-[#111]">
        <Navbar />
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// initialize scroll reveal when App mounts (only once)
function AppWithReveal() {
  useEffect(() => {
    const handle = initScrollReveal();
    return () => handle && handle.disconnect && handle.disconnect();
  }, []);
  return <App />;
}

export default AppWithReveal;
