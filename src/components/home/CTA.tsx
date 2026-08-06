"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./CTA.module.css";

interface CTAProps {
  badge?: string;
  heading?: string;
  description?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
}

export default function CTA({
  badge = "Let's Build Together",
  heading = "Ready to Transform Your Business with Vanox Dynamics?",
  description = "Whether you're looking for secure payment solutions, AI-powered automation, white-label platforms, or custom software — our team is ready to help.",
  primaryBtnText = "Get Started",
  primaryBtnHref = "/contact",
  secondaryBtnText = "Explore Solutions",
  secondaryBtnHref,
}: CTAProps) {
  const resolvedSecondaryHref = secondaryBtnHref || (
    /contact|sales|speak|talk|engineer|team/i.test(secondaryBtnText) ? "/contact" : "/products"
  );
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.banner}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.inner}>
          <span className={styles.badge}>{badge}</span>
          <h2>{heading}</h2>
          <p>{description}</p>
          <div className={styles.buttons}>
            <Link href={primaryBtnHref} className={styles.btnWhite}>
              {primaryBtnText}
            </Link>
            <Link href={resolvedSecondaryHref} className={styles.btnGhost}>
              {secondaryBtnText}
              <i className="fa-solid fa-chevron-right" style={{ fontSize: "14px", marginLeft: "8px" }}></i>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
