"use client";

import Image from "next/image";
import { useState } from "react";
import GlowIcon from "@/components/icons/GlowIcon";
import { LANDING_MAX_W } from "@/lib/constants";

export default function HeroSection() {
  const [selectedPlan, setSelectedPlan] = useState<"6month" | "1year">("6month");
  const plans = {
    "6month": { title: "پلن ۶ ماهه", price: "۳۵,۰۰۰,۰۰۰ تومان", label: "پلن ۶ ماهه" },
    "1year": { title: "پلن ۱ ساله", price: "۶۰,۰۰۰,۰۰۰ تومان", label: "پلن ۱ ساله" },
  };

  return (
    <section className={`relative w-full ${LANDING_MAX_W} mx-auto overflow-hidden`}>
      {/* دسکتاپ */}
      <div className="hidden lg:block relative w-full">
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
          style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(16,20,31,0.5) 60%, #10141F 100%)" }}
        />
        <div className="absolute left-2/3 top-[15%] -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] -rotate-[23deg] bg-violet-600/20 rounded-full blur-[80px] pointer-events-none z-0" />
        <div className="absolute left-[32%] top-[22%] -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] -rotate-[23deg] bg-violet-600/20 rounded-full blur-[80px] pointer-events-none z-0" />
        <div className="absolute left-[40%] top-[25%] -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] -rotate-[23deg] bg-violet-600/20 rounded-full blur-[80px] pointer-events-none z-0" />
        <div className="absolute left-2/3 top-[20%] -translate-x-1/2 w-[180px] h-[180px] rotate-12 bg-indigo-600/15 rounded-full blur-[80px] pointer-events-none z-0" />
        <div className="absolute left-[50%] top-[18%] -translate-x-1/2 w-[180px] h-[180px] rotate-12 bg-indigo-600/15 rounded-full blur-[80px] pointer-events-none z-0" />
        <div className="absolute left-1/2 top-[22%] w-[160px] h-[160px] -rotate-[23deg] bg-violet-500/12 rounded-full blur-[80px] pointer-events-none z-0" />
        <div className="absolute left-1/2 top-[25%] w-[140px] h-[140px] rotate-12 bg-blue-600/12 rounded-full blur-[80px] pointer-events-none z-0" />

        <div className="relative z-20 pt-16 pb-12 px-6 lg:px-12">
          <h1 className="relative w-full max-w-[1061px] mx-auto text-center text-white text-5xl lg:text-7xl font-semibold font-iranyekan text-wrap leading-tight mb-6">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <span className="relative">
                مدیریت
                <GlowIcon className="absolute -top-6 -right-8 w-12 h-12 text-white/70" />
              </span>
              <span className="relative inline-flex items-center justify-center">
                <Image src="/images/coins.svg" alt="coins" width={100} height={100} className="object-contain z-10 mb-4 scale-125" />
                <div className="absolute bottom-3 bg-zinc-700/60 rounded-full w-24 h-8 border border-white/5 z-5" />
              </span>
              <span>سرمایه و نقدینگی،</span>
            </div>
            <div className="flex items-center justify-center gap-4 mt-6 relative">
              <div className="absolute -left-12 lg:left-20 top-1/2 -translate-y-1/2">
                <Image src="/images/vector.svg" alt="decoration" width={60} height={60} className="opacity-80 rotate-45" />
              </div>
              <span>هوشمندانه تر از همیشه</span>
            </div>
          </h1>
          <p className="w-full max-w-[566px] mx-auto text-center text-neutral-400 text-xl font-medium font-iranyekan leading-9 mb-12">
            داشبوردی یکپارچه برای تحلیل، توصیه‌های هوشمند، اخبار لحظه‌ای و مشاوره تخصصی — همه در یک جا.
          </p>
          <div className="relative flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24 min-h-[500px] mb-20">
            <div className="relative order-1 lg:order-1">
              <div className="relative z-5 mt-20 w-[300px] md:w-[350px] animate-float">

                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[90%] h-[50%] bg-blue-600/20 blur-[90px] rounded-full -z-10 pointer-events-none mix-blend-screen" />

                {/* 2. کانتینر عکس با ماسک */}
                <div
                  className="relative z-10"
                  style={{
                    // این خط جادویی است: عکس را از وسط به پایین شفاف می‌کند
                    maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)"
                  }}
                >
                  <Image
                    src="/images/phone-1.svg"
                    alt="App"
                    width={300}
                    height={700}
                    className="object-auto w-full h-auto"
                    priority
                  />
                </div>

              </div>
            </div>

            <div className="w-full max-w-[400px] order-2 lg:order-2">
              <div
                className="bg-gray-950/60 backdrop-blur-2xl rounded-[32px] p-6 border border-white/10 shadow-2xl w-[450px] mb-20"
                style={{ background: "rgba(24, 27, 41, 0.60)" }}
              >
                <div className="flex items-center justify-between bg-gray-900/60 backdrop-blur rounded-2xl p-1.5 mb-8 border border-white/5">
                  <button
                    onClick={() => setSelectedPlan("1year")}
                    className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${selectedPlan === "1year" ? "bg-[#FCAE16] text-black shadow-lg" : "text-white hover:text-white/30"}`}
                  >
                    پلن ۱ ساله
                  </button>
                  <button
                    onClick={() => setSelectedPlan("6month")}
                    className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${selectedPlan === "6month" ? "bg-[#FCAE16] text-black shadow-lg" : "text-white hover:text-white/30"}`}
                  >
                    پلن ۶ ماهه
                  </button>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="text-right">
                    <span className="block text-gray-200 text-lg lg:text-xl font-bold font-iranyekan mb-1">
                      {plans[selectedPlan].price}
                    </span>
                  </div>
                  <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white text-base font-medium rounded-xl transition-all shadow-[0_4px_20px_-5px_rgba(37,99,235,0.5)]">
                    خرید پلن
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 relative">
            <div className="absolute right-[20%] top-1/2 -translate-y-1/2 w-[180px] h-[180px] -rotate-[23deg] bg-violet-600/25 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute right-[5%] top-[20%] w-[160px] h-[160px] -rotate-[23deg] bg-violet-500/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute right-[15%] bottom-[30%] w-[140px] h-[140px] rotate-12 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none" />
            <h3 className="text-center text-white text-4xl lg:text-5xl font-semibold font-iranyekan mb-6 flex flex-col gap-6 items-center relative z-10">
              <span>پلنی انتخاب کنید که متناسب با</span>
              <span> مسیر رشد شماست</span>
            </h3>
            <p className="max-w-[980px] mx-auto text-center text-zinc-500 text-xl font-medium font-iranyekan leading-9 mb-16">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
            </p>
            <div className="flex flex-wrap justify-center gap-8 relative z-10">
              <div className="w-full max-w-[593px] h-72 bg-[#141A31] rounded-[42px] border-2 border-[#323250] p-8 flex flex-col justify-between items-center">
                <h4 className="text-white text-4xl font-semibold font-iranyekan leading-tight">پلن ۱ ساله</h4>
                <p className="text-zinc-500 text-xl font-medium font-iranyekan leading-9">لورم ایپسوم متن ساختگی با تولید</p>
                <div className="w-80 px-8 py-4 bg-indigo-700 rounded-3xl inline-flex justify-center items-center gap-2.5">
                  <span className="text-gray-200 text-2xl font-normal font-iranyekan leading-9">60,000,000 تومان</span>
                </div>
              </div>
              <div className="w-full max-w-[593px] h-72 bg-[#141A31] rounded-[42px] border-2 border-[#323250] p-8 flex flex-col justify-between items-center">
                <h4 className="text-white text-4xl font-semibold font-iranyekan leading-tight">پلن ۶ ماهه</h4>
                <p className="text-zinc-500 text-xl font-medium font-iranyekan leading-9">لورم ایپسوم متن ساختگی با تولید</p>
                <div className="w-80 px-8 py-4 rounded-3xl outline outline-[2px] outline-blue-600 outline-offset-[-3px] inline-flex justify-center items-center gap-2.5">
                  <span className="text-gray-200 text-2xl font-normal font-iranyekan leading-9">35,000,000 تومان</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* لایه موبایل — همان محتوا، چیدمان متفاوت */}
      <div className="lg:hidden w-full max-w-[384px] mx-auto px-4 relative overflow-hidden pt-6">

        <div className="absolute right-[30%] top-1/2 -translate-y-1/2 w-[140px] h-[120px] -rotate-[23deg] bg-violet-600/25 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute right-[10%] top-[20%] w-[120px] h-[100px] -rotate-[23deg] bg-violet-500/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute right-[15%] bottom-[30%] w-[140px] h-[120px] rotate-12 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none" />

        <h1 className="w-full text-center text-gray-200 text-3xl font-semibold font-iranyekan leading-[52px]">
          مدیریت سرمایه و نقدینگی، هوشمندانه تر از همیشه
        </h1>
        <div className="absolute right-2 top-5 origin-top-left opacity-80">
          <GlowIcon className="w-6 h-6" />
        </div>
        <p className="w-full text-center text-neutral-400 text-sm font-normal font-iranyekan leading-7 mt-6">
          داشبوردی یکپارچه برای تحلیل، توصیه‌های هوشمند، اخبار لحظه‌ای و مشاوره تخصصی — همه در یک جا.
        </p>
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
        <div className="relative z-5 mt-14 animate-float">
          {/* هاله نور پشت گوشی */}
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[90%] h-[40%] bg-blue-600/25 blur-[70px] rounded-full -z-10 pointer-events-none" />

          {/* عکس با ماسک */}
          <div
            className="relative z-10"
            style={{
              maskImage: "linear-gradient(to bottom, black 00%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)"
            }}
          >
            <Image
              src="/images/phone-1.svg"
              alt="App"
              width={200}
              height={700}
              className="object-auto mx-auto"
            />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="w-full text-center text-gray-200 text-2xl font-semibold font-iranyekan leading-10 mb-4">
            پلنی انتخاب کنید که متناسب با مسیر رشد شماست
          </h2>
          <p className="w-full text-center text-zinc-500 text-sm font-normal font-iranyekan leading-5 mb-8">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است
          </p>
          <div className="space-y-4 mb-12">
            <div className="bg-slate-900 rounded-[32px] border-2 border-slate-700 p-6 flex flex-col items-center gap-3">
              <h3 className="text-gray-200 text-2xl font-semibold font-iranyekan">پلن 6 ماهه</h3>
              <p className="text-zinc-500 text-sm font-medium font-iranyekan text-center">لورم ایپسوم متن ساختگی با تولید</p>
              <div className="w-48 px-8 py-3 mt-2 rounded-[32px] outline outline-2 outline-offset-[-2px] outline-blue-600 inline-flex justify-center">
                <span className="text-gray-200 text-base font-medium font-iranyekan">35,000,000 تومان</span>
              </div>
            </div>
            <div className="bg-slate-900 rounded-[32px] border-2 border-slate-700 p-6 flex flex-col items-center gap-3">
              <h3 className="text-gray-200 text-2xl font-semibold font-iranyekan">پلن 1 ساله</h3>
              <p className="text-zinc-500 text-sm font-medium font-iranyekan text-center">لورم ایپسوم متن ساختگی با تولید</p>
              <div className="w-48 px-8 py-3 mt-2 rounded-[32px] outline outline-2 outline-offset-[-2px] outline-blue-600 inline-flex justify-center">
                <span className="text-gray-200 text-base font-medium font-iranyekan">60,000,000 تومان</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
