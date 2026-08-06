"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { 
  Palette, 
  Users, 
  CreditCard, 
  Layout, 
  Code2, 
  LineChart 
} from "lucide-react";
import styles from "./WhiteLabelSwiper.module.css";

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
    description: "Manage merchant onboarding, verification, approvals, and daily operations.",
    image: "/images/b2b_overview.png"
  },
  {
    icon: CreditCard,
    title: "Payment Infrastructure",
    description: "Offer secure payment collection, settlements, and payouts under your brand.",
    image: "/images/about/Send and accept payment.jpg.jpeg"
  },
  {
    icon: Layout,
    title: "Admin Dashboard",
    description: "Monitor merchants, transactions, custom reports, and operational performance.",
    image: "/images/b2b_hero_new.jpg"
  },
  {
    icon: Code2,
    title: "API Integration",
    description: "Connect websites, mobile apps, ERP systems, and external platforms seamlessly.",
    image: "/images/about/tech.png"
  },
  {
    icon: LineChart,
    title: "Business Analytics",
    description: "Gain valuable insights through interactive reports and operational analytics.",
    image: "/images/industries/finance_v2.jpg"
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function WhiteLabelSwiper() {
  return (
    <div className={styles.swiperSection}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px" }}
        variants={fadeUp}
      >
        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView={1.2}
          centeredSlides={false}
          pagination={{ 
            clickable: true,
            el: `.${styles.customPagination}`,
            bulletClass: styles.swiperBullet,
            bulletActiveClass: styles.swiperBulletActive,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2.1,
            },
            1024: {
              slidesPerView: 2.5,
            },
            1280: {
              slidesPerView: 3,
            }
          }}
          className={styles.swiperContainer}
        >
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <SwiperSlide key={index} className={styles.slide}>
                <div className={styles.blendedCard}>
                  {/* Background Image */}
                  <div 
                    className={styles.cardImageBg} 
                    style={{ backgroundImage: `url(${solution.image})` }}
                  />
                  
                  {/* Dark Gradient Overlay */}
                  <div className={styles.cardOverlay} />

                  {/* Content on top */}
                  <div className={styles.cardContent}>
                    <div>
                      <h3 className={styles.cardTitle}>{solution.title}</h3>
                      <p className={styles.cardDesc}>{solution.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        
        {/* Custom Pagination Container */}
        <div className={styles.customPagination} />
      </motion.div>
    </div>
  );
}
