import { CardProps } from "./Card.types";

export default function Card({
  children,
}: CardProps) {
  return (
    <div>
      {children}
    </div>
  );
}
