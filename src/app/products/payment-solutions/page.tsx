"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import CTA from "@/components/home/CTA";
import FAQ from "@/components/common/FAQ";
import PaymentWorkflow from "@/components/products/PaymentWorkflow";
import ExpandingIndustries from "@/components/products/ExpandingIndustries";
import OrbitalFeatures from "@/components/products/OrbitalFeatures";
import {
  CreditCard,
  Volume2,
  Wallet,
  Link as LinkIcon,
  Calendar,
  Landmark,
  Shield,
  Terminal,
  Sparkles,
  BarChart3,
  RefreshCw,
  Layers,
  Briefcase,
  Sliders,
  Wrench,
  Cpu,
  Handshake,
  Flame,
  ShoppingCart,
  Globe,
  Heart,
  GraduationCap,
  UtensilsCrossed,
  Truck,
  Scale,
  Activity,
  Check,
  Zap,
  CheckCircle2,
  BarChart,
  Code2,
  PieChart
} from "lucide-react";

const paymentSolutions = [
  {
    icon: CreditCard,
    title: "Payment Gateway",
    description:
      "Accept secure online payments through websites, mobile applications, and custom platforms using multiple payment methods.",
    features: [
      "UPI, Cards & Net Banking",
      "API Integration",
      "Real-time Transaction Tracking",
      "Secure Payment Processing",
    ],
  },
  {
    icon: Volume2,
    title: "Soundbox",
    description:
      "Instant voice confirmation for merchant payments, improving customer trust and simplifying payment verification.",
    features: [
      "Instant Payment Alerts",
      "QR Payment Support",
      "Voice Confirmation",
      "Merchant Dashboard",
    ],
  },
  {
    icon: Wallet,
    title: "Payouts",
    description:
      "Automate vendor, employee, and customer payouts securely with fast and reliable bulk payment processing.",
    features: [
      "Bulk Transfers",
      "Instant Settlements",
      "Bank Account Verification",
      "Transaction Reports",
    ],
  },
  {
    icon: LinkIcon,
    title: "Payment Links",
    description:
      "Create and share secure payment links through WhatsApp, SMS, Email, or social media without building a website.",
    features: [
      "Share Anywhere",
      "Instant Collections",
      "Payment Tracking",
      "Custom Amounts",
    ],
  },
  {
    icon: Calendar,
    title: "Scheduler",
    description:
      "Automate recurring collections, invoices, and scheduled payment requests.",
    features: [
      "Recurring Payments",
      "Invoice Scheduling",
      "Automatic Reminders",
      "Payment History",
    ],
  },
  {
    icon: Landmark,
    title: "Connected Banking",
    description:
      "Integrate banking services with your business platform for seamless fund management and financial operations.",
    features: [
      "Account Integration",
      "Balance Monitoring",
      "Transaction Management",
      "Secure Banking APIs",
    ],
  },
];

const featuresList = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Advanced security standards, encrypted transactions, and secure infrastructure designed to protect businesses and customer data.",
  },
  {
    icon: Terminal,
    title: "Fast API Integration",
    description:
      "Developer-friendly APIs and documentation enable quick integration with websites, mobile applications, ERP systems, and business software.",
  },
  {
    icon: Sparkles,
    title: "Multiple Payment Methods",
    description:
      "Support digital payment options through UPI, debit cards, credit cards, net banking, wallets, QR payments, and more.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Monitor transactions, settlements, revenue, and payment performance through centralized dashboards and detailed reports.",
  },
  {
    icon: RefreshCw,
    title: "Automated Settlements",
    description:
      "Reduce manual work with automated payment processing, recurring collections, payouts, reconciliation, and settlement workflows.",
  },
  {
    icon: Layers,
    title: "Scalable Infrastructure",
    description:
      "Built to handle growing transaction volumes while maintaining speed, reliability, and business continuity.",
  },
];

const reasonsList = [
  {
    icon: Briefcase,
    title: "Business-First Approach",
    description:
      "Every solution is designed around your business goals, workflows, and future growth.",
  },
  {
    icon: Sliders,
    title: "Customized Solutions",
    description:
      "We build and adapt solutions to meet your specific operational and industry requirements.",
  },
  {
    icon: Wrench,
    title: "End-to-End Expertise",
    description:
      "From planning and development to deployment and ongoing support, we manage the complete solution lifecycle.",
  },
  {
    icon: Cpu,
    title: "Innovation Driven",
    description:
      "We leverage modern technologies including AI, automation, cloud solutions, and fintech to help businesses stay ahead.",
  },
  {
    icon: Handshake,
    title: "Reliable Partnership",
    description:
      "Our focus is on building lasting relationships through quality service, transparency, and continuous support.",
  },
  {
    icon: Flame,
    title: "Future-Ready Technology",
    description:
      "Our platforms are built to evolve with changing business needs and emerging technologies.",
  },
];

