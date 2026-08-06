"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./OrbitalFeatures.module.css";
import { Shield, Terminal, Sparkles, BarChart3, RefreshCw, Layers } from "lucide-react";

const featuresList = [
  {
    id: "security",
    icon: Shield,
    title: "Enterprise Security",
    description: "Advanced security standards, encrypted transactions, and secure infrastructure designed to protect businesses.",
  },
  {
    id: "api",
    icon: Terminal,
    title: "Fast API Integration",
    description: "Developer-friendly APIs enable quick integration with websites, apps, ERPs, and business software.",
  },
  {
    id: "methods",
    icon: Sparkles,
    title: "Multiple Methods",
    description: "Support digital payment options through UPI, cards, net banking, wallets, QR payments, and more.",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Monitor transactions, settlements, revenue, and performance through centralized dashboards.",
  },
  {
    id: "settlements",
    icon: RefreshCw,
    title: "Auto Settlements",
    description: "Reduce manual work with automated payment processing, payouts, reconciliation, and workflows.",
  },
  {
    id: "scalability",
    icon: Layers,
    title: "Scalable Core",
    description: "Built to handle growing transaction volumes while maintaining speed and business continuity.",
  },
];

export default function OrbitalFeatures() {
  const [rotationStep, setRotationStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play rotation
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setRotationStep((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const activeIndex = ((rotationStep % featuresList.length) + featuresList.length) % featuresList.length;
  const activeFeature = featuresList[activeIndex];
  const wheelRotation = -(rotationStep * 60);

  const handleNodeClick = (clickedIndex: number) => {
    const currentIndex = ((rotationStep % featuresList.length) + featuresList.length) % featuresList.length;
    let diff = clickedIndex - currentIndex;
    
    // Find shortest path to the clicked node
    if (diff > featuresList.length / 2) {
      diff -= featuresList.length;
    } else if (diff < -featuresList.length / 2) {
      diff += featuresList.length;
    }
    
    setRotationStep((prev) => prev + diff);
  };

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
          <span>Key Features</span>
          <h2>Built for Security, Performance & Growth</h2>
          <p>
            Vanox Dynamics combines secure payment technology, intelligent automation, and scalable infrastructure to deliver reliable experiences.
          </p>
        </motion.div>

        <div 
          className={styles.orbitalContainer}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Central Hub Content */}
          <div className={styles.centerHub}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                className={styles.hubContent}
                initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(4px)" }}
                transition={{ duration: 0.4 }}
              >
                <div className={styles.hubIconBox}>
                  <activeFeature.icon size={52} />
                </div>
                <h3>{activeFeature.title}</h3>
                <p>{activeFeature.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* The Rotating Wheel */}
          <motion.div 
            className={styles.wheel}
            animate={{ rotate: wheelRotation }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
          >
            {/* The circular orbit path (visual only) */}
            <div className={styles.orbitRing} />

            {/* Orbiting Nodes */}
            {featuresList.map((feature, i) => {
              const Icon = feature.icon;
              const isActive = activeIndex === i;
              
              // Base rotation places the item on the circle
              const nodeBaseRotation = i * 60;
              // Total rotation applied to this specific item node relative to the screen
              // (wheelRotation + nodeBaseRotation)
              const totalRotation = wheelRotation + nodeBaseRotation;
              // To keep icon upright, we counter-rotate it by negative total rotation
              const counterRotation = -totalRotation;

              return (
                <div 
                  key={feature.id} 
                  className={styles.nodeWrapper}
                  style={{ transform: `rotate(${nodeBaseRotation}deg)` }}
                >
                  <div className={styles.nodePositioner}>
                    <motion.button
                      className={`${styles.nodeBtn} ${isActive ? styles.nodeActive : ""}`}
                      onClick={() => handleNodeClick(i)}
                      animate={{ rotate: counterRotation }}
                      transition={{ type: "spring", stiffness: 60, damping: 15 }}
                      aria-label={`Select ${feature.title}`}
                    >
                      <Icon size={40} />
                      {/* Tooltip on hover */}
                      <span className={styles.tooltip}>{feature.title}</span>
                    </motion.button>
                  </div>
                </div>
              );
            })}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
