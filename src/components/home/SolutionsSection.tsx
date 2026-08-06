"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Building2,
  CreditCard,
  Sparkles,
  BarChart3,
  Layers,
  FileCheck2,
  RefreshCw,
  Code2,
} from "lucide-react";
import styles from "./SolutionsSection.module.css";

const solutions = [
  {
    id: "payment-infrastructure",
    tag: "FinTech & Payments",
    tagIcon: CreditCard,
    title: "All-in-One Payment & Payout Infrastructure",
    description:
      "Accept money seamlessly via UPI, Cards, Net Banking & Wallets, and power 24x7 instant payouts across bank accounts with bank-grade security and automated reconciliation.",
    image: "/images/about/send-and-accept-payment.jpeg",
    alt: "Vanox Dynamics Payment and Payout Infrastructure",
    highlights: [
      {
        title: "Instant 24x7 Payouts",
        desc: "Automated round-the-clock settlements into bank accounts with 99.99% uptime.",
        icon: Zap,
      },
      {
        title: "Bank-Grade Security",
        desc: "PCI-DSS compliant architecture with tokenization and fraud protection.",
        icon: ShieldCheck,
      },
      {
        title: "Multi-Channel Gateway",
        desc: "Accept payments via UPI, Credit/Debit Cards, NetBanking & Wallets.",
        icon: CreditCard,
      },
      {
        title: "Built for High Scale",
        desc: "High-throughput API infrastructure engineered for millions of transactions.",
        icon: Building2,
      },
      {
        title: "Smart Auto-Routing",
        desc: "Dynamic bank route switching to maximize transaction success rates.",
        icon: RefreshCw,
      },
      {
        title: "Real-time Analytics",
        desc: "Detailed financial dashboards, ledger reporting, and instant reconciliation.",
        icon: BarChart3,
      },
    ],
    link: "/products/payment-solutions",
    linkText: "Explore Payment Solutions",
    imagePosition: "left" as const,
  },
  {
    id: "b2b-b2c-saas",
    tag: "SaaS & Enterprise Solutions",
    tagIcon: Building2,
    title: "Customizable B2B & B2C Enterprise SaaS Platform",
    description:
      "Launch turn-key fintech software, UPI portals, AEPS & BBPS management, KYC verification APIs, and e-commerce marketplaces with complete licensing and operational support.",
    image: "/images/about/b2b-b2c.jpeg",
    alt: "Vanox Dynamics B2B & B2C Business SaaS Platform",
    highlights: [
      {
        title: "Credit Card & Rent Payouts",
        desc: "Instant processing for B2B vendor payouts & rent.",
        icon: CreditCard,
      },
      {
        title: "20+ Banking APIs & AEPS",
        desc: "Plug-and-play APIs for BBPS utility bills, AEPS cash, and DMT payouts.",
        icon: Layers,
      },
      {
        title: "AI Healthcare & KYC",
        desc: "Automated document verification, OCR parsing, and identity checks.",
        icon: ShieldCheck,
      },
      {
        title: "Turnkey White-Label SaaS",
        desc: "Custom branding, multi-tenant portals, and admin control panels.",
        icon: Building2,
      },
      {
        title: "License & Registration",
        desc: "Full assistance with regulatory compliance and legal registration.",
        icon: FileCheck2,
      },
      {
        title: "Automated GST Invoicing",
        desc: "Recurring payments, Payment gateway and payouts",
        icon: CheckCircle2,
      },
    ],
    link: "/products/b2b-white-label-solutions",
    linkText: "Explore SaaS Platform",
    imagePosition: "left" as const,
  },
  {
    id: "digital-ai-services",
    tag: "AI & Digital Engineering",
    tagIcon: Sparkles,
    title: "AI-Powered Automation & Digital Services",
    description:
      "Transform operations with custom web apps, mobile apps, enterprise AI chatbots, cloud infrastructure, and intelligent workflow automation built for modern growth.",
    image: "/images/about/tech.png",
    alt: "Vanox Dynamics Digital Solutions and AI Engineering",
    highlights: [
      {
        title: "Custom Web & Mobile Apps",
        desc: "High-performance React/Next.js applications and native iOS & Android apps.",
        icon: Code2,
      },
      {
        title: "AI Chatbots & Agents",
        desc: "Intelligent customer assistants, lead capture bots, and automated support.",
        icon: Sparkles,
      },
      {
        title: "Enterprise Software & ERP",
        desc: "Tailored business management portals built around your exact workflows.",
        icon: Building2,
      },
      {
        title: "Cloud Infrastructure",
        desc: "Scalable cloud deployment, microservices architecture, and DevOps.",
        icon: RefreshCw,
      },
      {
        title: "UI/UX & Product Design",
        desc: "Modern, intuitive interfaces engineered for maximum user engagement.",
        icon: Layers,
      },
      {
        title: "Predictive AI Analytics",
        desc: "Actionable business intelligence and automated financial reporting.",
        icon: BarChart3,
      },
    ],
    link: "/products/digital-solutions-ai-services",
    linkText: "Explore Digital Solutions",
    imagePosition: "left" as const,
  },
];

