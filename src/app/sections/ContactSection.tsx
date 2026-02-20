"use client";

import Image from "next/image";
import GlowIcon from "@/components/icons/GlowIcon";
import { LANDING_MAX_W, SECTION_IDS } from "@/lib/constants";

const CONTACT_COPY = { title: "ارتباط با پشتیبانی", desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است" };

export default function ContactSection() {
  return (
    <section id={SECTION_IDS.contact} className={`relative w-full ${LANDING_MAX_W} mx-auto py-24 px-4 lg:px-12 overflow-hidden min-h-[400px]`}>
      {/* لایه دسکتاپ */}
      <div className="hidden lg:block relative w-full">
        <div className="absolute top-0 left-0 right-0 h-20 pointer-events-none z-0" style={{ background: "linear-gradient(to bottom, #10141F 0%, transparent 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-0" style={{ background: "linear-gradient(to bottom, transparent 0%, #10141F 100%)" }} />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[80px] -rotate-[23deg] bg-violet-600/25 rounded-full blur-[72px] pointer-events-none" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[100px] -rotate-[12deg] bg-indigo-600/20 rounded-full blur-[72px] pointer-events-none" />
        <div className="absolute left-[35%] top-[40%] w-[160px] h-[80px] rotate-12 bg-violet-500/15 rounded-full blur-[72px] pointer-events-none" />
        <div className="absolute left-[30%] top-[55%] w-[140px] h-[90px] -rotate-[23deg] bg-blue-600/15 rounded-full blur-[72px] pointer-events-none" />
        <div className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[80px] -rotate-[23deg] bg-violet-600/25 rounded-full blur-[72px] pointer-events-none" />
        <div className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[100px] -rotate-[12deg] bg-indigo-600/20 rounded-full blur-[72px] pointer-events-none" />
        <div className="absolute left-[20%] top-[40%] w-[160px] h-[80px] rotate-12 bg-violet-500/15 rounded-full blur-[72px] pointer-events-none" />
        <div className="absolute left-[25%] top-[55%] w-[140px] h-[90px] -rotate-[23deg] bg-blue-600/15 rounded-full blur-[72px] pointer-events-none" />
        <div className="absolute right-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[80px] -rotate-[23deg] bg-violet-600/25 rounded-full blur-[72px] pointer-events-none" />
        <div className="absolute right-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[100px] -rotate-[12deg] bg-indigo-600/40 rounded-full blur-[72px] pointer-events-none" />
        <div className="absolute right-[30%] top-[40%] w-[160px] h-[80px] rotate-12 bg-violet-500/15 rounded-full blur-[72px] pointer-events-none" />
        <div className="absolute right-[25%] top-[55%] w-[140px] h-[90px] -rotate-[23deg] bg-blue-600/30 rounded-full blur-[72px] pointer-events-none" />


        <div className="absolute flex items-center justify-center -top-4 right-20 pointer-events-none z-10">
          <Image src="/images/contact-us.svg" alt="contact us" width={180} height={150} />
          <span className="absolute text-[#B5B2C9] text-xl rotate-[0.37rad] left-14">تماس با ما</span>
        </div>
        <h2 className="relative z-10 text-center text-white text-5xl lg:text-6xl font-semibold font-iranyekan leading-tight mb-8 w-fit mx-auto">
          {CONTACT_COPY.title}
          <GlowIcon className="absolute -rotate-90 -top-2 -left-10 w-12 h-12 text-white/70" />
        </h2>
        <p className="relative z-10 max-w-[776px] mx-auto text-center text-neutral-400 text-xl font-medium font-iranyekan leading-9 mb-12">{CONTACT_COPY.desc}</p>
        <div className="relative z-10 flex flex-wrap justify-center gap-8">
          <span className="text-white text-xl font-medium font-iranyekan leading-5 px-10 py-4 bg-blue-600 rounded-3xl flex items-center justify-center gap-2.5 hover:bg-blue-700 transition-colors cursor-pointer">ارتباط در گفتینو</span>
          <a href="tel:09118567831" className="px-10 py-4 rounded-3xl border border-blue-600 flex items-center justify-center gap-2.5 hover:bg-gray-800/50 transition-colors">
            <span className="text-gray-200 text-xl font-medium font-iranyekan leading-5">09118567831</span>
          </a>
        </div>
      </div>

      {/* لایه موبایل — همان محتوا، چیدمان متفاوت */}
      <div className="lg:hidden w-full max-w-[384px] mx-auto py-12 relative overflow-hidden">

        <div className="absolute top-0 left-0 right-0 h-12 pointer-events-none z-0" style={{ background: "linear-gradient(to bottom, #10141F 0%, transparent 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none z-0" style={{ background: "linear-gradient(to bottom, transparent 0%, #10141F 100%)" }} />
        <div className="absolute left-[35%] top-1/3 -translate-x-1/2 -translate-y-1/2 w-[90px] h-[50px] -rotate-[23deg] bg-violet-600/25 rounded-full blur-[32px] pointer-events-none" />
        <div className="absolute left-[40%] top-1/3 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[50px] -rotate-[12deg] bg-indigo-600/20 rounded-full blur-[22px] pointer-events-none" />
        <div className="absolute left-[55%] top-[20%] w-[80px] h-[50px] rotate-12 bg-violet-500/15 rounded-full blur-[22px] pointer-events-none" />
        <div className="absolute left-[50%] top-[25%] w-[90px] h-[50px] -rotate-[23deg] bg-blue-600/15 rounded-full blur-[22px] pointer-events-none" />


        <div className="relative z-10 pt-4">

          <div className="absolute flex items-center justify-center -top-10 right-0 pointer-events-none z-10">
            <Image src="/images/contact-us.svg" alt="contact us" width={100} height={50} />
            <span className="absolute text-[#B5B2C9] text-xs text-nowrap rotate-[0.37rad] left-7">تماس با ما</span>
          </div>

          <h2 className="text-center text-gray-200 text-3xl font-semibold font-iranyekan leading-10 mb-8">{CONTACT_COPY.title}</h2>
          <p className="w-[90%] mx-auto text-center text-neutral-400 text-sm font-normal font-iranyekan leading-5 mb-8">{CONTACT_COPY.desc}</p>
          <div className="flex flex-wrap justify-center gap-3">

            <a href="#" className="px-3.5 py-2 bg-blue-600 rounded-2xl text-gray-200 text-sm font-medium font-iranyekan">ارتباط در گفتینو</a>
            <a href="tel:09118567831" className="px-3.5 py-2 rounded-2xl outline outline-[0.54px] outline-offset-[-0.54px] outline-blue-600 text-gray-200 text-sm font-medium font-iranyekan">09118567831</a>
          </div>
        </div>
      </div>
    </section>
  );
}
