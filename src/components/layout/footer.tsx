"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Mail, 
  MapPin, 
  CreditCard, 
  Cpu, 
  Briefcase, 
  Bot, 
  Globe, 
  Users, 
  MessageSquare, 
  Lock, 
  FileText,
  User
} from "lucide-react";
import styles from "./footer.module.css";
import Logo from "@/components/common/logo";

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const ThreadsIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21.5c-4 0-7.5-3.5-7.5-8.5s3.5-8.5 7.5-8.5c4 0 7.5 3.5 7.5 8s-3.5 8-7.5 8z"></path>
    <path d="M12 17.5c-2.5 0-4.5-1.5-4.5-4.5s2-4.5 4.5-4.5 4.5 1.5 4.5 4.5c0 1.5-1 3-3 3-1.5 0-2.5-1-2.5-2.5"></path>
    <path d="M12 8.5v6.5"></path>
  </svg>
);

const YoutubeIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.17 1 12 1 12s0 3.83.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.83 23 12 23 12s0-3.83-.46-5.58z"></path>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
  </svg>
);

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1: Brand */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brandLogo}>
              <img
                src="/logos/VANOX_B_v2.png"
                alt="Vanox Logo"
                style={{ 
                  height: "38px", 
                  width: "auto", 
                  objectFit: "contain",
                  filter: "brightness(0) invert(1)"
                }}
              />
            </Link>
            <p className={styles.brandDesc}>
              Empowering modern enterprises with secure payment solutions, AI automation, and scalable digital platforms.
            </p>
            <div className={styles.leadershipSection}>
              <h4 className={styles.leadershipHeading}>Management</h4>
              <div className={styles.leaderItem}>
                <div className={styles.leaderIconWrapper}>
                  <Briefcase size={16} className={styles.leaderIcon} />
                </div>
                <div className={styles.leaderInfo}>
                  <p className={styles.leaderName}>
                    <a href="https://www.linkedin.com/in/ajmal-killath-b5b0a5382" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                      Ajmal Killath
                    </a>
                  </p>
                  <p className={styles.leaderRole}>Founder & Managing Director</p>
                </div>
              </div>
              <div className={styles.leaderItem}>
                <div className={styles.leaderIconWrapper}>
                  <Users size={16} className={styles.leaderIcon} />
                </div>
                <div className={styles.leaderInfo}>
                  <p className={styles.leaderName}>
                    <a href="https://www.linkedin.com/in/mahammed-raafiz-43088b340" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                      Mahammad Raafiz
                    </a>
                  </p>
                  <p className={styles.leaderRole}>Co-Founder & Managing Director</p>
                </div>
              </div>
              <div className={styles.leaderItem}>
                <div className={styles.leaderIconWrapper}>
                  <Cpu size={16} className={styles.leaderIcon} />
                </div>
                <div className={styles.leaderInfo}>
                  <p className={styles.leaderName}>
                    <a href="https://in.linkedin.com/in/b-mohammad-nizamuddin-8b9a18259" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                      B Mohammad Nizamuddin
                    </a>
                  </p>
                  <p className={styles.leaderRole}>Head of Digital Solutions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h3 className={styles.colHeading}>Solutions</h3>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link href="/products/payment-solutions">
                  <CreditCard size={15} className={styles.linkIcon} />
                  <span>Payment Solutions</span>
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/products/white-label-solutions">
                  <Cpu size={15} className={styles.linkIcon} />
                  <span>White Label FinTech</span>
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/products/b2b-white-label-solutions">
                  <Briefcase size={15} className={styles.linkIcon} />
                  <span>B2B Enterprise</span>
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/products/business-admin-panel-ai-chatbot-automation">
                  <Bot size={15} className={styles.linkIcon} />
                  <span>AI & Automation</span>
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/products/digital-solutions-ai-services">
                  <Globe size={15} className={styles.linkIcon} />
                  <span>Digital Services</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className={styles.colHeading}>Company</h3>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link href="/company/about">
                  <Users size={15} className={styles.linkIcon} />
                  <span>About Us</span>
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/contact">
                  <MessageSquare size={15} className={styles.linkIcon} />
                  <span>Contact</span>
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/company/privacy-policy">
                  <Lock size={15} className={styles.linkIcon} />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/company/terms">
                  <FileText size={15} className={styles.linkIcon} />
                  <span>Terms & Conditions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div>
            <h3 className={styles.colHeading}>Get in Touch</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <Mail size={18} className={styles.contactIcon} />
                <span>support@vanoxdynamics.com</span>
              </li>
              <li className={styles.contactItem}>
                <MapPin size={18} className={styles.contactIcon} />
                <span>Mangalore, Karnataka, India</span>
              </li>
            </ul>
            
            <div className={styles.newsletter}>
              <h4 className={styles.newsletterHeading}>Subscribe to our newsletter</h4>
              <form className={styles.newsletterForm}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  required 
                  className={styles.newsletterInput}
                />
                <button 
                  type="button" 
                  className={styles.newsletterButton}
                >
                  Subscribe
                </button>
              </form>
            </div>
            
            <div className={styles.socialsWrapper}>
              <div className={styles.socials}>
                <a href="https://x.com/vanoxdynamics/status/2079527642634780695?s=20" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={styles.socialIcon}><TwitterIcon size={18} /></a>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7480579455912919040" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIcon}><LinkedinIcon size={18} /></a>
                <a href="https://www.facebook.com/share/p/1C4puuS5fq/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.socialIcon}><FacebookIcon size={18} /></a>
                <a href="https://www.instagram.com/p/DbDYkc5meuc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialIcon}><InstagramIcon size={18} /></a>
                <a href="https://www.threads.com/@vanoxdynamics.pvt.ltd/post/DbDZ-ZGICsI?xmt=AQG0s4begv929ol24KuXwjLsZr1NVxHerPEOCh-stUQdVA" target="_blank" rel="noopener noreferrer" aria-label="Threads" className={styles.socialIcon}><ThreadsIcon size={18} /></a>
                <a href="http://youtube.com/post/UgkxdVbG9zEMF8RaDbMPQoDV8F8Th9ZcZRCK?si=Vbmi-BxB7LEsnVP_" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={styles.socialIcon}><YoutubeIcon size={18} /></a>
              </div>
            </div>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottomRow}>
          <p>
            © {new Date().getFullYear()} Vanox Dynamics Private Limited. All Rights Reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}