interface StackedCardProps {
  item: (typeof solutions)[0];
  index: number;
  total: number;
}

function StackedCard({ item, index, total }: StackedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 992);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Smoothly scale down card as subsequent cards stack over it (desktop only)
  const scale = useTransform(
    scrollYProgress,
    [0.35, 0.75],
    [1, 1 - (total - index - 1) * 0.035]
  );

  const isImageLeft = item.imagePosition === "left";
  const TagIcon = item.tagIcon;

  // Staggered top offsets for stacked visual depth
  const stickyTop = 120 + index * 26;

  return (
    <div
      ref={cardRef}
      className={styles.cardStickyContainer}
      style={
        {
          "--sticky-top": `${stickyTop}px`,
          "--card-index": index,
          zIndex: index + 1,
        } as React.CSSProperties
      }
    >
      <motion.div
        className={`${styles.solutionCard} ${
          isImageLeft ? styles.imageLeft : styles.imageRight
        }`}
        style={{ scale: mounted && isDesktop ? scale : 1 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: mounted && isDesktop ? index * 0.1 : 0 }}
      >
        {/* Image Wrapper */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageCard}>
            <Image
              src={item.image}
              alt={item.alt}
              width={1024}
              height={1024}
              className={styles.solutionImage}
              priority={index === 0}
              unoptimized
            />
          </div>
        </div>

        {/* Content Wrapper */}
        <div className={styles.contentWrapper}>
          <div className={styles.cardBadge}>
            <TagIcon size={15} />
            <span>{item.tag}</span>
          </div>

          <h3 className={styles.cardTitle}>{item.title}</h3>

          <p className={styles.cardDescription}>{item.description}</p>

          <div className={styles.highlightsGrid}>
            {item.highlights.map((h, i) => {
              const HIcon = h.icon;
              return (
                <div key={i} className={styles.highlightItem}>
                  <div className={styles.highlightIconWrapper}>
                    <HIcon size={18} className={styles.highlightIcon} />
                  </div>
                  <div className={styles.highlightContent}>
                    <h4 className={styles.highlightTitle}>{h.title}</h4>
                    <p className={styles.highlightDesc}>{h.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.actionRow}>
            <Link href={item.link} className={styles.primaryBtn}>
              <span>{item.linkText}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function SolutionsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>
            <Sparkles size={14} className={styles.badgeIcon} />
            Our Solutions
          </span>
          <h2 className={styles.mainTitle}>
            Everything Your Business Needs to{" "}
            <span className={styles.gradientText}>Grow Digitally</span>
          </h2>
          <p className={styles.subtitle}>
            Explore our comprehensive suite of fintech products, AI-powered
            solutions, and digital services designed to help businesses scale
            seamlessly.
          </p>
        </motion.div>

        {/* Solutions Rows with Stacking Cards */}
        <div className={styles.solutionsList}>
          {solutions.map((item, index) => (
            <StackedCard
              key={item.id}
              item={item}
              index={index}
              total={solutions.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

