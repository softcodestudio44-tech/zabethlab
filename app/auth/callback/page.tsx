'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        // Check if there's a stored redirect URL (course page they were on)
        const redirectTo = localStorage.getItem('redirectAfterLogin');
        localStorage.removeItem('redirectAfterLogin'); // Clean up
        
        if (redirectTo) {
          router.push(redirectTo);
        } else {
          router.push('/academy');
        }
      }
    });
  }, [router]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <p className="text-[#228B22]">Logging you in...</p>
    </div>
  );
}