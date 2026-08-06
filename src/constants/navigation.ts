import { 
  CreditCard, 
  Cpu, 
  Briefcase, 
  Bot, 
  Globe, 
  Users, 
  Lock, 
  FileText 
} from "lucide-react";

export const NAVIGATION = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Products",
    children: [
      {
        title: "Payment Solutions",
        href: "/products/payment-solutions",
        icon: CreditCard,
      },
      {
        title: "White Label Solutions",
        href: "/products/white-label-solutions",
        icon: Cpu,
      },
      {
        title: "B2B White Label Solutions",
        href: "/products/b2b-white-label-solutions",
        icon: Briefcase,
      },
      {
        title: "Business Admin Panel & AI Automation",
        href: "/products/business-admin-panel-ai-chatbot-automation",
        icon: Bot,
      },
      {
        title: "Digital Solutions & AI Services",
        href: "/products/digital-solutions-ai-services",
        icon: Globe,
      },
    ],
  },
  {
    title: "Company",
    children: [
      {
        title: "About Us",
        href: "/company/about",
        icon: Users,
      },
      {
        title: "Privacy Policy",
        href: "/company/privacy-policy",
        icon: Lock,
      },
      {
        title: "Terms & Conditions",
        href: "/company/terms",
        icon: FileText,
      },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
