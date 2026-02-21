"use client";

import Image from "next/image";
import { useCallback } from "react";
import { MoreIcon } from "@/components/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAboutModal } from "@/contexts/about-modal-context";
import { LANDING_MAX_W, SECTION_IDS, scrollToSection } from "@/lib/constants";

function LandingHeader() {
  const { openAboutModal } = useAboutModal();
  const onFeatures = useCallback(() => scrollToSection(SECTION_IDS.features), []);
  const onGuide = useCallback(() => scrollToSection(SECTION_IDS.guide), []);
  const onContact = useCallback(() => scrollToSection(SECTION_IDS.contact), []);

  return (
    <header className={`w-full ${LANDING_MAX_W} mx-auto px-4 lg:px-12 pt-8 flex justify-between items-center relative z-50`}>
      <div className="flex items-center gap-2">
        <Image src="/images/logo.svg" alt="logo" width={28} height={24} className="mb-4 lg:mb-4" />
        <span className="text-gray-200 text-lg font-medium font-iranyekan leading-9">موج سواری 3D</span>
      </div>

      {/* موبایل: دکمه منو + دراپ‌داون زیر آیکون */}
      <div className="flex lg:hidden items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="w-10 h-10 rounded-2xl border border-gray-200 flex items-center justify-center text-white"
              aria-label="منو"
              suppressHydrationWarning
            >
              <MoreIcon className="w-6 h-6" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" align="end" className="min-w-[200px] ml-4 font-iranyekan">
            <DropdownMenuItem onClick={onFeatures} className="cursor-pointer text-right justify-end text-base font-semibold">
              قابلیت ها
            </DropdownMenuItem>
            {/* <DropdownMenuItem onClick={onGuide} className="cursor-pointer text-right justify-end text-base font-semibold">
              آموزش‌ها
            </DropdownMenuItem> */}
            <DropdownMenuItem onSelect={openAboutModal} className="cursor-pointer text-right justify-end text-base font-semibold">
              درباره ما
            </DropdownMenuItem>
            {/* <DropdownMenuItem onClick={onContact} className="cursor-pointer text-right justify-end text-base font-semibold">
              تماس با ما
            </DropdownMenuItem> */}
            <DropdownMenuItem asChild>
              <a href="#" className="text-right justify-end text-base font-semibold border-t border-slate-700 text-gray-200 mt-2 pt-2">
                شروع رایگان
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* دسکتاپ: ناو + CTA */}
      <nav className="hidden lg:flex items-center gap-8">
        <button type="button" onClick={onFeatures} className="text-neutral-400 text-lg font-semibold font-iranyekan hover:text-white transition-colors">قابلیت ها</button>
        {/* <button type="button" onClick={onGuide} className="text-neutral-400 text-lg font-semibold font-iranyekan hover:text-white transition-colors">آموزش‌ها</button> */}
        <button type="button" onClick={openAboutModal} className="text-neutral-400 text-lg font-semibold font-iranyekan hover:text-white transition-colors">درباره ما</button>
        {/* <button type="button" onClick={onContact} className="text-neutral-400 text-lg font-semibold font-iranyekan hover:text-white transition-colors">تماس با ما</button> */}
      </nav>
      <div className="hidden lg:flex items-center">
        <a href="#" className="px-8 py-2 rounded-3xl outline outline-1 outline-gray-200 flex items-center justify-center gap-2.5 hover:bg-gray-800 transition-colors">
          <span className="text-gray-200 hover:text-white transition-colors text-lg font-semibold font-iranyekan">شروع رایگان</span>
        </a>
      </div>
    </header>
  );
}

export default LandingHeader;
