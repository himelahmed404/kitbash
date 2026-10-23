'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, PlusCircle, LayoutDashboard, LogOut, ChevronDown, UserCircle } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { toast } from 'sonner';
import { Logo } from './Logo';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const { user, signOutUser, loading } = useAuth();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  const [prevPathname, setPrevPathname] = React.useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  const handleSignOut = async () => {
    try {
      await signOutUser();
      toast.success('Signed out successfully', {
        description: 'See you next time, maker.',
      });
      router.push('/');
    } catch {
      toast.error('Failed to sign out. Please try again.');
    }
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Kits', href: '/items' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const displayName = user?.displayName || user?.email?.split('@')[0] || 'Maker';
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <header className="sticky top-3 z-50 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto w-full transition-all duration-200">
      <nav
        className={cn(
          'flex items-center justify-between bg-paper border-3 border-ink px-4 sm:px-6 transition-all duration-200',
          isScrolled ? 'py-2 shadow-brutal' : 'py-3.5 shadow-brutal-sm'
        )}
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <Logo />

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'relative py-1 font-bold text-sm tracking-tight text-ink transition-colors hover:text-ink select-none',
                  isActive ? 'font-black' : 'text-graphite'
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-sun border-t border-ink" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Auth Section */}
        <div className="hidden lg:flex items-center gap-3">
          {loading ? (
            <div className="h-9 w-24 bg-fog border-2 border-ink animate-pulse" />
          ) : user ? (
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button
                  type="button"
                  className="flex items-center gap-2.5 px-3 py-1.5 bg-paper border-3 border-ink shadow-brutal-sm brutal-lift focus-visible:outline-3 focus-visible:outline-ink select-none cursor-pointer"
                >
                  <div className="w-7 h-7 bg-sun border-2 border-ink flex items-center justify-center font-bold text-xs uppercase text-ink">
                    {initial}
                  </div>
                  <span className="font-bold text-sm text-ink max-w-[120px] truncate">
                    {displayName}
                  </span>
                  <ChevronDown className="w-4 h-4 text-ink stroke-[2.5]" />
                </button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  align="end"
                  sideOffset={8}
                  className="min-w-[260px] bg-paper border-3 border-ink shadow-brutal-lg p-2 z-50 animate-in fade-in zoom-in-95 font-sans"
                >
                  {/* User info block */}
                  <div className="p-3 bg-cream border-2 border-ink mb-2">
                    <p className="font-bold text-sm text-ink truncate">{displayName}</p>
                    <p className="font-mono text-xs text-graphite truncate">{user.email}</p>
                    <span className="inline-block mt-1 font-mono text-[10px] text-ink font-bold uppercase tracking-wider bg-sun px-1.5 py-0.5 border border-ink">
                      Verified Creator
                    </span>
                  </div>

                  <DropdownMenu.Item asChild>
                    <Link
                      href="/items/add"
                      className="flex items-center gap-2.5 px-3 py-2.5 text-sm font-bold text-ink cursor-pointer hover:bg-sun transition-colors outline-none"
                    >
                      <PlusCircle className="w-4 h-4 stroke-[2.5]" />
                      <span>Add Kit</span>
                    </Link>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item asChild>
                    <Link
                      href="/items/manage"
                      className="flex items-center gap-2.5 px-3 py-2.5 text-sm font-bold text-ink cursor-pointer hover:bg-sun transition-colors outline-none"
                    >
                      <LayoutDashboard className="w-4 h-4 stroke-[2.5]" />
                      <span>Manage Kits</span>
                    </Link>
                  </DropdownMenu.Item>

                  <DropdownMenu.Separator className="h-0.5 bg-ink my-1" />

                  <DropdownMenu.Item
                    onSelect={handleSignOut}
                    className="flex items-center gap-2.5 px-3 py-2.5 text-sm font-bold text-danger cursor-pointer hover:bg-danger/10 transition-colors outline-none"
                  >
                    <LogOut className="w-4 h-4 stroke-[2.5]" />
                    <span>Log Out</span>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          ) : (
            <div className="flex items-center gap-2.5">
              <Button asChild variant="outline" size="sm">
                <Link href="/login">
                  <UserCircle className="w-4 h-4 stroke-[2.5]" />
                  <span>Sign In</span>
                </Link>
              </Button>
              <Button asChild variant="primary" size="sm">
                <Link href="/register">Register</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-11 h-11 flex items-center justify-center bg-paper border-3 border-ink shadow-brutal-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all text-ink"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[2.5]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[2.5]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Full-Screen Sheet */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[72px] bg-sun border-t-3 border-ink z-40 p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-top-4"
        >
          <div className="flex flex-col gap-5 pt-4">
            <span className="font-mono text-xs uppercase tracking-widest text-ink">
              Navigation
            </span>
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'text-3xl font-bold uppercase tracking-tight text-ink hover:underline decoration-3 decoration-ink',
                    isActive && 'underline underline-offset-4'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="h-0.5 bg-ink my-2" />

            <span className="font-mono text-xs uppercase tracking-widest text-ink">
              Creator Studio
            </span>
            <Link
              href="/items/add"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-bold uppercase tracking-tight text-ink flex items-center gap-2"
            >
              <PlusCircle className="w-6 h-6 stroke-[2.5]" />
              <span>Add Kit</span>
            </Link>
            <Link
              href="/items/manage"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-bold uppercase tracking-tight text-ink flex items-center gap-2"
            >
              <LayoutDashboard className="w-6 h-6 stroke-[2.5]" />
              <span>Manage Kits</span>
            </Link>
          </div>

          <div className="pt-8 border-t-3 border-ink flex flex-col gap-3">
            {user ? (
              <div className="flex items-center justify-between bg-paper border-3 border-ink p-3 shadow-brutal-sm">
                <div className="min-w-0 pr-2">
                  <p className="font-bold text-sm text-ink truncate">{displayName}</p>
                  <p className="font-mono text-xs text-graphite truncate">{user.email}</p>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={async () => {
                    await handleSignOut();
                    setMobileMenuOpen(false);
                  }}
                >
                  Log Out
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <Button
                  asChild
                  variant="outline"
                  size="md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button
                  asChild
                  variant="dark"
                  size="md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href="/register">Register</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
