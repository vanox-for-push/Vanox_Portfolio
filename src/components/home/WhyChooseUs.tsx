"use client";

import { useEffect, useRef } from "react";
import { motion, animate, useInView } from "framer-motion";
import {
  Shield,
  Brain,
  Rocket,
  Wrench,
  Timer,
  Headphones,
  Activity,
  Lock,
  Globe2,
} from "lucide-react";
import styles from "./WhyChooseUs.module.css";

const features = [
  {
    icon: Shield,
    title: "Secure Architecture",
    description: "Built with standard security protocols and reliable software architecture.",
  },
  {
    icon: Brain,
    title: "Smart Automation",
    description: "Automate repetitive tasks and integrate practical AI tools into business workflows.",
  },
  {
    icon: Rocket,
    title: "Scalable Design",
    description: "Solutions built to support growing user bases and expanding functional needs.",
  },
  {
    icon: Wrench,
    title: "Custom Development",
    description: "Tailored web, mobile, and backend software built for your specific requirements.",
  },
  {
    icon: Timer,
    title: "Structured Delivery",
    description: "Clear development milestones and structured processes to complete project phases efficiently.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "Assistance during project development and post-launch maintenance.",
  },
];

const trustMetrics = [
  {
    icon: Activity,
    value: "High",
    label: "System Reliability",
  },
  {
    icon: Lock,
    value: "Secure",
    label: "Data Best Practices",
  },
  {
    icon: Headphones,
    value: "Dedicated",
    label: "Client Support",
  },
];

function LiveCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const node = ref.current;
    
    // Animate percentage strings if passed
    const pctMatch = value.match(/^([\d.]+)(%.*)?$/);
    if (pctMatch) {
      const target = parseFloat(pctMatch[1]);
      const suffix = pctMatch[2] || "%";
      const decimals = (pctMatch[1].split(".")[1] || "").length;

      const controls = animate(0, target, {
        duration: 1.8,
        ease: "easeOut",
        onUpdate(val) {
          node.textContent = val.toFixed(decimals) + suffix;
        }
      });
      return () => controls.stop();
    }
  }, [value, isInView]);

  return <span ref={ref}>{value}</span>;
}

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.splitLayout}>
          
          {/* Left Column: Trust Narrative */}
          <div className={styles.trustColumn}>
            <div className={styles.stickyContent}>
              <motion.div
                className={styles.headerText}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
              >
                <span className={styles.label}>Why Choose Vanox</span>
                <h2>Technology Partner for Growing Businesses</h2>
                <p className={styles.headerDesc}>
                  We provide custom software engineering, digital solutions, and technology services to help businesses streamline operations and build reliable products.
                </p>
              </motion.div>

              <div className={styles.metricsGrid}>
                {trustMetrics.map((metric, i) => (
                  <motion.div 
                    key={metric.label}
                    className={styles.metricCard}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <div className={styles.metricIconBox}>
                      <metric.icon size={20} />
                    </div>
                    <div className={styles.metricData}>
                      <span className={styles.metricValue}>
                        <LiveCounter value={metric.value} />
                      </span>
                      <span className={styles.metricLabel}>{metric.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Features Grid */}
          <div className={styles.featuresColumn}>
            <div className={styles.grid}>
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  className={styles.card}
                  initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(5px)" }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ 
                    duration: 0.7, 
                    delay: i * 0.1, 
                    type: "spring",
                    bounce: 0.3
                  }}
                >
                  <div className={styles.iconBox}>
                    <feature.icon size={22} />
                  </div>
                  <div className={styles.cardText}>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
