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
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
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
      <section>
        <div className="py-10 mb-10">
          <div className="container">
            {/* Header section */}
            <div className="mb-10">
              <h1 className="text-center text-4xl font-bold font-customCursive">
                Testimonials
              </h1>
            </div>

            {/* Slider section */}
            <Slider {...settings}>
              {TestimonialData.map((item) => (
                <div className="my-6 flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-amber-500 relative ">
                  <div className="mb-4">
                    <img
                      src={item.img}
                      alt="Testimonial"
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  {/* Content section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs">{item.text}</p>
                      <h1 className="text-xl font-bold font-customCursive">
                        {item.name}
                      </h1>
                    </div>
                    </div>
                    <p className="text-9xl font-customSans absolute top-0 right-0">,,</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
