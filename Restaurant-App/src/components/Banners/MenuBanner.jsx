import React from "react";
import Slider from "react-slick";
import MenuImg1 from "../../assets/banner/Menu1.png";

const menuData = [
  {
    id: 1,
    name: "Noodle Soup",
    price: "$29.99",
    img: MenuImg1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa recusandae veniam, itaque quasi nemo voluptatum corrupti officia, repellat, porro maiores unde ad magnam dignissimos et maxime possimus vitae sunt eveniet!",
  },
  {
    id: 2,
    name: "Noodle Soup",
    price: "$29.99",
    img: MenuImg1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa recusandae veniam, itaque quasi nemo voluptatum corrupti officia, repellat, porro maiores unde ad magnam dignissimos et maxime possimus vitae sunt eveniet!",
  },
  {
    id: 3,
    name: "Noodle Soup",
    price: "$29.99",
    img: MenuImg1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa recusandae veniam, itaque quasi nemo voluptatum corrupti officia, repellat, porro maiores unde ad magnam dignissimos et maxime possimus vitae sunt eveniet!",
  },
  {
    id: 4,
    name: "Noodle Soup",
    price: "$29.99",
    img: MenuImg1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa recusandae veniam, itaque quasi nemo voluptatum corrupti officia, repellat, porro maiores unde ad magnam dignissimos et maxime possimus vitae sunt eveniet!",
  },
  {
    id: 5,
    name: "Noodle Soup",
    price: "$29.99",
    img: MenuImg1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa recusandae veniam, itaque quasi nemo voluptatum corrupti officia, repellat, porro maiores unde ad magnam dignissimos et maxime possimus vitae sunt eveniet!",
  },
];

export const MenuBanner = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
        <div className="py-16 bg-red-400 text-black">
          <div className="container">
            {/* Header section */}
            <div className="space-y-5 mb-10">
              <h1 className="text-center font-bold text-4xl">Our menu</h1>
              <div className="text-center sm:max-w-sm mx-auto text-xs opacity-75 ">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                sit, maxime qui modi iure illo mollitia porro assumenda
                repudiandae ullam delectus amet magnam voluptates! Debitis optio
                blanditiis voluptatem officia hic.
              </div>
            </div>
            {/* Slider section */}
            <div>
              <Slider {...settings}>
                {menuData.map((menu) => (
                  <div className="my-16">
                    <div className="flex flex-col gap-4 py-8 px-6 mx-4 rounded-xl">
                      {/* Image section */}
                      <div className="mb-3 flex justify-around items-center">
                        <img
                          src={menu.img}
                          alt="Menu item"
                          className="rounded-full w-auto sm:max-w-[200px] md:max-w-[250px] shadow-1"
                        />
                      </div>
                      {/* Text content section */}
                      <div className="flex flex-col items-center gap-4">
                        <div>
                          <h1 className="text-xl">{menu.name}</h1>
                          <p className="text-3xl font-semibold">
                            <span className="text-3xl font-customCursive font-bold">
                              Only{" "}
                            </span>
                            {menu.price}
                          </p>
                          <a href="#" className="underline">
                            Buy now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
