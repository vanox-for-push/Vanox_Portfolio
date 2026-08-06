"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import "./ApproachFlow.css";

const ApproachFlow = ({ steps }: { steps: any[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="approach-flow-container" ref={containerRef}>
      {/* Desktop Line */}
      <div className="approach-line-track desktop-line">
        <motion.div 
          className="approach-line-fill" 
          style={{ width: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
        />
      </div>

      {/* Mobile Line */}
      <div className="approach-line-track mobile-line">
        <motion.div 
          className="approach-line-fill" 
          style={{ height: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
        />
      </div>

      <div className="approach-steps">
        {steps.map((step, index) => {
          const isTop = index % 2 === 0;
          return (
            <motion.div 
              key={index} 
              className={`approach-step ${isTop ? "step-top" : "step-bottom"}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: isTop ? 40 : -40 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.6, delay: index * 0.2, ease: "easeOut" } 
                }
              }}
            >
              <div className="approach-dot-wrapper">
                <motion.div 
                  className="approach-dot"
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: "0px" }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.2 + 0.2 }}
                >
                  <div className="approach-dot-inner">{step.step}</div>
                  <div className="approach-dot-glow"></div>
                </motion.div>
              </div>

              <div className="approach-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="approach-content-connector"></div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ApproachFlow;
