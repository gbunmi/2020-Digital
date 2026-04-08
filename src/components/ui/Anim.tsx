import { motion } from "motion/react";
import React, { ReactNode } from "react";

interface AnimProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
  className?: string;
  style?: React.CSSProperties;
  once?: boolean;
  key?: React.Key;
}

export function Anim({ 
  children, 
  delay = 0, 
  direction = "up", 
  className = "", 
  style = {},
  once = true 
}: AnimProps) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      scale: direction === "scale" ? 0.92 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      variants={variants}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
