import React, { useState, useRef, useEffect } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { AiOutlineBlock } from "react-icons/ai";
import { motion } from "framer-motion";

const NavbarMenu = [
  { id: 1, title: "Home", link: "#" },
  { id: 2, title: "Products", link: "#products" },
  { id: 3, title: "About us", link: "#about" },
  { id: 4, title: "Contact us", link: "#contact" },
  { id: 5, title: "Shop now", link: "#order" },
];

export const NavBar2 = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
    activeId: null, // Store the ID of the active tab
  });
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsScrolling(false), 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-lightBlue">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: 1,
            y: 0,
            borderBottomColor: isScrolling ? "#4548a09e" : "#697ef3",
          }}
          transition={{ duration: 0.4 }}
          className="bg-[#696DC6] flex justify-around items-center py-4 border-b-3"
        >
          {/* Logo Section */}
          <div className="font-bold text-3xl flex gap-2 items-center  font-playwrite cursor-default select-none text-white">
            <p className="text-white/80">The</p>
            <p className="text-white/80">Facet</p>
            <p className="text-[#11125d] text-5xl">
              <AiOutlineBlock />
            </p>
          </div>

          {/* Menu Section */}
          <ul
            // reset activeId when the mouse leaves
            onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0, activeId: null }))}
            className="relative flex items-center w-fit px-6 py-1 rounded-md border-2 border-black bg-white/80 select-none"
          >
            {NavbarMenu.map((menu) => (
              <Tab 
                key={menu.id} 
                id={menu.id} 
                activeId={position.activeId} 
                setPosition={setPosition} 
                link={menu.link}
              >
                {menu.title}
              </Tab>
            ))}

            <button
              onMouseEnter={() => setPosition((pv) => ({ ...pv, opacity: 0, activeId: null }))}
              className="relative z-10 ml-2 text-xl hover:scale-130 duration-400 p-2 text-[#3C3F8F]"
            >
              <FaCartShopping />
            </button>

            <Cursor position={position} />
          </ul>
        </motion.div>
      </nav>
      <div className="h-[80px]"></div>
    </>
  );
};


const Tab = ({ children, setPosition, id, activeId, link }) => {
  const ref = useRef(null);
  
  const isActive = activeId === id;

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
          activeId: id, 
        });
      }}
      className={`relative z-10 block cursor-pointer px-4 py-2 text-sm font-bold uppercase transition-colors duration-300 md:px-5 md:py-3 md:text-base ${
        isActive ? "text-white" : "text-[#11125d]"
      }`}
    >
      <a href={link} className="block w-full h-full">
        {children}
      </a>
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
      className="absolute z-0 h-[80%] rounded-md bg-[#3C3F8F] pointer-events-none"
      style={{ top: "50%", y: "-50%" }}
    />
  );
};