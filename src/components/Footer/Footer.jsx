import React from "react";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { AiOutlineBlock } from "react-icons/ai";

const FooterLinks = [
  { id: 1, title: "Home", link: "#" },
  { id: 2, title: "Products", link: "#products" },
  { id: 3, title: "About us", link: "#about" },
  { id: 4, title: "Contact us", link: "#contact" },
  { id: 5, title: "Shop now", link: "#order" },
];

const SocialMedia = [
  { id: 1, icon: <FaFacebook />, link: "#" },
  { id: 2, icon: <FaTwitter />, link: "#" },
  { id: 3, icon: <FaInstagram />, link: "#" },
  { id: 4, icon: <FaYoutube />, link: "#" },
];

export const Footer = () => {
  return (
    <footer className="relative bg-[#11125D]/90 text-light pt-12 pb-8 px-4 sm:px-8 md:px-16 lg:px-28 overflow-hidden border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/*  Logo  */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <AiOutlineBlock className="text-3xl text-lightBlue" />
              <h3 className="footer__headers tracking-[0.2em] mb-0">
                The <span className="font-bold">Facet</span>
              </h3>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              We create a gastronomic experience through the prism of perfect
              geometry of taste.
            </p>
          </div>
          {/*  Links  */}
          <div>
            <h3 className="footer__headers font-semibold text-lightBlue/80">
              {" "}
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {FooterLinks.map((link) => (
                <li key={link.id}>
                  <motion.a
                    href={link.link}
                    className="hover:text-blue-400/80 transition-colors duration-300 flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-2 h-2 bg-lightBlue rotate-45 mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.title}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/*  Social Media  */}
          <div>
            <h3 className="footer__headers font-semibold text-lightBlue/80">
              {" "}
              Social Media{" "}
            </h3>
            <ul className="flex gap-3 left-1/2 w-full  ">
              {SocialMedia.map((mediaIcon) => (
                <li key={mediaIcon.id}>
                  <a
                    href={mediaIcon.link}
                    className="text-2xl p-3 rounded-full inline-flex items-center bg-lightBlue/80 shadow-sm text-black transition-all duration-300 hover:bg-primary/80 hover:text-white hover:-translate-y-1 "
                  >
                    {mediaIcon.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/*  Address  */}
          <div>
            <h3 className="footer__headers font-semibold text-lightBlue/80">
              {" "}
              Contacts
            </h3>
            <p className="text-gray-400 mb-2">17 Evergreen Terrace St.</p>
            <p className="text-gray-400 text-lg">+(1) 123 456 789 </p>
          </div>
        </div>
        {/* Rights */}
        <div className="pt-8 border-t mt-5 border-white/5 flex flex-col md:row justify-between items-center gap-4 text-xs tracking-widest text-gray-400 uppercase">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold text-lightBlue">The Facet.</span> All
            rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-lightBlue transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-lightBlue transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
