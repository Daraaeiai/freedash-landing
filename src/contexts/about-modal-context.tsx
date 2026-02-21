"use client";

import React, { createContext, useCallback, useContext, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

const ABOUT_TEXT =
  "«داده نگار اقتصاد» یک شرکت فعال و با‌تجربه در حوزه مشاوره مالی و اقتصادی و راهکارهای مبتنی بر هوش مصنوعی است که با هدف ارتقای کیفی دانش اقتصادی و توانمندسازی مخاطبان فعالیت می‌کند. این مجموعه به مدیریت دانیال دارایی، با رویکردی داده‌محور و نوآورانه، خدمات تخصصی، آموزشی و تحلیلی خود را از طریق مشاوره و برگزاری وبینارهای تخصصی ارائه می‌دهد.";

type AboutModalContextValue = {
  openAboutModal: () => void;
};

const AboutModalContext = createContext<AboutModalContextValue | null>(null);

export function AboutModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const openAboutModal = useCallback(() => setOpen(true), []);

  return (
    <AboutModalContext.Provider value={{ openAboutModal }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg font-iranyekan relative">
          <DialogClose className="absolute left-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-gray-400 hover:text-gray-200 transition-opacity" aria-label="بستن">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </DialogClose>
          <DialogHeader>
            <DialogTitle>درباره ما</DialogTitle>
            <DialogDescription className="text-zinc-400 text-base leading-8 text-justify pt-2">
              {ABOUT_TEXT}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </AboutModalContext.Provider>
  );
}

export function useAboutModal(): AboutModalContextValue {
  const ctx = useContext(AboutModalContext);
  if (!ctx) throw new Error("useAboutModal must be used within AboutModalProvider");
  return ctx;
}
