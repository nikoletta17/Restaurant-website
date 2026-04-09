import React from "react";
import AboutImg from "../../assets/AboutImg.png";

export const AboutBanner = () => {
  return (
    <>
      <section id="about" className="overflow-hidden bg-lightBlue scroll-mt-15">
        <div className="min-h-screen flex justify-center items-center">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-around gap-10">
            {/* Img section */}
            <div className="relative w-full sm:w-1/2 flex justify-center items-center">
              {/* Semi circle background */}
              <div className="absolute left-1/2 -translate-x-[100%]  h-[260px] w-[130px] md:h-[350px] md:w-[180px] lg:h-[450px] lg:w-[230px] bg-[#3C3F8F]/90 rounded-l-full z-0" />
              {/* Img itself */}
              <img
                src={AboutImg}
                alt="About Img"
                className="relative w-full max-w-[250px] md:max-w-[450px] object-cover rounded-full z-10 shadow-[50px_0_50px_-10px_rgba(0,0,0,0.08)]"
              />
            </div>
            {/* Content section */}
            <div className="space-y-6 w-full sm:w-1/2 text-center sm:text-left">
              <span className="inline-block tracking-wide font-bold font-playwrite text-3xl lg:text-4xl text-[#3C3F8F]">
                About us
              </span>
              <h2 className="font-headers text-7xl lg:text-8xl lg:leading-tight text-primary">
                The Facet
              </h2>
              <p className="text-xl text-gray-600 max-w-lg mx-auto sm:mx-0">
                Welcome to The Facet, where culinary excellence meets
                exceptional service. We are passionate about creating memorable
                dining experiences that celebrate the rich flavors and
                traditions of our cuisine.
              </p>
              <button className="font-customSans bg-primary text-light px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-primary/90 transition-all duration-300 transform active:scale-95 mb-5">
                View More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
