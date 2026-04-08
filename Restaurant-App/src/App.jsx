import React from "react";
import { MenuBanner } from "./components/Banners/MenuBanner";
import { Testimonial } from "./components/Testimonial/Testimonial";
import { Hero } from "./components/Hero/Hero";
import { NavBar2 } from "./components/NavBar/NevBar2";
/* import { NavBar } from "./components/NavBar/NavBar"; */


function App() {
  return (
    <>
      <main>
        {/*    <NavBar /> */}
        <NavBar2 />
        <Hero />
        <MenuBanner />
        <Testimonial />
      </main>
    </>
  );
}

export default App;
