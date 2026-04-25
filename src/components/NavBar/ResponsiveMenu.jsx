import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ResponsiveMenu = ({ open, setIsOpen }) => {
  const ResponsiveMenuLinks = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Products",
      link: "#products",
    },
    {
      id: 3,
      title: "About us",
      link: "#about",
    },
    {
      id: 4,
      title: "Contact us",
      link: "#contact",
    },
    {
      id: 5,
      title: "Shop now",
      link: "#order",
    },
  ];
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ direction: 0.4 }}
          className="fixed top-0 left-0 w-full h-screen z-[100]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="text-xl font-semibold py-10 m-6 uppercase text-white bg-primary rounded-3xl"
          >
            <ul className="flex flex-col items-center justify-center gap-10">
              {ResponsiveMenuLinks.map((menu) => (
                <li key={menu.id}>
                  <a href={menu.link} onClick={() => setIsOpen(false)}>
                    {menu.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
