import { useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Packages from "./components/Packages";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

export default function App() {
  const productsRef = useRef(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="page">
      <Navbar />
      <Hero onLetsCreate={scrollToProducts} />
      <Portfolio />
      <Services />
      <Packages ref={productsRef} />
      <AboutUs />
      <Footer />
    </div>
  );
}