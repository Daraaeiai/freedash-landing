import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const iranYekan = localFont({
  src: [
    { path: "../../public/fonts/iranyekan/IRANYekanX-Light.ttf", weight: "300", style: "normal" },
    { path: "../../public/fonts/iranyekan/IRANYekanX-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/iranyekan/IRANYekanX-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/iranyekan/IRANYekanX-DemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/iranyekan/IRANYekanX-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-iranyekan",
});

export const metadata: Metadata = {
  title: "موج سواری 3D | لندینگ",
  description: "داشبوردی یکپارچه برای تحلیل، توصیه‌های هوشمند و مشاوره تخصصی",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" className={iranYekan.variable}>
      <body className="font-iranyekan min-h-dvh">{children}</body>
    </html>
  );
}
