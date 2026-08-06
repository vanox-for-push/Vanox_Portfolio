"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './ChatbotWorkflowNodes.module.css';

const process = [
  { step: "01", title: "Data Discovery & Strategy", description: "We identify your core business goals, map out the primary chatbot use-cases, and structure the underlying knowledge base." },
  { step: "02", title: "Conversation Design", description: "Our UX team creates fluid conversation flows, AI fallback loops, and visual mockups of the chat interface." },
  { step: "03", title: "AI Model Development", description: "We implement advanced NLP models, integrate necessary enterprise APIs, and build your custom admin features." },
  { step: "04", title: "Testing & Refinement", description: "Rigorous sandbox testing to validate response accuracy, latency, and overall user experience before go-live." },
  { step: "05", title: "Deployment & Scaling", description: "Launch the AI admin panel into your production environment and monitor live chat interactions with real-time analytics." },
];

export default function ChatbotWorkflowNodes() {
  const [openStep, setOpenStep] = useState<number | null>(0); // Step 0 open by default

  const nodes = [
    { top: "10%", left: "5%" },    // 01: Top Left
    { top: "30%", left: "55%" },   // 02: Middle Right
    { top: "50%", left: "10%" },   // 03: Center Left
    { top: "70%", left: "50%" },   // 04: Bottom Right
    { top: "85%", left: "20%" }    // 05: Bottom Center
  ];

  const pathD = `
    M 18 19 
    C 40 19, 68 25, 68 39
    C 68 50, 23 45, 23 59
    C 23 70, 63 65, 63 79
    C 63 90, 33 85, 33 95
  `;

  return (
    <div className={styles.container}>
      {/* Background Flow Line */}
      <svg className={styles.svgCanvas} viewBox="0 0 100 100" preserveAspectRatio="none">
        <path className={styles.flowPath} d={pathD} />
      </svg>

      {/* Workflow Nodes */}
      {process.map((p, index) => {
        const pos = nodes[index];
        const isOpen = openStep === index;
        return (
          <motion.div 
            key={index}
            className={`${styles.node} ${isOpen ? styles.nodeOpen : ''}`}
            style={{ top: pos.top, left: pos.left }}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
          >
            <div 
              className={styles.nodeHeader}
              onClick={() => setOpenStep(isOpen ? null : index)}
            >
              <div className={styles.stepNumber}>{p.step}</div>
              <h3 className={styles.title}>{p.title}</h3>
              <ChevronDown 
                size={18} 
                className={`${styles.chevron} ${isOpen ? styles.chevronRotated : ''}`} 
              />
            </div>
            <div className={`${styles.bodyWrapper} ${isOpen ? styles.bodyOpen : ''}`}>
              <p className={styles.description}>{p.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
