import type { Metadata } from "next";
import localFont from "next/font/local";
import { AboutModalProvider } from "@/contexts/about-modal-context";
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
      <body className="font-iranyekan min-h-dvh">
        <AboutModalProvider>{children}</AboutModalProvider>

        <script
          id="goftino-widget"
          dangerouslySetInnerHTML={{
            __html: `
              !function(){var i="pJcjy7",a=window,d=document;function g(){var g=d.createElement("script"),s="https://www.goftino.com/widget/"+i,l=localStorage.getItem("goftino_"+i);g.async=!0,g.src=l?s+"?o="+l:s;d.getElementsByTagName("head")[0].appendChild(g);}"complete"===d.readyState?g():a.attachEvent?a.attachEvent("onload",g):a.addEventListener("load",g,!1);}();
            `,
          }}
        />
      </body>
    </html>
  );
}
