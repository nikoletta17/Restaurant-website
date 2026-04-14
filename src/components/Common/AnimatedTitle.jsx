import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const AnimatedTitle = ({ tag = "h2", children, className, containerRef }) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // (0.5) - letter spacing is normal when the section is in the middle of the viewport, 
  // (0 и 1) - letters are spaced out when the section is at the top or bottom of the viewport
  const letterSpacing = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["1.2rem", "0rem", "1.2rem"] 
  );
  
  const opacity = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.5, 0.8, 1], 
    [0, 1, 1, 1, 0]
  );

  const MotionTag = motion[tag];

  return (
    <MotionTag
      style={{ letterSpacing, opacity, whiteSpace: "nowrap" }}
      className={className}
    >
      {children}
    </MotionTag>
  );
};
