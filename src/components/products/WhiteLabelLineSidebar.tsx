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
import LineSidebar from "./LineSidebar";
import styles from "./WhiteLabelLineSidebar.module.css";

const solutions = [
  {
    icon: Palette,
    title: "Custom Branding",
    description: "Launch the platform with your own logo, colors, domain, and brand identity.",
    image: "/images/digital_overview.png"
  },
  {
    icon: Users,
    title: "Merchant Management",
    description: "Manage merchant onboarding, verification, approvals, and business operations from one dashboard.",
    image: "/images/b2b_overview.png"
  },
  {
    icon: CreditCard,
    title: "Payment Infrastructure",
    description: "Offer secure payment collection, settlements, and financial services under your own brand.",
    image: "/images/about/Send and accept payment.jpg.jpeg"
  },
  {
    icon: Layout,
    title: "Admin Dashboard",
    description: "Monitor merchants, transactions, reports, settlements, and operational performance.",
    image: "/images/b2b_hero_new.jpg"
  },
  {
    icon: Code2,
    title: "API Integration",
    description: "Connect websites, mobile apps, ERP systems, and third-party platforms seamlessly.",
    image: "/images/about/tech.png"
  },
  {
    icon: LineChart,
    title: "Business Analytics",
    description: "Gain valuable insights through reports, dashboards, and operational analytics.",
    image: "/images/industries/finance_v2.jpg"
  },
];

export default function WhiteLabelLineSidebar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.container}>
      {/* Left side: Interactive Line Sidebar */}
      <div className={styles.sidebarSection}>
        <LineSidebar
          items={solutions.map(s => s.title)}
          accentColor="#10b981" // Vanox brand green
          textColor="#64748b" // Slate 500 for resting state
          markerColor="#cbd5e1" // Slate 300 for markers
          showIndex={true}
          showMarker={true}
          proximityRadius={120}
          maxShift={40}
          falloff="smooth"
          markerLength={50}
          markerGap={10}
          tickScale={0.3}
          itemGap={28}
          fontSize={1.4}
          smoothing={100}
          defaultActive={0}
          onItemClick={(index) => setActiveIndex(index)}
        />
      </div>

      {/* Right side: Detailed Content Display */}
      <div className={styles.contentSection}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
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
            
            <div style={{ marginTop: "24px", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--border-color, #e2e8f0)" }}>
              <img 
                src={solutions[activeIndex].image} 
                alt={solutions[activeIndex].title} 
                style={{ width: "100%", height: "240px", objectFit: "cover", display: "block" }} 
              />
            </div>
            
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
