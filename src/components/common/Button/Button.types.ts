import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
}
