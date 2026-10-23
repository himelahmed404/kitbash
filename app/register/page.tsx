import * as React from 'react';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Container } from '@/components/layout/Container';
import { RegisterForm } from '@/components/auth/RegisterForm';

export const metadata: Metadata = {
  title: 'Join Kitbash — Maker Registration',
  description: 'Create your Kitbash creator account to publish and sell design and dev kits.',
};

export default function RegisterPage() {
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
          <RegisterForm />
        </Suspense>
      </Container>
    </div>
  );
}
