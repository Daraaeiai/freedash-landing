export interface CheckoutPlan {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  durationDays: number;
  price: number;
  currency: string;
  type?: "trial" | "paid";
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string | null;
}

export interface CheckoutPlansResponse {
  success: boolean;
  data: CheckoutPlan[];
}

export interface CheckoutInitiateResponse {
  success: boolean;
  message?: string;
  data?: {
    sessionId: string;
    redirectUrl: string;
  };
}
