//import React from "react";

import About from "./components/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
};

export default App;
