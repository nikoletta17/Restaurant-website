import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroImg from "../../assets/2.png";

export const Hero = () => {
  const { scrollY } = useScroll();

  //Plate animations
  const plateRotate = useTransform(scrollY, [0, 1000], [12, 180]);
  const plateY = useTransform(scrollY, [0, 1000], [0, -100]);

  //Text animations
  const letterSpacing = useTransform(scrollY, [0, 1000], ["0em", "1.5em"]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <>
      <section className="bg-lightBlue">
        <div
          className="min-h-screen flex pb-5 justify-center items-center relative overflow-hidden z-10"
          style={{
            backgroundImage: `linear-gradient(135deg, #dbedf7 70%, #3c3f8f 70.1%)`,
          }}
        >
          {/* Triangle (Slides down from top-right) */}
          <motion.div
            initial={{ x: 300, y: -300, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 0.4 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 right-0 w-full h-full pointer-events-none z-0"
          >
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute top-0 right-0 w-[50%] h-[60%]"
            >
              <polygon points="100,0 100,100 0,0" fill="#6265C3" />
            </svg>
          </motion.div>

          {/* Main content container */}
          <div className="container pb-8 sm:pb-0 pt-3 relative z-30 px-3 sm:px-5">
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] sm:gap-7 gap-0 items-center">
              {/* Text content section */}
              <div
                initial="hidden"
                animate="visible"
                className="space-y-6 text-center flex flex-col items-center">
                {/* Анимация заголовка при загрузке */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.h1
                    style={{ letterSpacing, opacity: textOpacity }}
                    className="my-7 flex items-center leading-[0.85] gap-1 text-[4rem] sm:text-[6rem] lg:text-[10rem] font-headers bg-clip-text text-transparent bg-linear-to-r from-primary via-primary/95 to-[#3c3f8f]"
                  >
                    Dishes
                    <span className="font-customSans text-3xl lg:text-4xl text-[#1c1f61d3] ml-2 tracking-tight opacity-90 -mt-8">
                      and Drinks
                    </span>
                  </motion.h1>
                </motion.div>

                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="font-customSans text-lg sm:text-left text-dark/80 leading-relaxed max-w-md mx-auto sm:mx-0"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  amet inventore recusandae.
                </motion.p>

                <motion.button
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    y: { duration: 0.7, delay: 1.2 },
                    opacity: { duration: 0.7, delay: 1.2 },
                    scale: { type: "spring", stiffness: 150, damping: 15 },
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="font-customSans bg-primary text-light px-8 py-3 rounded-full shadow-lg hover:bg-primary/90 mb-5"
                >
                  Order now
                </motion.button>
              </div>

              {/* Img section */}
              <div className="flex justify-center sm:justify-end relative z-30 lg:pr-16">
                <motion.img
                  src={HeroImg}
                  alt="Hero Img"
                  style={{ rotate: plateRotate, y: plateY }}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 12 }}
                  transition={{
                    type: "spring",
                    damping: 12,
                    stiffness: 50,
                    delay: 1.2,
                    duration: 1.5,
                  }}
                  className="w-75 min-[648px]:w-112.5 max-w-full h-auto rounded-full shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
