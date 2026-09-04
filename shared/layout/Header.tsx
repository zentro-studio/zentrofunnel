'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { mainNav } from '@/config/navigation';
import { PageContainer } from '@/shared/layout/PageContainer';
import { Button } from '@/shared/ui/Button';
import { MobileNav } from '@/shared/layout/MobileNav';
import { cn } from '@/shared/utils/cn';

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full border-b transition-all duration-normal',
        scrolled
          ? 'border-zentro-border-light bg-white/95 shadow-md shadow-zentro-navy-900/5 backdrop-blur-md dark:border-zentro-navy-800 dark:bg-zentro-navy-950/90 dark:shadow-black/20'
          : 'border-transparent bg-white/80 backdrop-blur-sm dark:bg-zentro-navy-950/70'
      )}
    >
      <PageContainer size="lg">
        <div className="flex h-16 items-center justify-between gap-4">
          
          {/* Brand Identity with Micro-Interactions */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="group flex items-center gap-1.5 focus-zentro rounded-zentro-sm py-1"
            >
              <span className="font-heading text-2xl font-extrabold tracking-tight text-zentro-navy-900 transition-colors duration-fast group-hover:text-zentro-orange-600 dark:text-white dark:group-hover:text-zentro-orange-400">
                Zentro
              </span>
              <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-zentro-orange-400 opacity-75 duration-1000 group-hover:opacity-100" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-zentro-orange-500 transition-transform duration-fast group-hover:scale-125" />
              </span>
            </Link>

            {/* Desktop Navigation with Animated Highlight Pills */}
            <nav className="hidden md:flex items-center gap-1.5">
              {mainNav.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'relative rounded-zentro-sm px-3.5 py-1.5 text-sm font-semibold transition-all duration-fast focus-zentro select-none',
                      isActive
                        ? 'text-zentro-orange-600 dark:text-zentro-orange-400 bg-zentro-orange-50/80 dark:bg-zentro-orange-950/40'
                        : 'text-zentro-navy-700 hover:text-zentro-navy-900 hover:bg-zentro-navy-50 hover:-translate-y-0.5 active:translate-y-0 dark:text-zentro-navy-300 dark:hover:text-white dark:hover:bg-zentro-navy-800/80'
                    )}
                  >
                    <span>{item.title}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-zentro-orange-500" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Desktop Right Action Area */}
          <div className="hidden md:flex items-center gap-3.5">
            {/* Live Sovereign Status Pill */}
            <div className="hidden lg:flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-3 py-1 text-xs font-semibold text-emerald-800 shadow-sm transition-all duration-fast hover:border-emerald-300 hover:bg-emerald-100/70 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>100% Client-Side RAM</span>
            </div>

            {/* Conversion CTA */}
            <Link href="/tools" className="group">
              <Button
                variant="primary"
                size="sm"
                rightIcon={
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-fast group-hover:translate-x-1" />
                }
              >
                All Tools
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <MobileNav />

        </div>
      </PageContainer>
    </header>
  );
}
export default Header;