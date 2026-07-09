import Navbar from "./components/layouts/Navbar";

import Hero from "./components/sections/Hero";
import CareerTimeline from "./components/sections/CareerTimeline";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <CareerTimeline />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}