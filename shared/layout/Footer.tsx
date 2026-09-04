import * as React from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { footerNav } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { PageContainer } from '@/shared/layout/PageContainer';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zentro-border-light bg-zentro-bg-soft dark:border-zentro-navy-800 dark:bg-zentro-navy-950">
      <PageContainer size="lg" className="py-12 sm:py-16">
        
        {/* Multi-column grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 lg:gap-12">
          
          {/* Brand & Mission Column */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-1.5 focus-zentro rounded-zentro-sm group w-fit">
              <span className="font-heading text-2xl font-bold tracking-tight text-zentro-navy-900 group-hover:text-zentro-orange-600 transition-colors dark:text-white dark:group-hover:text-zentro-orange-400">
                Zentro
              </span>
              <span className="h-2.5 w-2.5 rounded-full bg-zentro-orange-500 group-hover:scale-125 transition-transform" />
            </Link>
            <p className="max-w-sm text-sm text-zentro-text-secondary">
              {siteConfig.description}
            </p>
            <div className="inline-flex items-center gap-2 rounded-zentro-sm border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300">
              <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span>Zero Uploads • Zero Server Storage</span>
            </div>
          </div>

          {/* Tools Category */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zentro-navy-900 dark:text-white">
              Document Tools
            </h3>
            <ul className="space-y-2.5 text-sm text-zentro-text-secondary">
              {footerNav.tools?.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block transition-all duration-fast hover:text-zentro-orange-600 hover:translate-x-1 dark:hover:text-zentro-orange-400 font-medium"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Center */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zentro-navy-900 dark:text-white">
              Learning Center
            </h3>
            <ul className="space-y-2.5 text-sm text-zentro-text-secondary">
              {footerNav.learning?.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block transition-all duration-fast hover:text-zentro-orange-600 hover:translate-x-1 dark:hover:text-zentro-orange-400 font-medium"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Trust */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zentro-navy-900 dark:text-white">
              Privacy & Legal
            </h3>
            <ul className="space-y-2.5 text-sm text-zentro-text-secondary">
              {footerNav.legal?.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block transition-all duration-fast hover:text-zentro-orange-600 hover:translate-x-1 dark:hover:text-zentro-orange-400 font-medium"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zentro-border-light pt-8 sm:flex-row dark:border-zentro-navy-800">
          <p className="text-xs text-zentro-navy-500 dark:text-zentro-navy-400">
            &copy; {currentYear} {siteConfig.name}. Built with sovereign browser-first architecture.
          </p>
          <p className="text-xs text-zentro-navy-500 dark:text-zentro-navy-400">
            No document telemetry recorded.
          </p>
        </div>

      </PageContainer>
    </footer>
  );
}
export default Footer;