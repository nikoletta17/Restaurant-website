import React, { useEffect, useState } from "react";
import { useAnimate, useInView, motion } from "framer-motion";
import OrderImg from "../../assets/OrderImg.png";
import { AnimatedTitle } from "../Common/AnimatedTitle";

export const OrderBanner = () => {
  const [scope, animate] = useAnimate();
  const plateInView = useInView(scope, { once: false, amount: 0.8 });
  const [isIntroFinished, setIsIntroFinished] = useState(false);
  useEffect(() => {
    const handleAnimation = async () => {
      await animate(
        "#plate",
        {
          x: -500,
          y: -500,
          opacity: 0,
          rotate: 0,
        },
        {
          duration: 0,
        },
      );

      await animate(
        "#plate",
        {
          x: 0,
          y: -50,
          opacity: 1,
          rotate: 90,
        },
        {
          duration: 0.8,
          ease: "easeOut",
        },
      );

      await animate(
        "#plate",
        {
          y: 0,
        },
        {
          duration: 1,
          ease: "easeInOut",
        },
      );

      await animate(
        "#plate",
        {
          rotate: 180,
        },
        {
          duration: 1.3,
          ease: "easeInOut",
        },
      );

      setIsIntroFinished(true);
    };
    if (plateInView && !isIntroFinished) {
      handleAnimation();
    }
  }, [plateInView, animate, isIntroFinished]);

  useEffect(() => {
    let rotationAnimation;

    if (isIntroFinished && plateInView) {
      rotationAnimation = animate(
        "#plate",
        { rotate: 360 },
        {
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        },
      );
    }

    return () => rotationAnimation?.stop(); // Stop when leave the section
  }, [isIntroFinished, plateInView, animate]);

  return (
    <>
      <section ref={scope} id="order" className="overflow-hidden bg-lightBlue relative">
        {/* Left triangle */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 0.2, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden lg:block absolute top-0 left-0 w-[30%] h-[40%] bg-[#6265C3] pointer-events-none z-0"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        ></motion.div>

        {/* Right triangle */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 0.2, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block absolute top-0 right-0 w-[30%] h-[40%] bg-[#6265C3] pointer-events-none z-0"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
        ></motion.div>

        <div className="min-h-screen flex justify-center items-center px-5 py-20 md:py-0 md:pb-7 lg:pb-0">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-around gap-2">
            {/* Content section */}
            <div className="space-y-6 w-full sm:w-1/2 text-center flex flex-col items-center px-5 sm:mt-20">
              <AnimatedTitle
                tag="h2"
                containerRef={scope}
                className="my-7 flex items-center leading-[0.85] gap-1 text-[3.8rem] sm:text-[6rem] lg:text-[8rem] font-headers bg-clip-text text-transparent bg-linear-to-r from-primary via-primary/95 to-[#3c3f8f]"
              >
                Order now
                <span className="font-customSans text-3xl lg:text-3xl text-[#1c1f61d3] ml-2 tracking-tight opacity-90 -mt-[-50px]">
                  Enjoy!
                </span>
              </AnimatedTitle>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-customSans text-lg sm:text-left text-dark/80 leading-relaxed max-w-md mx-auto sm:mx-0"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                amet inventore recusandae.
              </motion.p>

              {/* Btn */}
              <button className="font-customSans bg-primary text-light px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-primary/90 transition-all duration-300 transform active:scale-95 mb-">
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
                id="plate"
                src={OrderImg}
                alt="Order Image"
                className="relative rotate-180 z-10 w-full max-w-[300px] md:max-w-[490px] lg:max-w-[520px] object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
