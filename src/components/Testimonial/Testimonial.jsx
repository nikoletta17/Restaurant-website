import React, { useRef } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { AnimatedTitle } from "../Common/AnimatedTitle";

const TestimonialData = [
  {
    id: 1,
    name: "Dilshad",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae temporibus corporis eaque iusto consequatur ullam, placeat voluptatem. Numquam eum quis blanditiis. Iste dolorem maxime sit mollitia, vel dolores facere nostrum.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Dilshad",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae temporibus corporis eaque iusto consequatur ullam, placeat voluptatem. Numquam eum quis blanditiis. Iste dolorem maxime sit mollitia, vel dolores facere nostrum.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Dilshad",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae temporibus corporis eaque iusto consequatur ullam, placeat voluptatem. Numquam eum quis blanditiis. Iste dolorem maxime sit mollitia, vel dolores facere nostrum.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Dilshad",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae temporibus corporis eaque iusto consequatur ullam, placeat voluptatem. Numquam eum quis blanditiis. Iste dolorem maxime sit mollitia, vel dolores facere nostrum.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Dilshad",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae temporibus corporis eaque iusto consequatur ullam, placeat voluptatem. Numquam eum quis blanditiis. Iste dolorem maxime sit mollitia, vel dolores facere nostrum.",
    img: "https://picsum.photos/105/105",
  },
];

export const Testimonial = () => {
  const sectionRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    appendDots: (dots) => (
      <div style={{ bottom: "-20px", position: "absolute", width: "100%" }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="bg-[#ABB7E2] overflow-hidden"
    >
      <div className="py-10 mb-10">
        <div className="container">
          {/* Header section */}
          <div className="mb-10">
            <AnimatedTitle
              tag="h2"
              containerRef={sectionRef}
              className="text-center font-bold font-playwrite text-[#11125D] text-4xl lg:text-5xl"
            >
              Testimonials
            </AnimatedTitle>
          </div>

          {/* Slider section - parent */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="w-full"
          >
            <Slider {...settings}>
              {TestimonialData.map((item) => (
                <div key={item.id} className="outline-none">
                  {/* Card - child */}
                  <motion.div
                    variants={cardVariants}
                    className="my-6 flex flex-col gap-4 shadow-lg py-8 px-6 mx-3 rounded-xl bg-light/80 relative min-h-[250px]"
                  >
                    {/* Image */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                      className="mb-4"
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className="rounded-full w-20 h-20 border-2 border-primary/20"
                      />
                    </motion.div>

                    <div className="flex flex-col items-center gap-4">
                      <div className="space-y-3">
                        {/* Review text */}
                        <motion.p
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: false }}
                          transition={{
                            duration: 1.2,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="text-base text-[#2c387d]"
                        >
                          {item.text}
                        </motion.p>

                        {/* Name */}
                        <motion.h3
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 1.2, delay: 0.7 }}
                          className="text-2xl font-bold font-customCursive text-[#11125D]"
                        >
                          {item.name}
                        </motion.h3>
                      </div>
                    </div>

                    {/* Quotes */}
                    <p className="text-9xl font-serif absolute top-0 right-2 opacity-10 leading-none text-[#11125D]">
                      ,,
                    </p>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
