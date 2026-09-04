'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { mainNav } from '@/config/navigation';
import { Button } from '@/shared/ui/Button';
import { cn } from '@/shared/utils/cn';

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-zentro-sm p-2 text-zentro-navy-700 transition-transform duration-fast hover:scale-105 hover:bg-zentro-navy-100 active:scale-95 focus-zentro dark:text-zentro-navy-200 dark:hover:bg-zentro-navy-800 cursor-pointer"
        aria-label="Open Navigation Menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-zentro-navy-950/60 backdrop-blur-sm"
            />

            {/* Drawer Sheet */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 280 }}
              className="relative ml-auto flex h-full w-full max-w-xs flex-col bg-white shadow-2xl dark:bg-zentro-navy-950 border-l border-zentro-border-light dark:border-zentro-navy-800"
            >
              {/* Header inside drawer */}
              <div className="flex h-16 items-center justify-between border-b border-zentro-border-light px-6 dark:border-zentro-navy-800">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-1.5 text-xl font-bold tracking-tight text-zentro-navy-900 dark:text-white"
                >
                  <span>Zentro</span>
                  <span className="h-2 w-2 rounded-full bg-zentro-orange-500" />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-zentro-sm p-2 text-zentro-navy-700 hover:bg-zentro-navy-100 active:scale-95 focus-zentro dark:text-zentro-navy-200 dark:hover:bg-zentro-navy-800 cursor-pointer"
                  aria-label="Close Navigation Menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                <nav className="flex flex-col space-y-2">
                  {mainNav.map((item) => {
                    const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          'rounded-zentro-sm px-4 py-2.5 text-base font-bold transition-all duration-fast active:scale-[0.98]',
                          isActive
                            ? 'bg-zentro-orange-50 text-zentro-orange-600 dark:bg-zentro-orange-950/40 dark:text-zentro-orange-400'
                            : 'text-zentro-navy-800 hover:bg-zentro-navy-50 hover:translate-x-1 dark:text-zentro-navy-100 dark:hover:bg-zentro-navy-900'
                        )}
                      >
                        {item.title}
                      </Link>
                    );
                  })}
                </nav>

                <div className="pt-4 border-t border-zentro-border-light dark:border-zentro-navy-800">
                  <Link href="/tools" onClick={() => setIsOpen(false)} className="w-full block">
                    <Button variant="primary" size="lg" className="w-full" rightIcon={<ArrowRight className="h-4 w-4" />}>
                      Explore All Tools
                    </Button>
                  </Link>
                </div>

                <div className="rounded-zentro-md border border-emerald-200 bg-emerald-50/60 p-4 dark:border-emerald-900/60 dark:bg-emerald-950/30">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                    <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Sovereign Browser Execution</span>
                  </div>
                  <p className="mt-1 text-xs text-zentro-text-secondary leading-relaxed">
                    Zero remote server uploads. Your documents stay safe in local RAM.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default MobileNav;