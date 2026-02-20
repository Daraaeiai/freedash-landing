export const SECTION_IDS = {
  features: "features",
  guide: "guide",
  contact: "contact",
} as const;

export const LANDING_MAX_W = "max-w-[1440px]";

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth" });
}
