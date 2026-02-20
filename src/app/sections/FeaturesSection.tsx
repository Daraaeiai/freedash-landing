"use client";

import Image from "next/image";
import { useState } from "react";
import { DiagramIcon, GraphIcon, InformationIcon, BuySellIcon } from "@/components/icons";
import { SECTION_IDS } from "@/lib/constants";

const FEATURE_ICONS = { chart: DiagramIcon, analysis: GraphIcon, risk: InformationIcon, suggest: BuySellIcon } as const;

const FEATURES_LIST: { title: string; desc: string; icon: keyof typeof FEATURE_ICONS }[] = [
  { title: "تحلیل سود و زیان", desc: "عملکرد سرمایه‌گذاری‌های خود را در بازه‌های زمانی مختلف بررسی کنید و دقیقاً بدانید کجا سود کرده‌اید و کجا نیاز به بهینه‌سازی دارید.", icon: "analysis" },
  { title: "نمایش لحظه‌ای ارزش کل سرمایه", desc: "ارزش تمامی دارایی‌های شما به‌صورت لحظه‌ای محاسبه و نمایش داده می‌شود تا همیشه دید دقیق و به‌روز از وضعیت سرمایه‌تان داشته باشید.", icon: "chart" },
  { title: "بررسی میزان ریسک پرتفوی", desc: "ترکیب دارایی‌های شما از نظر میزان ریسک تحلیل می‌شود تا بتوانید تعادل بهتری بین سودآوری و امنیت سرمایه ایجاد کنید.", icon: "risk" },
  { title: "پیشنهاد خرید / فروش بر اساس داده", desc: "سیستم هوشمند ما با تحلیل داده‌های بازار، فرصت‌های مناسب خرید یا فروش را پیشنهاد می‌دهد تا تصمیم‌های شما بر پایه اطلاعات باشد، نه احساس.", icon: "suggest" },
];

