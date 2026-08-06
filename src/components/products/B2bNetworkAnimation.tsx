"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Landmark, 
  CreditCard, 
  ShieldCheck, 
  Store, 
  Smartphone, 
  Globe2,
  Server,
  Cloud,
  Shield,
  Database,
  BarChart,
  Activity
} from "lucide-react";
import styles from "./B2bNetworkAnimation.module.css";

// The structured nodes in our mesh
const nodes = {
  // Left side: Financial/Backend Providers
  providers: [
    { id: "bank", label: "Acquiring Banks", icon: Landmark, yPos: 20 },
    { id: "network", label: "Card Networks", icon: CreditCard, yPos: 50 },
    { id: "compliance", label: "KYC / AML", icon: ShieldCheck, yPos: 80 },
  ],
  // Center: The Core
  core: { id: "core", label: "Vanox Unified Switch", icon: Activity },
  // Right side: Endpoints/Merchants
  endpoints: [
    { id: "merchant", label: "Retail Merchants", icon: Store, yPos: 20 },
    { id: "wallet", label: "Digital Wallets", icon: Smartphone, yPos: 50 },
    { id: "global", label: "Global Partners", icon: Globe2, yPos: 80 },
  ],
  // Top/Bottom: Infrastructure & Data
  topNodes: [
    { id: "cloud", label: "Cloud Infra", icon: Cloud, xPos: 35 },
    { id: "security", label: "Fraud Engine", icon: Shield, xPos: 65 },
  ],
  bottomNodes: [
    { id: "data", label: "Data Lake", icon: Database, xPos: 35 },
    { id: "analytics", label: "Analytics API", icon: BarChart, xPos: 65 },
  ]
};

