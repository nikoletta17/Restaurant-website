import Lenis from "@studio-freight/lenis";
import React from "react";
import { MenuBanner } from "./components/Banners/MenuBanner";
import { Testimonial } from "./components/Testimonial/Testimonial";
import { Hero } from "./components/Hero/Hero";
import { NavBar } from "./components/NavBar/NevBar";
import { AboutBanner } from "./components/Banners/AboutBanner";
import { OrderBanner } from "./components/Banners/OrderBanner";
import { Newsletter } from "./components/Newsletter/Newsletter";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <main>
        <NavBar />
        <Hero />
        <AboutBanner />
        <MenuBanner />
        <OrderBanner />
        <Testimonial />
        <Newsletter />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
