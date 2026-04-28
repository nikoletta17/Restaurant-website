import React, { useRef } from "react";
import { AnimatedTitle } from "../Common/AnimatedTitle";
import Slider from "react-slick";
import ItemImg1 from "../../assets/Dishes/Item1.png";
import ItemIm2 from "../../assets/Dishes/Item2.png";
import ItemImg3 from "../../assets/Dishes/Item3.png";
import ItemImg4 from "../../assets/Dishes/Item4.png";
import ItemImg5 from "../../assets/Dishes/Item5.png";

const menuData = [
  {
    id: 1,
    name: "Noodle Soup",
    price: "$29.99",
    img: ItemImg1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa recusandae veniam, itaque quasi nemo voluptatum corrupti officia, repellat, porro maiores unde ad magnam dignissimos et maxime possimus vitae sunt eveniet!",
  },
  {
    id: 2,
    name: "Noodle Soup",
    price: "$29.99",
    img: ItemIm2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa recusandae veniam, itaque quasi nemo voluptatum corrupti officia, repellat, porro maiores unde ad magnam dignissimos et maxime possimus vitae sunt eveniet!",
  },
  {
    id: 3,
    name: "Noodle Soup",
    price: "$29.99",
    img: ItemImg3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa recusandae veniam, itaque quasi nemo voluptatum corrupti officia, repellat, porro maiores unde ad magnam dignissimos et maxime possimus vitae sunt eveniet!",
  },
  {
    id: 4,
    name: "Noodle Soup",
    price: "$29.99",
    img: ItemImg4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa recusandae veniam, itaque quasi nemo voluptatum corrupti officia, repellat, porro maiores unde ad magnam dignissimos et maxime possimus vitae sunt eveniet!",
  },
  {
    id: 5,
    name: "Noodle Soup",
    price: "$29.99",
    img: ItemImg5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa recusandae veniam, itaque quasi nemo voluptatum corrupti officia, repellat, porro maiores unde ad magnam dignissimos et maxime possimus vitae sunt eveniet!",
  },
];

export const MenuBanner = () => {
  const sectionRef = useRef(null);

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
      <div
        style={{
          bottom: "-40px",
          position: "absolute",
          width: "100%",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section
        id="products"
        ref={sectionRef}
        className=" bg-[#ABB7E2] text-black overflow-hidden scroll-mt-15 relative min-h-screen"
      >
        <div
          className="absolute top-0 left-0 w-[40%] h-37.5 bg-[#6669C5] opacity-20 pointer-events-none z-0 
                      [clip-path:polygon(0_0,_100%_0,_0_100%)]"
        ></div>
        <div className="container mx-auto h-screen flex flex-col justify-center pt-4 pb-6 z-10">
          {/* Header section */}
          <div className="space-y-6 mb-6">
            <AnimatedTitle
              tag="h2"
              containerRef={sectionRef}
              className="text-center font-bold font-playwrite text-[#11125D] text-4xl lg:text-5xl"
            >
              Our menu
            </AnimatedTitle>

            <div className="text-center sm:max-w-md mx-auto text-lg opacity-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, sit,
              maxime qui modi iure illo mollitia porro.
            </div>
          </div>

          {/* Slider section */}
          <div className="w-full">
            <Slider {...settings}>
              {menuData.map((menu) => (
                <div key={menu.id} className="px-4 mt-5">
                  <div className="group relative flex flex-col items-center px-6 py-4 bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-sm shadow-[#4B4EA4]">
                    {/* Image section */}
                    <div className="mb-6 p-2.5 relative h-40 w-40 flex justify-center items-center group">
                      {/* Semi circle */}
                      <div className="absolute inset-0 transition-all duration-700 group-hover:rotate-[50deg] z-0">
                        <div className="absolute right-0 top-0 h-full w-1/2 bg-[#3C3F8F]/90 rounded-r-full origin-left" />
                      </div>

                      {/* Img itself */}
                      <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-transparent">
                        <img
                          src={menu.img}
                          alt={menu.name}
                          className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110 group-hover:rotate-[50deg]"
                        />
                      </div>
                    </div>
                    {/* Text content section */}
                    <div className="text-center">
                      <h2 className="text-xl font-semibold mb-2 text-[#11125D]">
                        {menu.name}
                      </h2>
                      <p className="text-2xl font-bold mb-4">
                        <span className="text-3xl text-[#485edb] font-customCursive">
                          Only{" "}
                        </span>
                        {menu.price}
                      </p>
                      <button className="font-customSans bg-primary text-light px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-primary/90 transition-all duration-300 transform active:scale-95 mb-5">
                        Buy now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
