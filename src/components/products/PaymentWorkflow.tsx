"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./PaymentWorkflow.module.css";
import { ShieldCheck, Cpu, Landmark, CheckCircle2, ChevronRight } from "lucide-react";

const workflowSteps = [
  {
    id: "step-1",
    title: "1. Checkout & Tokenization",
    description: "User initiates payment on the merchant platform. Sensitive card or bank data is securely captured and tokenized instantly to ensure zero data leaks.",
    image: "/illustrations/checkout-and-tokenization.png",
    icon: ShieldCheck,
  },
  {
    id: "step-2",
    title: "2. API Verification & Fraud Check",
    description: "Our payment API receives the tokenized payload, validating the request while AI algorithms monitor in real-time for suspicious activity or anomalies.",
    image: "/illustrations/api-verification-fraud-check.png",
    icon: Cpu,
  },
  {
    id: "step-3",
    title: "3. Gateway Smart Routing",
    description: "The transaction is dynamically routed to the most optimal acquiring processor based on real-time success rates, currency, and network traffic.",
    image: "/illustrations/gateway.png",
    icon: ChevronRight,
  },
  {
    id: "step-4",
    title: "4. Bank Authorization",
    description: "The acquiring and issuing banks securely communicate via card networks to authorize the transaction, ensuring sufficient funds and valid credentials.",
    image: "/illustrations/bank-authorization.png",
    icon: Landmark,
  },
  {
    id: "step-5",
    title: "5. Settlement & Reporting",
    description: "Upon approval, funds are cleared into the merchant's ledger. The dashboard updates immediately with real-time settlement reporting.",
    image: "/illustrations/settlement-reporting.png",
    icon: CheckCircle2,
  },
];

const CurvedArrow = ({ direction }: { direction: "left-to-right" | "right-to-left" }) => {
  const desktopPath = direction === 'left-to-right' ? "M 25 0 C 25 50, 75 50, 75 100" : "M 75 0 C 75 50, 25 50, 25 100";
  const mobilePath = "M 50 0 C 80 33, 20 66, 50 100"; // Perfect vertical squiggly line for mobile

  return (
    <div className={styles.arrowContainer}>
      {/* Desktop Arrow */}
      <svg className={styles.desktopArrow} width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id={`grad-${direction}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(16, 185, 129, 0.2)" />
            <stop offset="50%" stopColor="rgba(16, 185, 129, 1)" />
            <stop offset="100%" stopColor="rgba(16, 185, 129, 0.2)" />
          </linearGradient>
        </defs>
        <path d={desktopPath} stroke="rgba(16, 185, 129, 0.15)" strokeWidth="4" fill="none" vectorEffect="non-scaling-stroke" />
        <motion.path 
          d={desktopPath}
          stroke={`url(#grad-${direction})`}
          strokeWidth="4" 
          fill="none" 
          vectorEffect="non-scaling-stroke"
          strokeDasharray="15 15"
          animate={{ strokeDashoffset: [30, 0] }}
          transition={{ duration: 1, ease: "linear", repeat: Infinity }}
        />
      </svg>
      
      {/* Mobile Arrow */}
      <svg className={styles.mobileArrow} width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id={`grad-mob-${direction}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(16, 185, 129, 0.2)" />
            <stop offset="50%" stopColor="rgba(16, 185, 129, 1)" />
            <stop offset="100%" stopColor="rgba(16, 185, 129, 0.2)" />
          </linearGradient>
        </defs>
        <path d={mobilePath} stroke="rgba(16, 185, 129, 0.15)" strokeWidth="4" fill="none" vectorEffect="non-scaling-stroke" />
        <motion.path 
          d={mobilePath}
          stroke={`url(#grad-mob-${direction})`}
          strokeWidth="4" 
          fill="none" 
          vectorEffect="non-scaling-stroke"
          strokeDasharray="15 15"
          animate={{ strokeDashoffset: [30, 0] }}
          transition={{ duration: 1, ease: "linear", repeat: Infinity }}
        />
      </svg>
    </div>
  );
};

export default function PaymentWorkflow() {
  return (
    <section className={styles.workflowSection}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Complete Payment Infrastructure <span style={{ whiteSpace: "nowrap" }}>Under One Platform</span></h2>
          <p>Watch how our APIs securely process a transaction from checkout to settlement in milliseconds.</p>
        </motion.div>

        <div className={styles.pipeline}>
          {workflowSteps.map((step, index) => {
            const isEven = index % 2 === 0;
            const Icon = step.icon;
            
            return (
              <div key={step.id} className={styles.stepGroup}>
                <div className={`${styles.stepRow} ${isEven ? styles.rowNormal : styles.rowReverse}`}>
                  
                  <motion.div 
                    className={styles.imageCol}
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className={styles.imageBox}>
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </motion.div>

                  <motion.div 
                    className={styles.textCol}
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className={styles.stepHeader}>
                      <div className={styles.stepIcon}>
                        <Icon size={24} />
                      </div>
                      <h3>{step.title}</h3>
                    </div>
                    <p>{step.description}</p>
                  </motion.div>
                </div>

                {/* Draw arrow between steps on desktop */}
                {index < workflowSteps.length - 1 && (
                  <CurvedArrow direction={isEven ? "left-to-right" : "right-to-left"} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