export default function B2bNetworkAnimation() {
  return (
    <div className={styles.networkWrapper}>
      <div className={styles.networkContainer}>
        
        {/* The SVG Canvas for drawing connecting lines and pulses */}
        <svg className={styles.connectionsCanvas} viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Main Hub Connections */}
          <path className={styles.linePath} d="M 15 20 L 50 50" />
          <path className={styles.linePath} d="M 15 50 L 50 50" />
          <path className={styles.linePath} d="M 15 80 L 50 50" />
          
          <path className={styles.linePath} d="M 50 50 L 85 20" />
          <path className={styles.linePath} d="M 50 50 L 85 50" />
          <path className={styles.linePath} d="M 50 50 L 85 80" />

          <path className={styles.linePath} d="M 35 15 L 50 50" />
          <path className={styles.linePath} d="M 65 15 L 50 50" />
          
          <path className={styles.linePath} d="M 35 85 L 50 50" />
          <path className={styles.linePath} d="M 65 85 L 50 50" />

          {/* Cross-Network Connections (Complexity) */}
          <path className={styles.linePath} d="M 15 20 L 35 15" strokeOpacity="0.3" />
          <path className={styles.linePath} d="M 85 20 L 65 15" strokeOpacity="0.3" />
          <path className={styles.linePath} d="M 15 80 L 35 85" strokeOpacity="0.3" />
          <path className={styles.linePath} d="M 85 80 L 65 85" strokeOpacity="0.3" />

          {/* Animated Data Packets */}
          <circle className={`${styles.dataPacket} ${styles.delay1}`} r="1" cx="0" cy="0">
            <animateMotion dur="3s" repeatCount="indefinite" path="M 15 20 L 50 50" />
          </circle>
          <circle className={`${styles.dataPacket} ${styles.delay2}`} r="1" cx="0" cy="0">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M 15 50 L 50 50" />
          </circle>
          <circle className={`${styles.dataPacket} ${styles.delay3}`} r="1" cx="0" cy="0">
            <animateMotion dur="3.5s" repeatCount="indefinite" path="M 15 80 L 50 50" />
          </circle>

          <circle className={`${styles.dataPacket} ${styles.delay4}`} r="1" cx="0" cy="0">
            <animateMotion dur="3s" repeatCount="indefinite" path="M 50 50 L 85 20" />
          </circle>
          <circle className={`${styles.dataPacket} ${styles.delay1}`} r="1" cx="0" cy="0">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M 50 50 L 85 50" />
          </circle>
          <circle className={`${styles.dataPacket} ${styles.delay2}`} r="1" cx="0" cy="0">
            <animateMotion dur="3.5s" repeatCount="indefinite" path="M 50 50 L 85 80" />
          </circle>

          {/* New Nodes Animations */}
          <circle className={`${styles.dataPacket} ${styles.delay1}`} r="1" cx="0" cy="0">
            <animateMotion dur="4s" repeatCount="indefinite" path="M 50 50 L 35 15" />
          </circle>
          <circle className={`${styles.dataPacket} ${styles.delay3}`} r="1" cx="0" cy="0">
            <animateMotion dur="3.2s" repeatCount="indefinite" path="M 65 15 L 50 50" />
          </circle>
          <circle className={`${styles.dataPacket} ${styles.delay2}`} r="1" cx="0" cy="0">
            <animateMotion dur="2.8s" repeatCount="indefinite" path="M 50 50 L 35 85" />
          </circle>
          <circle className={`${styles.dataPacket} ${styles.delay4}`} r="1" cx="0" cy="0">
            <animateMotion dur="3.6s" repeatCount="indefinite" path="M 50 50 L 65 85" />
          </circle>
          
          {/* Cross-talk packets */}
          <circle className={`${styles.dataPacket} ${styles.delay3}`} r="0.6" cx="0" cy="0" fill="#3B82F6" filter="drop-shadow(0 0 4px #3B82F6)">
            <animateMotion dur="5s" repeatCount="indefinite" path="M 15 20 L 35 15" />
          </circle>
          <circle className={`${styles.dataPacket} ${styles.delay1}`} r="0.6" cx="0" cy="0" fill="#3B82F6" filter="drop-shadow(0 0 4px #3B82F6)">
            <animateMotion dur="4.5s" repeatCount="indefinite" path="M 85 20 L 65 15" />
          </circle>
        </svg>

        {/* --- Render Nodes --- */}
        
        {/* Providers (Left) */}
        {nodes.providers.map((node, i) => {
          const Icon = node.icon;
          return (
            <div 
              key={node.id} 
              className={`${styles.node} ${styles.providerNode}`} 
              style={{ top: `${node.yPos}%`, left: '15%' }}
            >
              <div className={styles.iconBox}>
                <Icon size={20} />
              </div>
              <span className={styles.nodeLabel}>{node.label}</span>
            </div>
          );
        })}

        {/* Core (Center) */}
        <div className={`${styles.node} ${styles.coreNode}`} style={{ top: '50%', left: '50%' }}>
          <div className={styles.corePulse}></div>
          <div className={styles.coreIconBox}>
            {(() => {
              const CoreIcon = nodes.core.icon;
              return <CoreIcon size={32} />;
            })()}
          </div>
          <span className={styles.coreLabel}>{nodes.core.label}</span>
        </div>

        {/* Endpoints (Right) */}
        {nodes.endpoints.map((node, i) => {
          const Icon = node.icon;
          return (
            <div 
              key={node.id} 
              className={`${styles.node} ${styles.endpointNode}`} 
              style={{ top: `${node.yPos}%`, left: '85%' }}
            >
              <div className={styles.iconBox}>
                <Icon size={20} />
              </div>
              <span className={styles.nodeLabel}>{node.label}</span>
            </div>
          );
        })}

        {/* Infrastructure (Top) */}
        {nodes.topNodes.map((node, i) => {
          const Icon = node.icon;
          return (
            <div 
              key={node.id} 
              className={`${styles.node} ${styles.topNode}`} 
              style={{ top: '15%', left: `${node.xPos}%` }}
            >
              <div className={styles.iconBox}>
                <Icon size={18} />
              </div>
              <span className={styles.nodeLabel} style={{ fontSize: '11px' }}>{node.label}</span>
            </div>
          );
        })}

        {/* Data (Bottom) */}
        {nodes.bottomNodes.map((node, i) => {
          const Icon = node.icon;
          return (
            <div 
              key={node.id} 
              className={`${styles.node} ${styles.bottomNode}`} 
              style={{ top: '85%', left: `${node.xPos}%` }}
            >
              <div className={styles.iconBox}>
                <Icon size={18} />
              </div>
              <span className={styles.nodeLabel} style={{ fontSize: '11px' }}>{node.label}</span>
            </div>
          );
        })}

      </div>
    </div>
  );
}
