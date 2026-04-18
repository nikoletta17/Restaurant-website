import Lenis from "@studio-freight/lenis";
import React from "react";
import { MenuBanner } from "./components/Banners/MenuBanner";
import { Testimonial } from "./components/Testimonial/Testimonial";
import { Hero } from "./components/Hero/Hero";
import { NavBar2 } from "./components/NavBar/NevBar2";
import { AboutBanner } from "./components/Banners/AboutBanner";
import { OrderBanner } from "./components/Banners/OrderBanner";
import { Newsletter } from "./components/Newsletter/Newsletter";



function App() {
  return (
    <>
      <main>
        <NavBar2 />
        <Hero />
        <AboutBanner />
        <MenuBanner />
        <OrderBanner />
        <Testimonial />
        <Newsletter />
      </main>
      <footer>
    
      </footer>
    </>
  );
}

export default App;
