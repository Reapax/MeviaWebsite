import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import AddOns from "./components/AddOns";
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
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="orb orb3" />
      <Navbar />
      <Hero onLetsCreate={scrollToProducts} />
      <Products ref={productsRef} />
      <AddOns />
      <Team />
      <Footer />
    </div>
  );
}