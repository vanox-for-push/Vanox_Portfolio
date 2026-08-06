import { SectionHeadingProps } from "./SectionHeading.types";

export default function SectionHeading({
  badge,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div>
      {badge && <span>{badge}</span>}

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
}
