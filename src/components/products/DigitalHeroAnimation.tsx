"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BarChart3, Smartphone, BrainCircuit } from 'lucide-react';
import styles from './DigitalHeroAnimation.module.css';

export default function DigitalHeroAnimation() {
  return (
    <div className={styles.container}>
      {/* Background Orbital Rings */}
      <svg className={styles.svgLayer} viewBox="0 0 500 500" preserveAspectRatio="xMidYMid slice">
        <circle cx="250" cy="250" r="180" className={styles.connectionLine} style={{ animationDuration: '40s' }} />
        <circle cx="250" cy="250" r="130" className={styles.connectionLine} style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
      </svg>

      {/* Central Orb */}
      <div className={styles.coreOrb}>
        <div className={styles.coreIcon}>
          <BrainCircuit size={64} strokeWidth={1.5} />
        </div>
      </div>

      {/* Code Card */}
      <motion.div 
        className={`${styles.glassCard} ${styles.cardCode}`}
        initial={{ opacity: 0, x: -30, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        drag
        dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className={styles.cardHeader}>
          <div className={`${styles.iconWrap} ${styles.iconPurple}`}><Code2 size={16} /></div>
          <span>Custom Architecture</span>
        </div>
        <div className={styles.codeSnippet} style={{ fontSize: '10px', fontFamily: 'monospace', lineHeight: '1.5', background: 'rgba(15, 23, 42, 0.03)', padding: '8px', borderRadius: '8px', marginTop: '4px' }}>
          <div><span style={{color:'#E11D48'}}>import</span> {'{'} <span style={{color:'#2563EB'}}>Core</span> {'}'} <span style={{color:'#E11D48'}}>from</span> <span style={{color:'#16A34A'}}>'@vanox'</span>;</div>
          <div style={{marginTop: '4px'}}><span style={{color:'#E11D48'}}>const</span> <span style={{color:'#2563EB'}}>app</span> = <span style={{color:'#9333EA'}}>new</span> Core();</div>
          <div><span style={{color:'#2563EB'}}>app</span>.<span style={{color:'#D97706'}}>init</span>();</div>
        </div>
      </motion.div>

      {/* Data Card */}
      <motion.div 
        className={`${styles.glassCard} ${styles.cardData}`}
        initial={{ opacity: 0, x: -30, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        drag
        dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className={styles.cardHeader}>
          <div className={`${styles.iconWrap} ${styles.iconOrange}`}><BarChart3 size={16} /></div>
          <span>Analytics</span>
        </div>
        <div className={styles.dataBars} style={{ position: 'relative' }}>
          <div className={styles.bar} style={{ height: '40%' }} />
          <div className={styles.bar} style={{ height: '70%' }} />
          <div className={`${styles.bar} ${styles.active}`} style={{ height: '100%' }} />
          <div className={styles.bar} style={{ height: '60%' }} />
          <svg style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            <path d="M 10 30 Q 50 10 90 20 T 170 5" fill="none" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </motion.div>

      {/* Mobile UI Card */}
      <motion.div 
        className={`${styles.glassCard} ${styles.cardMobile}`}
        initial={{ opacity: 0, x: 30, y: -30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        drag
        dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
        whileHover={{ scale: 1.05 }}
      >
        {/* App Header Skeleton */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', width: '100%', marginBottom: '4px' }}>
          <div className={styles.shimmer} style={{ width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0 }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', flex: 1 }}>
            <div className={styles.shimmer} style={{ width: '60%', height: '6px', borderRadius: '3px' }} />
            <div className={styles.shimmer} style={{ width: '40%', height: '4px', borderRadius: '2px' }} />
          </div>
        </div>

        {/* Live Skeleton Hero Card */}
        <div 
          className={styles.shimmer} 
          style={{ 
            width: '100%', 
            height: '65px', 
            borderRadius: '10px', 
            padding: '8px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between',
            border: '1px solid rgba(249, 115, 22, 0.2)',
            background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.08) 0%, rgba(168, 85, 247, 0.08) 100%)'
          }}
        >
          <div style={{ width: '30px', height: '6px', borderRadius: '3px', background: 'rgba(249, 115, 22, 0.4)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div className={styles.shimmer} style={{ width: '80%', height: '6px', borderRadius: '3px' }} />
            <div className={styles.shimmer} style={{ width: '55%', height: '5px', borderRadius: '2px' }} />
          </div>
        </div>

        {/* Grid Skeleton Cards */}
        <div style={{ display: 'flex', gap: '6px', width: '100%', margin: '4px 0' }}>
          <div className={styles.shimmer} style={{ flex: 1, height: '28px', borderRadius: '6px' }} />
          <div className={styles.shimmer} style={{ flex: 1, height: '28px', borderRadius: '6px' }} />
        </div>

        {/* Text Skeleton Lines */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
          <div className={styles.shimmer} style={{ width: '100%', height: '5px', borderRadius: '3px' }} />
          <div className={styles.shimmer} style={{ width: '70%', height: '5px', borderRadius: '3px' }} />
        </div>

        {/* Bottom Navigation Tabs */}
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingTop: '6px', marginTop: 'auto', borderTop: '1px solid rgba(0, 0, 0, 0.05)', width: '100%' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F97316' }} />
          <div className={styles.shimmer} style={{ width: '8px', height: '8px', borderRadius: '50%' }} />
          <div className={styles.shimmer} style={{ width: '8px', height: '8px', borderRadius: '50%' }} />
          <div className={styles.shimmer} style={{ width: '8px', height: '8px', borderRadius: '50%' }} />
        </div>
      </motion.div>

      {/* AI Card */}
      <motion.div 
        className={`${styles.glassCard} ${styles.cardAI}`}
        initial={{ opacity: 0, x: 30, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        drag
        dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className={styles.cardHeader}>
          <div className={`${styles.iconWrap} ${styles.iconBlue}`}><BrainCircuit size={16} /></div>
          <span>AI Inference</span>
        </div>
        <div style={{ fontSize: '10px', color: '#64748B', display: 'flex', justifyContent: 'space-between' }}>
          <span>Latency</span>
          <span style={{ color: '#059669', fontWeight: 'bold' }}>12ms</span>
        </div>
        <div className={styles.skeletonLine + " " + styles.wFull} style={{ background: 'rgba(16, 185, 129, 0.2)' }} />
      </motion.div>
    </div>
  );
}
