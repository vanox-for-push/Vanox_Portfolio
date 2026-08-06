"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  FileSignature,
  CheckCircle2,
  XCircle,
  Copyright,
  ServerCrash,
  ShieldAlert,
  Link as LinkIcon,
  RefreshCw,
  Scale,
  Mail,
  Scale3d,
  Gavel,
  BookOpen
} from "lucide-react";
import "./terms.css";

const lastUpdated = "July 18, 2026";

const glanceItems = [
  {
    icon: <Scale3d size={24} />,
    title: "Fair & Transparent",
    description: "Our terms are designed to protect both you and Vanox Dynamics, ensuring a fair digital ecosystem."
  },
  {
    icon: <Copyright size={24} />,
    title: "Intellectual Property",
    description: "We respect creators and innovators. All platform content is protected by international copyright laws."
  },
  {
    icon: <Gavel size={24} />,
    title: "Clear Guidelines",
    description: "Straightforward rules for using our services without complicated legal jargon."
  },
  {
    icon: <ShieldAlert size={24} />,
    title: "Limitation of Liability",
    description: "Transparent boundaries protecting platform availability, service SLAs, and user responsibilities."
  }
];

const AnimatedDosAndDonts = () => {
  const [activeTab, setActiveTab] = useState<'dos' | 'donts'>('dos');

  const dos = [
    "Use the website and services lawfully",
    "Provide accurate information when requested",
    "Respect the intellectual property of others",
    "Report any security vulnerabilities you find"
  ];

  const donts = [
    "Do not attempt unauthorized access to our systems",
    "Do not misuse or scrape website content",
    "Do not distribute malware or malicious code",
    "Do not impersonate Vanox Dynamics personnel"
  ];

  return (
    <div style={{ marginTop: '20px', backgroundColor: 'var(--bg-secondary)', borderRadius: '16px', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
      <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)' }}>
        <button
          onClick={() => setActiveTab('dos')}
          style={{ flex: 1, padding: '12px 14px', background: activeTab === 'dos' ? 'var(--bg-primary)' : 'transparent', border: 'none', borderBottom: activeTab === 'dos' ? '2px solid var(--color-primary)' : '2px solid transparent', color: activeTab === 'dos' ? 'var(--color-primary)' : 'var(--text-muted)', fontWeight: 600, fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', transition: 'all 0.2s ease' }}
        >
          <CheckCircle2 size={16} /> What You Should Do
        </button>
        <button
          onClick={() => setActiveTab('donts')}
          style={{ flex: 1, padding: '12px 14px', background: activeTab === 'donts' ? 'var(--bg-primary)' : 'transparent', border: 'none', borderBottom: activeTab === 'donts' ? '2px solid #EF4444' : '2px solid transparent', color: activeTab === 'donts' ? '#EF4444' : 'var(--text-muted)', fontWeight: 600, fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', transition: 'all 0.2s ease' }}
        >
          <XCircle size={16} /> What You Must Not Do
        </button>
      </div>

      <div style={{ padding: '20px 16px', position: 'relative' }}>
        {activeTab === 'dos' ? (
          <div key="dos" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {dos.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'var(--bg-primary)', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(22, 163, 74, 0.2)' }}>
                <div style={{ color: 'var(--color-primary)', flexShrink: 0 }}><CheckCircle2 size={18} /></div>
                <span style={{ color: 'var(--text-heading)', fontWeight: 500, fontSize: '13px' }}>{item}</span>
              </div>
            ))}
          </div>
        ) : (
          <div key="donts" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {donts.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'var(--bg-primary)', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                <div style={{ color: '#EF4444', flexShrink: 0 }}><XCircle size={18} /></div>
                <span style={{ color: 'var(--text-heading)', fontWeight: 500, fontSize: '13px' }}>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const policySections = [
  {
    id: "acceptance-of-terms",
    title: "Acceptance of Terms",
    icon: <FileSignature />,
    content: (
      <>
        <p style={{ marginBottom: '16px', lineHeight: 1.7, color: 'var(--text-body)' }}>
          By accessing or using the Vanox Dynamics website, platforms, and services, you explicitly agree to comply with and be bound by these Terms & Conditions. 
        </p>
        <p style={{ lineHeight: 1.7, color: 'var(--text-body)' }}>
          If you do not agree with any part of these terms, you must not use our services. These terms apply to all visitors, users, and others who access our platform.
        </p>
      </>
    )
  },
  {
    id: "use-of-website",
    title: "Use of Website",
    icon: <BookOpen />,
    content: (
      <>
        <p style={{ lineHeight: 1.7, color: 'var(--text-body)' }}>
          We grant you a limited, non-exclusive, non-transferable license to access and use our platform for your personal or business purposes in accordance with these terms.
        </p>
        <AnimatedDosAndDonts />
      </>
    )
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    icon: <Copyright />,
    content: (
      <>
        <div style={{ padding: '24px', backgroundColor: 'rgba(37, 99, 235, 0.05)', border: '1px solid rgba(37, 99, 235, 0.2)', borderRadius: '12px', marginBottom: '20px' }}>
          <p style={{ margin: 0, color: '#2563eb', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Copyright size={20} /> All Rights Reserved
          </p>
        </div>
        <p style={{ lineHeight: 1.7, color: 'var(--text-body)' }}>
          All website content, including but not limited to text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of Vanox Dynamics Private Limited or its content suppliers and is protected by international copyright, trademark, and other intellectual property laws. Unauthorized reproduction, modification, or distribution is strictly prohibited.
        </p>
      </>
    )
  },
  {
    id: "service-availability",
    title: "Service Availability",
    icon: <ServerCrash />,
    content: (
      <p style={{ lineHeight: 1.7, color: 'var(--text-body)' }}>
        We strive to maintain 99.9% uptime and reliable access to our website and services; however, uninterrupted availability cannot be guaranteed. We may experience hardware, software, or other problems, or need to perform maintenance resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the site at any time without notice.
      </p>
    )
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    icon: <ShieldAlert />,
    content: (
      <div style={{ borderLeft: '4px solid var(--color-primary)', paddingLeft: '20px' }}>
        <p style={{ lineHeight: 1.7, color: 'var(--text-body)', fontWeight: 500 }}>
          To the maximum extent permitted by applicable law, in no event shall Vanox Dynamics, its directors, employees, or partners be liable for any indirect, incidental, special, consequential, or punitive damages.
        </p>
        <p style={{ lineHeight: 1.7, color: 'var(--text-body)', marginTop: '16px' }}>
          This includes, without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
        </p>
      </div>
    )
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    icon: <LinkIcon />,
    content: (
      <p style={{ lineHeight: 1.7, color: 'var(--text-body)' }}>
        Our Service may contain links to third-party web sites or services that are not owned or controlled by Vanox Dynamics. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of such content or services.
      </p>
    )
  },
  {
    id: "changes-to-terms",
    title: "Changes to Terms",
    icon: <RefreshCw />,
    content: (
      <p style={{ lineHeight: 1.7, color: 'var(--text-body)' }}>
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
      </p>
    )
  },
  {
    id: "governing-law",
    title: "Governing Law",
    icon: <Scale />,
    content: (
      <p style={{ lineHeight: 1.7, color: 'var(--text-body)' }}>
        These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any legal action or proceeding related to your access to, or use of, the website or these Terms shall be instituted only in a state or federal court located in Karnataka, India.
      </p>
    )
  },
  {
    id: "contact",
    title: "Contact",
    icon: <Mail />,
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '32px', backgroundColor: 'var(--bg-secondary)', borderRadius: '16px', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
          <Mail size={32} />
        </div>
        <h3 style={{ margin: 0, fontSize: '24px', color: 'var(--text-heading)' }}>Questions About Our Terms?</h3>
        <p style={{ margin: 0, color: 'var(--text-body)', maxWidth: '400px', lineHeight: 1.6 }}>
          Our legal team is available to clarify any of the points mentioned in our terms of service.
        </p>
        <Link href="/contact" style={{ padding: '14px 32px', backgroundColor: 'var(--text-heading)', color: 'var(--bg-primary)', borderRadius: '30px', fontWeight: 600, textDecoration: 'none', transition: 'transform 0.2s', marginTop: '8px' }}>
          Contact Legal Team
        </Link>
      </div>
    )
  }
];

export default function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState("acceptance-of-terms");

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
      <section className="terms-hero">
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 0 }}>
          <div 
            style={{ position: 'absolute', top: '-10%', left: '-5%', width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(22, 163, 74, 0.12) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(50px)' }}
          />
          <div 
            style={{ position: 'absolute', bottom: '-15%', right: '-5%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(50px)' }}
          />
        </div>

        <div className="terms-hero-container">
          <span className="terms-hero-badge">
            <Gavel size={16} color="#4ADE80" /> Legal Agreements
          </span>
          <h1>
            Rules of the <span style={{ color: '#4ADE80' }}>Digital Road.</span>
          </h1>
          <p className="terms-hero-description">
            These terms exist to ensure a safe, reliable, and fair environment for everyone using Vanox Dynamics platforms and services.
          </p>
          <p style={{ fontSize: '13px', color: '#64748B' }}>
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Terms at a Glance */}
      <section style={{ padding: '40px 16px', backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="terms-glance-grid">
            {glanceItems.map((item, index) => (
              <div 
                key={index}
                className="terms-glance-card"
              >
                <div className="terms-glance-icon">
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
      <section className="terms-main-section" style={{ padding: '80px 24px' }}>
        <div className="terms-content-wrapper" style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'row', gap: '64px', alignItems: 'flex-start' }}>
          
          {/* Interactive Sidebar */}
          <aside style={{ flex: '0 0 300px', position: 'sticky', top: '100px', display: 'none', maxHeight: 'calc(100vh - 140px)', overflowY: 'auto' }} className="lg:block">
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
          <div className="terms-cards-container" style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {policySections.map((section, index) => (
              <div 
                key={section.id}
                id={section.id}
                className={`terms-card ${activeSection === section.id ? 'active' : ''}`}
              >
                <div className="terms-card-header">
                  <div className="terms-card-icon">
                    {React.cloneElement(section.icon as React.ReactElement<any>, { size: 18 })}
                  </div>
                  <h2 className="terms-card-title">
                    <span style={{ color: 'var(--text-muted)', marginRight: '6px', fontSize: '0.9em' }}>0{index + 1}.</span>
                    {section.title}
                  </h2>
                </div>
                <div style={{ fontSize: '15px' }}>
                  {section.content}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Inline styles for hiding sidebar on mobile since we can't rely fully on tailwind utility generation without a rebuild */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 1024px) {
          .lg\\:block { display: none !important; }
        }
      `}} />
    </main>
  );
}
