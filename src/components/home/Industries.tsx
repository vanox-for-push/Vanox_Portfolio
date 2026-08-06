"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Globe,
  Heart,
  GraduationCap,
  Truck,
  UtensilsCrossed,
  Landmark,
  Briefcase,
  Terminal,
  Shield,
  Bot,
  Layers,
  Zap,
  Activity,
  Award,
  Wallet,
  CreditCard,
  ChevronRight,
} from "lucide-react";
import styles from "./Industries.module.css";

const industriesData = [
  {
    id: "retail",
    tabLabel: "Retail",
    icon: ShoppingCart,
    image: "/images/industries/retail.png",
    mainTitle: "Modernize your retail storefront with integrated commerce solutions",
    mainDescription: "Bridge the gap between online and offline retail with unified billing, local payouts, and smart CRM integrations built for modern merchant scale.",
    solutions: [
      {
        icon: Zap,
        title: "Unified Billing",
        description: "Collect payments seamlessly at counter or online with instant status sync.",
        link: "/products/payment-solutions",
      },
      {
        icon: Award,
        title: "Customer Engagement",
        description: "Reward repeat customers automatically with automated receipt and loyalty workflows.",
        link: "/products/business-admin-panel-ai-chatbot-automation",
      },
    ],
  },
  {
    id: "ecommerce",
    tabLabel: "E-Commerce",
    icon: Globe,
    image: "/images/industries/ecommerce.png",
    mainTitle: "Supercharge your online checkout experience",
    mainDescription: "Integrate powerful checkout systems, automated payment links, and instant refund systems to boost your store conversions globally.",
    solutions: [
      {
        icon: Layers,
        title: "Smart Routing Gateways",
        description: "Optimize transaction routing across banks for maximum success rate.",
        link: "/products/payment-solutions",
      },
      {
        icon: Wallet,
        title: "Instant Payouts",
        description: "Disburse vendor payouts, commissions, and refunds in real-time.",
        link: "/products/payment-solutions",
      },
    ],
  },
  {
    id: "healthcare",
    tabLabel: "Healthcare",
    icon: Heart,
    image: "/images/industries/healthcare.png",
    mainTitle: "Secure healthcare billing & digital patient systems",
    mainDescription: "Offer patients simple, secure digital payments, automated billing statements, and streamlined appointment checkouts.",
    solutions: [
      {
        icon: Shield,
        title: "Secure Portals",
        description: "Bank-grade secure payment paths and digital patient interfaces.",
        link: "/products/digital-solutions-ai-services",
      },
      {
        icon: Activity,
        title: "Auto-Settlements",
        description: "Auto-verify and settle billing payments and private fees.",
        link: "/products/payment-solutions",
      },
    ],
  },
  {
    id: "education",
    tabLabel: "Education",
    icon: GraduationCap,
    image: "/images/industries/education.jpg",
    mainTitle: "Simplifying school fee collection & admin portals",
    mainDescription: "Automate tuition reminders, setup customizable recurring installment plans, and handle digital registrations effortlessly.",
    solutions: [
      {
        icon: Zap,
        title: "Installment Setup",
        description: "Offer parents flexible split-fee options directly during registration.",
        link: "/products/payment-solutions",
      },
      {
        icon: Shield,
        title: "Automated Reminders",
        description: "Reduce late fees with proactive SMS and Email alerts.",
        link: "/products/business-admin-panel-ai-chatbot-automation",
      },
    ],
  },
  {
    id: "logistics",
    tabLabel: "Logistics",
    icon: Truck,
    image: "/images/industries/logistics.jpg",
    mainTitle: "Fleet coordination & real-time vendor payouts",
    mainDescription: "Disburse fuel allowances and contract payments to drivers instantly in the field, managed through a central operations console.",
    solutions: [
      {
        icon: Wallet,
        title: "Field Payouts",
        description: "Instant transfers directly to fleet driver bank accounts and wallets.",
        link: "/products/payment-solutions",
      },
      {
        icon: Layers,
        title: "Telemetry Invoices",
        description: "Generate bills automatically based on route logs and trip milestones.",
        link: "/products/digital-solutions-ai-services",
      },
    ],
  },
  {
    id: "hospitality",
    tabLabel: "Hospitality",
    icon: UtensilsCrossed,
    image: "/images/industries/hospitality.jpg",
    mainTitle: "Frictionless guest checkouts & reservation systems",
    mainDescription: "Power online reservation systems and guest billing integrated directly with secure, high-speed payment gateways.",
    solutions: [
      {
        icon: Zap,
        title: "Online Reservation Payments",
        description: "Process instant booking payments and guest charges effortlessly.",
        link: "/products/payment-solutions",
      },
      {
        icon: CreditCard,
        title: "Counter & POS Billing",
        description: "Accept UPI, Cards, and QR payments seamlessly at reception or dining counters.",
        link: "/products/payment-solutions",
      },
    ],
  },
  {
    id: "finance",
    tabLabel: "Finance",
    icon: Landmark,
    image: "/images/industries/finance.jpg",
    mainTitle: "Next-gen FinTech infrastructure & API banking",
    mainDescription: "Build white-label reseller platforms, deploy payment portals, and connect directly to bank APIs for ledger reconciliations.",
    solutions: [
      {
        icon: Layers,
        title: "Connected API Banking",
        description: "Verify transactions, check balances, and move funds programmatically.",
        link: "/products/payment-solutions",
      },
      {
        icon: Award,
        title: "White-Label Core",
        description: "Deploy branded payment networks with secure regulatory backings.",
        link: "/products/b2b-white-label-solutions",
      },
    ],
  },
  {
    id: "startups",
    tabLabel: "Startups & Enterprises",
    icon: Briefcase,
    image: "/images/industries/startups.jpg",
    mainTitle: "Scalable cloud services & digital transformation",
    mainDescription: "Accelerate your product launch with scalable backend APIs, custom web/mobile apps, and intelligent bot automation workflows.",
    solutions: [
      {
        icon: Terminal,
        title: "Custom Cloud Architectures",
        description: "Serverless setups built to handle traffic and database scaling.",
        link: "/products/digital-solutions-ai-services",
      },
      {
        icon: Bot,
        title: "Automated Workflows",
        description: "Automate your customer support desk using custom support bot workflows.",
        link: "/products/business-admin-panel-ai-chatbot-automation",
      },
    ],
  },
];

