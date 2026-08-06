"use client";

import Image from "next/image";
import { Target, Eye, Lightbulb, Shield, HeartHandshake, Award, CheckCircle2 } from "lucide-react";
import CTA from "@/components/home/CTA";
import Link from "next/link";
import ApproachFlow from "@/components/about/ApproachFlow";
import "./about.css";

const missionVision = [
  {
    title: "Our Mission",
    description: "To empower businesses with secure, intelligent, and scalable technology solutions that simplify operations and accelerate digital growth.",
    icon: <Target style={{ width: '28px', height: '28px' }} />
  },
  {
    title: "Our Vision",
    description: "To become a trusted global technology partner delivering innovative fintech and digital solutions that shape the future of business.",
    icon: <Eye style={{ width: '28px', height: '28px' }} />
  },
];

const values = [
  {
    title: "Innovation",
    description: "Continuously embracing modern technologies to create better business solutions.",
    icon: <Lightbulb style={{ width: '24px', height: '24px' }} />
  },
  {
    title: "Integrity",
    description: "Building trust through transparency, honesty, and ethical business practices.",
    icon: <Shield style={{ width: '24px', height: '24px' }} />
  },
  {
    title: "Customer Success",
    description: "Every solution is designed with our clients' long-term success in mind.",
    icon: <HeartHandshake style={{ width: '24px', height: '24px' }} />
  },
  {
    title: "Quality",
    description: "Delivering reliable, secure, and high-quality products without compromise.",
    icon: <Award style={{ width: '24px', height: '24px' }} />
  },
];

const reasons = [
  "FinTech Expertise",
  "AI-Driven Innovation",
  "Business-Focused Development",
  "Scalable Technology",
  "Long-Term Support",
  "Customer-Centric Approach",
];

const approach = [
  {
    step: "01",
    title: "Understand",
    description: "We begin by understanding your business goals and challenges to align our strategy.",
  },
  {
    step: "02",
    title: "Plan",
    description: "We design a practical, scalable technology strategy tailored perfectly to your needs.",
  },
  {
    step: "03",
    title: "Build",
    description: "Our expert team develops secure, robust, and user-focused digital solutions.",
  },
  {
    step: "04",
    title: "Support",
    description: "We provide continuous maintenance, performance improvements, and long-term support.",
  },
];

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: 'var(--bg-primary)', overflow: 'hidden' }}>
      {/* 1. Hero Section */}
      <section className="about-hero">
        <div className="about-hero-container">
          <div className="about-hero-content">
            <span className="about-hero-badge">
              About Vanox Dynamics
            </span>
            <h1>
              Building Technology That <span style={{ color: 'var(--color-primary)' }}>Empowers Businesses</span>
            </h1>
            <p className="about-hero-description">
              Vanox Dynamics Private Limited is a technology and fintech company committed to helping businesses embrace digital transformation through secure payment solutions, AI-powered automation, and custom software development.
            </p>
            <div className="about-hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Partner With Us
              </Link>
              <Link href="/products" className="btn btn-secondary">
                Explore Products
              </Link>
            </div>
          </div>
          
          <div className="about-hero-image-wrapper">
            <Image
              src="/about_hero_tech_v2.jpg"
              alt="Vanox Dynamics Technology Illustration"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="about-section product-overview-section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px', padding: '0 5%' }}>
          <div 
            style={{ flex: '1 1 400px', position: 'relative', minHeight: '320px', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-soft)' }}
          >
            <Image
              src="/about_story_workflow.png"
              alt="Vanox Innovation Workflow"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div style={{ flex: '1 1 400px' }}>
            <div className="about-section-header our-story-header">
              <span>Our Story</span>
              <h2>Who We Are</h2>
            </div>
            <div className="our-story-content" style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p>
                Founded in 2025, Vanox Dynamics Private Limited was established with a vision to simplify digital business operations through innovative technology solutions.
              </p>
              <p>
                We specialize in fintech products, white label platforms, AI-powered business automation, and custom digital solutions that help organizations improve efficiency, enhance customer experiences, and achieve sustainable growth.
              </p>
              <p>
                By combining industry expertise with modern technologies, we deliver scalable, secure, and future-ready solutions tailored to the unique needs of businesses across multiple industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="about-section" style={{ padding: '80px 5%', backgroundColor: 'var(--bg-primary)' }}>
        <div>
          <div className="about-2x2-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {missionVision.map((item) => (
              <div 
                key={item.title} 
                className="feature-card about-compact-card hover-scale"
                style={{ position: 'relative' }}
              >
                <div className="feature-icon" style={{ backgroundColor: 'rgba(22, 163, 74, 0.1)', color: 'var(--color-primary)' }}>
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="about-section features-section" style={{ padding: '80px 5%' }}>
        <div>
          <div className="about-section-header" style={{ textAlign: 'center' }}>
            <span>Our Core Values</span>
            <h2>What Drives Us Forward</h2>
          </div>

          <div className="about-2x2-grid features-grid" style={{ justifyContent: 'center' }}>
            {values.map((value) => (
              <div 
                key={value.title} 
                className="feature-card about-compact-card hover-scale"
                style={{ flex: '1 1 220px', alignItems: 'center', textAlign: 'center' }}
              >
                <div className="feature-icon" style={{ marginBottom: '12px' }}>
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Vanox */}
      <section className="about-section" style={{ padding: '80px 5%', backgroundColor: 'var(--bg-primary)' }}>
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'center' }}>
            <div 
              className="about-section-header"
              style={{ flex: '1 1 350px', margin: 0 }}
            >
              <span>Why Vanox</span>
              <h2>Why Businesses Choose Us</h2>
              <p style={{ color: 'var(--text-body)', fontSize: '15px' }}>
                We don&apos;t just build software; we build robust digital ecosystems that drive real business results, with an unwavering commitment to excellence.
              </p>
            </div>

            <div 
              className="about-2x2-grid"
              style={{ flex: '1 1 450px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}
            >
              {reasons.map((reason, index) => (
                <div 
                  key={index} 
                  className="about-compact-card"
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 16px', backgroundColor: 'var(--bg-secondary)', borderRadius: '14px', border: '1px solid var(--border-color)' }}
                >
                  <CheckCircle2 style={{ width: '18px', height: '18px', color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontWeight: 600, color: 'var(--text-heading)', fontSize: '14px' }}>{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Our Approach */}
      <section className="about-section features-section" style={{ padding: '80px 5%' }}>
        <div>
          <div className="about-section-header" style={{ textAlign: 'center' }}>
            <span>Our Approach</span>
            <h2>How We Work</h2>
          </div>

          <div className="about-flow-wrapper">
            <ApproachFlow steps={approach} />
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <CTA 
        badge="Ready to Transform?"
        heading="Let's Build the Future Together"
        description="Whether you're looking to modernize your business, launch a fintech platform, or build custom software, Vanox Dynamics is ready to turn your ideas into reality."
        primaryBtnText="Contact Us"
        primaryBtnHref="/contact"
        secondaryBtnText="Explore Products"
        secondaryBtnHref="/products"
      />
    </main>
  );
}
