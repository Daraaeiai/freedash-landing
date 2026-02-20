"use client";

import { PlayIcon } from "@/components/icons";
import { LANDING_MAX_W, SECTION_IDS } from "@/lib/constants";

function VideoPlaceholder() {
  return (
    <div className="w-full h-full min-h-[320px] bg-slate-900 rounded-[44px] border-4 border-slate-700 flex items-center justify-center">
      <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
        <PlayIcon className="w-12 h-12 text-gray-200" />
      </div>
    </div>
  );
}

function VideoPlaceholderMobile() {
  return (
    <div className="w-full aspect-square max-w-[320px] bg-slate-900 rounded-[32px] border-4 border-slate-700 flex items-center justify-center overflow-hidden relative mx-auto">
      <div className="absolute inset-0 bg-neutral-800/50 rounded-[32px] border-4 border-slate-700 backdrop-blur-sm flex items-center justify-center">
        <div className="w-9 h-9 rounded-full bg-neutral-300 outline outline-4 outline-offset-[-2px] outline-gray-200 flex items-center justify-center">
          <PlayIcon className="w-6 h-6 text-gray-700" />
        </div>
      </div>
    </div>
  );
}

const GUIDE_COPY = {
  dashboard: { title: "راهنمای استفاده از داشبورد", desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله" },
  spot: { title: "راهنمای استفاده از اسپات پلیر", desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله" },
};

export default function GuideSection() {
  return (
    <section id={SECTION_IDS.guide} className={`relative w-full ${LANDING_MAX_W} mx-auto md:mt-32 md:mb-28 py-4 px-4 lg:px-12 overflow-hidden`}>
      {/* لایه دسکتاپ */}
      <div className="hidden lg:block relative w-full">
        <div className="absolute top-0 left-0 right-0 h-20 pointer-events-none z-0" style={{ background: "linear-gradient(to bottom, #10141F 0%, transparent 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-0" style={{ background: "linear-gradient(to bottom, transparent 0%, #10141F 100%)" }} />
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 mb-24 relative z-10">
          <div className="text-right order-2 lg:order-1">
            <h2 className="text-white text-3xl lg:text-4xl font-semibold font-iranyekan leading-tight mb-6">{GUIDE_COPY.dashboard.title}</h2>
            <p className="max-w-[494px] mr-0 ml-auto text-zinc-500 text-xl font-medium font-iranyekan leading-9">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.</p>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="w-full max-w-[600px] aspect-[600/613] min-h-[320px] rounded-[44px] overflow-hidden"><VideoPlaceholder /></div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="relative order-1">
            <div className="w-full max-w-[546px] aspect-[546/613] min-h-[320px] rounded-[44px] overflow-hidden"><VideoPlaceholder /></div>
          </div>
          <div className="text-right order-2">
            <h2 className="text-white text-3xl lg:text-4xl font-semibold font-iranyekan leading-tight mb-6">{GUIDE_COPY.spot.title}</h2>
            <p className="max-w-[494px] mr-0 ml-auto text-zinc-500 text-xl font-medium font-iranyekan leading-9">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.</p>
          </div>
        </div>
      </div>

      {/* لایه موبایل — همان محتوا، چیدمان متفاوت */}
      <div className="lg:hidden w-full max-w-[384px] mx-auto py-12">
        <h2 className="text-center text-gray-200 text-2xl font-semibold font-iranyekan leading-9 mb-4">{GUIDE_COPY.dashboard.title}</h2>
        <p className="w-full text-center text-zinc-500 text-sm font-normal font-iranyekan leading-5 mb-6">{GUIDE_COPY.dashboard.desc}</p>
        <div className="w-full max-w-[320px] mx-auto mb-12">
          <VideoPlaceholderMobile />
        </div>
        <h2 className="text-center text-gray-200 text-2xl font-semibold font-iranyekan leading-9 mb-4">{GUIDE_COPY.spot.title}</h2>
        <p className="w-full text-center text-zinc-500 text-sm font-normal font-iranyekan leading-5 mb-6">{GUIDE_COPY.spot.desc}</p>
        <div className="w-full max-w-[320px] mx-auto">
          <VideoPlaceholderMobile />
        </div>
      </div>
    </section>
  );
}
