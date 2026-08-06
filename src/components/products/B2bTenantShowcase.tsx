"use client";

import React, { useState, useEffect } from "react";
import { 
  LayoutDashboard, 
  CreditCard, 
  Users, 
  FileText, 
  Package, 
  Code2, 
  MessageSquare,
  Check,
  Search,
  Settings,
  HelpCircle,
  Plus,
  ShieldCheck,
  Layers,
  Sliders,
  Monitor
} from "lucide-react";
import styles from "./B2bTenantShowcase.module.css";

const COLOR_PRESETS = [
  {
    id: "royal",
    name: "Royal Blue",
    primary: "#3b82f6",
    secondary: "#2563eb",
    bgLight: "rgba(59, 130, 246, 0.08)",
  },
  {
    id: "emerald",
    name: "Emerald Green",
    primary: "#10b981",
    secondary: "#059669",
    bgLight: "rgba(16, 185, 129, 0.08)",
  },
  {
    id: "indigo",
    name: "Indigo Violet",
    primary: "#6366f1",
    secondary: "#4f46e5",
    bgLight: "rgba(99, 102, 241, 0.08)",
  },
  {
    id: "amber",
    name: "Sunset Amber",
    primary: "#f59e0b",
    secondary: "#d97706",
    bgLight: "rgba(245, 158, 11, 0.08)",
  },
  {
    id: "slate",
    name: "Slate Gray",
    primary: "#475569",
    secondary: "#334155",
    bgLight: "rgba(71, 85, 105, 0.08)",
  }
];

