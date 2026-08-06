"use client";

import React, { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ScrollStack.css';

interface ScrollStackItemProps {
  children: ReactNode;
  index: number;
  total: number;
}

export const ScrollStackItem = ({ children, index, total }: ScrollStackItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 20%", "end start"]
  });

  // As the user scrolls past, we can optionally scale the card slightly to simulate depth
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - ((total - index) * 0.02)]);
  
  return (
    <motion.div 
      ref={ref}
      className="sticky w-full flex justify-center"
      style={{ 
        top: `calc(15vh + ${index * 2}rem)`, 
        scale,
        zIndex: index
      }}
    >
      <div className="scroll-stack-card shadow-2xl" style={{ overflow: 'hidden' }}>
        {children}
      </div>
    </motion.div>
  );
};

interface ScrollStackProps {
  children: ReactNode[];
}

const ScrollStack = ({ children }: ScrollStackProps) => {
  const total = React.Children.count(children);

  return (
    <div className="relative w-full pb-[30vh]">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { index, total });
        }
        return child;
      })}
    </div>
  );
};

export default ScrollStack;
