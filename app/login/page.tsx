import * as React from 'react';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Container } from '@/components/layout/Container';
import { LoginForm } from '@/components/auth/LoginForm';

export const metadata: Metadata = {
  title: 'Sign In — Creator Access',
  description: 'Sign in to Kitbash to manage your kits and seller profile.',
};

export default function LoginPage() {
  return (
    <div className="py-12 sm:py-20 min-h-[calc(100vh-140px)] flex items-center bg-cream/40">
      <Container>
        <Suspense
          fallback={
            <div className="w-full max-w-md mx-auto p-8 border-3 border-ink bg-paper shadow-brutal animate-pulse space-y-4">
              <div className="h-6 w-1/3 bg-fog" />
              <div className="h-10 w-full bg-fog" />
              <div className="h-10 w-full bg-fog" />
            </div>
          }
        >
          <LoginForm />
        </Suspense>
      </Container>
    </div>
  );
}
