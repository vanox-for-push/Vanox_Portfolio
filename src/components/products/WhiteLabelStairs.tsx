"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Palette, 
  Users, 
  CreditCard, 
  Layout, 
  Code2, 
  LineChart 
} from "lucide-react";
import styles from "./WhiteLabelStairs.module.css";

const solutions = [
  {
    icon: Palette,
    title: "Custom Branding",
    description: "Launch the platform with your own logo, colors, domain, and brand identity.",
  },
  {
    icon: Users,
    title: "Merchant Management",
    description: "Manage merchant onboarding, verification, approvals, and business operations from one dashboard.",
  },
  {
    icon: CreditCard,
    title: "Payment Infrastructure",
    description: "Offer secure payment collection, settlements, and financial services under your own brand.",
  },
  {
    icon: Layout,
    title: "Admin Dashboard",
    description: "Monitor merchants, transactions, reports, settlements, and operational performance.",
  },
  {
    icon: Code2,
    title: "API Integration",
    description: "Connect websites, mobile apps, ERP systems, and third-party platforms seamlessly.",
  },
  {
    icon: LineChart,
    title: "Business Analytics",
    description: "Gain valuable insights through reports, dashboards, and operational analytics.",
  },
];

export default function WhiteLabelStairs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.stairsContainer}>
      {/* Left side: Interactive Stairs */}
      <div className={styles.stairsList}>
        {solutions.map((solution, index) => {
          const isActive = index === activeIndex;
          const Icon = solution.icon;
          
          return (
            <motion.button
              key={index}
              className={`${styles.stairItem} ${isActive ? styles.activeStair : ""}`}
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              style={{ marginLeft: `var(--stair-indent, ${index * 24}px)` } as React.CSSProperties}
            >
              <div className={styles.stairIcon}>
                <Icon size={20} />
              </div>
              <span className={styles.stairTitle}>{solution.title}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Right side: Detailed Content Display */}
      <div className={styles.contentDisplay}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={styles.activeContentCard}
          >
            <div className={styles.decorativeGlow} />
            
            <div className={styles.contentIconWrapper}>
              {React.createElement(solutions[activeIndex].icon, {
                size: 40,
                strokeWidth: 1.5,
              })}
            </div>
            
            <h3 className={styles.contentTitle}>{solutions[activeIndex].title}</h3>
            <p className={styles.contentDesc}>{solutions[activeIndex].description}</p>
            
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
