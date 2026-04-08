import React from "react";
import HeroImg from "../../assets/2.png";

export const Hero = () => {
  return (
    <>
      <section>
        {/* Background with diagonal split */}
        <div
          className="min-h-screen bg-lightBlue flex justify-center items-center relative overflow-hidden z-10"
          style={{
            /*  Right bottom triangle */
            backgroundImage: `linear-gradient(135deg, #dbedf7 70%, #3c3f8f 70.1%)`,
          }}
        >
          {/* Decorative SVG triangle (Top Right) */}
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute top-0 right-0 w-[50%] h-[60%] opacity-40"
            >
              <polygon points="100,0 100,100 0,0" fill="#6265C3" />
            </svg>
          </div>

          {/* Main content container */}
          <div className="container pb-8 sm:pb-0 relative z-30 sm:px-5">
            {/* Grid layout for text and image */}
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto]  sm:gap-7 gap-0 items-center">
              {/* Text content section */}
              <div className="space-y-6 text-center flex flex-col items-center">
                <h1 className="my-7 flex items-center leading-[0.85] gap-1 text-[8rem] lg:text-[14rem] font-headers bg-clip-text text-transparent bg-linear-to-r from-primary via-primary/95 to-[#3c3f8f]">
                  Rice
                  <span className="font-customSans text-4xl lg:text-5xl text-dark ml-2 tracking-tight opacity-90 -mt-8">
                    Bowl
                  </span>
                </h1>

                <p className="font-customSans text-lg sm:text-left text-dark/80 leading-relaxed max-w-md mx-auto sm:mx-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  amet inventore recusandae.
                </p>

                {/* Btn */}
                <button className="font-customSans bg-primary text-light px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-primary/90 transition-all duration-300 transform active:scale-95 mb-5">
                  ORDER NOW
                </button>
              </div>

              {/* Img section */}
              <div className="flex justify-center sm:justify-end relative z-30 lg:pr-16">
                <img
                  src={HeroImg}
                  alt="Rice Bowl"
                  className="w-75 min-[648px]:w-112.5 max-w-full h-auto rounded-full shadow-2xl rotate-12 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
