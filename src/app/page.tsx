"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import SectionFallback from "@/components/SectionFallback";
import { LANDING_MAX_W } from "@/lib/constants";

const fallback = (minHeight: string, className?: string) =>
  () => <SectionFallback minHeight={minHeight} className={className} />;

const LandingHeader = dynamic(() => import("@/components/LandingHeader"), {
  loading: fallback("min-h-[72px]", "rounded-none"),
});

const HeroSection = dynamic(() => import("@/app/sections/HeroSection"), {
  loading: fallback("min-h-[50vh]"),
});

const FeaturesSection = dynamic(() => import("@/app/sections/FeaturesSection"), {
  loading: fallback("min-h-[320px]"),
});

const GuideSection = dynamic(() => import("@/app/sections/GuideSection"), {
  loading: fallback("min-h-[240px]"),
});

const ContactSection = dynamic(() => import("@/app/sections/ContactSection"), {
  loading: fallback("min-h-[200px]"),
});

const LandingFooter = dynamic(() => import("@/app/sections/LandingFooter"), {
  loading: fallback("min-h-[180px]"),
});

const HERO_GRADIENT = "radial-gradient(ellipse 120% 80% at 50% 35%, #1A1E30 0%, #10141F 100%)";
const PAGE_BG = "#10141F";

export default function LandingPage() {
  return (
    <div dir="rtl" className="min-h-dvh w-full overflow-x-hidden font-iranyekan" style={{ backgroundColor: PAGE_BG, ["--landing-max-width" as string]: "1440px" }}>
      <div className="w-full min-h-[90vh] relative" style={{ background: HERO_GRADIENT }}>
        <div className="w-full">
          <Suspense fallback={<SectionFallback minHeight="min-h-[72px]" className="rounded-none" />}>
            <LandingHeader />
          </Suspense>
        </div>
        <div className={`${LANDING_MAX_W} mx-auto`}>
          <Suspense fallback={<SectionFallback minHeight="min-h-[50vh]" />}>
            <HeroSection />
          </Suspense>
        </div>
      </div>
      <div className={`${LANDING_MAX_W} mx-auto rounded-[42px] overflow-hidden relative`} style={{ backgroundColor: PAGE_BG }}>
        <Suspense fallback={<SectionFallback minHeight="min-h-[320px]" />}>
          <FeaturesSection />
        </Suspense>
        <Suspense fallback={<SectionFallback minHeight="min-h-[240px]" />}>
          <GuideSection />
        </Suspense>
        <Suspense fallback={<SectionFallback minHeight="min-h-[200px]" />}>
          <ContactSection />
        </Suspense>
        <Suspense fallback={<SectionFallback minHeight="min-h-[180px]" />}>
          <LandingFooter />
        </Suspense>
      </div>
    </div>
  );
}
