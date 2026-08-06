"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  CreditCard,
  Layers,
  Building2,
  Bot,
  Code2,
  Link as LinkIcon,
  Shuffle,
  Volume2,
  Palette,
  Rocket,
  ShieldAlert,
  Users,
  Globe,
  Wallet,
  LayoutDashboard,
  MessageSquare,
  BarChart3,
  AppWindow,
  CloudLightning,
  Workflow,
} from "lucide-react";
import styles from "./ProductOverview.module.css";

const solutionsData = [
  {
    id: "payment",
    tabLabel: "Payment Solutions",
    icon: CreditCard,
    image: "/illustrations/payment_solutions_v2.png",
    titlePart1: "Secure Payment Infrastructure with ",
    titlePart2: "Vanox payment solutions",
    description:
      "Collect and disburse funds seamlessly with industry-leading success rates and full scheduling support built for enterprise scale.",
    subFeatures: [
      {
        icon: LinkIcon,
        title: "Payment Links",
        description: "Create one-time or reusable links for SMS, email, or WhatsApp checkouts.",
      },
      {
        icon: Shuffle,
        title: "Smart Routing",
        description: "Optimize transaction routing across banks to ensure maximum authorization rates.",
      },
      {
        icon: Volume2,
        title: "Soundbox",
        description: "Real-time audio confirmations for retail merchants at counter checkouts.",
      },
    ],
  },
  {
    id: "white-label",
    tabLabel: "White Label Solutions",
    icon: Layers,
    image: "/illustrations/white_label_v2.png",
    titlePart1: "Launch Branded FinTech Products under ",
    titlePart2: "your own brand label",
    description:
      "Deploy fully customized digital wallets, merchant panels, and mobile apps with zero code overhead and fast time-to-market.",
    subFeatures: [
      {
        icon: Palette,
        title: "Custom Branding",
        description: "Integrate your corporate logo, custom color palette, and unique domain endpoints.",
      },
      {
        icon: Rocket,
        title: "Fast Deploy",
        description: "Skip regulatory and developer overhead with ready-made components.",
      },
      {
        icon: ShieldAlert,
        title: "Secure Core",
        description: "Run on highly available ledger backends engineered for transaction load.",
      },
    ],
  },
  {
    id: "b2b",
    tabLabel: "B2B White Label",
    icon: Building2,
    image: "/illustrations/b2b_solutions_v4.png",
    titlePart1: "Enterprise-grade Partner & Reseller ",
    titlePart2: "distributor platforms",
    description:
      "Establish distributor networks with custom pricing markup rules, instant wallets, and localized currency settlements.",
    subFeatures: [
      {
        icon: Users,
        title: "Agent Networks",
        description: "Manage reseller agents, commissions, and access control permissions.",
      },
      {
        icon: Globe,
        title: "Localized Settlements",
        description: "Process regional transactions and automated bank account settlements.",
      },
      {
        icon: Wallet,
        title: "Wallet Ledgers",
        description: "Real-time tracking of agent wallets, deposits, and fee margins.",
      },
    ],
  },
  {
    id: "admin-chatbot",
    tabLabel: "Admin Panel & AI",
    icon: Bot,
    image: "/illustrations/admin_chatbot2.png",
    titlePart1: "Centralized Operations Control and ",
    titlePart2: "AI assistant automation",
    description:
      "Monitor business metrics via live dashboards and automate customer support tasks using custom-trained NLP chatbots.",
    subFeatures: [
      {
        icon: LayoutDashboard,
        title: "Central Dashboard",
        description: "Track transactions, refunds, settlements, and customer logs in one panel.",
      },
      {
        icon: MessageSquare,
        title: "AI Chatbots",
        description: "Deploy 24/7 smart agents capable of handling inquiries and issuing tickets.",
      },
      {
        icon: BarChart3,
        title: "Insight Reports",
        description: "Generate visual payout charts and operational reports in one click.",
      },
    ],
  },
  {
    id: "digital-solutions",
    tabLabel: "Digital & AI Services",
    icon: Code2,
    image: "/illustrations/digital_services2.png",
    titlePart1: "Tailor-made Enterprise Software and ",
    titlePart2: "AI service development",
    description:
      "Build high-performance web applications, native mobile apps, and integrate serverless cloud database setups.",
    subFeatures: [
      {
        icon: AppWindow,
        title: "Custom SaaS",
        description: "Turn ideas into secure, subscription-ready software products.",
      },
      {
        icon: CloudLightning,
        title: "Cloud Architect",
        description: "Deploy on AWS/GCP infrastructures with full load balancer setups.",
      },
      {
        icon: Workflow,
        title: "Auto-Workflows",
        description: "Automate repetitive business workflows via custom integration scripts.",
      },
    ],
  },
];

const imageVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? "100%" : "-100%",
  }),
  center: {
    y: 0,
  },
  exit: (direction: number) => ({
    y: direction > 0 ? "-100%" : "100%",
  }),
};

export default function ProductOverview() {
  const [activeSectionId, setActiveSectionId] = useState("payment");
  const [direction, setDirection] = useState(1);
  const currentIndexRef = useRef(0);

  // Scroll spy effect to track which section is currently in view and determine scroll direction
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newId = entry.target.id;
            const newIndex = solutionsData.findIndex((item) => item.id === newId);
            
            // If the section changed, calculate direction based on index diff
            if (newIndex !== currentIndexRef.current) {
              setDirection(newIndex > currentIndexRef.current ? 1 : -1);
              currentIndexRef.current = newIndex;
              setActiveSectionId(newId);
            }
          }
        });
      },
      { 
        rootMargin: "-25% 0px -25% 0px"
      }
    );

    const sections = document.querySelectorAll(".product-scroll-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const activeSolution = solutionsData.find((item) => item.id === activeSectionId) || solutionsData[0];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Our Solutions</span>
          <h2>
            Everything Your Business Needs to <span className={styles.italicText}>Grow Digitally</span>
          </h2>
          <p className={styles.headerDesc}>
            Explore our comprehensive suite of fintech products, AI-powered
            solutions, and digital services designed to help businesses scale.
          </p>
        </div>

        <div className={styles.desktopLayout}>
          {/* Left Column: Sticky Image Area */}
          <div className={styles.stickyColumn}>
            <div className={styles.stickyImageContainer}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeSolution.id}
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className={styles.imageWrapper}
                  transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
                >
                  <Image
                    src={activeSolution.image}
                    alt={activeSolution.tabLabel}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Scrollable Content Area */}
          <div className={styles.scrollColumn}>
            {solutionsData.map((item) => (
              <div 
                key={item.id} 
                id={item.id} 
                className={`${styles.scrollSection} product-scroll-section ${activeSectionId === item.id ? styles.scrollSectionActive : ''}`}
              >
                <div className={styles.mobileImageContainer}>
                  <Image
                    src={item.image}
                    alt={item.tabLabel}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                
                <h3 className={styles.panelTitle}>
                  {item.titlePart1}
                  <span className={styles.panelTitleHighlight}>
                    {item.titlePart2}
                  </span>
                </h3>
                <p className={styles.panelDesc}>{item.description}</p>

                <div className={styles.subCardsRow}>
                  {item.subFeatures.map((feat, index) => {
                    const FeatIcon = feat.icon;
                    return (
                      <div key={index} className={styles.subCard}>
                        <div className={styles.subIconBox}>
                          <FeatIcon size={18} />
                        </div>
                        <div className={styles.subCardText}>
                          <h4>{feat.title}</h4>
                          <p>{feat.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Tabbed Layout */}
        <div className={styles.mobileLayout}>
          <div className={styles.mobileTabsContainer}>
            {solutionsData.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    const newIndex = solutionsData.findIndex((sol) => sol.id === item.id);
                    setDirection(newIndex > currentIndexRef.current ? 1 : -1);
                    currentIndexRef.current = newIndex;
                    setActiveSectionId(item.id);
                  }}
                  className={`${styles.mobileTab} ${activeSectionId === item.id ? styles.mobileTabActive : ""}`}
                >
                  <Icon size={16} />
                  <span>{item.tabLabel}</span>
                </button>
              );
            })}
          </div>

          <div className={styles.mobileContentArea}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSolution.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className={styles.mobileActivePanel}
              >
                <div className={styles.mobileImageContainer}>
                  <Image
                    src={activeSolution.image}
                    alt={activeSolution.tabLabel}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                
                <h3 className={styles.panelTitle}>
                  {activeSolution.titlePart1}
                  <span className={styles.panelTitleHighlight}>
                    {activeSolution.titlePart2}
                  </span>
                </h3>
                <p className={styles.panelDesc}>{activeSolution.description}</p>

                <div className={styles.subCardsRowMobile}>
                  {activeSolution.subFeatures.map((feat, index) => {
                    const FeatIcon = feat.icon;
                    return (
                      <div key={index} className={styles.subCard}>
                        <div className={styles.subIconBox}>
                          <FeatIcon size={18} />
                        </div>
                        <div className={styles.subCardText}>
                          <h4>{feat.title}</h4>
                          <p>{feat.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
