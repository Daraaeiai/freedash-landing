"use client";

import { useState, useCallback } from "react";
import { initiateCheckout } from "@/lib/services/checkout.service";

export function useCheckoutInitiate() {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startCheckout = useCallback(async (planId: number) => {
    setIsRedirecting(true);
    setError(null);
    try {
      const redirectUrl = await initiateCheckout(planId);
      window.location.href = redirectUrl;
    } catch (e) {
      setError(e instanceof Error ? e.message : "خطا در شروع خرید");
      setIsRedirecting(false);
    }
  }, []);

  return { startCheckout, isRedirecting, error };
}
