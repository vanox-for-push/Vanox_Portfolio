"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CTA from "@/components/home/CTA";
import B2bTenantShowcase from "@/components/products/B2bTenantShowcase";
import B2bNetworkAnimation from "@/components/products/B2bNetworkAnimation";
import { 
  Building2, 
  Users, 
  ShieldCheck, 
  CreditCard, 
  PieChart, 
  Webhook, 
  Settings,
  TrendingUp,
  Globe2,
  Lock,
  ChevronDown,
  Activity,
  CheckCircle2,
  Terminal,
  Check,
  AlertTriangle,
  LineChart,
  Landmark,
  Shield,
  Network,
  Wallet,
  ShoppingCart
} from "lucide-react";
import "./b2b.css";

const solutions = [
  {
    title: "Partner Management",
    description: "Manage distributors, resellers, and business partners from a centralized platform with unified controls.",
    icon: <Users size={24} />,
    colSpan: "col-span-2", // Large card in Bento
    tags: ["Hierarchical Networks", "Agent Performance", "Access Controls"]
  },
  {
    title: "Multi-Tenant Platform",
    description: "Operate multiple independent business accounts under one secure infrastructure.",
    icon: <Building2 size={24} />,
    tags: ["Tenant Isolation", "White-labeling", "Global Policies"]
  },
  {
    title: "Merchant Lifecycle",
    description: "Automate onboarding, verification, approvals, and merchant management workflows.",
    icon: <ShieldCheck size={24} />,
    tags: ["Onboarding API", "eKYC Checks", "Auto Approvals"]
  },
  {
    title: "Commission Management",
    description: "Configure partner commissions, revenue sharing, and automated settlement rules.",
    icon: <CreditCard size={24} />,
    tags: ["Dynamic Tiers", "Fee Splitting", "Auto Settlements"]
  },
  {
    title: "Centralized Dashboard",
    description: "Track business performance, partners, merchants, and financial operations seamlessly.",
    icon: <PieChart size={24} />,
    colSpan: "col-span-2",
    tags: ["Unified Tracking", "Audit Logs", "Analytics Feed"]
  },
  {
    title: "Enterprise APIs",
    description: "Integrate business systems, ERP platforms, banking services, and third-party apps.",
    icon: <Webhook size={24} />,
    tags: ["Webhook Services", "REST SDKs", "Sandbox Testing"]
  },
];

const partners = [
  "Banks",
  "NBFCs",
  "Payment Aggregators",
  "Distributors",
  "Business Partners",
  "Large Enterprises",
  "Financial Institutions",
  "Channel Partners",
  "FinTech Hubs",
  "SaaS Providers"
];

const features = [
  { text: "Multi-Level User Management", icon: <Settings size={18} /> },
  { text: "Role-Based Access Control", icon: <Lock size={18} /> },
  { text: "Merchant Onboarding", icon: <Users size={18} /> },
  { text: "Partner Commission Management", icon: <TrendingUp size={18} /> },
  { text: "Analytics Dashboard", icon: <PieChart size={18} /> },
  { text: "Transaction Monitoring", icon: <CreditCard size={18} /> },
  { text: "Settlement Management", icon: <ShieldCheck size={18} /> },
  { text: "Enterprise API Integration", icon: <Webhook size={18} /> },
];

const reasons = [
  {
    title: "Enterprise Architecture",
    description: "Designed for large-scale ecosystems with 99.99% uptime.",
    icon: <Building2 size={18} />
  },
  {
    title: "Operational Efficiency",
    description: "Automate workflows and reduce manual effort effortlessly.",
    icon: <TrendingUp size={18} />
  },
  {
    title: "Business Scalability",
    description: "Expand networks without overloading infrastructure.",
    icon: <Globe2 size={18} />
  },
  {
    title: "Centralized Control",
    description: "Manage operations and compliance from a unified platform.",
    icon: <Settings size={18} />
  },
];

const industries = [
  { name: "Financial Services", icon: <LineChart size={24} /> },
  { name: "Banking", icon: <Landmark size={24} /> },
  { name: "FinTech", icon: <CreditCard size={24} /> },
  { name: "Insurance", icon: <Shield size={24} /> },
  { name: "Distribution Networks", icon: <Network size={24} /> },
  { name: "Enterprise Solutions", icon: <Building2 size={24} /> },
  { name: "Payment Providers", icon: <Wallet size={24} /> },
  { name: "Digital Commerce", icon: <ShoppingCart size={24} /> },
];

