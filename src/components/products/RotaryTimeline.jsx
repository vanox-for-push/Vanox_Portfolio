"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { CheckCircle, Layers } from 'lucide-react';
import './RotaryTimeline.css';

const RotaryTimeline = ({ steps }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate rotation based on scroll.
  // 6 steps, 5 intervals. Let's space them by 30 degrees. Total rotation = -150 degrees.
  const totalAngle = (steps.length - 1) * 30;
  const rotation = useTransform(scrollYProgress, [0, 1], [0, -totalAngle]);

  // Determine active step index based on scroll
  const [activeIndex, setActiveIndex] = useState(0);
  const directionRef = useRef(1); // 1 for down/next, -1 for up/prev

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Map 0-1 to 0-5
      const index = Math.round(latest * (steps.length - 1));
      if (index !== activeIndex) {
        directionRef.current = index > activeIndex ? 1 : -1;
        setActiveIndex(index);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, activeIndex, steps.length]);

  const cardVariants = {
    enter: (direction) => ({
      opacity: 0,
      y: direction > 0 ? 20 : -20
    }),
    center: {
      opacity: 1,
      y: 0
    },
    exit: (direction) => ({
      opacity: 0,
      y: direction > 0 ? -20 : 20
    })
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="rotary-container" 
      style={{ height: isMobile ? `${steps.length * 40}vh` : `${steps.length * 80}vh` }}
    >
      <div className="rotary-sticky-wrapper">
        
        {/* Left Side: The Rotary Dial */}
        <div className="rotary-dial-section">
          
          <div className="rotary-dial-scaler">
            
            {/* Center Decorative Elements */}
            <div className="absolute top-[50%] left-0 w-0 h-0 pointer-events-none z-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-slate-200/50"></div>
              
              {/* Outer dashed spinning ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="w-[350px] h-[350px] rounded-full border border-slate-300/60 border-dashed"
                ></motion.div>
              </div>
              
              {/* Inner dotted spinning ring (reverse) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="w-[240px] h-[240px] rounded-full border-2 border-purple-200/50 border-dotted"
                ></motion.div>
              </div>

              {/* Glowing aura */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-[200px] h-[200px] rounded-full bg-gradient-to-tr from-purple-500/10 to-orange-500/10 blur-xl"
                ></motion.div>
              </div>
              
              {/* Center reactive badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <motion.div 
                  key={activeIndex}
                  initial={{ scale: 0.5, rotate: directionRef.current > 0 ? -90 : 90, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="w-[120px] h-[120px] rounded-full bg-white shadow-[0_0_30px_rgba(168,85,247,0.2)] flex items-center justify-center border border-purple-100"
                >
                  <Layers className="w-10 h-10 text-purple-600" />
                </motion.div>
              </div>
            </div>

            {/* The Dial Circle */}
            <motion.div 
              className="rotary-dial-circle z-10"
              style={{ rotate: rotation }}
            >
              {/* The Numbers on the Dial */}
              {steps.map((step, i) => {
              // Position along the right edge: 0 deg is right, increasing downwards
              const angle = i * 30;
              const rad = (angle * Math.PI) / 180;
              const radius = 400; // half of 800px width
              const x = radius * Math.cos(rad);
              const y = radius * Math.sin(rad);

              return (
                <div 
                  key={i}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                  }}
                >
                  {/* We need to counter-rotate the number so it stays upright! */}
                  <motion.div
                    className="rotary-dial-number"
                    style={{
                      width: activeIndex === i ? '80px' : '60px',
                      height: activeIndex === i ? '80px' : '60px',
                      rotate: useTransform(rotation, r => -r) // counter-rotate
                    }}
                  >
                    <span 
                      className={`font-black ${activeIndex === i ? 'rotary-dial-number active' : 'rotary-dial-number inactive'}`}
                    >
                      {step.step}
                    </span>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
          </div>
          
          {/* Glass Overlay to mask the left side on desktop */}
          <div className="hidden md:block absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        </div>

        {/* Right Side: The Content */}
        <div className="rotary-content-section">
          <div>
            <span className="rotary-header-label">Methodology</span>
            <h2 className="rotary-header-title">Development Process</h2>
          </div>

          <div className="rotary-card-wrapper">
            <AnimatePresence mode="wait" custom={directionRef.current}>
              <motion.div
                key={activeIndex}
                custom={directionRef.current}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="rotary-card"
              >
                <div className="rotary-card-content">
                  <div className="rotary-card-watermark">
                    {steps[activeIndex].step}
                  </div>
                  <h3 className="rotary-card-title">{steps[activeIndex].title}</h3>
                  <p className="rotary-card-description">
                    {steps[activeIndex].description}
                  </p>

                  {steps[activeIndex].points && (
                    <ul className="mt-6 space-y-3">
                      {steps[activeIndex].points.map((pt, idx) => (
                        <li key={idx} className="flex items-start text-slate-700 font-medium">
                          <CheckCircle className="w-5 h-5 text-purple-600 mr-5 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RotaryTimeline;