const industriesList = [
  {
    icon: ShoppingCart,
    title: "Retail",
    description:
      "Enable fast in-store and online payments with QR codes, payment gateways, and merchant solutions.",
  },
  {
    icon: Globe,
    title: "E-Commerce",
    description:
      "Accept secure online payments, automate settlements, and simplify customer checkout experiences.",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description:
      "Collect consultation fees, hospital payments, and patient fee collections securely.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Simplify fee collection, recurring payments, and student payment management.",
  },
  {
    icon: UtensilsCrossed,
    title: "Hospitality",
    description:
      "Streamline hotel, restaurant, and travel payments with secure digital payment solutions.",
  },
  {
    icon: Truck,
    title: "Logistics",
    description:
      "Manage freight payments, vendor payouts, and automated financial workflows efficiently.",
  },
  {
    icon: Scale,
    title: "Financial Services",
    description:
      "Support secure fund transfers, payouts, payment processing, and banking integrations.",
  },
  {
    icon: Activity,
    title: "Startups & Enterprises",
    description:
      "Build scalable payment infrastructure that grows alongside your business.",
  },
];

const faqsList = [
  {
    question: "What payment methods are supported?",
    answer:
      "Our payment solutions are designed to support a wide range of digital payment methods, including UPI, debit and credit cards, net banking, wallets, QR-based payments, and other supported payment channels.",
  },
  {
    question: "Can I integrate the payment gateway with my website or mobile application?",
    answer:
      "Yes. Our payment gateway is designed to integrate with websites, mobile applications, and custom business platforms using secure APIs.",
  },
  {
    question: "Do you support recurring payments?",
    answer:
      "Yes. Businesses can automate recurring payment requests and scheduled collection workflows.",
  },
  {
    question: "Can I automate payouts to vendors, employees, or customers?",
    answer:
      "Yes. Our payout solution helps businesses automate bulk and scheduled payouts securely while reducing manual effort.",
  },
  {
    question: "Can I collect payments without having a website?",
    answer:
      "Yes. Payment Links allow you to collect payments by sharing secure links through WhatsApp, SMS, email, or other digital channels.",
  },
  {
    question: "How do I get started with Vanox Payment Solutions?",
    answer:
      "Simply contact our team through the enquiry form or speak with our experts. We'll understand your business requirements and recommend the most suitable payment solution.",
  },
];

const carouselSlides = [
  {
    image: "/illustrations/payment_flow_1.png",
    title: "1. Checkout & Tokenization",
    description: "The customer triggers checkout. Custom security algorithms generate tokens to secure critical banking details instantly.",
  },
  {
    image: "/illustrations/payment_flow_2.png",
    title: "2. Gateway Smart Routing",
    description: "The transaction is dynamically routed across multiple payment gateways to achieve absolute success rates.",
  },
  {
    image: "/illustrations/payment_flow_3.png",
    title: "3. Settlement Ledger Posting",
    description: "Funds are cleared, verified, and settled directly into the merchant bank ledger with automated reconciliation reports.",
  },
];

const heroSlides = [
  {
    image: "/illustrations/payment_hero_gateway.png",
    title: "Payment Gateway",
    description: "Seamlessly process global transactions with dynamic routing, multi-currency support, and robust fraud prevention.",
  },
  {
    image: "/illustrations/payin_og.png",
    title: "Payins",
    description: "Accept payments quickly and securely across various channels and methods into your central business account.",
  },
  {
    image: "/illustrations/Payouts_og.jpg",
    title: "Payouts",
    description: "Automate bulk disbursements and vendor payouts effortlessly with our scalable settlement engine.",
  },
];

