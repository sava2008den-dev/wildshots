import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Tours from "./components/Tours";
import Store from "./components/Store";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import SmoothScroll from "./components/SmoothScroll";


export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <SmoothScroll />
      <Navbar />
      <Hero />
      <Portfolio />
      <Tours />
      <Store />
      <About />
      
      <Contact />
      <Footer />
      
    </main>
  );
}