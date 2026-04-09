import React from "react";
import MenuImg1 from "../../assets/banner/Menu1.png";

export const AboutBanner = () => {
  return (
    <>
      <section className="overflow-hidden">
        <div className="min-h-screen flex justify-center items-center">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-around gap-10">
            {/* Img section */}
            <div className="w-full sm:w-1/2 flex justify-center">
              <img src={MenuImg1} alt="" />
            </div>
            {/* Content section */}
            <div className="space-y-6 w-full sm:w-1/2 text-center sm:text-left">
              <span className="inline-block tracking-wide font-bold font-playwrite text-2xl lg:text-3xl text-red-600">
                About us
              </span>
              <h2 className="font-headers text-6xl lg:text-8xl lg:leading-tight">
                The Facet
              </h2>
              <p className="text-lg text-gray-600 max-w-lg mx-auto sm:mx-0">
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
