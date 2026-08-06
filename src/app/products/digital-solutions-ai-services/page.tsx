"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from '@/components/products/ScrollStack';
import CardSwap, { Card } from '@/components/products/CardSwap';
import CTA from "@/components/home/CTA";
import { 
  BarChart3, ShieldCheck, Zap, LineChart, Code2, Cpu, FileText, Blocks, 
  MessageSquare, Lock, Activity, RefreshCw, Layers, Database, Sparkles, Network,
  Brain, Target, Lightbulb, ShoppingCart, Briefcase, Factory, GraduationCap, Truck,
  ChevronDown, Globe, Smartphone, LayoutDashboard, Palette, Cloud, MessageCircle, Workflow, BarChart, Landmark, Plane
} from "lucide-react";
import DigitalHeroAnimation from "@/components/products/DigitalHeroAnimation";
import MagicBento from "@/components/products/MagicBento";
import RotaryTimeline from "@/components/products/RotaryTimeline";
import IndustrySwiper from "@/components/products/IndustrySwiper";
import "./digital-solutions.css";

const services = [
  { title: "Website Development", description: "Professional corporate websites, business portals, and high-performance web applications tailored to your business goals.", icon: <Globe size={28} />, bgImage: "/images/about/tech.png" },
  { title: "E-Commerce Solutions", description: "Online stores with secure payments, inventory management, order processing, and customer management.", icon: <ShoppingCart size={28} />, bgImage: "/images/industries/ecommerce_v2.jpg" },
  { title: "Mobile Apps", description: "Native and cross-platform mobile applications designed for ultimate performance, usability, and scalability.", icon: <Smartphone size={28} />, bgImage: "/images/digital_hero.png" },
  { title: "Business Software", description: "Custom ERP, CRM, inventory, billing, HR, and operational management systems built around your workflows.", icon: <LayoutDashboard size={28} />, bgImage: "/images/b2b_hero_new.jpg" },
  { title: "UI/UX Design", description: "Modern, intuitive, and user-focused interfaces that enhance usability and significantly improve customer experiences.", icon: <Palette size={28} />, bgImage: "/images/digital_overview.png" },
  { title: "Cloud & Deployment", description: "Application deployment, hosting, cloud infrastructure, maintenance, monitoring, and ongoing technical support.", icon: <Cloud size={28} />, bgImage: "/images/industries/startups_v2.jpg" },
];

const aiSolutions = [
  { title: "AI Chatbots", label: "Conversational", description: "Automate customer support, lead generation, and business communication with intelligent conversational AI.", icon: <MessageCircle size={28} /> },
  { title: "Process Automation", label: "Efficiency", description: "Reduce manual effort by automating repetitive workflows, approvals, and operational tasks across your organization.", icon: <Workflow size={28} /> },
  { title: "AI Analytics", label: "Insights", description: "Transform raw business data into meaningful, actionable insights through intelligent reporting and analytics.", icon: <BarChart size={28} /> },
  { title: "Machine Learning", label: "Predictive", description: "Develop intelligent applications capable of predictive modeling, classification, recommendation, and deep automation.", icon: <Brain size={28} /> },
  { title: "Enterprise AI", label: "Integration", description: "Integrate large-scale AI capabilities into existing business systems to vastly improve efficiency and decision-making.", icon: <Network size={28} /> },
  { title: "AI Consulting", label: "Strategy", description: "Identify practical AI opportunities and build comprehensive implementation strategies aligned with your objectives.", icon: <Lightbulb size={28} /> },
];

const process = [
  { 
    step: "01", 
    title: "Discovery", 
    description: "We chat to figure out exactly what your business needs.",
    points: ["Understand your main goals", "Find where you are stuck", "Brainstorm easy solutions"]
  },
  { 
    step: "02", 
    title: "Planning", 
    description: "We map out a clear blueprint so you know what to expect.",
    points: ["Set a realistic timeline", "Pick the best technology", "List out all the features"]
  },
  { 
    step: "03", 
    title: "Design", 
    description: "We draw up beautiful, easy-to-use screens for your users.",
    points: ["Sketch the user journey", "Design stunning visuals", "Make it look great on phones"]
  },
  { 
    step: "04", 
    title: "Development", 
    description: "Our engineers write the code to bring the design to life.",
    points: ["Build the core features", "Connect it to your data", "Make it fast and secure"]
  },
  { 
    step: "05", 
    title: "Testing", 
    description: "We try to break it, so your real users never will.",
    points: ["Hunt for annoying bugs", "Test on different devices", "Make sure it's 100% safe"]
  },
  { 
    step: "06", 
    title: "Deployment", 
    description: "We launch it to the world and keep it running smoothly.",
    points: ["Push it live to the web", "Watch for any issues", "Help you as your business grows"]
  },
];

const reasons = [
  { title: "Business-Focused", description: "Technology aligned directly with your business objectives.", icon: <Target size={28} /> },
  { title: "Expert Engineering", description: "Modern engineering practices and highly scalable architecture.", icon: <Zap size={28} /> },
  { title: "AI-Driven Innovation", description: "Practical AI solutions that create measurable business value.", icon: <Sparkles size={28} /> },
  { title: "Long-Term Partnership", description: "Continuous maintenance, support, and future enhancements.", icon: <ShieldCheck size={28} /> },
];

