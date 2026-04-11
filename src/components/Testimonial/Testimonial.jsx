import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Dilshad",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Dilshad",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Dilshad",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Dilshad",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Dilshad",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/105/105",
  },
];

export const Testimonial = () => {
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
          bottom: "-20px",
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
      <section id="" className="bg-[#ABB7E2]">
        <div className="py-10 mb-10">
          <div className="container">
            {/* Header section */}
            <div className="mb-10">
              <h2 className="text-center font-bold font-playwrite text-[#11125D] text-4xl lg:text-5xl">
                Testimonials
              </h2>
            </div>

            {/* Slider section */}
            <Slider {...settings}>
              {TestimonialData.map((item) => (
                /* Container for the Slider */
                <div key={item.id} className="outline-none">
                  {/* For each testimonial */}
                  <div className="my-6 flex flex-col gap-4 shadow-lg py-8 px-6 mx-3 rounded-xl bg-light/80 relative min-h-[250px]">
                    <div className="mb-4">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="rounded-full w-20 h-20"
                      />
                    </div>

                    <div className="flex flex-col items-center gap-4">
                      <div className="space-y-3">
                        <p className="text-base text-[#2c387d]">{item.text}</p>
                        <h3 className="text-2xl font-bold font-customCursive text-[#11125D]">
                          {item.name}
                        </h3>
                      </div>
                    </div>

                    {/* Quotes */}
                    <p className="text-9xl font-serif absolute top-0 right-2 opacity-80 leading-none text-[#11125D]">
                      ,,
                    </p>
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
