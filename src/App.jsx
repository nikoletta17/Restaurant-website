import React from "react";
import { MenuBanner } from "./components/Banners/MenuBanner";
import { Testimonial } from "./components/Testimonial/Testimonial";
import { Hero } from "./components/Hero/Hero";
import { NavBar2 } from "./components/NavBar/NevBar2";


function App() {
  return (
    <>
      <main>
        <NavBar2 />
        <Hero />
        <MenuBanner />
        <Testimonial />
      </main>
    </>
  );
}

export default App;
