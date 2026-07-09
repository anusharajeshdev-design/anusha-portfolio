import Navbar from "./components/layouts/Navbar";
import Hero from "./components/sections/Hero";
import CareerTimeline from "./components/sections/CareerTimeline";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CareerTimeline />
      </main>
    </>
  );
}