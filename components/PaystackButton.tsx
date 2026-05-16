"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface PaystackButtonProps {
  email: string;
  amount: number; // in kobo (₦25,000 = 2500000)
  courseName: string;
  onSuccess: (reference: string) => void;
  onClose: () => void;
}

export function PaystackButton({ 
  email, 
  amount, 
  courseName, 
  onSuccess, 
  onClose 
}: PaystackButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const initializePayment = async () => {
    setIsLoading(true);
    
    try {
      const PaystackPop = (await import("@paystack/inline-js")).default;
      
      const popup = new PaystackPop();
      
      popup.newTransaction({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
        email: email,
        amount: amount,
        currency: "NGN",
        reference: `${Date.now()}_${Math.floor(Math.random() * 1000000)}`,
        metadata: {
          custom_fields: [
            {
              display_name: "Course",
              variable_name: "course",
              value: courseName,
            },
          ],
        },
        onSuccess: (transaction: any) => {
          onSuccess(transaction.reference);
          setIsLoading(false);
        },
        onCancel: () => {
          onClose();
          setIsLoading(false);
        },
      });
    } catch (error) {
      console.error("Payment error:", error);
      setIsLoading(false);
    }
  };

  return (
    <Button 
      onClick={initializePayment}
      disabled={isLoading}
      className="bg-[#228B22] hover:bg-[#1a6b1a] text-white w-full"
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Processing...
        </>
      ) : (
        `Pay ₦${(amount / 100).toLocaleString()}`
      )}
    </Button>
  );
}