"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAVIGATION } from "@/constants/navigation";
import styles from "@/components/layout/navbar.module.css";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "@/components/ui/button";

import Logo from "@/components/common/logo";

type NavItem = {
  title: string;
  href?: string;
  children?: { title: string; href: string; icon?: React.ElementType }[];
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleDropdown = (title: string) => {
    if (openDropdown === title) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(title);
    }
  };

  const isLinkActive = (href?: string) => {
    if (!href) return false;
    return pathname === href;
  };

  const isDropdownActive = (children?: { href: string }[]) => {
    if (!children) return false;
    return children.some(child => pathname === child.href);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <img
            src="/logos/VANOX_B_v2.png"
            alt="Vanox Logo"
            style={{ 
              height: "38px", 
              width: "auto", 
              objectFit: "contain",
            }}
          />
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button 
          className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.isOpen : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className={styles.hamburgerIcon}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Desktop Menu */}
        <ul className={styles.desktopMenu}>
          {NAVIGATION.map((item: NavItem, index: number) => {
            if (item.title === "Vanox Dynamics") return null;

            return (
              <li key={index} className={styles.navItem}>
                {item.href ? (
                  <Link 
                    href={item.href} 
                    className={`${styles['nav-link']} ${isLinkActive(item.href) ? styles.active : ""}`}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <>
                    <button 
                      className={`${styles.dropdownToggle} ${isDropdownActive(item.children) ? styles.active : ""}`}
                    >
                      {item.title}
                      <ChevronDown size={16} className={styles.chevron} />
                    </button>
                    {item.children && (
                      <div className={styles.dropdownMenu}>
                        <ul className={styles.dropdownList}>
                          {item.children.map((child: { title: string; href: string; icon?: React.ElementType }, childIndex: number) => (
                            <li key={childIndex}>
                              <Link 
                                href={child.href} 
                                className={`${styles.dropdownItem} ${isLinkActive(child.href) ? styles.active : ""}`}
                              >
                                {child.icon && <child.icon size={18} className={styles.dropdownIcon} />}
                                {child.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}
              </li>
            );
          })}
          <li>
            <Button href="/contact#contact-form" variant="primary">Get Started</Button>
          </li>
        </ul>

        {/* Mobile Menu Overlay */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.menuOpen : styles.menuClosed}`}>
          <ul className={styles.mobileList}>
            {NAVIGATION.map((item: NavItem, index: number) => {
              if (item.title === "Vanox Dynamics") return null;

              return (
                <li key={index} className={styles.mobileItem}>
                  {item.href ? (
                    <Link 
                      href={item.href} 
                      className={`${styles.navLink} ${isLinkActive(item.href) ? styles.active : ""}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      <button 
                        className={`${styles.mobileDropdownToggle} ${isDropdownActive(item.children) ? styles.active : ""}`}
                        onClick={() => toggleDropdown(item.title)}
                      >
                        {item.title}
                        <ChevronDown size={20} className={styles.mobileChevron} />
                      </button>
                      
                      {item.children && (
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === item.title ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                          <ul className={styles.mobileDropdownList}>
                            {item.children.map((child: { title: string; href: string; icon?: React.ElementType }, childIndex: number) => (
                              <li key={childIndex}>
                                <Link 
                                  href={child.href} 
                                  className={`${styles.mobileDropdownItem} ${isLinkActive(child.href) ? styles.active : ""}`}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {child.icon && <child.icon size={18} className={styles.mobileDropdownIcon} />}
                                  {child.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  )}
                </li>
              );
            })}
            <li className="mt-4">
              <Link 
                href="/contact#contact-form" 
                className={styles.mobileCtaButton}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}