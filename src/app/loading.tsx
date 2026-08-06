"use client";

import React, { useEffect, useState } from "react";

export default function Loading() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "var(--bg-primary, #0B0F19)",
      zIndex: 9999,
    }}>
      <style>{`
        @keyframes pulse-blink {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.98); }
        }
        .blinking-loader {
          animation: pulse-blink 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .loading-text {
          color: var(--text-muted, #94A3B8);
          font-family: var(--font-inter), sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
      `}</style>
      
      <div className="blinking-loader">
        <div className="loading-text">Loading...</div>
      </div>
    </div>
  );
}
