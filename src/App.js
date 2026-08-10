import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Products from "./components/Products";
import Team from "./components/Team";
import Footer from "./components/Footer";
import "./App.css";

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
      <Products ref={productsRef} />
      <Team />
      <Footer />
    </div>
  );
}