"use client";

import { useEffect, useRef } from "react";
import { motion, animate, useInView } from "framer-motion";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import styles from "./Hero.module.css";

const stats = [
  { value: "5+", label: "Core Services" },
  { value: "100%", label: "Custom Built" },
  { value: "Modern", label: "Technology" },
  { value: "Scalable", label: "Solutions" },
];

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const numericMatch = value.match(/^(\d+)(.*)$/);

  useEffect(() => {
    if (!numericMatch || !isInView) return;
    const target = parseInt(numericMatch[1], 10);
    const suffix = numericMatch[2];
    const node = ref.current;
    if (!node) return;

    const controls = animate(0, target, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate(val) {
        node.textContent = Math.round(val) + suffix;
      },
    });

    return () => controls.stop();
  }, [value, numericMatch, isInView]);

  if (!numericMatch) {
    return <span>{value}</span>;
  }

  return <span ref={ref}>0{numericMatch[2]}</span>;
}

const headingWords = [
  { text: "Powering", isGradient: false },
  { text: "Businesses", isGradient: false },
  { text: "with", isGradient: false },
  { text: "Payment", isGradient: true },
  { text: "Infrastructure,", isGradient: true },
  { text: "AI", isGradient: true },
  { text: "Automation", isGradient: true },
  { text: "&", isGradient: false },
  { text: "Custom", isGradient: false },
  { text: "Software", isGradient: false },
];

const descText = "Payment Gateway • White-Label Fintech • AI Automation • Custom Software Development";
const descWords = descText.split(" ");

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
    }
  }
} as const;

const descContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1.0,
      staggerChildren: 0.008,
    }
  }
} as const;

const characterVariants = {
  hidden: { opacity: 0, x: 8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
} as const;

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 2.2,
      type: "spring",
      stiffness: 140,
      damping: 12
    }
  }
} as const;

export default function Hero() {
  return (
    <section className={styles.hero}>
      <motion.div 
        className={styles.bgOrb1} 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <motion.div 
        className={styles.bgOrb2} 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
      />
      <motion.div 
        className={styles.bgGrid} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
      />

      <div className={styles.container}>
        <div className={styles.content}>
          <motion.span
            className={styles.badge}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            FinTech • AI • Digital Solutions
          </motion.span>

          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {headingWords.map((word, wordIdx) => (
              <span
                key={wordIdx}
                className={word.isGradient ? styles.gradientText : undefined}
                style={{ display: "inline-block", whiteSpace: "nowrap" }}
              >
                {Array.from(word.text).map((char, charIdx) => (
                  <motion.span
                    key={charIdx}
                    variants={characterVariants}
                    style={{ display: "inline-block" }}
                  >
                    {char}
                  </motion.span>
                ))}
                {wordIdx < headingWords.length - 1 && "\u00A0"}
              </span>
            ))}
          </motion.h1>

          <motion.p
            className={styles.description}
            variants={descContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {descWords.map((word, wordIdx) => (
              <span
                key={wordIdx}
                style={{ display: "inline-block", whiteSpace: "nowrap" }}
              >
                {Array.from(word).map((char, charIdx) => (
                  <motion.span
                    key={charIdx}
                    variants={characterVariants}
                    style={{ display: "inline-block" }}
                  >
                    {char}
                  </motion.span>
                ))}
                {wordIdx < descWords.length - 1 && "\u00A0"}
              </span>
            ))}
          </motion.p>

          <motion.div
            className={styles.buttons}
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <Link href="/products" className={styles.btnPrimary}>
              Explore Products
              <i className="fa-solid fa-chevron-right" style={{ fontSize: "15px", marginLeft: "6px" }}></i>
            </Link>
            <Link href="/contact" className={styles.btnOutline}>
              Contact Us
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