const accordionIndustries = [
  {
    name: "Retail & E-commerce",
    description: "Omnichannel platforms, inventory AI, and seamless checkout experiences.",
    icon: <ShoppingCart />,
    image: "/images/industries/retail.png"
  },
  {
    name: "Healthcare",
    description: "Telemedicine apps, patient portals, and HIPAA-compliant data systems.",
    icon: <Activity />,
    image: "/images/industries/healthcare.png"
  },
  {
    name: "Finance & FinTech",
    description: "Secure banking portals, trading algorithms, and blockchain integrations.",
    icon: <Briefcase />,
    image: "/images/industries/finance.jpg"
  },
  {
    name: "Manufacturing",
    description: "IoT dashboards, supply chain tracking, and predictive maintenance AI.",
    icon: <Factory />,
    image: "/images/industries/startups.jpg"
  },
  {
    name: "Education",
    description: "E-learning platforms, virtual classrooms, and student management systems.",
    icon: <GraduationCap />,
    image: "/images/industries/education.jpg"
  },
  {
    name: "Logistics",
    description: "Fleet management, route optimization, and real-time shipment tracking.",
    icon: <Truck />,
    image: "/images/industries/logistics.jpg"
  },
  {
    name: "Government & Public Sector",
    description: "Secure citizen portals, digital governance, and public data management systems.",
    icon: <Landmark />,
    image: "/images/industries/ecommerce.png"
  },
  {
    name: "Hospitality & Travel",
    description: "Booking engines, virtual concierge apps, and integrated property management.",
    icon: <Plane />,
    image: "/images/industries/hospitality.jpg"
  }
];

const faqs = [
  { question: "Do you develop custom software?", answer: "Yes. We build custom software solutions tailored perfectly to your business requirements and operational workflows, ensuring a 100% fit." },
  { question: "Can you modernize our existing application?", answer: "Absolutely. We provide comprehensive application upgrades, UI/UX redesigns, performance improvements, and full cloud migration services." },
  { question: "Do you develop both web and mobile applications?", answer: "Yes. Our team develops highly responsive web applications and native/cross-platform mobile apps for modern business needs." },
  { question: "Can AI be integrated into existing systems?", answer: "Yes. AI capabilities can be seamlessly integrated into your existing workflows, legacy applications, and business platforms via robust APIs." },
  { question: "Do you provide maintenance after deployment?", answer: "Yes. We offer ongoing maintenance, dedicated technical support, security updates, and continuous performance optimization services." },
];

