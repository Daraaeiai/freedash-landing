"use client";

type SectionFallbackProps = {
  className?: string;
  minHeight?: string;
};

export default function SectionFallback({ className = "", minHeight = "min-h-[200px]" }: SectionFallbackProps) {
  return (
    <div
      className={`w-full animate-pulse rounded-2xl bg-white/5 ${minHeight} ${className}`}
      aria-hidden
    />
  );
}
