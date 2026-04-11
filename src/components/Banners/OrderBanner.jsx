import React from "react";
import OrderImg from "../../assets/OrderImg.png";

export const OrderBanner = () => {
  return (
    <>
      <section id="order" className="overflow-hidden bg-lightBlue">
        <div className="min-h-screen flex justify-center items-center px-5 py-20 md:py-0 md:pb-7">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-around gap-2">
            {/* Content section */}
            <div className="space-y-6 w-full sm:w-1/2 text-center flex flex-col items-center sm:mt-20">
              <h2 className="my-7 flex items-center leading-[0.85] gap-1 text-[7rem] lg:text-[8rem] font-headers bg-clip-text text-transparent bg-linear-to-r from-primary via-primary/95 to-[#3c3f8f]">
                Order now
                <span className="font-customSans text-3xl lg:text-3xl text-[#1c1f61d3] ml-2 tracking-tight opacity-90 -mt-[-50px]">
                  Enjoy!
                </span>
              </h2>

              <p className="font-customSans text-lg sm:text-left text-dark/80 leading-relaxed max-w-md mx-auto sm:mx-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                amet inventore recusandae.
              </p>

              {/* Btn */}
              <button className="font-customSans bg-primary text-light px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-primary/90 transition-all duration-300 transform active:scale-95 mb-5">
                Shop now
              </button>
            </div>
            {/* Img section */}
            <div className="relative w-full sm:w-1/2 flex justify-center items-center">
              {/* Circle background */}
              <div
                className="absolute left-1/2 -translate-x-[40%] top-[28%] 
                            h-[220px] w-[220px] 
                            md:h-[280px] md:w-[280px] 
                            lg:h-[380px] lg:w-[380px]
                            lg:-translate-x-[35%]
                          bg-[#3C3F8F] rounded-full z-0"
              />

              {/* Img itself */}
              <img
                src={OrderImg}
                alt="Order Image"
                className="relative z-10 w-full max-w-[300px] md:max-w-[490px] lg:max-w-[520px] object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
