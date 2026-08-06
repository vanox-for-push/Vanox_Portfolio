"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Shield, 
  ShieldCheck,
  Eye, 
  Lock, 
  Database, 
  Server, 
  Cookie, 
  UserCheck, 
  RefreshCw, 
  Mail,
  ChevronRight,
  Fingerprint,
  User,
  Smartphone,
  Globe2,
  FileText,
  CheckCircle2,
  Edit3,
  Trash2,
  Ban,
  DownloadCloud
} from "lucide-react";
import "./privacy.css";

const lastUpdated = "July 18, 2026";

// --- Custom Components ---

const AnimatedDataCollection = () => {
  const dataNodes = [
    { icon: <User size={20} />, label: "Personal Details", desc: "Name & Email" },
    { icon: <Smartphone size={20} />, label: "Contact Info", desc: "Phone Number" },
    { icon: <Globe2 size={20} />, label: "Technical Data", desc: "IP & Browser" },
    { icon: <FileText size={20} />, label: "Business Profile", desc: "Company Name" }
  ];

  return (
    <div className="animated-data-collection-container" style={{ marginTop: '24px', padding: '40px 24px', backgroundColor: 'var(--bg-secondary)', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}>
      <p style={{ marginBottom: '32px', textAlign: 'center', color: 'var(--text-body)', maxWidth: '500px', margin: '0 auto 32px' }}>
        We only collect the essential information required to provide you with secure, personalized services.
      </p>
      
      <div className="animated-data-collection" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px' }}>
        {/* Center Node (Secure Vault) */}
        <div
          style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', zIndex: 10, position: 'relative', boxShadow: '0 0 0 10px rgba(22, 163, 74, 0.2)' }}
        >
          <Database size={36} />
          <div style={{ position: 'absolute', bottom: '-30px', whiteSpace: 'nowrap', fontWeight: 600, color: 'var(--text-heading)', fontSize: '14px' }}>Secure Vault</div>
        </div>

        {/* Orbiting Nodes */}
        {dataNodes.map((node, i) => {
          const angle = (i * (360 / dataNodes.length)) * (Math.PI / 180);
          const radius = 120; // distance from center
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <div
              key={i}
              style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100px', transform: `translate(${x}px, ${y}px)` }}
            >
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-heading)', marginBottom: '8px', zIndex: 2, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                {node.icon}
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-heading)', whiteSpace: 'nowrap' }}>{node.label}</div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{node.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const PrivacyRightsInteractive = () => {
  const [activeRight, setActiveRight] = useState(0);
  
  const rights = [
    { id: 'access', title: "Right to Access", icon: <Eye size={16}/>, desc: "You can request a copy of all personal data we hold about you at any time in a readable format.", action: "Request Data Export" },
    { id: 'rectify', title: "Right to Rectification", icon: <Edit3 size={16}/>, desc: "If you notice your data is inaccurate or incomplete, you have the right to request immediate correction.", action: "Update Profile" },
    { id: 'erasure', title: "Right to Erasure", icon: <Trash2 size={16}/>, desc: "Also known as the 'Right to be Forgotten'. You can ask us to permanently delete your personal data.", action: "Delete Account" },
    { id: 'restrict', title: "Right to Restrict", icon: <Ban size={16}/>, desc: "You can request that we temporarily halt the processing of your data under certain conditions.", action: "Pause Processing" },
    { id: 'portability', title: "Data Portability", icon: <DownloadCloud size={16}/>, desc: "You can obtain and reuse your personal data across different services securely.", action: "Download JSON" },
  ];

  return (
    <div className="privacy-rights-container">
      <p style={{ color: 'var(--text-body)', margin: 0, textAlign: 'left', fontSize: '13px', lineHeight: 1.5 }}>
        Select a right below to see how Vanox Dynamics empowers you to manage your digital footprint:
      </p>
      
      <div className="privacy-rights-tabs">
        {rights.map((right, idx) => (
          <button
            key={right.id}
            onClick={() => setActiveRight(idx)}
            className="privacy-rights-tab"
            style={{ 
              background: activeRight === idx ? 'var(--color-primary)' : 'var(--bg-primary)',
              color: activeRight === idx ? '#FFF' : 'var(--text-heading)',
              border: '1px solid',
              borderColor: activeRight === idx ? 'var(--color-primary)' : 'var(--border-color)',
              boxShadow: activeRight === idx ? '0 4px 12px rgba(22, 163, 74, 0.2)' : 'none'
            }}
          >
            {right.icon}
            <span>{right.title}</span>
          </button>
        ))}
      </div>

      <div className="privacy-rights-detail">
        <div key={activeRight} style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(22, 163, 74, 0.1)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {rights[activeRight].icon}
            </div>
            <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: 'var(--text-heading)' }}>{rights[activeRight].title}</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{ margin: '0 0 12px 0', color: 'var(--text-body)', fontSize: '13px', lineHeight: 1.5 }}>
              {rights[activeRight].desc}
            </p>
            <div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', backgroundColor: 'var(--bg-secondary)', borderRadius: '16px', fontSize: '12px', fontWeight: 600, color: 'var(--text-heading)', border: '1px solid var(--border-color)' }}>
                <CheckCircle2 size={13} color="var(--color-primary)" />
                Use Case: {rights[activeRight].action}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- End Custom Components ---

const glanceItems = [
  {
    icon: <Eye size={24} />,
    title: "Transparent Collection",
    description: "We only collect essential data required to provide you with secure services. No hidden tracking."
  },
  {
    icon: <Lock size={24} />,
    title: "Bank-Grade Security",
    description: "Your data is encrypted in transit and at rest using industry-standard protocols."
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Zero Data Selling",
    description: "We never monetize, sell, or rent your personal information to third-party advertisers."
  },
  {
    icon: <Fingerprint size={24} />,
    title: "Your Complete Control",
    description: "Access, modify, or delete your personal data at any time. You remain in complete control."
  }
];

const policySections = [
  {
    id: "introduction",
    title: "Introduction",
    icon: <Shield />,
    content: (
      <>
        <p style={{ marginBottom: '16px', lineHeight: 1.7, color: 'var(--text-body)' }}>
          This Privacy Policy applies to the Vanox Dynamics website, products, and services. At Vanox Dynamics Private Limited, we believe that privacy is a fundamental human right. 
        </p>
        <p style={{ lineHeight: 1.7, color: 'var(--text-body)' }}>
          By using our website and services, you agree to the collection and use of information in accordance with this policy. We designed this policy to be transparent, straightforward, and easy to understand.
        </p>
      </>
    )
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    icon: <Database />,
    content: <AnimatedDataCollection />
  },
  {
    id: "how-we-use-information",
    title: "How We Use Information",
    icon: <RefreshCw />,
    content: (
      <>
        <p style={{ marginBottom: '16px', lineHeight: 1.7, color: 'var(--text-body)' }}>
          Your data acts as the compass that guides our service improvements. We utilize the collected information for the following core purposes:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { title: "Service Delivery", desc: "To respond to inquiries and provide requested services seamlessly." },
            { title: "Platform Enhancement", desc: "To analyze website performance and improve user experience." },
            { title: "Security Maintenance", desc: "To monitor against fraudulent activities and maintain platform integrity." },
            { title: "Communication", desc: "To send important account updates, technical notices, and support messages." }
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '16px', paddingBottom: '16px', borderBottom: i !== 3 ? '1px solid var(--border-color)' : 'none' }}>
              <div style={{ color: 'var(--color-primary)', marginTop: '4px' }}><ChevronRight size={20} /></div>
              <div>
                <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', color: 'var(--text-heading)' }}>{item.title}</h4>
                <p style={{ margin: 0, fontSize: '15px', color: 'var(--text-body)' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  },
  {
    id: "data-security",
    title: "Data Security",
    icon: <Lock />,
    content: (
      <>
        <div style={{ padding: '24px', backgroundColor: 'rgba(22, 163, 74, 0.05)', border: '1px solid rgba(22, 163, 74, 0.2)', borderRadius: '12px', marginBottom: '20px' }}>
          <p style={{ margin: 0, color: 'var(--color-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Shield size={20} /> Commitment to Security
          </p>
        </div>
        <p style={{ lineHeight: 1.7, color: 'var(--text-body)' }}>
          We implement rigorous, enterprise-grade technical and organizational measures to protect your information from unauthorized access, alteration, disclosure, or destruction. Our infrastructure relies on secure cloud environments, end-to-end encryption, and continuous monitoring. While no online system is completely impenetrable, our defense-in-depth strategy ensures your data is protected by the highest industry standards.
        </p>
      </>
    )
  },
  {
    id: "third-party-services",
    title: "Third-Party Services",
    icon: <Server />,
    content: (
      <p style={{ lineHeight: 1.7, color: 'var(--text-body)' }}>
        Our website or services may integrate with trusted third-party providers for payments, analytics, hosting, communication, or other business functions. We thoroughly vet all third-party partners to ensure they meet strict data protection standards. These providers process information according to their own privacy policies, and we only share the absolute minimum data necessary for them to perform their functions.
      </p>
    )
  },
  {
    id: "cookies",
    title: "Cookies & Tracking",
    icon: <Cookie />,
    content: (
      <>
        <p style={{ marginBottom: '16px', lineHeight: 1.7, color: 'var(--text-body)' }}>
          Our website utilizes cookies and similar tracking technologies to elevate your browsing experience, analyze traffic patterns, and remember your preferences.
        </p>
        <p style={{ lineHeight: 1.7, color: 'var(--text-body)' }}>
          You have full control over these technologies. You can manage, block, or delete cookie preferences directly through your browser settings. Please note that restricting certain cookies may impact the functionality of specific platform features.
        </p>
      </>
    )
  },
  {
    id: "user-rights",
    title: "Your Privacy Rights",
    icon: <UserCheck />,
    content: <PrivacyRightsInteractive />
  },
  {
    id: "policy-updates",
    title: "Policy Updates",
    icon: <RefreshCw />,
    content: (
      <p style={{ lineHeight: 1.7, color: 'var(--text-body)' }}>
        Technology and regulations evolve rapidly, and so do we. This Privacy Policy may be updated periodically to reflect changes in our services, legal requirements, or business practices. We will notify you of any significant material changes via email or prominent notices on our platform. The latest version will always be accessible on this page.
      </p>
    )
  },
  {
    id: "contact",
    title: "Contact Us",
    icon: <Mail />,
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '32px', backgroundColor: 'var(--bg-secondary)', borderRadius: '16px', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
          <Mail size={32} />
        </div>
        <h3 style={{ margin: 0, fontSize: '24px', color: 'var(--text-heading)' }}>Have Privacy Questions?</h3>
        <p style={{ margin: 0, color: 'var(--text-body)', maxWidth: '400px', lineHeight: 1.6 }}>
          Our Data Protection team is ready to address any concerns or requests regarding your personal information.
        </p>
        <Link href="/contact" style={{ padding: '14px 32px', backgroundColor: 'var(--text-heading)', color: 'var(--bg-primary)', borderRadius: '30px', fontWeight: 600, textDecoration: 'none', transition: 'transform 0.2s', marginTop: '8px' }}>
          Reach Out to Support
        </Link>
      </div>
    )
  }
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Find the current active section
      for (let i = policySections.length - 1; i >= 0; i--) {
        const section = document.getElementById(policySections[i].id);
        if (section && section.offsetTop <= scrollPosition + 150) {
          setActiveSection(policySections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingBottom: '100px' }}>
      {/* Abstract Hero Section */}
      <section className="privacy-hero">
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 0 }}>
          <div 
            style={{ position: 'absolute', top: '-20%', left: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(22, 163, 74, 0.15) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(40px)' }}
          />
          <div 
            style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(40px)' }}
          />
        </div>

        <div className="privacy-hero-container">
          <span className="privacy-hero-badge">
            <Shield size={16} color="#4ADE80" /> Legal & Privacy
          </span>
          <h1>
            Your Data. <span style={{ color: '#4ADE80' }}>Your Rules.</span>
          </h1>
          <p className="privacy-hero-description">
            We believe trust is built on transparency. Our privacy policy is designed to be clear, straightforward, and focused on protecting your digital footprint.
          </p>
          <p style={{ fontSize: '13px', color: '#64748B' }}>
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Privacy at a Glance */}
      <section style={{ padding: '40px 16px', backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="privacy-glance-grid">
            {glanceItems.map((item, index) => (
              <div 
                key={index}
                className="privacy-glance-card"
              >
                <div className="privacy-glance-icon">
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '6px', color: 'var(--text-heading)' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-body)', lineHeight: 1.5, margin: 0, fontSize: '13px' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section style={{ padding: '80px 24px', maxWidth: '100vw' }} className="privacy-main-section">
        <div className="privacy-content-wrapper" style={{ maxWidth: '1280px', width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'row', gap: '64px', alignItems: 'flex-start', minWidth: 0 }}>
          
          {/* Interactive Sidebar */}
          <aside className="privacy-sidebar" style={{ flex: '0 0 300px', position: 'sticky', top: '100px', maxHeight: 'calc(100vh - 140px)', overflowY: 'auto' }}>
            <div style={{ padding: '32px', backgroundColor: 'var(--bg-secondary)', borderRadius: '24px', border: '1px solid var(--border-color)' }}>
              <h4 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '24px' }}>
                Table of Contents
              </h4>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {policySections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      const el = document.getElementById(section.id);
                      if (el) {
                        const y = el.getBoundingClientRect().top + window.scrollY - 100;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 16px',
                      borderRadius: '8px',
                      background: activeSection === section.id ? 'var(--color-primary)' : 'transparent',
                      color: activeSection === section.id ? '#FFFFFF' : 'var(--text-body)',
                      fontWeight: activeSection === section.id ? 600 : 500,
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      width: '100%'
                    }}
                  >
                    <div style={{ opacity: activeSection === section.id ? 1 : 0.5 }}>
                      {React.cloneElement(section.icon as React.ReactElement<any>, { size: 18 })}
                    </div>
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Legal Content Cards */}
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '40px', minWidth: 0, maxWidth: '100%' }} className="privacy-cards-container">
            {policySections.map((section, index) => (
              <div
                key={section.id}
                id={section.id}
                className={`privacy-card ${activeSection === section.id ? 'active' : ''}`}
              >
                <div className="privacy-card-header">
                  <div className="privacy-card-icon">
                    {React.cloneElement(section.icon as React.ReactElement<any>, { size: 18 })}
                  </div>
                  <h2 className="privacy-card-title">
                    <span style={{ color: 'var(--text-muted)', marginRight: '6px', fontSize: '0.9em' }}>0{index + 1}.</span>
                    {section.title}
                  </h2>
                </div>
                <div style={{ fontSize: '15px', minWidth: 0, maxWidth: '100%', overflowWrap: 'break-word' }}>
                  {section.content}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Responsive Styles Injection */}
      <style dangerouslySetInnerHTML={{__html: `
        .privacy-sidebar { display: block; }
        @media (max-width: 1024px) {
          .privacy-sidebar { display: none !important; }
          .privacy-content-wrapper { flex-direction: column !important; gap: 32px !important; }
        }
        @media (max-width: 768px) {
          .privacy-main-section { padding: 12px 16px 0px !important; }
          .privacy-card { padding: 24px !important; }
          .privacy-card:last-child { margin-bottom: 0 !important; }
          .privacy-card h2 { font-size: 22px !important; }
          .privacy-rights-box { flex-direction: column !important; text-align: center; }
          .privacy-rights-box > div:first-child { margin: 0 auto; }
          .animated-data-collection { transform: scale(0.65); transform-origin: top center; min-height: 200px !important; margin-bottom: -60px; }
        }
      `}} />
    </main>
  );
}
