import Reveal from "./Reveal";

export default function SectionHeader({
  tag,
  title,
  subtitle,
  center = true,
  variant = "light",
}: {
  tag: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <Reveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className={`lux-divider ${center ? "justify-center" : ""}`}>
        <span className={`eyebrow ${isDark ? "text-gold-light" : "text-gold-dark"}`}>
          {tag}
        </span>
      </div>
      <h2
        className={`display mt-5 text-4xl leading-[1.05] md:text-6xl ${
          isDark ? "text-blush-50" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-6 text-base leading-relaxed md:text-lg ${
            isDark ? "text-blush-50/75" : "text-ink-soft"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