function FeatureCard({ title, desc, icon, className }: { title: string; desc: string; icon: keyof typeof FEATURE_ICONS; className?: string }) {
  const IconComponent = FEATURE_ICONS[icon];
  return (
    <div className={`px-6 py-4 bg-slate-900/80 rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-600 inline-flex items-center gap-4 max-w-[384px] ${className ?? ""}`}>
      <div className="p-2 bg-blue-600 rounded-2xl flex-shrink-0 w-12 h-12 flex items-center justify-center text-gray-200">
        <IconComponent className="w-6 h-6" />
      </div>
      <div className="flex-1 min-w-0 space-y-2">
        <h3 className="text-right text-white/80 text-base font-semibold font-iranyekan">{title}</h3>
        <p className="text-right text-zinc-400 text-xs font-medium font-iranyekan">{desc}</p>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  const [selectedPlan, setSelectedPlan] = useState<"6month" | "1year">("6month");
  const plans = { "6month": { price: "۳۵,۰۰۰,۰۰۰ تومان" }, "1year": { price: "۶۰,۰۰۰,۰۰۰ تومان" } };

  return (
    <section id={SECTION_IDS.features} className="relative w-full py-24 px-4 lg:px-12 overflow-hidden min-h-[880px]" style={{ maxWidth: "var(--landing-max-width)", marginLeft: "auto", marginRight: "auto" }}>
      {/* لایه دسکتاپ */}
      <div className="hidden lg:block relative w-full">
        {/* Fade فقط داخل سکشن */}
        <div className="absolute top-0 left-0 right-0 h-20 pointer-events-none z-0" style={{ background: "linear-gradient(to bottom, #10141F 0%, transparent 100%)" }} />
        {/* Background glows — اندازه کوچک فقط داخل سکشن */}
        <div className="absolute w-[180px] h-[180px] right-[25%] top-[35%] -rotate-[23deg] bg-blue-600/30 rounded-full blur-[72px] pointer-events-none mt-80" />
        <div className="absolute w-[180px] h-[180px] right-[65%] top-[40%] -rotate-[23deg] bg-violet-600/30 rounded-full blur-[72px] pointer-events-none mt-80" />
        <div className="absolute w-[180px] h-[180px] right-[55%] top-[50%] -rotate-[23deg] bg-violet-600/30 rounded-full blur-[72px] pointer-events-none mt-80" />
        <div className="absolute w-[220px] h-[180px] right-[40%] top-[42%] -rotate-[23deg] bg-violet-600/30 rounded-full blur-[72px] pointer-events-none mt-80" />
        <div className="absolute w-[220px] h-[160px] right-[50%] top-[48%] -rotate-[23deg] bg-blue-600/30 rounded-full blur-[72px] pointer-events-none mt-80" />

        <h2 className="w-fit mx-auto text-center flex flex-col items-start text-white text-4xl lg:text-5xl font-semibold font-iranyekan pt-8 pb-4 relative z-20 mb-20">
          <span className="flex items-center justify-center gap-3 mb-6">همه چیز<Image src="/images/fire.svg" alt="" width={32} height={32} className="flex-shrink-0 bg-[#404766] p-1 rounded-full w-14 h-14 flex justify-center items-center pb-2" /></span>
          <span className="block">تحت کنترل شماست</span>
          <Image src="/images/vector.svg" alt="" width={54} height={28} className="absolute -right-16 top-14" />
        </h2>
        <div className="relative w-full mx-auto" style={{ maxWidth: "var(--landing-max-width)" }}>
          <div className="absolute top-1/2 w-full flex justify-center items-center min-h-[420px] my-8 pointer-events-none z-10 left-0">
            <div className="absolute left-1/2 top-1/2 mt-10 -translate-x-[78%] -translate-y-1/2 w-[320px] lg:w-[380px] h-[520px] lg:h-[620px] origin-center -rotate-[54deg] z-0">
              <div className="relative w-full h-full">
                <Image src="/images/phone-1.svg" alt="" fill className="object-contain drop-shadow-2xl" />
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-[32%] -translate-y-1/2 w-[320px] lg:w-[380px] h-[520px] lg:h-[620px] origin-center rotate-[10deg] z-[1]">
              <div className="relative w-full h-full">
                <Image src="/images/phone-2.svg" alt="" fill className="object-contain drop-shadow-2xl" />
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 z-20 min-h-[420px] w-full left-0" style={{ maxWidth: "100%" }}>
            <FeatureCard title="تحلیل سود و زیان" desc="عملکرد سرمایه‌گذاری‌های خود را بررسی کنید." icon="analysis" className="absolute right-0 lg:right-4 top-0" />
            <FeatureCard title="نمایش لحظه‌ای ارزش کل سرمایه" desc="ارزش دارایی‌های شما به‌صورت لحظه‌ای نمایش داده می‌شود." icon="chart" className="absolute right-0 lg:right-4 top-[32%]" />
            <FeatureCard title="بررسی میزان ریسک پرتفوی" desc="ترکیب دارایی‌های شما از نظر ریسک تحلیل می‌شود." icon="risk" className="absolute left-0 lg:left-4 top-[38%]" />
            <FeatureCard title="پیشنهاد خرید و فروش" desc="سیستم هوشمند فرصت‌های مناسب را پیشنهاد می‌دهد." icon="suggest" className="absolute left-0 lg:left-4 bottom-16" />
            <div className="absolute right-4 top-[55%] lg:top-[64%] w-[350px] lg:w-[400px] z-20">
              <div className="bg-gray-950/60 backdrop-blur-2xl rounded-[28px] p-5 border border-white/10 shadow-2xl" style={{ background: "rgba(24, 27, 41, 0.60)" }}>
                <div className="flex justify-between bg-gray-900/60 backdrop-blur rounded-2xl p-1.5 mb-6 border border-white/5">
                  <button type="button" onClick={() => setSelectedPlan("1year")} className={`flex-1 py-2.5 text-xs font-bold rounded-xl ${selectedPlan === "1year" ? "bg-[#FCAE16] text-black" : "text-white"}`}>پلن ۱ ساله</button>
                  <button type="button" onClick={() => setSelectedPlan("6month")} className={`flex-1 py-2.5 text-xs font-bold rounded-xl ${selectedPlan === "6month" ? "bg-[#FCAE16] text-black" : "text-white"}`}>پلن ۶ ماهه</button>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-gray-200 text-base lg:text-lg font-bold font-iranyekan">{plans[selectedPlan].price}</span>
                  <button type="button" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-xl">خرید پلن</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-10" style={{ background: "linear-gradient(to top, #10141F 0%, rgba(16,20,31,0.4) 70%, transparent 100%)" }} />
      </div>

      {/* لایه موبایل — همان بخش‌ها، چیدمان متفاوت */}
      <div className="lg:hidden w-full max-w-[384px] flex flex-col mx-auto pt-8 pb-12 relative ">

        <div className="absolute top-0 left-0 right-0 h-20 pointer-events-none z-0" style={{ background: "linear-gradient(to bottom, #10141F 0%, transparent 100%)" }} />
        {/* Background glows — اندازه کوچک فقط داخل سکشن */}
        <div className="absolute w-[120px] h-[120px] right-[25%] top-[35%] -rotate-[23deg] bg-blue-600/30 rounded-full blur-[122px] pointer-events-none mt-24" />
        <div className="absolute w-[120px] h-[120px] right-[50%] top-[40%] -rotate-[23deg] bg-violet-600/30 rounded-full blur-[122px] pointer-events-none mt-24" />
        <div className="absolute w-[120px] h-[120px] right-[40%] top-[50%] -rotate-[23deg] bg-violet-600/30 rounded-full blur-[122px] pointer-events-none mt-24" />
        <div className="absolute w-[180px] h-[120px] right-[30%] top-[42%] -rotate-[23deg] bg-violet-600/30 rounded-full blur-[122px] pointer-events-none mt-24" />
        <div className="absolute w-[180px] h-[110px] right-[35%] top-[48%] -rotate-[23deg] bg-blue-600/30 rounded-full blur-[122px] pointer-events-none mt-24" />

        <h2 className="w-fit mx-auto text-center flex flex-col items-center text-white text-4xl lg:text-5xl font-semibold font-iranyekan relative z-20">
          <span className="flex items-center justify-center gap-3 mb-6">همه چیز</span>
          <span className="block">تحت کنترل شماست</span>
          <Image src="/images/vector.svg" alt="" width={44} height={28} className="absolute right-6 top-4" />
        </h2>
        {/* <div className="flex justify-around gap-4 my-8 z-10">
          <div className="absolute left-1/2 top-1/2 mt-10 -translate-x-[78%] -translate-y-1/2 w-[320px] lg:w-[380px] h-[520px] lg:h-[620px] origin-center -rotate-[54deg] z-0">
            <div className="relative w-64 h-full"><Image src="/images/phone-1.svg" alt="" fill className="object-contain drop-shadow-2xl" /></div>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-[32%] -translate-y-1/2 w-[320px] lg:w-[380px] h-[520px] lg:h-[620px] origin-center rotate-[10deg] z-">
            <div className="relative w-64 h-full"><Image src="/images/phone-2.svg" alt="" fill className="object-contain drop-shadow-2xl" /></div>
          </div>
        </div> */}
        <div className="flex flex-col gap-3.5 mt-20 relative z-20">
          {FEATURES_LIST.map(({ title, desc, icon }) => {
            const IconC = FEATURE_ICONS[icon];
            return (
              <div key={title} className="px-3.5 py-2.5 mx-auto w-[90%] bg-slate-900/80 rounded-lg outline outline-[0.34px] outline-offset-[-0.34px] outline-zinc-600 flex items-center gap-3">
                <div className="p-1.5 bg-blue-600 rounded flex-shrink-0 flex justify-center items-center h-full">
                  <IconC className="w-4 h-4 text-gray-200" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-right text-gray-200 text-[10px] font-semibold font-iranyekan leading-[7.4px] mb-2">{title}</h3>
                  <p className="text-right text-zinc-400 text-[8px] font-medium font-iranyekan leading-4">{desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-[21px] border border-slate-700 bg-slate-900/80 p-4">
          <div className="flex items-center justify-between bg-slate-900 rounded-xl border border-slate-700 p-1.5 mb-4">
            <button
              type="button"
              onClick={() => setSelectedPlan("1year")}
              className={`w-1/2 py-2 text-xs font-medium rounded-lg transition-colors ${selectedPlan === "1year" ? "bg-yellow-600 text-white" : "text-white/70"}`}
            >
              پلن ۱ ساله
            </button>
            <button
              type="button"
              onClick={() => setSelectedPlan("6month")}
              className={`w-1/2 py-2 px-6 text-xs font-medium rounded-lg transition-colors ${selectedPlan === "6month" ? "bg-yellow-600 text-white" : "text-white/70"}`}
            >
              پلن ۶ ماهه
            </button>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-gray-200 text-base font-normal font-iranyekan">{plans[selectedPlan].price}</span>
            <button type="button" className="px-5 py-1.5 bg-blue-600 rounded-[10px] text-gray-200 text-xs font-iranyekan">
              خرید پلن
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
