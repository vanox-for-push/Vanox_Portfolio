"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import CTA from "@/components/home/CTA";
import FAQ from "@/components/common/FAQ";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Building2,
  CalendarDays
} from "lucide-react";
import "./contact.css";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: ''
  });

  const [isHoveringSubmit, setIsHoveringSubmit] = useState(false);

  const contactInfo = [
    {
      title: "Email",
      value: "support@vanoxdynamics.com",
      icon: <Mail size={24} />,
      color: "#3B82F6"
    },
    {
      title: "Phone",
      value: "+91 8105107006",
      icon: <Phone size={24} />,
      color: "#10B981"
    },
    {
      title: "Office",
      value: "Mangalore, India",
      icon: <MapPin size={24} />,
      color: "#8B5CF6"
    }
  ];

  const hours = [
    { day: "Monday", time: "09:00 AM – 06:30 PM" },
    { day: "Tuesday", time: "09:00 AM – 06:30 PM" },
    { day: "Wednesday", time: "09:00 AM – 06:30 PM" },
    { day: "Thursday", time: "09:00 AM – 06:30 PM" },
    { day: "Friday", time: "09:00 AM – 06:30 PM" },
    { day: "Saturday", time: "09:00 AM – 06:30 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  const faqs = [
    {
      question: "How quickly can I expect a response?",
      answer: "We aim to respond to all inquiries within 24 hours during standard business days.",
    },
    {
      question: "Can I request a product demonstration?",
      answer: "Yes! Please select 'Product Demonstration' in the subject line of the contact form, and we will schedule a call.",
    },
    {
      question: "Do you provide custom software development?",
      answer: "Absolutely. We develop highly tailored digital solutions based entirely on your specific business requirements.",
    },
    {
      question: "Do you support businesses outside India?",
      answer: "Yes, Vanox Dynamics operates globally and supports clients across various international regions.",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Website Inquiry: ${formState.service} - ${formState.companyName}`;
    const body = `Name: ${formState.fullName}
Company: ${formState.companyName}
Email: ${formState.email}
Phone: ${formState.phone}
Service: ${formState.service}

Message:
${formState.message}`;

    window.location.href = `mailto:support@vanoxdynamics.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      
      {/* Abstract Hero Section */}
      <section style={{ 
        position: 'relative', 
        padding: 'clamp(80px, 12vw, 120px) 20px clamp(12px, 4vw, 60px)', 
        overflow: 'hidden',
        backgroundColor: 'var(--bg-primary)',
        backgroundImage: 'linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        backgroundPosition: 'center top',
        color: 'var(--text-heading)'
      }}>
        {/* Soft fading mask for the grid so it fades out at the bottom */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0) 40%, var(--bg-primary) 100%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div className="center-on-desktop" style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 900, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '24px', color: 'var(--color-primary)' }}>
              Connect With Us
            </span>
            <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 800, letterSpacing: '-1px', marginBottom: '24px', lineHeight: 1.1, color: 'var(--text-heading)' }}>
              Let's Build the <br/>
              <span style={{ color: 'var(--color-primary)' }}>Future Together.</span>
            </h1>
            <p style={{ fontSize: '18px', maxWidth: '700px', margin: '0 auto clamp(16px, 4vw, 40px)', color: 'var(--text-body)', lineHeight: 1.6 }}>
              Whether you need enterprise software, AI integration, or white-label payment solutions, our experts are ready to turn your vision into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-split-section">
        
        {/* Left Column: Direct Contact Info */}
        <div className="contact-info-side">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="contact-section-title">Get in Touch</h2>
            <p className="contact-section-desc">Reach out to our experts directly using the information below.</p>
            
            {contactInfo.map((info, idx) => (
              <div key={idx} className="contact-info-item">
                <div className="contact-icon-wrapper" style={{ backgroundColor: `${info.color}15`, color: info.color }}>
                  {info.icon}
                </div>
                <div>
                  <h3 className="contact-info-title">{info.title}</h3>
                  <p className="contact-info-value">{info.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Clean Form */}
        <div className="contact-form-side" id="contact-form" style={{ scrollMarginTop: '120px' }}>
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="contact-section-title">Send an Inquiry</h2>
            <p className="contact-section-desc">Fill out the form below and we'll get back to you shortly.</p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="fullName" className="contact-label">Full Name</label>
                  <input type="text" id="fullName" className="contact-input" value={formState.fullName} onChange={handleInputChange} placeholder="John Doe" required />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="companyName" className="contact-label">Company Name</label>
                  <input type="text" id="companyName" className="contact-input" value={formState.companyName} onChange={handleInputChange} placeholder="Your Company Ltd." required />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="email" className="contact-label">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="contact-input" 
                    value={formState.email} 
                    onChange={handleInputChange} 
                    placeholder="you@company.com" 
                    pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
                    title="Please enter a valid email address (e.g. you@company.com)"
                    required 
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="phone" className="contact-label">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="contact-input" 
                    value={formState.phone} 
                    onChange={(e) => {
                      const numericValue = e.target.value.replace(/[^0-9]/g, '');
                      setFormState({ ...formState, phone: numericValue });
                    }} 
                    placeholder="1234567890" 
                    pattern="[0-9]{7,15}"
                    maxLength={15}
                    title="Please enter a valid phone number (7-15 digits only)"
                    required 
                  />
                </div>
              </div>

              <div className="contact-form-group">
                <label htmlFor="service" className="contact-label">Service Interested In</label>
                <select id="service" className="contact-input" value={formState.service} onChange={handleInputChange} required>
                  <option value="" disabled>Select a service...</option>
                  <option value="Payment Solutions">Payment Solutions</option>
                  <option value="White Label Solutions">White Label Solutions</option>
                  <option value="B2B White Label">B2B White Label</option>
                  <option value="Business Automation">Business Automation</option>
                  <option value="Digital Solutions">Digital Solutions</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="contact-form-group">
                <label htmlFor="message" className="contact-label">Message</label>
                <textarea id="message" className="contact-input" value={formState.message} onChange={handleInputChange} placeholder="Tell us about your requirements..." required></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Unified Office & Map Section */}
      <section className="contact-map-section">
        
        {/* Left Side: Office & Availability Info */}
        <div className="contact-map-info">
          
          <motion.div 
            className="contact-info-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-info-block-header">
              <div className="contact-info-block-icon" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#3B82F6' }}>
                <Building2 size={24} />
              </div>
              <h2 className="contact-info-block-title">Our Office</h2>
            </div>
            <div className="contact-info-block-content">
              <strong style={{ color: "var(--text-heading)", display: "block", marginBottom: "8px", fontSize: "18px" }}>Vanox Dynamics Private Limited</strong>
              15–5223/27 Balmatta Road, Collectors Gate Milestone 25, Shop No.118, Mangalore, Karnataka – 575001, India
            </div>
          </motion.div>

          <motion.div 
            className="contact-info-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact-info-block-header">
              <div className="contact-info-block-icon" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>
                <CalendarDays size={24} />
              </div>
              <h2 className="contact-info-block-title">Availability</h2>
            </div>
            <div className="availability-table">
              {hours.map((h, idx) => (
                <div key={idx} className="availability-row">
                  <span className="availability-day">{h.day}</span>
                  <span className={`availability-time ${h.time === 'Closed' ? 'closed' : ''}`}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Right Side: Full Screen Map */}
        <motion.div 
          className="contact-map-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <iframe 
            src="https://maps.google.com/maps?q=Balmatta%20Road,%20Mangalore,%20Karnataka,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="contact-map-iframe"
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Vanox Dynamics Office Location"
          ></iframe>
        </motion.div>

      </section>

      {/* FAQ Section */}
      <section style={{ padding: 'clamp(40px, 8vw, 60px) 20px', backgroundColor: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="center-on-desktop" style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--text-heading)' }}>Frequently Asked Questions</h2>
            <p style={{ color: 'var(--text-body)', fontSize: '18px' }}>Common inquiries from our prospective clients.</p>
          </div>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <CTA 
        badge="Ready to Build with Vanox?"
        heading="Connect with our team to discuss your business goals and discover how our solutions can accelerate your growth."
        primaryBtnText="Schedule a Call"
        primaryBtnHref="#inquiry"
        secondaryBtnText="Explore Solutions"
        secondaryBtnHref="/products"
      />
    </main>
  );
}
