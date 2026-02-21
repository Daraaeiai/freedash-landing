import type {
  CheckoutPlan,
  CheckoutPlansResponse,
  CheckoutInitiateResponse,
} from "@/types/checkout.types";

const getBase = () => {
  const base = process.env.NEXT_PUBLIC_API_URL;
  if (base) return `${base.replace(/\/$/, "")}/api/v1`;
  return "";
};

const getPlansUrl = () => {
  const base = getBase();
  return base ? `${base}/checkout/plans` : "/api/proxy/checkout/plans";
};

const getInitiateUrl = () => {
  const base = getBase();
  return base ? `${base}/checkout/initiate` : "/api/proxy/checkout/initiate";
};

export async function getCheckoutPlans(): Promise<CheckoutPlan[]> {
  const url = getPlansUrl();
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("خطا در دریافت لیست پلن‌ها");
  }

  const json: CheckoutPlansResponse = await res.json();

  if (!json.success || !Array.isArray(json.data)) {
    return [];
  }

  const paid = json.data.filter(
    (p) => (p as CheckoutPlan & { type?: string }).type === "paid"
  );
  return paid.length > 0 ? paid : json.data;
}

export function formatPlanPrice(price: number, currency?: string): string {
  const formatted = new Intl.NumberFormat("fa-IR").format(price);
  const suffix = currency && currency.trim() ? currency : "تومان";
  return `${formatted} ${suffix}`;
}

export async function initiateCheckout(planId: number): Promise<string> {
  const url = getInitiateUrl();
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ planId }),
  });

  const json: CheckoutInitiateResponse = await res.json().catch(() => ({}));

  if (!res.ok) {
    const msg =
      (json as { error?: { message?: string } })?.error?.message ||
      "خطا در شروع خرید";
    throw new Error(msg);
  }

  if (!json.success || !json.data?.redirectUrl) {
    throw new Error(json.message || "خطا در دریافت آدرس پرداخت");
  }

  return json.data.redirectUrl;
}
