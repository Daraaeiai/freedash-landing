"use client";

import Image from "next/image";
import { useCallback } from "react";
import { useAboutModal } from "@/contexts/about-modal-context";
import { LANDING_MAX_W, SECTION_IDS, scrollToSection } from "@/lib/constants";

const FOOTER_COPY = {
  brand: "موج سواری 3D",
  desc: "موج‌سواری 3D یک محصول خدماتی از شرکت داده نگار اقتصاد به مدیر عاملی دانیال دارایی، مدرس و فعال حوزه سرمایه‌گذاری دیجیتال است که با هدف کمک به سرمایه‌گذاران و بالا بردن بهره‌وری سرمایه شما در بازار متلاطم کنونی طراحی شده است.",
  quickLinks: "دسترسی سریع",
  rules: "قوانین",
  rulesList: ["قوانین و مقررات", "حریم خصوصی", "شرایط استفاده", "رویه‌های امنیتی"] as const,
};

export default function LandingFooter() {
  const { openAboutModal } = useAboutModal();
  const onFeatures = useCallback(() => scrollToSection(SECTION_IDS.features), []);
  const onGuide = useCallback(() => scrollToSection(SECTION_IDS.guide), []);
  const onContact = useCallback(() => scrollToSection(SECTION_IDS.contact), []);

  return (
    <footer className={`w-full ${LANDING_MAX_W} mx-auto border-t border-slate-700 pt-16 pb-12 px-4 lg:px-12 md:mt-20 mt-10`}>
      {/* لایه دسکتاپ */}
      <div className="hidden lg:block">
        <div className="flex justify-around items-start gap-12 h-[80%]">
          <div className="flex flex-col items-center">
            <div className="w-full flex items-center gap-2 mb-5 mt-[6px]">
              <Image src="/images/logo.svg" alt="logo" width={38} height={34} className="mb-4" />
              <span className="text-white/80 text-2xl font-medium font-iranyekan">{FOOTER_COPY.brand}</span>
            </div>
            <p className="text-zinc-500 text-xl font-normal font-iranyekan leading-8 max-w-[500px] text-justify">{FOOTER_COPY.desc}</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-white/80 text-2xl font-medium font-iranyekan leading-10 mb-6 mt-[6px]">{FOOTER_COPY.quickLinks}</h3>
            <ul className="flex flex-col items-center gap-2">
              <li><button type="button" onClick={onFeatures} className="text-zinc-500 text-xl font-normal font-iranyekan leading-6 hover:text-gray-300">قابلیت ها</button></li>
              {/* <li><button type="button" onClick={onGuide} className="text-zinc-500 text-xl font-normal font-iranyekan leading-6 hover:text-gray-300">آموزش‌ها</button></li>
              <li><button type="button" onClick={onContact} className="text-zinc-500 text-xl font-normal font-iranyekan leading-6 hover:text-gray-300">تماس با ما</button></li> */}
              <li><button type="button" onClick={openAboutModal} className="text-zinc-500 text-xl font-normal font-iranyekan leading-6 hover:text-gray-300">درباره ما</button></li>
            </ul>
          </div>
          {/* <div className="flex flex-col items-center">
            <h3 className="text-white/80 text-2xl font-medium font-iranyekan leading-10 mb-6 mt-[6px]">{FOOTER_COPY.rules}</h3>
            <ul className="flex flex-col items-center gap-2">
              {FOOTER_COPY.rulesList.map((item) => (
                <li key={item}><a href="#" className="text-zinc-500 text-xl font-normal font-iranyekan leading-6 hover:text-gray-300">{item}</a></li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>

      {/* لایه موبایل — همان بخش‌ها، چیدمان متفاوت */}
      <div className="lg:hidden flex flex-col px-2 gap-8 pt-4">
        <div className="flex flex-col text-right">
          <div className="flex items-center gap-2 mb-4">
            <Image src="/images/logo.svg" alt="logo" width={36} height={32} />
            <span className="text-gray-200 text-xl font-medium font-iranyekan">{FOOTER_COPY.brand}</span>
          </div>
          <p className="text-zinc-500 text-sm font-normal font-iranyekan leading-5 max-w-[320px] text-justify">{FOOTER_COPY.desc}</p>
        </div>
        <div className="flex flex-col text-right">
          <h3 className="text-gray-200 text-xl font-medium font-iranyekan mb-4">{FOOTER_COPY.quickLinks}</h3>
          <ul className="flex flex-col gap-2">
            <li><button type="button" onClick={onFeatures} className="text-zinc-500 text-lg font-iranyekan">قابلیت ها</button></li>
            {/* <li><button type="button" onClick={onGuide} className="text-zinc-500 text-lg font-iranyekan">آموزش‌ها</button></li>
            <li><button type="button" onClick={onContact} className="text-zinc-500 text-lg font-iranyekan">تماس با ما</button></li> */}
            <li><button type="button" onClick={openAboutModal} className="text-zinc-500 text-lg font-iranyekan">درباره ما</button></li>
          </ul>
        </div>
        {/* <div className="flex flex-col">
          <h3 className="text-gray-200 text-xl font-medium font-iranyekan mb-4">{FOOTER_COPY.rules}</h3>
          <ul className="flex flex-col gap-2">
            {FOOTER_COPY.rulesList.map((item) => (
              <li key={item}><a href="#" className="text-zinc-500 text-lg font-iranyekan">{item}</a></li>
            ))}
          </ul>
        </div> */}
      </div>
    </footer>
  );
}
