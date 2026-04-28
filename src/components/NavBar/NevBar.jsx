import React, { useState, useRef, useEffect } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { AiOutlineBlock } from "react-icons/ai";
import { RiMenu5Fill } from "react-icons/ri";
import { ResponsiveMenu } from "./ResponsiveMenu";
import { motion } from "framer-motion";

const NavbarMenu = [
  { id: 1, title: "Home", link: "#" },
  { id: 2, title: "About us", link: "#about" },
  { id: 3, title: "Products", link: "#products" },
  { id: 4, title: "Shop now", link: "#order" },
  { id: 5, title: "Contact us", link: "#contact" },
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
    activeId: null,
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
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: 1,
            y: 0,
            borderBottomColor: isScrolling ? "#4548a09e" : "#697ef3",
          }}
          transition={{ duration: 0.4 }}
          className="w-full bg-[#696DC6] flex justify-between items-center py-4 px-4 md:px-8 lg:px-16 border-b-3"
        >
          {/* Logo Section */}
          <div className="font-bold text-2xl lg:text-3xl flex gap-2 items-center font-playwrite cursor-default select-none text-white flex-shrink-0">
            <p className="text-white/80">The</p>
            <p className="text-white/80">Facet</p>
            <p className="text-[#11125d] text-4xl lg:text-5xl">
              <AiOutlineBlock />
            </p>
          </div>

          {/* Menu Section */}
          <div className="hidden md:block">
            <ul
              onMouseLeave={() =>
                setPosition((pv) => ({ ...pv, opacity: 0, activeId: null }))
              }
              className="relative flex items-center w-fit py-1 rounded-md border-2 border-black bg-white/80 select-none"
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
                onMouseEnter={() =>
                  setPosition((pv) => ({ ...pv, opacity: 0, activeId: null }))
                }
                className="relative z-10 mx-2 text-xl hover:scale-125 duration-300 p-2 text-[#3C3F8F]"
              >
                <FaCartShopping />
              </button>

              <Cursor position={position} />
            </ul>
          </div>

          {/* Hamburger menu */}
          <div className="md:hidden">
            <RiMenu5Fill
              className="text-4xl text-white cursor-pointer hover:text-white/80 transition-all"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </motion.div>
      </nav>

      <div className="md:hidden">
        <ResponsiveMenu open={isOpen} setIsOpen={setIsOpen} />
      </div>
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
        
        const { width, left: childLeft } = ref.current.getBoundingClientRect();
        const { left: parentLeft } = ref.current.parentElement.getBoundingClientRect();

        setPosition({
          left: childLeft - parentLeft,
          width,
          opacity: 1,
          activeId: id,
        });
      }}
      className={`relative z-10 block cursor-pointer px-4 py-2 font-bold uppercase transition-colors duration-300 
      md:px-3 lg:px-5 md:text-sm lg:text-base ${
        isActive ? "text-white" : "text-[#11125d]"
      }`}
    >
      <a href={link} className="block w-full h-full whitespace-nowrap">
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
      className="absolute z-0 h-[85%] rounded-md bg-[#3C3F8F] pointer-events-none"
      style={{ top: "50%", y: "-50%" }}
    />
  );
};