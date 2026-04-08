import React from "react";
import { MenuBanner } from "./components/Banners/MenuBanner";
import { Testimonial } from "./components/Testimonial/Testimonial";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <>
      <main>
        <Hero />
        <MenuBanner />
        <Testimonial />
      </main>
    </>
  );
}

export default App;
