"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Wallet, 
  Shield, 
  Landmark, 
  Send, 
  ArrowDownLeft, 
  QrCode, 
  TrendingUp, 
  PiggyBank, 
  Moon, 
  Sun,
  Check,
  MousePointerClick,
  ChevronLeft,
  CheckCircle2,
  Building2,
  CreditCard,
  Smartphone,
  Sliders
} from "lucide-react";
import styles from "./WhiteLabelShowcase.module.css";

const COLOR_PRESETS = [
  {
    id: "emerald",
    name: "Emerald Green",
    primary: "#10b981",
    secondary: "#059669",
    gradientEnd: "#34d399",
    rgba: "rgba(16, 185, 129, 0.1)",
    cardBg: "linear-gradient(135deg, #10b981 0%, #047857 100%)"
  },
  {
    id: "royal",
    name: "Royal Blue",
    primary: "#3b82f6",
    secondary: "#2563eb",
    gradientEnd: "#60a5fa",
    rgba: "rgba(59, 130, 246, 0.1)",
    cardBg: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
  },
  {
    id: "indigo",
    name: "Indigo Violet",
    primary: "#6366f1",
    secondary: "#4f46e5",
    gradientEnd: "#818cf8",
    rgba: "rgba(99, 102, 241, 0.1)",
    cardBg: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)"
  },
  {
    id: "rose",
    name: "Rose Pink",
    primary: "#ec4899",
    secondary: "#db2777",
    gradientEnd: "#f472b6",
    rgba: "rgba(236, 72, 153, 0.1)",
    cardBg: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)"
  },
  {
    id: "amber",
    name: "Sunset Amber",
    primary: "#f59e0b",
    secondary: "#d97706",
    gradientEnd: "#fbbf24",
    rgba: "rgba(245, 158, 11, 0.1)",
    cardBg: "linear-gradient(135deg, #f59e0b 0%, #b45309 100%)"
  }
];

const LOGO_PRESETS = [
  { id: "sparkle", name: "Sparkle", icon: Sparkles },
  { id: "wallet", name: "Wallet", icon: Wallet },
  { id: "shield", name: "Shield", icon: Shield },
  { id: "bank", name: "Bank", icon: Landmark }
];