export default function PaymentSolutions() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null);

  // Auto-play the hero carousel slides every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentHeroSlide]);

  const handleHeroPrev = () => {
    setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleHeroNext = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <main style={{ overflow: "hidden" }}>
      {/* 1. Hero Banner */}
      <section className="hero product-hero">
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-badge">FinTech Solutions</span>
            
            <h1>Secure, Fast & Scalable Payment Solutions for Modern Businesses</h1>
            
            <p className="hero-description">
              Vanox Dynamics provides secure payment infrastructure that enables businesses to accept payments, automate settlements, simplify financial operations, and deliver seamless payment experiences across online and offline channels.
            </p>
            
            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-primary">
                Request Demo
                <i className="fa-solid fa-chevron-right" style={{ fontSize: "14px", marginLeft: "6px" }}></i>
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Contact Sales
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="carousel-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ margin: "0 auto" }}
          >
            <div className="carousel-slide-area">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHeroSlide}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
                >
                  <Image
                    src={heroSlides[currentHeroSlide].image}
                    alt={heroSlides[currentHeroSlide].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ objectFit: "cover", borderRadius: "24px" }}
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="carousel-text-area">
              <h4>{heroSlides[currentHeroSlide].title}</h4>
              <p>{heroSlides[currentHeroSlide].description}</p>
            </div>

            <div className="carousel-controls">
              <button className="carousel-arrow" onClick={handleHeroPrev} aria-label="Previous slide">
                ←
              </button>
              <div className="carousel-dots">
                {heroSlides.map((_, index) => (
                  <span
                    key={index}
                    className={`carousel-dot ${currentHeroSlide === index ? "carousel-dot-active" : ""}`}
                    onClick={() => setCurrentHeroSlide(index)}
                  />
                ))}
              </div>
              <button className="carousel-arrow" onClick={handleHeroNext} aria-label="Next slide">
                →
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Overview / Workflow */}
      <PaymentWorkflow />

      {/* 3. Solutions */}
      <section className="solutions-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span>Our Payment Solutions</span>
            <h2>Comprehensive Payment Solutions for Every Business</h2>
            <p>
              Our payment ecosystem is designed to simplify collections, automate financial operations, and enable secure digital transactions. Whether you&apos;re a startup, enterprise, merchant, or financial institution, Vanox provides scalable payment solutions that adapt to your needs.
            </p>
          </motion.div>

          <div className="solutions-grid">
            {paymentSolutions.map((solution, i) => {
              const Icon = solution.icon;
              const isExpanded = expandedSolution === i;
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <div className={`solution-card ${isExpanded ? 'expanded' : ''}`}>
                    <div 
                      className="solution-card-header"
                      onClick={() => setExpandedSolution(isExpanded ? null : i)}
                    >
                      <div className="solution-icon">
                        <Icon size={18} />
                      </div>
                      <h3>{solution.title}</h3>
                      <div className="solution-accordion-icon">
                        <i className={`fa-solid fa-chevron-${isExpanded ? 'up' : 'down'}`} />
                      </div>
                    </div>
                    <div className="solution-card-body">
                      <p>{solution.description}</p>
                      <div className="solution-features-badges">
                        {solution.features.map((feature) => (
                          <span key={feature} className="solution-feature-badge">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Link href="/contact" className="learn-more-link">Learn More →</Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Features */}
      <OrbitalFeatures />

      {/* 5. Why Vanox */}
      <section className="why-vanox-section">
        <div className="container">
          <div className="why-vanox-grid">
            <motion.div 
              className="why-vanox-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <span>Why Vanox</span>
              <h2>Why Businesses Choose Vanox</h2>
              <p>
                We don&apos;t just deliver technology—we build long-term partnerships that help businesses innovate, streamline operations, and achieve sustainable growth.
              </p>
            </motion.div>

            <div className="why-vanox-cards-grid">
              {reasonsList.map((reason, i) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={reason.title}
                    className="why-vanox-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                  >
                    <div className="why-vanox-icon-box">
                      <Icon size={20} />
                    </div>
                    <div className="why-vanox-card-content">
                      <h3>{reason.title}</h3>
                      <p>{reason.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Industries Using It */}
      <ExpandingIndustries />

      {/* 7. FAQ */}
      <section className="faq-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span>FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>
              Find answers to the most common questions about our payment solutions, integrations, security, and onboarding process.
            </p>
          </motion.div>
          
          <FAQ faqs={faqsList} />
        </div>
      </section>
      
      {/* 8. CTA */}
      <CTA 
        badge="Payment Solutions"
        heading="Ready to Modernize Your Business Payments?"
        description="Whether you're launching a startup, scaling an enterprise, or modernizing your payment infrastructure, Vanox Dynamics is ready to help you build secure, scalable, and future-ready payment solutions."
        primaryBtnText="Request a Demo"
        secondaryBtnText="Contact Our Team"
        secondaryBtnHref="/contact"
      />
    </main>
  );
}
