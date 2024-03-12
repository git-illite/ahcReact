import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Programs from "./Components/Programs";
import Services from "./Components/Services";
import Schools from "./Components/Schools";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Programs />
      <Services />
      <Schools/>
      <Footer/>
    </div>
  );
}

export default App;