const DigitalFAQ = ({ faqs }: { faqs: { question: string; answer: string }[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index}
            style={{ 
              background: '#FFFFFF',
              border: '1px solid',
              borderColor: isOpen ? 'rgba(168, 85, 247, 0.4)' : '#E2E8F0',
              borderRadius: '16px',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              boxShadow: isOpen ? '0 10px 25px rgba(168, 85, 247, 0.1)' : '0 4px 10px rgba(15, 23, 42, 0.02)'
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
                color: '#0F172A',
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
                background: isOpen ? 'rgba(168, 85, 247, 0.1)' : '#F1F5F9',
                color: isOpen ? '#9333EA' : '#64748B',
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
              <div style={{ padding: '0 24px 24px', color: '#475569', fontSize: '16px', lineHeight: 1.6 }}>
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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export default function DigitalSolutionsPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main className="ds-page">
      {/* 1. Hero */}
      <section className="ds-hero">
        <div className="container ds-hero-container">
          <motion.div 
            className="ds-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="ds-hero-badge">
              <Sparkles size={16} />
              Digital Innovation
            </span>
            
            <h1>Engineering Your Digital Future</h1>
            
            <p className="ds-hero-description">
              We craft high-performance web platforms, powerful mobile apps, and custom enterprise software designed to scale operations and accelerate your business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center w-full max-w-sm sm:max-w-none mx-auto">
              <Link 
                href="/contact" 
                className="btn btn-primary w-full sm:w-auto text-center" 
                style={{ 
                  borderRadius: '30px', 
                  background: 'linear-gradient(90deg, #A855F7, #F97316)', 
                  borderColor: 'transparent', 
                  color: '#FFFFFF', 
                  boxShadow: '0 10px 20px rgba(168, 85, 247, 0.3)' 
                }}
              >
                <span className="px-2 py-3 md:px-8 md:py-4 text-[15px] md:text-base font-semibold block">Start Your Project</span>
              </Link>
              <Link 
                href="/contact" 
                className="btn btn-secondary w-full sm:w-auto text-center" 
                style={{ 
                  borderRadius: '30px', 
                  background: 'rgba(255, 255, 255, 0.8)', 
                  borderColor: '#E2E8F0', 
                  color: '#334155' 
                }}
              >
                <span className="px-2 py-3 md:px-8 md:py-4 text-[15px] md:text-base font-semibold block">Speak With Our Team</span>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="ds-hero-image-wrapper"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <DigitalHeroAnimation />
          </motion.div>
        </div>
      </section>



      {/* 3. Our Digital Services */}
      <section className="ds-section bg-slate-50 relative" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div className="w-full relative z-10 py-20 px-10 sm:px-16 md:px-24 max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            
            {/* Left side: Header */}
            <div className="lg:w-5/12 ds-core-engineering">
              <span className="ds-core-badge">Core Engineering</span>
              <h2 className="ds-core-heading">
                Comprehensive<br />
                <span className="ds-core-heading-highlight">Digital Services</span>
              </h2>
              <p className="ds-core-desc">From initial concept to full-scale deployment, we engineer digital products that perform brilliantly and scale effortlessly.</p>
            </div>

            {/* Right side: Cards */}
            <div className="lg:w-7/12 flex justify-center lg:justify-end relative mt-12 lg:mt-0 w-full h-[450px] md:h-[550px] lg:h-[600px]">
              <div className="relative w-full max-w-[500px] h-[40%] lg:h-full">
                <CardSwap
                  cardDistance={isMobile ? 0 : 50}
                  verticalDistance={isMobile ? 70 : 85}
                  delay={3000}
                  pauseOnHover={true}
                  skewAmount={isMobile ? 0 : 8}
                >
                  {services.map((service, index) => (
                    <Card key={index} style={{ 
                      background: '#FFFFFF', 
                      border: '1px solid #E2E8F0', 
                      color: '#0F172A', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      boxShadow: '-10px 20px 40px rgba(0,0,0,0.05)',
                      borderRadius: '16px',
                      overflow: 'hidden'
                    }}>
                      {/* Top Header Bar like in the image */}
                      <div className="flex items-center gap-4 bg-slate-50 border-b border-slate-200" style={{ padding: '24px 32px' }}>
                        <div className="text-purple-600 flex-shrink-0">
                          {React.cloneElement(service.icon as React.ReactElement<any>, { size: 24, strokeWidth: 1.5 })}
                        </div>
                        <span className="font-semibold text-slate-800 tracking-wide text-lg">{service.title}</span>
                      </div>
                      
                      {/* Main visual area */}
                      <div className="flex-1 p-10 relative flex flex-col items-center justify-center overflow-hidden">
                        {/* Blurred Image Background */}
                        <div className="absolute inset-0 z-0 pointer-events-none">
                          <img src={service.bgImage} alt="" className="w-full h-full object-cover blur-sm scale-105" />
                        </div>
                        {/* Light overlay for text contrast */}
                        <div className="absolute inset-0 bg-white/60 z-0 pointer-events-none"></div>

                        <div className="relative z-10 flex flex-col items-center text-center">
                          <div className="mb-8 text-slate-800 flex items-center justify-center">
                             {React.cloneElement(service.icon as React.ReactElement<any>, { size: 80, strokeWidth: 1 })}
                          </div>
                          <p className="text-slate-600 leading-relaxed text-[16px] max-w-[300px] font-medium">{service.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </CardSwap>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AI Solutions */}
      <section className="ds-section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="ds-section-header">
            <span>Intelligence Layer</span>
            <h2>AI Solutions for Smarter Businesses</h2>
            <p>Leverage cutting-edge artificial intelligence to automate workflows, glean deep insights, and unlock new revenue streams.</p>
          </div>

          <div className="mt-12 w-full max-w-[1200px] mx-auto">
            <MagicBento 
              cards={aiSolutions}
              textAutoHide={false}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={400}
              particleCount={15}
              glowColor="168, 85, 247"
            />
          </div>
        </div>
      </section>

      {/* 5. Development Process Timeline */}
      <RotaryTimeline steps={process} />

      {/* 6. Why Vanox */}
      <section className="ds-section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="ds-section-header">
            <span>The Advantage</span>
            <h2>Why Choose Vanox Dynamics</h2>
          </div>

          <motion.div 
            className="ds-grid"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {reasons.map((reason, index) => (
              <motion.div key={index} className="ds-glass-card" variants={itemVariants} style={{ background: '#F8FAFC', padding: '32px' }}>
                <div className="ds-icon-wrapper" style={{ width: '48px', height: '48px', marginBottom: '16px' }}>
                  {reason.icon}
                </div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. Industries */}
      <section className="ds-section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="ds-section-header">
            <span>Versatility</span>
            <h2>Industries We Serve</h2>
          </div>

          <div className="mt-12">
            <IndustrySwiper industries={accordionIndustries} />
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="ds-section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="ds-section-header">
            <span>Clarity</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <DigitalFAQ faqs={faqs} />
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <CTA 
        badge="Digital Solutions"
        heading="Let's Build Your Next Digital Solution"
        description="Whether you're starting from an idea or enhancing an existing platform, Vanox Dynamics is ready to help you build secure, scalable, and future-ready digital solutions."
        primaryBtnText="Start a Project"
        secondaryBtnText="Contact Us"
        secondaryBtnHref="/contact"
      />
    </main>
  );
}
