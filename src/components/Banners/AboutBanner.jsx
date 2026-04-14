import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AboutImg from "../../assets/AboutImg.png";
import { AnimatedTitle } from "../Common/AnimatedTitle";

export const AboutBanner = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const circleX = useTransform(scrollYProgress, [0, 0.5, 1], [-80, 0, -80]);
  const circleScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const textX = useTransform(scrollYProgress, [0, 0.5, 1], [150, 0, 150]);
  const imgX = useTransform(scrollYProgress, [0, 0.5, 1], [-200, 0, -200]);

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 1, 1, 1, 0],
  );
  
  const overallScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.95, 1, 0.95],
  );

  return (
    <>
      <section
        ref={sectionRef}
        id="about"
        className="overflow-hidden bg-lightBlue scroll-mt-15"
      >
        <div className="min-h-screen flex justify-center items-center">
          <motion.div
            style={{ scale: overallScale }}
            className="container mx-auto flex flex-col sm:flex-row items-center justify-around gap-10"
          >
            {/* Img section */}
            <motion.div
              style={{ x: imgX, opacity }}
              className="relative w-full sm:w-1/2 flex justify-center items-center cursor-pointer"
            >
              {/* Semi circle background (Exit parallax) */}
              <motion.div
                style={{ x: circleX, scale: circleScale, originX: 1 }}
                className="absolute left-1/2 -translate-x-[100%] h-[260px] w-[130px] md:h-[350px] md:w-[180px] lg:h-[450px] lg:w-[230px] bg-[#3C3F8F]/90 rounded-l-full z-0"
              />

              {/* Img itself*/}
              <motion.img
                src={AboutImg}
                alt="About Img"
                className="relative w-full max-w-[250px] md:max-w-[450px] object-cover rounded-full z-10 shadow-[50px_0_50px_-10px_rgba(0,0,0,0.08)] transition-shadow duration-500"
              />
            </motion.div>

            {/* Content section */}
            <motion.div
              style={{ x: textX }}
              className="space-y-6 w-full sm:w-1/2 text-center sm:text-left px-4"
            >
              <span className="inline-block tracking-wide font-bold font-playwrite text-3xl lg:text-4xl text-[#3C3F8F]">
                About us
              </span>

              {/* Animated header */}
              <AnimatedTitle
                tag="h2"
                containerRef={sectionRef}
                className="font-headers text-7xl lg:text-8xl leading-[0.85] text-primary"
              >
                The Facet
              </AnimatedTitle>

              <motion.p
                style={{ opacity }}
                className="text-xl text-gray-600 max-w-lg mx-auto sm:mx-0"
              >
                Welcome to The Facet, where culinary excellence meets
                exceptional service. We are passionate about creating memorable
                dining experiences that celebrate the rich flavors and
                traditions of our cuisine.
              </motion.p>

              <motion.button
                style={{ opacity }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="font-customSans bg-primary text-light px-8 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors duration-300 transform mb-5"
              >
                View More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
