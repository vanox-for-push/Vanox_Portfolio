import Link from "next/link";
import styles from "./button.module.css";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({ href, variant = "primary", children, className = "", onClick }: ButtonProps) {
  const classNames = `${styles.button} ${variant === "primary" ? styles.primary : styles.secondary} ${className}`.trim();
  if (href) {
    return (
      <Link href={href} className={classNames} onClick={() => onClick?.()}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}
