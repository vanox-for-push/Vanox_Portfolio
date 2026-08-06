import React from "react";
import Image from "next/image";

type LogoProps = {
  className?: string;
  iconSize?: number;
  textColor?: string;
  showText?: boolean;
};

export default function Logo({ className = "", iconSize = 32, textColor }: LogoProps) {
  const isLight = textColor === "#FFFFFF" || textColor === "white";
  const isDark = textColor === "#000000" || textColor === "black" || textColor === "#111827";

  // Using the newly uploaded logo4.png.
  // The CSS filter will automatically convert it to pure white for dark backgrounds.
  const logoSrc = "/logos/logo4.png";

  return (
    <div className={className} style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
      <Image
        src={logoSrc}
        alt="Vanox Dynamics"
        width={iconSize * 2}
        height={iconSize * 1.6}
        style={{ 
          height: `${iconSize * 1.6}px`, 
          width: "auto", 
          objectFit: "contain",
          // If it's the dark footer (isLight=true), force white.
          // If it's the light navbar (isLight=false), force black.
          filter: isLight ? "brightness(0) invert(1)" : "brightness(0)"
        }}
        priority
      />
      <span 
        style={{ 
          fontFamily: "var(--font-cinzel), serif", 
          fontWeight: 700, 
          fontSize: `${iconSize * 0.7}px`,
          letterSpacing: "0.05em",
          color: textColor || "inherit",
          whiteSpace: "nowrap",
          lineHeight: 1
        }}
      >
        VANOX DYNAMICS
      </span>
    </div>
  );
}
