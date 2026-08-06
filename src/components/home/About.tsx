"use client";

import { motion } from "framer-motion";
import { Users, Target, Eye } from "lucide-react";
import styles from "./About.module.css";

const bentoItems = [
  {
    id: "who-we-are",
    icon: Users,
    title: "Who We Are",
    description:
      "We are architects of the digital economy. Vanox Dynamics fuses cutting-edge technology with deep industry expertise to engineer scalable, high-performance platforms for startups, global enterprises, and financial institutions.",
    className: styles.bentoWide,
  },
  {
    id: "mission",
    icon: Target,
    title: "Our Mission",
    description:
      "To eliminate operational complexity. We deliver secure payment infrastructures and intelligent automation that empower businesses to move faster and scale without friction.",
    className: styles.bentoSquare1,
  },
  {
    id: "vision",
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the definitive technology partner for the next generation of digital enterprise—shaping a future where innovation and operational excellence are accessible to all.",
    className: styles.bentoSquare2,
  },
];

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.label}>About Vanox</span>
          <h2>Building the Future of Digital Business & Financial Technology</h2>
          <p className={styles.headerDesc}>
            Vanox Dynamics is a technology-driven company delivering secure
            fintech solutions, AI-powered automation, and custom software that
            help businesses grow.
          </p>
        </motion.div>

        <div className={styles.bentoGrid}>
          {bentoItems.map((item, i) => (
            <motion.div
              key={item.id}
              className={`${styles.bentoCard} ${item.className}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className={styles.bentoBg}></div>
              
              <div className={styles.bentoContent}>
                <div className={styles.iconBox}>
                  <item.icon size={26} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <div className={styles.watermarkIcon}>
                <item.icon size={180} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
