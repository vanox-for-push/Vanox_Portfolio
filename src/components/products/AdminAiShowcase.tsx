"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Bot, 
  Send, 
  Terminal, 
  Calendar, 
  Percent, 
  Activity, 
  CheckCircle2, 
  MessageSquare,
  Sliders,
  Play,
  Headphones,
  Rocket,
  Cpu,
  Briefcase
} from "lucide-react";
import styles from "./AdminAiShowcase.module.css";

type Message = {
  sender: "user" | "bot" | "system";
  text: React.ReactNode;
  actionButton?: {
    text: string;
    action: string;
    payload?: string;
  };
};

const PERSONALITIES = [
  {
    id: "support",
    name: "Support Assistant",
    role: "Professional & Helpful",
    avatar: <Headphones size={18} />,
    color: "#3b82f6"
  },
  {
    id: "marketing",
    name: "Marketing Guru",
    role: "Enthusiastic & Playful",
    avatar: <Rocket size={18} />,
    color: "#ec4899"
  },
  {
    id: "tech",
    name: "Tech Specialist",
    role: "Analytical & Geeky",
    avatar: <Cpu size={18} />,
    color: "#10b981"
  },
  {
    id: "sales",
    name: "Sales Champion",
    role: "Persuasive & Direct",
    avatar: <Briefcase size={18} />,
    color: "#f59e0b"
  }
];

function formatGreeting(baseMsg: string, personalityId: string) {
  switch (personalityId) {
    case "marketing":
      return `Hey there! 👋 ${baseMsg} Let's build something epic! 🚀✨`;
    case "tech":
      return `[System Core Active] Welcome. Initialize sequence. ${baseMsg}`;
    case "sales":
      return `Welcome! ${baseMsg} Let's double your conversion rates starting today!`;
    default:
      return `Hello. ${baseMsg}`;
  }
}

