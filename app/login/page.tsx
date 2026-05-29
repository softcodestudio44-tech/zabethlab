'use client';

import { useState } from 'react';
import { signInWithMagicLink } from '@/lib/supabase';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await signInWithMagicLink(email);
    if (!error) setSent(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 pt-20">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold mb-2 text-center text-white">
          Welcome to <span className="text-[#228B22]">ZabethLab</span>
        </h1>
        <p className="text-zinc-400 text-center mb-8">
          Enter your email to access your courses
        </p>

        {sent ? (
          <div className="bg-[#228B22]/20 border border-[#228B22] p-6 rounded-xl text-center">
            <p className="text-[#228B22] font-medium">✓ Magic link sent to {email}</p>
            <p className="text-zinc-400 text-sm mt-2">Check your inbox and click the link</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-[#228B22] focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#228B22] text-white py-3 rounded-lg font-medium hover:bg-[#1a6b1a] transition-colors disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Magic Link'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}