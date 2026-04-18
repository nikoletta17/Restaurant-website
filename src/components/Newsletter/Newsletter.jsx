import React from "react";
import BgImg from "../../assets/2.png";
import { motion } from "framer-motion";

export const Newsletter = () => {
  return (
    <section
      id="contact"
      className="relative bg-primary text-white overflow-hidden py-4 scroll-mt-20">
      <div
        className="absolute top-0 left-0 w-[35%] h-[60%] bg-black pointer-events-none z-0 
                   [clip-path:polygon(0_0,_100%_0,_0_100%)] opacity-40"
      />
      {/* Bottom right triangle */}
      <div
        className="absolute bottom-0 right-0 w-[35%] h-[60%] bg-black pointer-events-none z-0 
                   [clip-path:polygon(100%_100%,_0_100%,_100%_0)] opacity-40"
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-14">
          {/* Content */}
          <div className="flex flex-col items-center md:items-start space-y-6 max-w-md">
            <div className="text-center md:text-left space-y-4">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-playwrite text-white/95 leading-tight">
                Keep in touch
              </h3>
              <p className="font-normal font-customSans text-sm opacity-90">
                Leave your review and we'll get back to you soon.
              </p>
            </div>

            {/* Input */}
            <div className="flex w-full max-w-[420px] items-stretch group">
              <input
                type="text"
                className="w-full px-5 py-3 bg-white text-dark text-base outline-none
                           rounded-l-full border-y-2 border-l-2 border-transparent
                           focus:border-lightBlue/30 transition-all placeholder:text-gray-400"
                placeholder="Type here..."
              />

              <motion.button
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
                className="bg-[#11125D] hover:bg-dark px-8 py-3 
                           rounded-r-full font-bold uppercase tracking-widest text-xs text-white
                           flex items-center justify-center transition-colors shadow-xl cursor-pointer"
              >
                Send
              </motion.button>
            </div>
          </div>

          {/* Plate img */}
          <div className="flex-shrink-0">
            <img
              src={BgImg}
              alt="Newsletter decoration"
              className="w-32 md:w-44 lg:w-52 h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