export default function AdminAiShowcase() {
  const [welcomeMsg, setWelcomeMsg] = useState("Hello! How can I help you automate your business workflow today?");
  const [selectedPersonality, setSelectedPersonality] = useState(PERSONALITIES[0]);
  const [enableBooking, setEnableBooking] = useState(true);
  const [enableCoupons, setEnableCoupons] = useState(true);
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [mobileView, setMobileView] = useState<"customizer" | "preview">("customizer");
  
  useEffect(() => {
    const time = new Date().toLocaleTimeString();
    setConsoleLogs([`[${time}] AI System Core initialized. Dashboard connection secure.`]);
  }, []);

  const [isTyping, setIsTyping] = useState(false);
  const [userText, setUserText] = useState("");

  const addConsoleLog = (msg: string) => {
    const time = new Date().toLocaleTimeString();
    setConsoleLogs(prev => [`[${time}] ${msg}`, ...prev.slice(0, 15)]);
  };
  
  // Simulated changing stats
  const [stats, setStats] = useState({
    sessions: 1420,
    accuracy: 97.4,
    handled: 88.5,
    latency: 240
  });

  const chatEndRef = useRef<HTMLDivElement>(null);
  const presetsRef = useRef<HTMLDivElement>(null);

  // Drag to scroll logic for presets
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!presetsRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - presetsRef.current.offsetLeft);
    setScrollLeft(presetsRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !presetsRef.current) return;
    e.preventDefault();
    const x = e.pageX - presetsRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    presetsRef.current.scrollLeft = scrollLeft - walk;
  };

  // Scroll to bottom of chat only when user interacts (prevents forced page scroll on mount)
  useEffect(() => {
    if (chatHistory.length > 0 || isTyping) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [chatHistory, isTyping]);

  // Jitter stats to make it feel alive
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        sessions: prev.sessions + (Math.random() > 0.6 ? 1 : 0),
        accuracy: Math.min(99.9, Math.max(95.0, Number((prev.accuracy + (Math.random() - 0.5) * 0.1).toFixed(1)))),
        handled: Math.min(100, Math.max(80.0, Number((prev.handled + (Math.random() - 0.5) * 0.2).toFixed(1)))),
        latency: Math.round(prev.latency + (Math.random() - 0.5) * 10)
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const newHistory = [...chatHistory, { sender: "user" as const, text }];
    setChatHistory(newHistory);
    setUserText("");
    setIsTyping(true);

    const intent = analyzeIntent(text);
    addConsoleLog(`Detected user intent: [${intent.name}] (Confidence: ${(intent.confidence * 100).toFixed(1)}%)`);

    setTimeout(() => {
      const botResponse = generateBotResponse(intent.name, selectedPersonality.id);
      setIsTyping(false);
      setChatHistory(prev => [...prev, botResponse]);
      addConsoleLog(`Triggered bot action: [${botResponse.actionButton?.action || "default_reply"}]`);
    }, 1200);
  };

  const analyzeIntent = (text: string) => {
    const t = text.toLowerCase();
    if (t.includes("book") || t.includes("demo") || t.includes("call") || t.includes("schedule") || t.includes("calendar")) {
      return { name: "ask_booking", confidence: 0.98 };
    }
    if (t.includes("discount") || t.includes("coupon") || t.includes("promo") || t.includes("offer") || t.includes("cheap") || t.includes("price")) {
      return { name: "ask_discount", confidence: 0.95 };
    }
    if (t.includes("secure") || t.includes("safety") || t.includes("privacy") || t.includes("safe") || t.includes("certify")) {
      return { name: "ask_security", confidence: 0.92 };
    }
    return { name: "general_services", confidence: 0.89 };
  };

  const generateBotResponse = (intent: string, personalityId: string): Message => {
    // Determine triggers depending on current switches
    if (intent === "ask_booking") {
      if (enableBooking) {
        return {
          sender: "bot",
          text: getBookingText(personalityId),
          actionButton: { text: "Book 15-Min Demo", action: "trigger_booking" }
        };
      } else {
        return {
          sender: "bot",
          text: getBookingDisabledText(personalityId)
        };
      }
    }

    if (intent === "ask_discount") {
      if (enableCoupons) {
        return {
          sender: "bot",
          text: getDiscountText(personalityId),
          actionButton: { text: "Copy VANOX20", action: "trigger_coupon", payload: "VANOX20" }
        };
      } else {
        return {
          sender: "bot",
          text: getDiscountDisabledText(personalityId)
        };
      }
    }

    if (intent === "ask_security") {
      return {
        sender: "bot",
        text: getSecurityText(personalityId)
      };
    }

    // Default reply
    return {
      sender: "bot",
      text: getGeneralText(personalityId)
    };
  };

  // Response text banks
  const getBookingText = (p: string) => {
    if (p === "marketing") return "Oh, let's hang out! Book a quick live demo with our specialists and we'll show you how to automate your revenue streams. Click the calendar bubble below! 📅🎉";
    if (p === "tech") return "Initializing schedule API. Click below to retrieve open calendar slots and bind a demo thread to our specialists.";
    if (p === "sales") return "Absolutely. The best way to calculate your exact support savings is to book a quick demo. Lock in your session below right now!";
    return "I would be happy to coordinate a demo with our technical specialists. You can pick an available time slot directly through our booking calendar below.";
  };

  const getBookingDisabledText = (p: string) => {
    if (p === "marketing") return "Oops! Our automated booking nodes are temporarily offline! But drop us a message through the contact page and we will write back ASAP! 💌";
    if (p === "tech") return "Booking nodes currently deactivated in server config. Please submit an inquiry block to execute manual scheduling.";
    if (p === "sales") return "Our automated calendar is currently fully booked, but our support specialists are standing by. Reach out via the contact form to lock in a slot!";
    return "Our booking calendar is currently unavailable. Please submit a contact form and a representative will schedule a demo with you manually.";
  };

  const getDiscountText = (p: string) => {
    if (p === "marketing") return "Boom! Yes! You've unlocked our secret automation discount! Use code **VANOX20** for a cool 20% off our plan! Grab it below! 🎁💥";
    if (p === "tech") return "Querying discount catalog... Match found: [Token ID: VANOX20]. Value: 0.20 (20% deduction). Click below to apply token.";
    if (p === "sales") return "Good choice. We have a special activation promotion right now. Use code VANOX20 below to secure 20% off your setup cost instantly.";
    return "Yes, we are currently offering an introductory promotion. You can apply the coupon code VANOX20 at checkout for a 20% discount on your automation setup.";
  };

  const getDiscountDisabledText = (p: string) => {
    if (p === "marketing") return "Aww! No coupon codes are active right now! But subscribe to our newsletter and we will notify you the second they drop! 🔔";
    if (p === "tech") return "Discount database returned 0 active tokens. If you have an enterprise partner token, please input it directly.";
    if (p === "sales") return "We don't have public coupons active right now, but we offer volume discounts. Speak with our sales representative to get custom pricing.";
    return "There are no active promotional coupon codes at this time. Please contact sales for customized package options.";
  };

  const getSecurityText = (p: string) => {
    if (p === "marketing") return "1000% safe! 🛡️ We use top-tier bank-grade encryption so all your business data, chats, and APIs are locked tight! Sleep easy! 🔒";
    if (p === "tech") return "Protocol verified. System utilizes AES-256 standard encryption, SSL endpoints, and strict SOC-2 compliance wrappers. Data isolation assured.";
    if (p === "sales") return "Security is a top priority. Our platform runs on fully certified cloud environments with end-to-end encryption. Rest assured your business operations are fully secure.";
    return "Our system features full end-to-end encryption, regular penetration testing, and SOC compliance to ensure your data and customer conversations remain secure.";
  };

  const getGeneralText = (p: string) => {
    if (p === "marketing") return (
      <>
        We automate everything! Here is what we can do for you:
        <ul style={{ margin: '8px 0', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <li>🚀 24/7 AI Chatbot Pipelines</li>
          <li>📊 Smart CRM Syncing</li>
          <li>🎯 Automated Lead Nurturing</li>
        </ul>
        What makes you curious?
      </>
    );
    
    if (p === "tech") return (
      <>
        System supports full automation layers:
        <ul style={{ margin: '8px 0', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <li>⚙️ Custom LLM Integrations</li>
          <li>🔌 Multi-channel API Endpoints</li>
          <li>🗄️ Secure Database Triggers</li>
        </ul>
        Ready for configuration.
      </>
    );
    
    if (p === "sales") return (
      <>
        Our dashboard integrates AI to drive ROI. Core features:
        <ul style={{ margin: '8px 0', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <li>📈 Reduce support tickets by 60%</li>
          <li>💸 Streamline lead qualification</li>
          <li>🤝 Close sales automatically</li>
        </ul>
        How can we help you save costs today?
      </>
    );
    
    return (
      <>
        Our AI automation suite covers:
        <ul style={{ margin: '8px 0', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <li>Conversational Bot Building</li>
          <li>Smart Ticket Routing</li>
          <li>Merchant Dashboards</li>
          <li>Custom CRM Reporting</li>
        </ul>
        Tell me what workflow you want to automate.
      </>
    );
  };

  return (
    <section className={styles.showcaseSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.badgeLabel}>AI Interactive Simulator</span>
          <h2 style={{ color: '#000000' }}>Build and Test Your AI Agent</h2>
          <p>
            Configure bot behaviors in the Admin Dashboard on the left and test the automated chat reactions instantly in the live mockup on the right.
          </p>
        </div>

        {/* Mobile Toggle UI */}
        <div className={styles.mobileTabs}>
          <button 
            className={`${styles.mobileTab} ${mobileView === 'customizer' ? styles.mobileTabActive : ''}`}
            onClick={() => setMobileView('customizer')}
          >
            <Sliders size={16} />
            <span>Agent Controls</span>
          </button>
          <button 
            className={`${styles.mobileTab} ${mobileView === 'preview' ? styles.mobileTabActive : ''}`}
            onClick={() => setMobileView('preview')}
          >
            <Play size={16} />
            <span>Live Output</span>
          </button>
        </div>

        <div className={styles.grid}>
          {/* Admin Dashboard Side */}
          <div className={`${styles.adminPanel} ${mobileView !== 'customizer' ? styles.hideOnMobile : ''}`}>
            <div className={styles.adminHeader}>
              <div className={styles.brandTitle}>
                <Bot size={20} className={styles.logoIcon} />
                <h3>AI Agent Admin Dashboard</h3>
              </div>
              <span className={styles.liveTag}>
                <span className={styles.pingDot} />
                Active
              </span>
            </div>

            {/* Performance KPIs */}
            <div className={styles.kpiGrid}>
              <div className={styles.kpiCard}>
                <div className={styles.kpiMeta}>
                  <MessageSquare size={14} className={styles.kpiIconBlue} />
                  <span>Total Chats</span>
                </div>
                <span className={styles.kpiValue}>{stats.sessions}</span>
              </div>
              <div className={styles.kpiCard}>
                <div className={styles.kpiMeta}>
                  <CheckCircle2 size={14} className={styles.kpiIconGreen} />
                  <span>AI Accuracy</span>
                </div>
                <span className={styles.kpiValue}>{stats.accuracy}%</span>
              </div>
              <div className={styles.kpiCard}>
                <div className={styles.kpiMeta}>
                  <Activity size={14} className={styles.kpiIconPurple} />
                  <span>Avg Latency</span>
                </div>
                <span className={styles.kpiValue}>{stats.latency}ms</span>
              </div>
            </div>

            {/* Config Form */}
            <div className={styles.configArea}>
              <div className={styles.formGroup}>
                <label className={styles.fieldLabel}>Custom Welcome Greeting</label>
                <textarea
                  value={welcomeMsg}
                  onChange={(e) => setWelcomeMsg(e.target.value)}
                  maxLength={100}
                  className={styles.textArea}
                  rows={2}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.fieldLabel}>Agent Personality Profile</label>
                <div className={styles.personalityGrid}>
                  {PERSONALITIES.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setSelectedPersonality(p);
                        addConsoleLog(`Personality profile changed to [${p.name}]`);
                      }}
                      className={`${styles.personalityBtn} ${
                        selectedPersonality.id === p.id ? styles.activePersonalityBtn : ""
                      }`}
                      style={{ "--theme-color": p.color } as React.CSSProperties}
                    >
                      <span className={styles.pAvatar}>{p.avatar}</span>
                      <div className={styles.pInfo}>
                        <strong className={styles.pName}>{p.name}</strong>
                        <span className={styles.pRole}>{p.role}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.formGroup}>
                <label className={styles.fieldLabel}>Automation Routing Rules</label>
                <div className={styles.toggles}>
                  {/* Calendar booking toggle */}
                  <div className={styles.toggleRow}>
                    <div className={styles.toggleMeta}>
                      <Calendar size={15} />
                      <div>
                        <span>Enable Auto-Booking</span>
                        <p>Triggers meeting scheduler link</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setEnableBooking(!enableBooking);
                        addConsoleLog(`Rule Update: Auto-Booking set to [${!enableBooking}]`);
                      }}
                      className={`${styles.switch} ${enableBooking ? styles.switchOn : ""}`}
                    >
                      <span className={styles.switchHandle} />
                    </button>
                  </div>

                  {/* Promo codes toggle */}
                  <div className={styles.toggleRow}>
                    <div className={styles.toggleMeta}>
                      <Percent size={15} />
                      <div>
                        <span>Enable Coupon Codes</span>
                        <p>Allows dispensing VANOX20 code</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setEnableCoupons(!enableCoupons);
                        addConsoleLog(`Rule Update: Coupon code handouts set to [${!enableCoupons}]`);
                      }}
                      className={`${styles.switch} ${enableCoupons ? styles.switchOn : ""}`}
                    >
                      <span className={styles.switchHandle} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Chat Simulator Side */}
          <div className={`${styles.simulatorPanel} ${mobileView !== 'preview' ? styles.hideOnMobile : ''}`}>
            {/* The Chat Device */}
            <div className={styles.deviceWrapper}>
              <div className={styles.deviceHeader}>
                <div className={styles.speaker} />
                <div className={styles.camera} />
              </div>
              
              <div className={styles.deviceScreen}>
                {/* Chat Top Bar */}
                <div className={styles.chatHeader} style={{ backgroundColor: selectedPersonality.color }}>
                  <span className={styles.botAvatar}>{selectedPersonality.avatar}</span>
                  <div className={styles.botMeta}>
                    <strong>{selectedPersonality.name}</strong>
                    <span>{selectedPersonality.role}</span>
                  </div>
                  <div className={styles.botOnline}>● Online</div>
                </div>

                {/* Chat Message Scroll */}
                <div className={styles.chatArea}>
                  {/* Initial greeting message */}
                  <div className={`${styles.messageRow} ${styles.msgBot}`}>
                    <span className={styles.msgAvatar}>{selectedPersonality.avatar}</span>
                    <div className={styles.messageBubble}>
                      <div>{formatGreeting(welcomeMsg, selectedPersonality.id)}</div>
                    </div>
                  </div>

                  {chatHistory.map((msg, i) => (
                    <div 
                      key={i} 
                      className={`${styles.messageRow} ${
                        msg.sender === "user" ? styles.msgUser : styles.msgBot
                      }`}
                    >
                      {msg.sender === "bot" && (
                        <span className={styles.msgAvatar}>{selectedPersonality.avatar}</span>
                      )}
                      <div className={styles.messageBubble}>
                        <div>{msg.text}</div>
                        {msg.actionButton && (
                          <button 
                            className={styles.bubbleActionBtn}
                            style={{ backgroundColor: selectedPersonality.color }}
                            onClick={() => {
                              addConsoleLog(`Triggered button payload execution: [${msg.actionButton?.action}]`);
                              if (msg.actionButton?.action === "trigger_coupon") {
                                alert(`Copied coupon code: ${msg.actionButton.payload}!`);
                              } else {
                                alert(`Opening scheduler popup...`);
                              }
                            }}
                          >
                            {msg.actionButton.text}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className={`${styles.messageRow} ${styles.msgBot}`}>
                      <span className={styles.msgAvatar}>{selectedPersonality.avatar}</span>
                      <div className={styles.messageBubbleTyping}>
                        <span className={styles.typingDot} />
                        <span className={styles.typingDot} />
                        <span className={styles.typingDot} />
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>

                {/* Prompt Presets */}
                <div 
                  className={styles.presets}
                  ref={presetsRef}
                  onMouseDown={handleMouseDown}
                  onMouseLeave={handleMouseLeaveOrUp}
                  onMouseUp={handleMouseLeaveOrUp}
                  onMouseMove={handleMouseMove}
                  style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                >
                  <button onClick={() => handleSendMessage("What are your services?")}>
                    Services?
                  </button>
                  <button onClick={() => handleSendMessage("Do you have a discount?")}>
                    Discounts?
                  </button>
                  <button onClick={() => handleSendMessage("How do I book a demo?")}>
                    Book Demo?
                  </button>
                  <button onClick={() => handleSendMessage("Is this system secure?")}>
                    Security?
                  </button>
                </div>

                {/* Input box */}
                <div className={styles.inputArea}>
                  <input
                    type="text"
                    value={userText}
                    onChange={(e) => setUserText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage(userText)}
                    placeholder="Type to chat with AI..."
                    className={styles.chatInput}
                  />
                  <button 
                    onClick={() => handleSendMessage(userText)}
                    className={styles.sendBtn}
                    style={{ backgroundColor: selectedPersonality.color }}
                  >
                    <Send size={14} color="#ffffff" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
