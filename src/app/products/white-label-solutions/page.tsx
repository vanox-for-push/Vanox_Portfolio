"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import CTA from "@/components/home/CTA";
import FAQ from "@/components/common/FAQ";
import WhiteLabelShowcase from "@/components/products/WhiteLabelShowcase";
import WhiteLabelSwiper from "@/components/products/WhiteLabelSwiper";
import styles from "./white-label.module.css";
import { 
  CreditCard, 
  Cpu, 
  Landmark, 
  Rocket, 
  Coins, 
  Briefcase, 
  Globe, 
  Network 
} from "lucide-react";



const targetAudience = [
  {
    icon: Cpu,
    title: "FinTech Companies",
    description: "Launch card programs, wallets, or digital payment products under your own brand rapidly.",
  },
  {
    icon: CreditCard,
    title: "Payment Providers",
    description: "Expand your merchant processing capabilities and settlement gateways using our technology.",
  },
  {
    icon: Landmark,
    title: "Financial Institutions",
    description: "Modernize legacy systems and digital channels with an agile, white-labeled operation.",
  },
  {
    icon: Rocket,
    title: "Startups & Platforms",
    description: "Offer embedded transaction or financial services natively to your existing customer base.",
  },
  {
    icon: Coins,
    title: "NBFCs",
    description: "Deploy borrower or merchant portals with automated payouts and settlements.",
  },
  {
    icon: Briefcase,
    title: "Enterprise Businesses",
    description: "Establish closed-loop loyalty card networks or custom inter-company payment systems.",
  },
  {
    icon: Globe,
    title: "Digital Platforms",
    description: "Monetize digital transaction flows directly inside your SaaS, platform, or marketplace.",
  },
  {
    icon: Network,
    title: "Aggregators & Agents",
    description: "Onboard and govern multiple sub-networks and agents from one unified control dashboard.",
  },
];

const faqs = [
  {
    question: "Can the platform be customized with my company's branding?",
    answer: "Yes. Your logo, colors, domain, and overall branding can be customized throughout the platform.",
  },
  {
    question: "Can I manage merchants from the platform?",
    answer: "Yes. Merchant onboarding, verification, approvals, and management are handled through the admin dashboard.",
  },
  {
    question: "Is the platform scalable?",
    answer: "Yes. The platform is designed to support growing businesses and increasing operational demands.",
  },
  {
    question: "Can the platform integrate with my existing systems?",
    answer: "Yes. APIs enable integration with websites, mobile applications, ERP systems, and third-party software.",
  },
  {
    question: "Who is this solution suitable for?",
    answer: "Our White Label Solution is ideal for businesses that want to launch their own branded fintech platform without developing the technology from the ground up.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function WhiteLabelSolutionsPage() {
  return (
    <main>
      {/* 1. Hero */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContainer}>
            <motion.span 
              className={`${styles.badge} ${styles.mobileBadge}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              White Label FinTech
            </motion.span>

            <motion.div 
              className={styles.textWrapper}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <span className={`${styles.badge} ${styles.desktopBadge}`}>White Label FinTech</span>
              
              <h1 className={`${styles.heroTitle} ${styles.desktopTitle}`}>Launch Your Own Branded FinTech Platform with Confidence</h1>
              <h3 className={`${styles.heroTitle} ${styles.mobileTitle}`}>Launch Your Own Branded FinTech Platform with Confidence</h3>
              
              <p className={styles.heroDesc}>
                Build your own digital payment ecosystem under your brand with Vanox Dynamics. Our White Label Solutions enable businesses to offer secure payment services, manage merchants, and scale operations without building the technology from scratch.
              </p>
              
              <div className={styles.heroBtns}>
                <Link href="/contact" className="btn btn-primary">
                  Schedule a Demo
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  Talk to an Expert
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className={styles.imageWrapper}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image 
                src="/illustrations/white_label_hero_notext.jpg" 
                alt="White Label FinTech Platform Mockup" 
                width={600} 
                height={500} 
                priority
                style={{ objectFit: "contain", width: "100%", height: "auto" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Overview */}
      <section className={styles.sectionGray}>
        <div className="container">
          <div className={`${styles.heroContainer} ${styles.overviewContainer}`}>
            <motion.span 
              className={`${styles.sectionLabel} ${styles.mobileBadge}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ marginBottom: '24px' }}
            >
              Platform Overview
            </motion.span>
            <motion.div 
              className={styles.textWrapper}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px" }}
              variants={fadeUp}
            >
              <span className={`${styles.sectionLabel} ${styles.desktopBadge}`}>Platform Overview</span>
              <h2 className={styles.sectionTitle}>Everything You Need to Build Your FinTech Brand</h2>
              <p className={styles.sectionDesc}>
                Vanox White Label Solutions provide a ready-to-launch platform that can be customized with your branding, business workflows, and operational requirements. From payment acceptance to merchant management and reporting, we provide the technology while you focus on growing your business.
              </p>
            </motion.div>
            
            <motion.div 
              className={styles.imageWrapper}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6 }}
            >
              <Image 
                src="/illustrations/platform_overview_fintech.jpg" 
                alt="FinTech Brand Overview" 
                width={500} 
                height={400} 
                style={{ objectFit: "contain", width: "100%", height: "auto" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2.5 Live Brand Customizer Showcase - DO NOT TOUCH */}
      <WhiteLabelShowcase />

      {/* 3. White Label Solutions Grid */}
      <section className={styles.section}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px" }}
            variants={fadeUp}
          >
            <span className={styles.sectionLabel}>White Label Solutions</span>
            <h2 className={styles.sectionTitle}>Complete White Label Platform</h2>
            <p className={styles.sectionDesc}>
              Our platform enables businesses to establish and manage their own branded financial ecosystem with modern technology, secure infrastructure, and scalable architecture.
            </p>
          </motion.div>

          <WhiteLabelSwiper />
        </div>
      </section>

      {/* 4. Who Is It For */}
      <section className={styles.sectionGray}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px" }}
            variants={fadeUp}
          >
            <span className={styles.sectionLabel}>Target Audience</span>
            <h2 className={styles.sectionTitle}>Designed for Growing Businesses</h2>
          </motion.div>

          <motion.div 
            className={styles.grid4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px" }}
            variants={staggerContainer}
          >
            {targetAudience.map((audience) => {
              const Icon = audience.icon;
              return (
                <motion.div 
                  key={audience.title} 
                  className={styles.card}
                  variants={fadeUp}
                >
                  <div className={styles.iconWrapper}>
                    <Icon size={24} />
                  </div>
                  <h3 className={styles.cardTitle}>{audience.title}</h3>
                  <p className={styles.cardDesc}>{audience.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className={styles.section}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px" }}
            variants={fadeUp}
          >
            <span className={styles.sectionLabel}>FAQ</span>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          </motion.div>
          
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* 8. CTA */}
      <CTA 
        badge="White Label FinTech"
        heading="Launch Your Own FinTech Brand with Vanox"
        description="Accelerate your business with a fully branded, secure, and scalable White Label platform designed to help you enter the market faster and grow with confidence."
        primaryBtnText="Book a Consultation"
        secondaryBtnText="Contact Sales"
        secondaryBtnHref="/contact"
      />
    </main>
  );
}
