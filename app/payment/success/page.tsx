'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';

const TELEGRAM_LINKS: Record<string, string> = {
  'glow-from-within': 'https://t.me/+YOUR_GLOW_GROUP',
  'crowned-in-confidence': 'https://t.me/+YOUR_CROWNED_GROUP',
  'organic-cosmetology-1': 'https://t.me/+YOUR_ORGANIC1_GROUP',
  'organic-cosmetology-2': 'https://t.me/+YOUR_ORGANIC2_GROUP',
  'organic-cosmetology-complete': 'https://t.me/+YOUR_COMPLETE_GROUP',
};

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const [user, setUser] = useState<any>(null);
  
  const courseId = searchParams.get('course') || '';
  const telegramLink = TELEGRAM_LINKS[courseId] || '#';
  const courseName = courseId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user));
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 pt-20">
      <div className="max-w-lg w-full text-center">
        <div className="w-20 h-20 bg-[#228B22]/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-[#228B22]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
        <p className="text-gray-400 mb-8">
          You now have access to <span className="text-[#228B22] font-medium">{courseName}</span>
        </p>

        <div className="bg-[#1a1a1a] border border-[#228B22]/30 rounded-xl p-6 mb-6">
          <h3 className="font-bold text-lg mb-2">Join Your Course Group</h3>
          <p className="text-gray-400 text-sm mb-4">
            All course content and live sessions happen in our private Telegram group
          </p>
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0088cc] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0077b5] transition-colors"
          >
            Join Telegram Group
          </a>
        </div>

        {user?.email && (
          <p className="text-gray-500 text-sm">
            Link also sent to <span className="text-[#228B22]">{user.email}</span>
          </p>
        )}

        {telegramLink.includes('YOUR_') && (
          <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <p className="text-yellow-500 text-sm">
              ⚠️ Create Telegram group and update link in app/payment/success/page.tsx
            </p>
          </div>
        )}

        <a href="/academy" className="inline-block mt-8 text-[#228B22] hover:underline">
          ← Back to Academy
        </a>
      </div>
    </div>
  );
}