export default function WhiteLabelShowcase() {
  const [companyName, setCompanyName] = useState("wanape");
  const [selectedColor, setSelectedColor] = useState(COLOR_PRESETS[0]);
  const [selectedLogo, setSelectedLogo] = useState(LOGO_PRESETS[0]);
  const [darkMode, setDarkMode] = useState(false);
  const [enableSavings, setEnableSavings] = useState(true);
  const [showVisaLogo, setShowVisaLogo] = useState(true);
  const [currentScreen, setCurrentScreen] = useState<"dashboard" | "payment" | "success">("dashboard");
  const [selectedMethod, setSelectedMethod] = useState<"wallet" | "card" | "bank">("wallet");
  const [mobileView, setMobileView] = useState<"controls" | "preview">("controls");

  const LogoIcon = selectedLogo.icon;

  return (
    <section className={styles.showcaseSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.badgeLabel}>Interactive Showcase</span>
          <h2>
            Customize Your <span className={styles.animatedHighlight}>FinTech App</span>
          </h2>
          <p>
            Adjust the branding settings in the merchant dashboard below and watch the customer&apos;s mobile payment application update instantly in real-time.
          </p>
        </div>

        <div className={styles.mobileTabs}>
          <button 
            className={`${styles.mobileTab} ${mobileView === "controls" ? styles.mobileTabActive : ""}`}
            onClick={() => setMobileView("controls")}
          >
            <Sliders size={16} />
            Brand Controls
          </button>
          <button 
            className={`${styles.mobileTab} ${mobileView === "preview" ? styles.mobileTabActive : ""}`}
            onClick={() => setMobileView("preview")}
          >
            <Smartphone size={16} />
            Live Preview
          </button>
        </div>

        <div className={styles.grid}>
          {/* Customizer Panel */}
          <motion.div 
            className={`${styles.customizerCard} ${mobileView === "preview" ? styles.hideOnMobile : ""}`}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className={styles.panelTitle}>
              <h3>Merchant Brand Control Panel</h3>
              <span className={styles.liveIndicator}>
                <span className={styles.pulseDot} />
                Live Sync Active
              </span>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Company/App Name</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                maxLength={20}
                className={styles.textInput}
                placeholder="wanape"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Brand Primary Color</label>
              
              <div className={styles.colorGrid}>
                {COLOR_PRESETS.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    className={`${styles.colorBtn} ${
                      selectedColor.id === color.id ? styles.activeColorBtn : ""
                    }`}
                    style={{ 
                      backgroundColor: color.primary,
                      borderColor: selectedColor.id === color.id ? "#ffffff" : "transparent"
                    }}
                    title={color.name}
                  >
                    {selectedColor.id === color.id && <Check size={14} color="#ffffff" className={styles.checkIcon} />}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>App Logo Symbol</label>
              <div className={styles.logoGrid}>
                {LOGO_PRESETS.map((logo) => {
                  const CurrentIcon = logo.icon;
                  return (
                    <button
                      key={logo.id}
                      onClick={() => setSelectedLogo(logo)}
                      className={`${styles.logoBtn} ${
                        selectedLogo.id === logo.id ? styles.activeLogoBtn : ""
                      }`}
                    >
                      <CurrentIcon size={16} />
                      <span>{logo.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Preview Layout & Features</label>
              <div className={styles.togglesContainer}>
                {/* Dark Mode toggle */}
                <div className={styles.toggleRow}>
                  <div className={styles.toggleInfo}>
                    <span className={styles.toggleTitle}>App Interface Theme</span>
                    <span className={styles.toggleDesc}>Switch mobile preview theme</span>
                  </div>
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className={`${styles.switch} ${darkMode ? styles.switchOn : ""}`}
                  >
                    <span className={styles.switchHandle}>
                      {darkMode ? <Moon size={10} /> : <Sun size={10} />}
                    </span>
                  </button>
                </div>

                {/* Savings Pocket toggle */}
                <div className={styles.toggleRow}>
                  <div className={styles.toggleInfo}>
                    <span className={styles.toggleTitle}>Enable Savings Pocket</span>
                    <span className={styles.toggleDesc}>Toggle auto-savings bucket feature</span>
                  </div>
                  <button
                    onClick={() => setEnableSavings(!enableSavings)}
                    className={`${styles.switch} ${enableSavings ? styles.switchOn : ""}`}
                  >
                    <span className={styles.switchHandle} />
                  </button>
                </div>

                {/* Visa Badge toggle */}
                <div className={styles.toggleRow}>
                  <div className={styles.toggleInfo}>
                    <span className={styles.toggleTitle}>Card Scheme Co-Branding</span>
                    <span className={styles.toggleDesc}>Display network scheme (Visa) on card</span>
                  </div>
                  <button
                    onClick={() => setShowVisaLogo(!showVisaLogo)}
                    className={`${styles.switch} ${showVisaLogo ? styles.switchOn : ""}`}
                  >
                    <span className={styles.switchHandle} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Preview Frame */}
          <motion.div 
            className={`${styles.previewContainer} ${mobileView === "controls" ? styles.hideOnMobile : ""}`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className={styles.deviceFrame}>
              <div className={styles.speaker} />
              <div className={styles.camera} />
              
              {/* Phone screen container */}
              <div 
                className={`${styles.phoneScreen} ${darkMode ? styles.phoneDark : styles.phoneLight}`}
                style={{ 
                  "--brand-color": selectedColor.primary,
                  "--brand-color-secondary": selectedColor.secondary,
                  "--brand-color-rgba": selectedColor.rgba,
                  "--brand-gradient-end": selectedColor.gradientEnd
                } as React.CSSProperties}
              >
                {/* Status Bar */}
                <div className={styles.statusBar}>
                  <span className={styles.time}>09:41</span>
                  <div className={styles.statusIcons}>
                    <span className={styles.signal}>📶</span>
                    <span className={styles.wifi}>📶</span>
                    <span className={styles.battery}>🔋</span>
                  </div>
                </div>

                {/* App Navigation */}
                <div className={styles.phoneHeader}>
                  {currentScreen === "dashboard" ? (
                    <>
                      <div className={styles.brandBadge}>
                        <LogoIcon size={16} className={styles.logoColor} />
                        <span className={styles.appTitle}>{companyName || "wanape"}</span>
                      </div>
                      <div className={styles.avatar}>
                        <span>JD</span>
                      </div>
                    </>
                  ) : (
                    <button 
                      className={styles.backBtn}
                      onClick={() => setCurrentScreen("dashboard")}
                    >
                      <ChevronLeft size={20} />
                      <span>Back</span>
                    </button>
                  )}
                </div>

                <div className={styles.screenScrollArea}>
                  <AnimatePresence mode="wait">
                    {currentScreen === "dashboard" && (
                      <motion.div 
                        key="dashboard"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className={styles.screenView}
                      >
                        {/* Wallet Balance widget */}
                        <div className={styles.balanceContainer}>
                          <span className={styles.balanceLabel}>Available Balance</span>
                          <span className={styles.balanceAmount}>$4,892.45</span>
                        </div>

                {/* Branded Card Mockup */}
                <div 
                  className={styles.creditCard} 
                  style={{ background: selectedColor.cardBg }}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.cardLogo}>
                      <LogoIcon size={18} color="#ffffff" />
                      <span className={styles.cardBrandName}>{companyName || "wanape"}</span>
                    </div>
                    {showVisaLogo && (
                      <span className={styles.visaText}>VISA</span>
                    )}
                  </div>
                  <div className={styles.cardNumber}>••••  ••••  ••••  8824</div>
                  <div className={styles.cardFooter}>
                    <div className={styles.cardHolder}>
                      <span>CARDHOLDER</span>
                      <strong>JOHN DOE</strong>
                    </div>
                    <div className={styles.cardExpiry}>
                      <span>EXPIRES</span>
                      <strong>08/29</strong>
                    </div>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className={styles.quickActions}>
                  <div className={styles.actionItem} style={{ position: "relative" }}>
                    <button 
                      className={styles.actionBtn}
                      onClick={() => setCurrentScreen("payment")}
                    >
                      <Send size={16} />
                    </button>
                    <span>Send</span>
                    
                    {/* Animated Pointer for Send Button */}
                    <motion.div
                      initial={{ opacity: 0, x: 20, y: 20 }}
                      animate={{ 
                        opacity: [0, 1, 1, 0], 
                        x: [20, 0, 0, 20], 
                        y: [20, 0, 5, 20],
                        scale: [1, 1, 0.9, 1]
                      }}
                      transition={{ 
                        duration: 2.5, 
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "easeInOut"
                      }}
                      style={{
                        position: "absolute",
                        top: "20px",
                        left: "25px",
                        zIndex: 20,
                        pointerEvents: "none",
                        color: selectedColor.primary,
                        filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.2))"
                      }}
                    >
                      <MousePointerClick size={24} fill="white" />
                    </motion.div>
                  </div>
                  <div className={styles.actionItem}>
                    <button className={styles.actionBtn}>
                      <ArrowDownLeft size={16} />
                    </button>
                    <span>Request</span>
                  </div>
                  <div className={styles.actionItem}>
                    <button className={styles.actionBtn}>
                      <QrCode size={16} />
                    </button>
                    <span>Pay QR</span>
                  </div>
                  <div className={styles.actionItem}>
                    <button className={styles.actionBtn}>
                      <TrendingUp size={16} />
                    </button>
                    <span>Invest</span>
                  </div>
                </div>

                {/* Savings Pocket component */}
                {enableSavings && (
                  <div className={styles.savingsPocket}>
                    <div className={styles.pocketHeader}>
                      <div className={styles.pocketTitle}>
                        <PiggyBank size={14} className={styles.pocketIcon} />
                        <span>Savings Goal</span>
                      </div>
                      <span className={styles.pocketAction}>View</span>
                    </div>
                    <div className={styles.pocketDetails}>
                      <span className={styles.pocketBalance}>$1,240.00 Saved</span>
                      <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{ width: "62%" }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {currentScreen === "payment" && (
              <motion.div 
                key="payment"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className={styles.screenView}
              >
                <div className={styles.paymentScreen}>
                  <div className={styles.payHeader}>
                    <h3 className={styles.payTitle}>Send Money</h3>
                    <span className={styles.paySubtitle}>To Sarah Miller</span>
                  </div>
                  
                  <div className={styles.amountInputContainer}>
                    <span className={styles.currencySymbol}>$</span>
                    <input type="text" className={styles.amountInput} value="250.00" readOnly />
                  </div>

                  <div className={styles.paymentMethods}>
                    <h4 className={styles.methodsTitle}>Payment Method</h4>
                    
                    <button 
                      className={`${styles.methodBtn} ${selectedMethod === "wallet" ? styles.methodActive : ""}`}
                      onClick={() => setSelectedMethod("wallet")}
                    >
                      <Wallet size={18} />
                      <div className={styles.methodDetails}>
                        <strong>{(companyName || "wanape")} Wallet</strong>
                        <span>Bal: $4,892.45</span>
                      </div>
                      {selectedMethod === "wallet" && <CheckCircle2 size={18} className={styles.methodCheck} />}
                    </button>
                    
                    <button 
                      className={`${styles.methodBtn} ${selectedMethod === "card" ? styles.methodActive : ""}`}
                      onClick={() => setSelectedMethod("card")}
                    >
                      <CreditCard size={18} />
                      <div className={styles.methodDetails}>
                        <strong>Visa ending in 8824</strong>
                        <span>Linked Card</span>
                      </div>
                      {selectedMethod === "card" && <CheckCircle2 size={18} className={styles.methodCheck} />}
                    </button>
                    
                    <button 
                      className={`${styles.methodBtn} ${selectedMethod === "bank" ? styles.methodActive : ""}`}
                      onClick={() => setSelectedMethod("bank")}
                    >
                      <Building2 size={18} />
                      <div className={styles.methodDetails}>
                        <strong>Chase Bank</strong>
                        <span>Checking •••• 1234</span>
                      </div>
                      {selectedMethod === "bank" && <CheckCircle2 size={18} className={styles.methodCheck} />}
                    </button>
                  </div>

                  <button 
                    className={styles.proceedBtn}
                    style={{ background: selectedColor.primary }}
                    onClick={() => setCurrentScreen("success")}
                  >
                    Proceed to Pay
                  </button>
                </div>
              </motion.div>
            )}

            {currentScreen === "success" && (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={styles.screenView}
              >
                <div className={styles.successScreen}>
                  <div className={styles.successIconWrapper} style={{ color: selectedColor.primary, backgroundColor: selectedColor.rgba }}>
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className={styles.successTitle}>Payment Successful</h3>
                  <p className={styles.successDesc}>Your payment has been processed successfully.</p>
                  
                  <div className={styles.receiptBox}>
                    <div className={styles.receiptRow}>
                      <span>Amount</span>
                      <strong>$250.00</strong>
                    </div>
                    <div className={styles.receiptRow}>
                      <span>Reference</span>
                      <strong>TXN-9823741</strong>
                    </div>
                    <div className={styles.receiptRow}>
                      <span>Date</span>
                      <strong>Today, 09:42 AM</strong>
                    </div>
                  </div>

                  <button 
                    className={styles.backHomeBtn}
                    onClick={() => setCurrentScreen("dashboard")}
                  >
                    Back to Dashboard
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
              </div>
            </div>
            <div className={styles.previewTag}>
              Live Mobile App Preview
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
