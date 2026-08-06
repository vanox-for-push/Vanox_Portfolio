"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./ExpandingIndustries.module.css";
import {
  ShoppingCart,
  Globe,
  Heart,
  GraduationCap,
  UtensilsCrossed,
  Truck,
  Scale,
  Activity,
} from "lucide-react";

interface IndustryItem {
  id: string;
  icon: any;
  title: string;
  description: string;
  image: string;
  objectPosition?: string;
  transform?: string;
  transformOrigin?: string;
}

const industriesList: IndustryItem[] = [
  {
    id: "retail",
    icon: ShoppingCart,
    title: "Retail",
    description: "Enable fast in-store and online payments with QR codes, payment gateways, and merchant solutions.",
    image: "/images/industries/retail_v3.jpg",
  },
  {
    id: "ecommerce",
    icon: Globe,
    title: "E-Commerce",
    description: "Accept secure online payments, automate settlements, and simplify checkout experiences.",
    image: "/images/industries/ecommerce_v2.jpg",
  },
  {
    id: "healthcare",
    icon: Heart,
    title: "Healthcare",
    description: "Collect consultation fees, hospital payments, and patient fee collections securely.",
    image: "/images/industries/healthcare_v2.jpg",
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education",
    description: "Simplify fee collection, recurring payments, and student payment management.",
    image: "/images/industries/education_v2.jpg",
  },
  {
    id: "hospitality",
    icon: UtensilsCrossed,
    title: "Hospitality",
    description: "Streamline hotel, restaurant, and travel payments with secure digital solutions.",
    image: "/images/industries/hospitality_v2.jpg",
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Logistics",
    description: "Manage freight payments, vendor payouts, and automated workflows efficiently.",
    image: "/images/industries/logistics_v2.jpg",
  },
  {
    id: "finance",
    icon: Scale,
    title: "Finance",
    description: "Support secure fund transfers, payouts, processing, and banking integrations.",
    image: "/images/industries/finance_v2.jpg",
  },
  {
    id: "startups",
    icon: Activity,
    title: "Startups",
    description: "Build scalable payment infrastructure that grows alongside your business.",
    image: "/images/industries/startups_v2.jpg",
    objectPosition: "center bottom",
    transform: "scale(1.18)",
    transformOrigin: "center bottom",
  },
];

export default function ExpandingIndustries() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0); // Default first item hovered

  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <span>Industries</span>
          <h2>Payment Solutions for Every Industry</h2>
          <p>
            Our secure and scalable payment infrastructure is designed to support businesses across diverse industries, enabling seamless transactions and faster collections.
          </p>
        </motion.div>

        {/* Desktop Expanding Cards */}
        <div className={styles.expandingContainer}>
          {industriesList.map((industry, index) => {
            const Icon = industry.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div 
                key={industry.id} 
                className={`${styles.card} ${isHovered ? styles.active : ""}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => setHoveredIndex(index)}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    style={{ 
                      objectFit: "cover", 
                      objectPosition: industry.objectPosition || "center",
                      transform: industry.transform || "none",
                      transformOrigin: industry.transformOrigin || "center center"
                    }}
                  />
                  <div className={styles.overlay} />
                </div>
                
                {/* Default state: Just the icon */}
                <div className={`${styles.defaultIcon} ${isHovered ? styles.hidden : ""}`}>
                  <Icon size={24} />
                </div>

                {/* Hover state: Full content */}
                <div className={`${styles.content} ${isHovered ? styles.visible : ""}`}>
                  <div className={styles.contentHeader}>
                    <div className={styles.activeIcon}>
                      <Icon size={20} />
                    </div>
                    <h3>{industry.title}</h3>
                  </div>
                  <p>{industry.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Fallback: Horizontal Scroll Carousel */}
        <div className={styles.mobileGrid}>
          {industriesList.map((industry) => {
            return (
              <div key={industry.id} className={styles.mobileCard}>
                <div className={styles.mobileImageContainer}>
                  <Image 
                    src={industry.image} 
                    alt={industry.title} 
                    fill 
                    sizes="(max-width: 768px) 85vw, 100vw"
                    style={{ 
                      objectFit: "cover", 
                      objectPosition: industry.objectPosition || "center",
                      transform: industry.transform || "none",
                      transformOrigin: industry.transformOrigin || "center center"
                    }} 
                  />
                </div>
                <div className={styles.mobileCardContent}>
                  <h4>{industry.title}</h4>
                  <p>{industry.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
