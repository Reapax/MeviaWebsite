import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Packages from "./components/Packages";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <Packages />
      <AboutUs />
      <Footer />
    </div>
  );
}