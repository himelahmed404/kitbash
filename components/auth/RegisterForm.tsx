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

export function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get('redirect') || '/';

  const { signUpWithEmail, signInWithGoogle, user } = useAuth();
  const [name, setName] = React.useState('');
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

  // Calculate password strength (0 to 4)
  const passwordStrength = React.useMemo(() => {
    if (!password) return 0;
    let score = 0;
    if (password.length >= 6) score += 1;
    if (password.length >= 10) score += 1;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score += 1;
    if (/[0-9]/.test(password) || /[^A-Za-z0-9]/.test(password)) score += 1;
    return score;
  }, [password]);

  const strengthLabels = ['NONE', 'WEAK', 'FAIR', 'GOOD', 'STRONG'];
  const strengthColors = [
    'bg-fog',
    'bg-danger',
    'bg-sun',
    'bg-mint',
    'bg-bubblegum',
  ];

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!name.trim()) {
      setErrorMessage('Please enter your creator display name.');
      triggerShake();
      return;
    }

    if (!email.trim()) {
      setErrorMessage('Please enter a valid email address.');
      triggerShake();
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must contain at least 6 characters.');
      triggerShake();
      return;
    }

    try {
      setIsLoading(true);
      await signUpWithEmail(email, password, name.trim());
      toast.success(`Welcome to KITBASH, ${name.trim()}! 🎉`, {
        description: 'Your maker account has been created successfully.',
      });
      router.push(redirectPath);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Registration failed';
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
      const displayName = cred.user.displayName || 'Maker';
      toast.success(`Welcome to KITBASH, ${displayName}! 🎉`, {
        description: 'Signed in via Google.',
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
        <span className="eyebrow text-graphite mb-1 block">Maker Studio</span>
        <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight">
          Create Account
        </h2>
        <p className="text-sm text-graphite mt-1">
          Join 38,000+ makers shipping high-impact parts.
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
        <span>{isGoogleLoading ? 'Connecting...' : 'Sign up with Google'}</span>
      </button>

      {/* Divider */}
      <div className="relative my-6 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t-2 border-ink" />
        </div>
        <span className="relative bg-paper px-3 font-mono text-[11px] font-bold text-smoke uppercase tracking-wider">
          or register with email
        </span>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <Field id="reg-name" label="Creator / Studio Name" required>
          <Input
            id="reg-name"
            type="text"
            autoComplete="name"
            placeholder="e.g. Pixel Crafters or Alex"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isLoading || isGoogleLoading}
            required
          />
        </Field>

        <Field id="reg-email" label="Email Address" required>
          <Input
            id="reg-email"
            type="email"
            autoComplete="email"
            placeholder="alex@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading || isGoogleLoading}
            required
          />
        </Field>

        <Field
          id="reg-password"
          label="Password"
          hint="Minimum 6 characters with mixed case or numbers."
          required
        >
          <div className="relative">
            <Input
              id="reg-password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="new-password"
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

          {/* Neo-Brutalist Password Strength Blocks */}
          {password.length > 0 && (
            <div className="mt-2 space-y-1">
              <div className="flex items-center justify-between text-[11px] font-mono font-bold">
                <span className="text-graphite">PASSWORD STRENGTH:</span>
                <span className="text-ink">{strengthLabels[passwordStrength]}</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 h-2.5">
                {[1, 2, 3, 4].map((step) => {
                  const active = passwordStrength >= step;
                  return (
                    <div
                      key={step}
                      className={`border-2 border-ink transition-colors ${
                        active ? strengthColors[passwordStrength] : 'bg-fog'
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          )}
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
            <span>Create Maker Account</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </Button>
        </div>
      </form>

      {/* Switch to Login */}
      <div className="mt-6 pt-5 border-t-2 border-ink/15 text-center">
        <p className="font-sans text-xs sm:text-sm text-graphite">
          Already have an account?{' '}
          <Link
            href={`/login${redirectPath !== '/' ? `?redirect=${encodeURIComponent(redirectPath)}` : ''}`}
            className="font-bold text-ink underline decoration-2 decoration-sun hover:decoration-ink transition-colors"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