export default function B2bTenantShowcase() {
  const [orgName, setOrgName] = useState("Apex Commerce");
  const [selectedColor, setSelectedColor] = useState(COLOR_PRESETS[0]);
  const [enableBilling, setEnableBilling] = useState(true);
  const [enableInventory, setEnableInventory] = useState(true);
  const [enableApis, setEnableApis] = useState(false);
  const [enableSms, setEnableSms] = useState(false);
  const [mobileView, setMobileView] = useState<"controls" | "preview">("controls");
  
  const [gateways, setGateways] = useState({
    stripe: true,
    adyen: false,
    bank: true
  });

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        // The container width is approximately window width minus padding (24px on each side = 48px)
        const newScale = Math.min(1, (window.innerWidth - 48) / 680);
        setScale(newScale);
      } else {
        setScale(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slugify = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleGatewayToggle = (gateway: "stripe" | "adyen" | "bank") => {
    setGateways(prev => ({
      ...prev,
      [gateway]: !prev[gateway]
    }));
  };

  return (
    <section className={styles.showcaseSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.badgeLabel}>B2B Tenant Playground</span>
          <h2>Build Your Multi-Tenant SaaS</h2>
          <p>
            Configure a tenant portal workspace below and witness the white-labeled desktop dashboard automatically scale its branding and functionalities.
          </p>
        </div>

        <div className={styles.mobileTabs}>
          <button 
            className={`${styles.mobileTab} ${mobileView === "controls" ? styles.mobileTabActive : ""}`}
            onClick={() => setMobileView("controls")}
          >
            <Sliders size={16} />
            Tenant Setup
          </button>
          <button 
            className={`${styles.mobileTab} ${mobileView === "preview" ? styles.mobileTabActive : ""}`}
            onClick={() => setMobileView("preview")}
          >
            <Monitor size={16} />
            Live Dashboard
          </button>
        </div>

        <div className={styles.grid}>
          {/* Customizer Panel */}
          <div className={`${styles.customizerCard} ${mobileView !== "controls" ? styles.hideOnMobile : ""}`}>
            <div className={styles.panelTitle}>
              <h3>Tenant Workspace Setup</h3>
              <span className={styles.liveTag}>
                <span className={styles.pingDot} />
                B2B Node Engine Active
              </span>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Tenant Organization Name</label>
              <input
                type="text"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value || "My Tenant")}
                maxLength={24}
                className={styles.textInput}
                placeholder="Enter organization name"
              />
              <span className={styles.domainHelp}>
                Custom Domain: <strong>{slugify(orgName || "tenant")}.vanoxb2b.com</strong>
              </span>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Dashboard Color Preset</label>
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
                      borderColor: selectedColor.id === color.id ? "#111827" : "transparent"
                    }}
                    title={color.name}
                  >
                    {selectedColor.id === color.id && <Check size={14} color="#ffffff" />}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.formGroup}>
              <label className={styles.label}>SaaS Feature Modules</label>
              <div className={styles.togglesList}>
                {/* Billing */}
                <div className={styles.toggleRow}>
                  <div className={styles.toggleInfo}>
                    <span className={styles.toggleTitle}>Billing & Invoicing</span>
                    <span className={styles.toggleDesc}>Enables client invoices, refunds, and PDF summaries</span>
                  </div>
                  <button
                    onClick={() => setEnableBilling(!enableBilling)}
                    className={`${styles.switch} ${enableBilling ? styles.switchOn : ""}`}
                  >
                    <span className={styles.switchHandle} />
                  </button>
                </div>

                {/* Inventory */}
                <div className={styles.toggleRow}>
                  <div className={styles.toggleInfo}>
                    <span className={styles.toggleTitle}>Inventory & Catalogues</span>
                    <span className={styles.toggleDesc}>Manage products, pricing tiers, and stock limits</span>
                  </div>
                  <button
                    onClick={() => setEnableInventory(!enableInventory)}
                    className={`${styles.switch} ${enableInventory ? styles.switchOn : ""}`}
                  >
                    <span className={styles.switchHandle} />
                  </button>
                </div>

                {/* Developer APIs */}
                <div className={styles.toggleRow}>
                  <div className={styles.toggleInfo}>
                    <span className={styles.toggleTitle}>Developer API Keys</span>
                    <span className={styles.toggleDesc}>Provides sub-merchant API keys and webhooks consoles</span>
                  </div>
                  <button
                    onClick={() => setEnableApis(!enableApis)}
                    className={`${styles.switch} ${enableApis ? styles.switchOn : ""}`}
                  >
                    <span className={styles.switchHandle} />
                  </button>
                </div>

                {/* SMS alerts */}
                <div className={styles.toggleRow}>
                  <div className={styles.toggleInfo}>
                    <span className={styles.toggleTitle}>SMS Notification Engine</span>
                    <span className={styles.toggleDesc}>Deploy automated transaction SMS alerts to shoppers</span>
                  </div>
                  <button
                    onClick={() => setEnableSms(!enableSms)}
                    className={`${styles.switch} ${enableSms ? styles.switchOn : ""}`}
                  >
                    <span className={styles.switchHandle} />
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Supported Checkout Gateways</label>
              <div className={styles.gatewayGrid}>
                {/* Stripe */}
                <button
                  onClick={() => handleGatewayToggle("stripe")}
                  className={`${styles.gatewayBtn} ${gateways.stripe ? styles.activeGateway : ""}`}
                >
                  <span className={styles.checkbox}>
                    {gateways.stripe && <Check size={12} />}
                  </span>
                  <span>Stripe Connect</span>
                </button>

                {/* Adyen */}
                <button
                  onClick={() => handleGatewayToggle("adyen")}
                  className={`${styles.gatewayBtn} ${gateways.adyen ? styles.activeGateway : ""}`}
                >
                  <span className={styles.checkbox}>
                    {gateways.adyen && <Check size={12} />}
                  </span>
                  <span>Adyen Core</span>
                </button>

                {/* Bank */}
                <button
                  onClick={() => handleGatewayToggle("bank")}
                  className={`${styles.gatewayBtn} ${gateways.bank ? styles.activeGateway : ""}`}
                >
                  <span className={styles.checkbox}>
                    {gateways.bank && <Check size={12} />}
                  </span>
                  <span>Direct Bank ACH</span>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Browser Mockup Side */}
          <div className={`${styles.previewContainer} ${mobileView !== "preview" ? styles.hideOnMobile : ""}`}>
            <div 
              className={styles.scaleWrapper} 
              style={{ 
                height: scale < 1 ? 480 * scale : 480,
                width: scale < 1 ? 680 * scale : 680,
                position: 'relative' 
              }}
            >
              <div 
                className={styles.browserFrame}
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: "top left",
                  position: scale < 1 ? "absolute" : "relative",
                  top: 0,
                  left: 0
                }}
              >
              {/* Browser Header dots and address bar */}
              <div className={styles.browserHeader}>
                <div className={styles.windowControls}>
                  <span className={styles.dotClose} />
                  <span className={styles.dotMin} />
                  <span className={styles.dotMax} />
                </div>
                <div className={styles.addressBar}>
                  🔒 https://{slugify(orgName || "tenant")}.vanoxb2b.com/dashboard
                </div>
              </div>

              {/* Browser content application */}
              <div 
                className={styles.browserContent}
                style={{ 
                  "--theme-primary": selectedColor.primary,
                  "--theme-secondary": selectedColor.secondary,
                  "--theme-bg-light": selectedColor.bgLight
                } as React.CSSProperties}
              >
                {/* Sidebar Navigation */}
                <aside className={styles.sidebar}>
                  <div className={styles.sidebarLogo}>
                    <div className={styles.logoBadge}>
                      <Layers size={14} color="#ffffff" />
                    </div>
                    <span className={styles.logoText}>{orgName}</span>
                  </div>

                  <nav className={styles.navMenu}>
                    <span className={styles.menuLabel}>Main Menu</span>
                    <ul className={styles.menuList}>
                      <li className={`${styles.menuItem} ${styles.activeMenuItem}`}>
                        <LayoutDashboard size={14} />
                        <span>Overview</span>
                      </li>
                      <li className={styles.menuItem}>
                        <CreditCard size={14} />
                        <span>Payments</span>
                      </li>
                      <li className={styles.menuItem}>
                        <Users size={14} />
                        <span>Sub-Merchants</span>
                      </li>

                      {/* Dynamic billing link */}
                      {enableBilling && (
                        <li className={styles.menuItem}>
                          <FileText size={14} />
                          <span>Invoices</span>
                        </li>
                      )}

                      {/* Dynamic inventory link */}
                      {enableInventory && (
                        <li className={styles.menuItem}>
                          <Package size={14} />
                          <span>Catalogues</span>
                        </li>
                      )}

                      {/* Dynamic API keys link */}
                      {enableApis && (
                        <li className={styles.menuItem}>
                          <Code2 size={14} />
                          <span>Developer API</span>
                        </li>
                      )}

                      {/* Dynamic SMS link */}
                      {enableSms && (
                        <li className={styles.menuItem}>
                          <MessageSquare size={14} />
                          <span>SMS Logs</span>
                        </li>
                      )}
                    </ul>
                  </nav>

                  <div className={styles.sidebarFooter}>
                    <Settings size={14} />
                    <span>Portal Settings</span>
                  </div>
                </aside>

                {/* Dashboard Main View */}
                <main className={styles.mainPanel}>
                  {/* Top Navbar inside mockup */}
                  <header className={styles.mockHeader}>
                    <div className={styles.mockSearch}>
                      <Search size={12} />
                      <input type="text" placeholder="Search sub-merchant ID..." disabled />
                    </div>
                    <div className={styles.mockUser}>
                      <HelpCircle size={14} />
                      <div className={styles.mockAvatar}>A</div>
                    </div>
                  </header>

                  <div className={styles.panelBody}>
                    <div className={styles.welcomeRow}>
                      <div>
                        <h2>SaaS Workspace Overview</h2>
                        <p>Merchant Network Management Dashboard</p>
                      </div>
                      <button className={styles.actionBtn}>
                        <Plus size={12} />
                        <span>Add Sub-Merchant</span>
                      </button>
                    </div>

                    {/* Stats */}
                    <div className={styles.statsRow}>
                      <div className={styles.statBox}>
                        <span>Volume Settled</span>
                        <strong>$324.9k</strong>
                      </div>
                      <div className={styles.statBox}>
                        <span>Active Terminals</span>
                        <strong>184</strong>
                      </div>
                      <div className={styles.statBox}>
                        <span>Platform Margin</span>
                        <strong>0.40%</strong>
                      </div>
                    </div>

                    {/* Active Gateways Table status */}
                    <div className={styles.statusCard}>
                      <h4>Deployed Checkout Gateways</h4>
                      <div className={styles.gatewaysList}>
                        {/* Stripe */}
                        <div className={styles.gatewayItem}>
                          <div className={styles.gatewayMeta}>
                            <span className={gateways.stripe ? styles.dotGreen : styles.dotGrey} />
                            <strong>Stripe Connect Routing</strong>
                          </div>
                          <span className={gateways.stripe ? styles.tagActive : styles.tagInactive}>
                            {gateways.stripe ? "Enabled" : "Disabled"}
                          </span>
                        </div>

                        {/* Adyen */}
                        <div className={styles.gatewayItem}>
                          <div className={styles.gatewayMeta}>
                            <span className={gateways.adyen ? styles.dotGreen : styles.dotGrey} />
                            <strong>Adyen Checkout Engine</strong>
                          </div>
                          <span className={gateways.adyen ? styles.tagActive : styles.tagInactive}>
                            {gateways.adyen ? "Enabled" : "Disabled"}
                          </span>
                        </div>

                        {/* Bank ACH */}
                        <div className={styles.gatewayItem}>
                          <div className={styles.gatewayMeta}>
                            <span className={gateways.bank ? styles.dotGreen : styles.dotGrey} />
                            <strong>Direct Bank Transfers (ACH)</strong>
                          </div>
                          <span className={gateways.bank ? styles.tagActive : styles.tagInactive}>
                            {gateways.bank ? "Enabled" : "Disabled"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Compliance Check card */}
                    <div className={styles.complianceCard}>
                      <ShieldCheck size={16} className={styles.shieldIcon} />
                      <div className={styles.complianceMeta}>
                        <strong>Corporate Compliance Standard Active</strong>
                        <p>Merchant verification (KYC/KYB) is sandboxed using Vanox B2B Secure Vault.</p>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
