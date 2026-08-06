import Link from "next/link";
import { ButtonProps } from "./Button.types";

export default function Button({
  children,
  href,
  onClick,
}: ButtonProps) {
  if (href) {
    return <Link href={href}>{children}</Link>;
  }

  return <button onClick={onClick}>{children}</button>;
}
