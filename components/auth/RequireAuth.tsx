'use client';

import * as React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'sonner';

export function RequireAuth({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const notifiedRef = React.useRef(false);

  React.useEffect(() => {
    if (!loading && !user) {
      if (!notifiedRef.current) {
        notifiedRef.current = true;
        toast.info('Sign in required', {
          description: 'Please log in to your creator account to access this page.',
        });
      }
      router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
    }
  }, [user, loading, router, pathname]);

  if (loading) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-[50vh] p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-5 h-5 bg-sun border-2 border-ink animate-bounce" />
          <div className="w-5 h-5 bg-bubblegum border-2 border-ink animate-bounce [animation-delay:150ms]" />
          <div className="w-5 h-5 bg-mint border-2 border-ink animate-bounce [animation-delay:300ms]" />
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-smoke font-bold">
          Checking creator session...
        </p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
}
