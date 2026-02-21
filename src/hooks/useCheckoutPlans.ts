"use client";

import { useState, useEffect, useCallback } from "react";
import { getCheckoutPlans } from "@/lib/services/checkout.service";
import type { CheckoutPlan } from "@/types/checkout.types";

export function useCheckoutPlans() {
  const [plans, setPlans] = useState<CheckoutPlan[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getCheckoutPlans();
      setPlans(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "خطا در دریافت پلن‌ها");
      setPlans([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { plans, isLoading, error, refetch: load };
}
