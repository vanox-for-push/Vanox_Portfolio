"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CTA from "@/components/home/CTA";
import { Bot, BarChart2, MessageSquare, Zap, ChevronDown, Sparkles } from "lucide-react";
import AdminAiShowcase from "@/components/products/AdminAiShowcase";
import ChatbotWorkflowNodes from "@/components/products/ChatbotWorkflowNodes";
import "./chatbot-admin.css";

const features = [
  { 
    title: "Chatbot Builder", 
    description: "Design conversational flows visually without writing code.",
    icon: <Bot size={28} /> 
  },
  { 
    title: "Analytics Dashboard", 
    description: "Track real-time metrics, sentiment, and drop-off rates.",
    icon: <BarChart2 size={28} /> 
  },
  { 
    title: "Multi-Channel", 
    description: "Deploy bots to web, mobile, WhatsApp, and more instantly.",
    icon: <MessageSquare size={28} /> 
  },
  { 
    title: "Automation Rules", 
    description: "Trigger backend actions and APIs based on user intents.",
    icon: <Zap size={28} /> 
  },
];



const faqs = [
  { question: "Can I integrate existing CRM systems?", answer: "Yes, our platform provides native webhooks and pre-built API connectors for popular CRMs like Salesforce, HubSpot, and custom enterprise databases." },
  { question: "Do I need coding skills to manage the bots?", answer: "Not at all. The visual drag-and-drop builder allows operations teams to create and update bots without code. Developers can still extend functionality via our open SDKs if needed." },
  { question: "Is the solution cloud-hosted or on-premise?", answer: "We offer both! You can utilize our highly scalable managed cloud hosting, or choose an on-premise deployment option for strict data compliance requirements." },
];

const AIChatbotFAQ = ({ faqs }: { faqs: { question: string; answer: string }[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index}
            style={{ 
              background: isOpen ? 'rgba(15, 23, 42, 0.8)' : 'rgba(15, 23, 42, 0.4)',
              border: '1px solid',
              borderColor: isOpen ? 'rgba(6, 182, 212, 0.4)' : 'rgba(255, 255, 255, 0.05)',
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
                background: isOpen ? 'rgba(6, 182, 212, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                color: isOpen ? '#22D3EE' : '#94A3B8',
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'all 0.3s ease',
                flexShrink: 0,
                marginLeft: '16px'
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
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function BusinessAdminPanelPage() {
  return (
    <main className="chatbot-page">
      {/* 1. Hero Section */}
      <section className="chatbot-hero">
        <div className="container chatbot-hero-container">
          <motion.div 
            className="chatbot-hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="chatbot-hero-badge">
              <Sparkles size={16} />
              Next-Gen AI Automation
            </span>
            
            <h1 className="desktop-h1">Intelligent Chatbot Admin Platform</h1>
            
            <p className="chatbot-hero-description">
              Empower your enterprise with an AI-driven admin dashboard. Visually build, monitor, and scale automated chatbot workflows across every customer channel in real-time.
            </p>
            
            <div className="chatbot-hero-actions flex flex-row gap-3 sm:gap-4 justify-start">
              <Link href="/contact" className="btn btn-primary" style={{ padding: '12px 16px', borderRadius: '30px', background: '#06B6D4', borderColor: '#06B6D4', color: '#030712', flex: 1, textAlign: 'center', fontSize: '14px', whiteSpace: 'nowrap' }}>
                Deploy Now
              </Link>
              <Link href="/contact" className="btn btn-secondary" style={{ padding: '12px 16px', borderRadius: '30px', background: 'rgba(6, 182, 212, 0.1)', borderColor: 'rgba(6, 182, 212, 0.4)', color: '#22D3EE', flex: 1, textAlign: 'center', fontSize: '14px', whiteSpace: 'nowrap' }}>
                Request Architecture
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="chatbot-hero-image-wrapper"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <Image 
              src="/images/ai_chatbot_hero.png" 
              alt="AI Chatbot Admin Dashboard UI Mockup" 
              width={700} 
              height={450} 
              className="chatbot-hero-img"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* 2. Features Grid */}
      <section className="chatbot-section">
        <div className="container">
          <div className="chatbot-section-header">
            <span>Core Capabilities</span>
            <h2>Command Center for AI Agents</h2>
            <p>Everything you need to orchestrate complex conversational experiences without touching a single line of backend code.</p>
          </div>
          
          <motion.div 
            className="chatbot-glass-panel"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
          >
            {features.map((f, index) => (
              <div key={index} className="chatbot-panel-column">
                <div className="chatbot-panel-icon">
                  {f.icon}
                </div>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
                {index < features.length - 1 && <div className="chatbot-panel-divider" />}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Live AI Agent Configurator Showcase */}
      <AdminAiShowcase />

      {/* 4. Animated Process Timeline */}
      <section className="chatbot-section" style={{ background: 'radial-gradient(ellipse at top right, rgba(30, 58, 138, 0.15) 0%, transparent 60%)' }}>
        <div className="container">
          <div className="chatbot-section-header">
            <span>Implementation Pipeline</span>
            <h2>From Blueprint to Autonomous Agent</h2>
          </div>
          
          <ChatbotWorkflowNodes />
        </div>
      </section>

      {/* 5. Custom AI FAQ */}
      <section className="chatbot-section" style={{ background: 'rgba(3, 7, 18, 0.8)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="chatbot-section-header" style={{ marginBottom: '40px' }}>
            <span>Knowledge Base</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <AIChatbotFAQ faqs={faqs} />
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <div className="chatbot-cta-wrapper">
        <CTA
          badge="AI Automation"
          heading="Ready to Deploy Autonomous Agents?"
          description="Get a custom, scalable AI admin panel tailored precisely to your enterprise data and customer workflows."
          primaryBtnText="Initialize Deployment"
          secondaryBtnText="Speak With Our Engineers"
          secondaryBtnHref="/contact"
        />
      </div>

      <style jsx global>{`
        /* Overrides to blend the common CTA component into the AI theme */
        .chatbot-cta-wrapper .cta-section {
           background: transparent !important;
           border: none !important;
           padding: 60px 0 100px;
        }
        .chatbot-cta-wrapper .cta-container {
           background: linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(30, 58, 138, 0.2) 100%) !important;
           border: 1px solid rgba(6, 182, 212, 0.3) !important;
           box-shadow: 0 0 40px rgba(6, 182, 212, 0.1) !important;
        }
        .chatbot-cta-wrapper .cta-badge {
           background: transparent !important;
           border: none !important;
           padding: 0 !important;
           color: #22D3EE !important;
        }
      `}</style>
    </main>
  );
}