export default function Industries() {
  const [activeTab, setActiveTab] = useState(industriesData[0].id);
  const activeData = industriesData.find((item) => item.id === activeTab) || industriesData[0];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Industries We Serve</span>
          <h2>Tailored Technology Solutions Built for Every Industry</h2>
          <p className={styles.headerDesc}>
            We design and engineer custom digital solutions tailored to the exact
            operational workflows, billing needs, and scale of your business—built
            specifically around your requirements rather than rigid prebuilt software.
          </p>
        </div>

        {/* Horizontal Navigation Tabs */}
        <div className={styles.tabsContainer}>
          {industriesData.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`${styles.tab} ${activeTab === item.id ? styles.activeTab : ""}`}
              >
                <Icon size={16} />
                {item.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Tab Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className={styles.contentArea}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {/* Visual Panel Showcase */}
            <div className={styles.visualPanel}>
              <div className={styles.glow} />
              <div className={styles.showcaseCard}>
                {activeData.image ? (
                  <div className={styles.imageWrapper}>
                    <Image
                      src={activeData.image}
                      alt={activeData.tabLabel}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={styles.industryImage}
                    />
                  </div>
                ) : (
                  <>
                    <div className={styles.showcaseHeader}>
                      <div className={styles.showcaseDot} />
                      <activeData.icon size={20} />
                    </div>
                    <div className={`${styles.showcaseItem} ${styles.showcaseItemActive}`} />
                    <div className={`${styles.showcaseItem} ${styles.showcaseItemMedium}`} />
                    <div className={`${styles.showcaseItem} ${styles.showcaseItemShort}`} />
                    <div style={{ marginTop: "24px", fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
                      {"// LIVE SYSTEM: VANOX CORE"}
                    </div>
                  </>
                )}
                {activeData.image && (
                  <div className={styles.imageLabel}>
                    {activeData.tabLabel}
                  </div>
                )}
              </div>
            </div>

            {/* Detailed Content Card */}
            <div className={styles.detailPanel}>
              <h3 className={styles.industryHeading}>
                {activeData.mainTitle.split(" ").map((word, index) => {
                  const isGreen = index < 3; // Highlight first few words
                  return (
                    <span key={index} className={isGreen ? styles.highlightText : ""}>
                      {word}{" "}
                    </span>
                  );
                })}
              </h3>
              <p className={styles.industryDesc}>{activeData.mainDescription}</p>

              <span className={styles.subSectionTitle}>RECOMMENDED SOLUTIONS</span>

              <div className={styles.solutionsGrid}>
                {activeData.solutions.map((sol, index) => {
                  const SolIcon = sol.icon;
                  return (
                    <Link key={index} href={sol.link || "/products"} className={styles.solCard}>
                      <div className={styles.solIconBox}>
                        <SolIcon size={18} />
                      </div>
                      <div className={styles.solCardText}>
                        <h4>{sol.title}</h4>
                        <p>{sol.description}</p>
                        <div className={styles.exploreLink}>
                          Explore Service <ChevronRight size={14} />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
