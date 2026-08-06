import { Metadata } from "next";

export const metadata: Metadata = {
  title: "White Label FinTech Solutions – Vanox Dynamics",
  description: "Launch your own digital payment ecosystem under your brand with Vanox Dynamics. Our White Label Solutions enable secure payment services, merchant management, and scalability.",
};

export default function WhiteLabelLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