const faqs = [
  {
    question: "What is a B2B White Label platform?",
    answer: "It enables organizations to provide branded financial services to multiple partners, merchants, or clients through a centralized infrastructure.",
  },
  {
    question: "Can I manage multiple partners?",
    answer: "Yes. The platform supports centralized management of distributors, resellers, partners, and merchants.",
  },
  {
    question: "Does the platform support role-based access?",
    answer: "Yes. Different user roles and permissions can be configured for secure operational management.",
  },
  {
    question: "Can commissions be managed automatically?",
    answer: "Yes. Commission structures and revenue-sharing models can be configured based on business requirements.",
  },
  {
    question: "Is the platform suitable for enterprise businesses?",
    answer: "Yes. It is designed to support high-volume business operations and large partner ecosystems.",
  },
];

const B2BFAQ = ({ faqs }: { faqs: { question: string; answer: string }[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index}
            style={{ 
              background: isOpen ? 'rgba(30, 41, 59, 0.8)' : 'rgba(30, 41, 59, 0.4)',
              border: '1px solid',
              borderColor: isOpen ? 'rgba(74, 222, 128, 0.3)' : 'rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
          >
            <button 
              onClick={() => setOpenIndex(isOpen ? null : index)}
              style={{
                width: '100%',
                padding: '24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'transparent',
                border: 'none',
                color: '#FFFFFF',
                fontSize: '18px',
                fontWeight: 600,
                textAlign: 'left',
                cursor: 'pointer'
              }}
            >
              {faq.question}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: isOpen ? 'rgba(74, 222, 128, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                color: isOpen ? '#4ADE80' : '#94A3B8',
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'all 0.3s ease'
              }}>
                <ChevronDown size={18} />
              </div>
            </button>
            <motion.div
              initial={false}
              animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ padding: '0 24px 24px', color: '#94A3B8', fontSize: '16px', lineHeight: 1.6 }}>
                {faq.answer}
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export default function B2BWhiteLabelSolutionsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedTenant, setSelectedTenant] = useState("tenantA");
  const [commissionAmount, setCommissionAmount] = useState(100);
  const [apiLanguage, setApiLanguage] = useState<"nodejs" | "python" | "curl">("nodejs");


  const renderShowcaseContent = () => {
    switch (activeTab) {
      case 0: // Partner Management
        return (
          <div className="showcase-partner">
            <div className="partner-tree">
              <div className="tree-node parent">
                <Users size={16} />
                <span>Enterprise Root Hub</span>
              </div>
              <div className="tree-connectors">
                <div className="connector-dot"></div>
                <div className="connector-dot"></div>
              </div>
              <div className="tree-children">
                <div className="tree-node child">
                  <Building2 size={14} />
                  <span>Distributor Portal</span>
                </div>
                <div className="tree-node child">
                  <Building2 size={14} />
                  <span>Reseller Network</span>
                </div>
              </div>
            </div>
            <div className="partner-stats">
              <div className="stat-card">
                <span className="stat-label">
                  <Users size={12} style={{ marginRight: "4px", display: "inline-block", verticalAlign: "middle" }} />
                  Sub-partners
                </span>
                <span className="stat-value">1,482 Active</span>
              </div>
              <div className="stat-card">
                <span className="stat-label">
                  <TrendingUp size={12} style={{ marginRight: "4px", display: "inline-block", verticalAlign: "middle" }} />
                  Network Vol.
                </span>
                <span className="stat-value">$4.2M / mo</span>
              </div>
            </div>
          </div>
        );

      case 1: // Multi-Tenant Platform
        const tenantBranding = {
          tenantA: { name: "wanape", color: "#3b82f6", logo: "⚡" },
          tenantB: { name: "Nova FinTech", color: "#ec4899", logo: "✨" },
          tenantC: { name: "Vortex Inc", color: "#10b981", logo: "🌀" }
        };
        const currentTenant = tenantBranding[selectedTenant as keyof typeof tenantBranding];

        return (
          <div className="showcase-tenant">
            <div className="tenant-selector-bar">
              <button 
                type="button"
                className={`tenant-select-btn ${selectedTenant === "tenantA" ? "active" : ""}`}
                onClick={() => setSelectedTenant("tenantA")}
              >
                wanape
              </button>
              <button 
                type="button"
                className={`tenant-select-btn ${selectedTenant === "tenantB" ? "active" : ""}`}
                onClick={() => setSelectedTenant("tenantB")}
              >
                Nova FinTech
              </button>
              <button 
                type="button"
                className={`tenant-select-btn ${selectedTenant === "tenantC" ? "active" : ""}`}
                onClick={() => setSelectedTenant("tenantC")}
              >
                Vortex Inc
              </button>
            </div>
            
            <div className="tenant-dashboard-mockup" style={{ border: `1px solid ${currentTenant.color}33` }}>
              <div className="mockup-header" style={{ background: `${currentTenant.color}11` }}>
                <span className="mockup-logo" style={{ color: currentTenant.color }}>{currentTenant.logo}</span>
                <span className="mockup-title" style={{ color: currentTenant.color }}>{currentTenant.name}</span>
                <span className="mockup-badge" style={{ backgroundColor: `${currentTenant.color}22`, color: currentTenant.color }}>Active Tenant</span>
              </div>
              <div className="mockup-body">
                <div className="mockup-stat-row">
                  <div className="mockup-stat-item">
                    <span className="stat-title">
                      <Users size={12} style={{ marginRight: "4px", display: "inline-block", verticalAlign: "middle" }} />
                      Sub-Merchants
                    </span>
                    <strong className="stat-num">{selectedTenant === "tenantA" ? "342" : selectedTenant === "tenantB" ? "128" : "94"}</strong>
                  </div>
                  <div className="mockup-stat-item">
                    <span className="stat-title">
                      <Settings size={12} style={{ marginRight: "4px", display: "inline-block", verticalAlign: "middle" }} />
                      Theme Accent
                    </span>
                    <span className="color-indicator" style={{ backgroundColor: currentTenant.color }}></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 2: // Merchant Lifecycle
        return (
          <div className="showcase-lifecycle">
            <div className="lifecycle-timeline">
              <div className="timeline-step done">
                <div className="step-circle">
                  <Check size={14} />
                </div>
                <span className="step-text">Onboarding</span>
              </div>
              <div className="timeline-step done">
                <div className="step-circle">
                  <Check size={14} />
                </div>
                <span className="step-text">eKYC Check</span>
              </div>
              <div className="timeline-step active">
                <div className="step-circle">3</div>
                <span className="step-text">Risk Audit</span>
              </div>
              <div className="timeline-step pending">
                <div className="step-circle">4</div>
                <span className="step-text">Live Status</span>
              </div>
            </div>
            <div className="lifecycle-details">
              <div className="risk-header">
                <span className="risk-title">
                  <ShieldCheck size={14} style={{ marginRight: "6px", display: "inline-block", verticalAlign: "middle" }} />
                  System Risk Assessment
                </span>
                <span className="risk-badge warning">Medium Risk</span>
              </div>
              <div className="risk-log">
                <div className="log-row">
                  <span>Document Match:</span>
                  <span className="status-ok">
                    <Check size={12} style={{ display: "inline-block", verticalAlign: "middle", marginRight: "4px" }} />
                    98% Match
                  </span>
                </div>
                <div className="log-row">
                  <span>AML Watchlist:</span>
                  <span className="status-ok">
                    <Check size={12} style={{ display: "inline-block", verticalAlign: "middle", marginRight: "4px" }} />
                    Cleared
                  </span>
                </div>
                <div className="log-row">
                  <span>Business License:</span>
                  <span className="status-warn">
                    <AlertTriangle size={12} style={{ display: "inline-block", verticalAlign: "middle", marginRight: "4px" }} />
                    Pending Manual Audit
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      case 3: // Commission Management
        const splits = {
          platform: (commissionAmount * 0.02).toFixed(2),
          reseller: (commissionAmount * 0.03).toFixed(2),
          merchant: (commissionAmount * 0.95).toFixed(2)
        };
        return (
          <div className="showcase-commission">
            <div className="calc-input">
              <div className="calc-label-row">
                <span>
                  <CreditCard size={14} style={{ marginRight: "6px", display: "inline-block", verticalAlign: "middle" }} />
                  Transaction Value
                </span>
                <strong className="calc-value">${commissionAmount}</strong>
              </div>
              <input 
                type="range" 
                min="10" 
                max="1000" 
                step="10"
                value={commissionAmount} 
                onChange={(e) => setCommissionAmount(Number(e.target.value))} 
                className="commission-slider"
              />
            </div>
            
            <div className="split-results">
              <div className="split-row">
                <div className="split-info">
                  <span className="split-dot platform"></span>
                  <Building2 size={12} style={{ color: "#EF4444", marginRight: "4px" }} />
                  <span className="split-label">Platform Fee (2%)</span>
                </div>
                <strong className="split-value">${splits.platform}</strong>
              </div>
              <div className="split-row">
                <div className="split-info">
                  <span className="split-dot reseller"></span>
                  <Users size={12} style={{ color: "#A855F7", marginRight: "4px" }} />
                  <span className="split-label">Partner Revenue (3%)</span>
                </div>
                <strong className="split-value">${splits.reseller}</strong>
              </div>
              <div className="split-row total">
                <div className="split-info">
                  <span className="split-dot merchant"></span>
                  <CreditCard size={12} style={{ color: "#3B82F6", marginRight: "4px" }} />
                  <span className="split-label">Merchant Settlement (95%)</span>
                </div>
                <strong className="split-value">${splits.merchant}</strong>
              </div>
            </div>
          </div>
        );

      case 4: // Centralized Dashboard
        return (
          <div className="showcase-dashboard">
            <div className="dashboard-grid">
              <div className="db-card">
                <span className="db-label">
                  <TrendingUp size={12} style={{ marginRight: "4px", display: "inline-block", verticalAlign: "middle" }} />
                  Network Net Volume
                </span>
                <strong className="db-value">$124.8K</strong>
                <span className="trend positive">+14.2% this week</span>
              </div>
              <div className="db-card">
                <span className="db-label">
                  <Users size={12} style={{ marginRight: "4px", display: "inline-block", verticalAlign: "middle" }} />
                  Active Merchant Accounts
                </span>
                <strong className="db-value">3,410</strong>
                <span className="trend positive">+8.4% monthly</span>
              </div>
            </div>
            <div className="db-graph">
              <svg viewBox="0 0 300 80" className="mini-chart">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4ADE80" stopOpacity="0.15"/>
                    <stop offset="100%" stopColor="#4ADE80" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path 
                  d="M0,60 Q30,20 60,40 T120,10 T180,30 T240,5 T300,20 L300,80 L0,80 Z" 
                  fill="url(#chartGrad)"
                />
                <path 
                  d="M0,60 Q30,20 60,40 T120,10 T180,30 T240,5 T300,20" 
                  fill="none" 
                  stroke="#4ADE80" 
                  strokeWidth="2"
                />
                <circle cx="120" cy="10" r="3" fill="#4ADE80" />
                <circle cx="240" cy="5" r="3" fill="#4ADE80" />
              </svg>
            </div>
          </div>
        );

      case 5: // Enterprise APIs
        const codeSnippets = {
          nodejs: `const vanox = require('vanox-node')('sk_live_...');

const merchant = await vanox.merchants.create({
  business_name: "wanape",
  email: "billing@wanape.com",
  kyc_document_id: "doc_9281a",
  payout_bank_account: "bank_810f2"
});`,
          python: `import vanox
vanox.api_key = "sk_live_..."

merchant = vanox.Merchants.create(
    business_name="wanape",
    email="billing@wanape.com",
    kyc_document_id="doc_9281a",
    payout_bank_account="bank_810f2"
)`,
          curl: `curl -X POST https://api.vanox.com/v1/merchants \\
  -u sk_live_...: \\
  -d business_name="wanape" \\
  -d email="billing@wanape.com"`
        };

        return (
          <div className="showcase-api">
            <div className="api-tabs">
              <button 
                type="button"
                className={`api-tab-btn ${apiLanguage === "nodejs" ? "active" : ""}`} 
                onClick={() => setApiLanguage("nodejs")}
              >
                <Terminal size={12} style={{ marginRight: "4px", display: "inline-block", verticalAlign: "middle" }} />
                Node.js
              </button>
              <button 
                type="button"
                className={`api-tab-btn ${apiLanguage === "python" ? "active" : ""}`} 
                onClick={() => setApiLanguage("python")}
              >
                <Terminal size={12} style={{ marginRight: "4px", display: "inline-block", verticalAlign: "middle" }} />
                Python
              </button>
              <button 
                type="button"
                className={`api-tab-btn ${apiLanguage === "curl" ? "active" : ""}`} 
                onClick={() => setApiLanguage("curl")}
              >
                <Terminal size={12} style={{ marginRight: "4px", display: "inline-block", verticalAlign: "middle" }} />
                cURL
              </button>
            </div>
            
            <pre className="code-block">
              <code>{codeSnippets[apiLanguage]}</code>
            </pre>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <main className="b2b-page">
      {/* 1. Hero Section */}
      <section className="b2b-hero">
        <div className="b2b-hero-blob b2b-hero-blob-1" />
        <div className="b2b-hero-blob b2b-hero-blob-2" />
        <div className="container b2b-hero-container">
          <motion.div 
            className="b2b-hero-content"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.span 
              className="b2b-hero-badge"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            >
              <ShieldCheck size={16} />
              Enterprise B2B Solutions
            </motion.span>
            
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            >
              Enterprise <span className="animatedHighlight">White Label Solutions</span> for Large Networks
            </motion.h1>
            
            <motion.p 
              className="b2b-hero-description"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            >
              Vanox Dynamics enables enterprises, aggregators, financial institutions, and distribution networks to launch and manage large-scale white label ecosystems from a single, secure infrastructure.
            </motion.p>
            
            <motion.div 
              className="b2b-hero-actions flex flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            >
              <Link href="/contact" className="b2b-btn-primary" style={{ padding: '12px 20px', fontSize: '14px', flex: 1, textAlign: 'center' }}>
                Partner With Us
              </Link>
              <Link href="/contact" className="b2b-btn-secondary" style={{ padding: '12px 20px', fontSize: '14px', flex: 1, textAlign: 'center' }}>
                Schedule Demo
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="b2b-hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotateY: 0,
              y: [0, -15, 0]
            }}
            transition={{ 
              opacity: { duration: 1, delay: 0.2 },
              scale: { duration: 1, delay: 0.2 },
              rotateY: { duration: 1, delay: 0.2 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
            }}
          >
            <div className="b2b-hero-image-container">
              <div className="b2b-hero-image-glow" />
              <Image 
                src="/images/b2b_hero_new2.jpg" 
                alt="Enterprise B2B Network Dashboard" 
                width={600} 
                height={400} 
                className="b2b-hero-img"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="b2b-section b2b-overview">
        <div className="container">
          <motion.div 
            className="b2b-overview-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div className="b2b-overview-content" variants={itemVariants}>
              <span className="b2b-tagline">Scalable Architecture</span>
              <h2>Built for Enterprise Growth</h2>
              <p className="b2b-overview-desc">
                Our B2B White Label platform is specifically engineered for organizations managing massive, complex ecosystems. Scale effortlessly while maintaining total control.
              </p>
              
              <div className="b2b-feature-list">
                <motion.div className="b2b-feature-item" variants={itemVariants}>
                  <div className="b2b-feature-icon"><Building2 size={20} /></div>
                  <div className="b2b-feature-text">
                    <h4>Multi-Tenant Ecosystem</h4>
                    <p>Manage diverse partners, franchises, and clients on a single unified instance.</p>
                  </div>
                </motion.div>
                
                <motion.div className="b2b-feature-item" variants={itemVariants}>
                  <div className="b2b-feature-icon"><Lock size={20} /></div>
                  <div className="b2b-feature-text">
                    <h4>Granular Access Control</h4>
                    <p>Assign highly specific role-based permissions to ensure compliance and security.</p>
                  </div>
                </motion.div>
                
                <motion.div className="b2b-feature-item" variants={itemVariants}>
                  <div className="b2b-feature-icon"><Activity size={20} /></div>
                  <div className="b2b-feature-text">
                    <h4>Real-time Network Visibility</h4>
                    <p>Track metrics, settlements, and activity across every tier of your distribution network.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="b2b-overview-image-wrapper" 
              variants={itemVariants}
            >
              <div className="b2b-overview-image-glow" />
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image 
                  src="/images/hijak.png" 
                  alt="Multi-Tenant Network Architecture" 
                  width={600} 
                  height={400} 
                  className="b2b-overview-img"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2.5 Live SaaS Tenant Portal Playground */}
      <section style={{ background: '#0F172A' }}>
         <B2bTenantShowcase />
      </section>

      {/* 3. Interactive Solutions Portal */}
      <section className="b2b-section b2b-section-interactive">
        <div className="container relative z-10">
          <div className="b2b-section-header">
            <span>Enterprise Capabilities</span>
            <h2>Scalable Platform Solutions</h2>
            <p>Everything you need to operate a complex, multi-tiered business ecosystem under your own brand.</p>
          </div>

          <div className="b2b-interactive-portal">
            {/* Left Side: Navigation Tabs */}
            <div className="b2b-portal-tabs">
              {solutions.map((solution, index) => (
                <button
                  key={index}
                  type="button"
                  className={`b2b-portal-tab ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className="b2b-portal-tab-icon">
                    {solution.icon}
                  </div>
                  <div className="b2b-portal-tab-text">
                    <h3>{solution.title}</h3>
                    <p>{solution.description}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Side: Interactive Live Showcase Panel */}
            <div className="b2b-portal-showcase">
              <div className="b2b-showcase-window">
                <div className="b2b-showcase-header">
                  <div className="b2b-window-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <div className="b2b-window-title">
                    {solutions[activeTab].title} Preview
                  </div>
                  <span className="b2b-window-status">
                    <span className="pulse-dot"></span> Live Sandbox
                  </span>
                </div>

                <div className="b2b-showcase-body">
                  {renderShowcaseContent()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Partner Ecosystem (Animated Network) */}
      {/* <section className="b2b-section hide-on-mobile" style={{ background: 'rgba(15, 23, 42, 0.5)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="b2b-section-header" style={{ marginBottom: '0px', textAlign: 'center' }}>
          <span>Partner Ecosystem</span>
          <h2>Built for Complex Networks</h2>
        </div>

        <B2bNetworkAnimation />
      </section> */}



      {/* 6. Why Vanox */}
      <section className="b2b-section" style={{ background: 'radial-gradient(ellipse at bottom, rgba(30, 41, 59, 1) 0%, rgba(11, 15, 25, 1) 100%)' }}>
        <div className="container">
          <div className="b2b-section-header" style={{ marginBottom: '32px' }}>
            <span>Why Vanox</span>
            <h2>Why Choose Vanox B2B Solutions</h2>
          </div>

          <motion.div 
            className="b2b-compact-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {reasons.map((reason, index) => (
              <motion.div key={index} className="b2b-compact-card" variants={itemVariants}>
                <div className="b2b-compact-card-header">
                  <div className="b2b-compact-icon">
                    {reason.icon}
                  </div>
                  <h3>{reason.title}</h3>
                </div>
                <p>{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. Industries */}
      <section className="b2b-section">
        <div className="container">
          <div className="b2b-section-header">
            <span>Industries</span>
            <h2>Supporting Diverse Ecosystems</h2>
          </div>

          <div className="b2b-marquee-container">
            <div className="b2b-marquee-track">
              {/* Render industries twice for seamless infinite scrolling */}
              {[...industries, ...industries].map((industry, index) => (
                <div key={index} className="b2b-marquee-item">
                  <div className="b2b-marquee-icon">
                    {industry.icon}
                  </div>
                  <span className="b2b-marquee-text">{industry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="b2b-section" style={{ background: 'rgba(15, 23, 42, 0.4)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="b2b-section-header" style={{ marginBottom: '40px' }}>
            <span>FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <B2BFAQ faqs={faqs} />
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <div className="b2b-cta-wrapper">
        <CTA 
          badge="Enterprise B2B Solutions"
          heading="Build Your Enterprise Partner Network with Vanox"
          description="Launch, manage, and scale your B2B ecosystem with secure, enterprise-grade white label solutions built for long-term business growth."
          primaryBtnText="Become a Partner"
          secondaryBtnText="Contact Sales"
          secondaryBtnHref="/contact"
        />
      </div>

      <style jsx global>{`
        /* Overrides for common components on this dark page */
        .b2b-cta-wrapper .cta-section {
           background-color: transparent !important;
           border: none !important;
        }
      `}</style>
    </main>
  );
}
