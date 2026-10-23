'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Eye, EyeOff, AlertCircle, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/Button';
import { Field } from '@/components/ui/Field';
import { Input } from '@/components/ui/Input';

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get('redirect') || '/';

  const { signInWithEmail, signInWithGoogle, user } = useAuth();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [shake, setShake] = React.useState(false);

  // If already logged in, redirect
  React.useEffect(() => {
    if (user) {
      router.push(redirectPath);
    }
  }, [user, router, redirectPath]);

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!email.trim() || !password) {
      setErrorMessage('Please enter both your email and password.');
      triggerShake();
      return;
    }

    try {
      setIsLoading(true);
      const cred = await signInWithEmail(email, password);
      const name = cred.user.displayName || email.split('@')[0];
      toast.success(`Welcome back, ${name}! ⚡`, {
        description: 'You are now signed in to Kitbash.',
      });
      router.push(redirectPath);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to sign in';
      setErrorMessage(msg);
      triggerShake();
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setErrorMessage(null);
    try {
      setIsGoogleLoading(true);
      const cred = await signInWithGoogle();
      const name = cred.user.displayName || 'Maker';
      toast.success(`Welcome, ${name}! ⚡`, {
        description: 'Signed in with your Google account.',
      });
      router.push(redirectPath);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Google sign-in failed';
      setErrorMessage(msg);
      triggerShake();
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <div
      className={`w-full max-w-md mx-auto bg-paper border-3 border-ink shadow-brutal p-6 sm:p-8 transition-transform ${
        shake ? 'animate-[shake_0.4s_ease-in-out]' : ''
      }`}
    >
      <div className="mb-6">
        <span className="eyebrow text-graphite mb-1 block">Account Access</span>
        <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight">
          Sign In
        </h2>
        <p className="text-sm text-graphite mt-1">
          Access your seller studio and listed kits.
        </p>
      </div>

      {/* Error alert */}
      {errorMessage && (
        <div className="mb-6 p-3.5 bg-danger/10 border-3 border-danger flex items-start gap-2.5">
          <AlertCircle className="w-5 h-5 text-danger shrink-0 mt-0.5" />
          <p className="font-bold text-xs sm:text-sm text-danger leading-tight">
            {errorMessage}
          </p>
        </div>
      )}

      {/* Google Provider Button */}
      <button
        type="button"
        onClick={handleGoogleSignIn}
        disabled={isGoogleLoading || isLoading}
        className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-paper hover:bg-fog border-3 border-ink shadow-brutal-sm brutal-lift font-bold text-sm text-ink transition-all disabled:opacity-50 disabled:cursor-not-allowed select-none cursor-pointer"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="#EA4335"
            d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"
          />
          <path
            fill="#4285F4"
            d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
          />
          <path
            fill="#FBBC05"
            d="M5.6 14.8c-.3-.8-.4-1.8-.4-2.8s.2-1.9.4-2.8L1.9 6.3C.7 8.7 0 10.3 0 12s.7 3.3 1.9 5.7l3.7-2.9z"
          />
          <path
            fill="#34A853"
            d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.2L1.9 16C3.7 19.7 7.5 23 12 23z"
          />
        </svg>
        <span>{isGoogleLoading ? 'Connecting...' : 'Continue with Google'}</span>
      </button>

      {/* Divider */}
      <div className="relative my-6 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t-2 border-ink" />
        </div>
        <span className="relative bg-paper px-3 font-mono text-[11px] font-bold text-smoke uppercase tracking-wider">
          or continue with email
        </span>
      </div>

      {/* Email / Password Form */}
      <form onSubmit={handleEmailSubmit} className="space-y-4">
        <Field id="login-email" label="Email Address" required>
          <Input
            id="login-email"
            type="email"
            autoComplete="email"
            placeholder="maker@kitbash.dev"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading || isGoogleLoading}
            required
          />
        </Field>

        <Field id="login-password" label="Password" required>
          <div className="relative">
            <Input
              id="login-password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading || isGoogleLoading}
              required
              className="pr-11"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-smoke hover:text-ink cursor-pointer p-1"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4 stroke-[2.5]" />
              ) : (
                <Eye className="w-4 h-4 stroke-[2.5]" />
              )}
            </button>
          </div>
        </Field>

        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            loading={isLoading}
            disabled={isLoading || isGoogleLoading}
          >
            <span>Sign In</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </Button>
        </div>
      </form>

      {/* Switch to Register */}
      <div className="mt-6 pt-5 border-t-2 border-ink/15 text-center">
        <p className="font-sans text-xs sm:text-sm text-graphite">
          Don&apos;t have an account?{' '}
          <Link
            href={`/register${redirectPath !== '/' ? `?redirect=${encodeURIComponent(redirectPath)}` : ''}`}
            className="font-bold text-ink underline decoration-2 decoration-sun hover:decoration-ink transition-colors"
          >
            Create maker account
          </Link>
        </p>
      </div>
    </div>
  );
}
