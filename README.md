# لندینگ — پروژه مستقل

این پوشه یک **پروژه Next.js مستقل** برای صفحه لندینگ است. می‌توانید کل پوشه `landing` را کپی کرده و در جای دیگری به‌صورت جداگانه توسعه دهید.

## پیش‌نیاز

- Node.js و npm (یا yarn/pnpm)
- **فونت‌ها:** فایل‌های فونت IRANYekanX را از پروژه اصلی کپی کنید:
  - از مسیر `public/fonts/iranyekan/` در پروژه والد (cip_pro_free)
  - به مسیر `landing/public/fonts/iranyekan/` در این پروژه
  - فایل‌ها: `IRANYekanX-Light.ttf`, `IRANYekanX-Regular.ttf`, `IRANYekanX-Medium.ttf`, `IRANYekanX-DemiBold.ttf`, `IRANYekanX-Bold.ttf`

## نصب و اجرا

```bash
cd landing
npm install
npm run dev
```

در حالت توسعه، برنامه روی [http://localhost:3000](http://localhost:3000) اجرا می‌شود.

## اسکریپت‌ها

- `npm run dev` — سرور توسعه
- `npm run build` — ساخت برای پروداکشن
- `npm run start` — اجرای نسخه پروداکشن
- `npm run lint` — اجرای lint

## ساختار کلی

- `src/app/` — layout، صفحه اصلی، و سکشن‌های لندینگ
- `src/components/` — هدر لندینگ و آیکون‌ها
- `src/lib/` — ثابت‌ها (مثل SECTION_IDS و scrollToSection)
- `public/images/` — تصاویر لندینگ (لوگو، تلفن، آتش، تماس و غیره)

لینک «شروع رایگان» در هدر فعلاً به `#` اشاره می‌کند؛ می‌توانید آن را به آدرس داشبورد یا فرم ثبت‌نام تغییر دهید.
