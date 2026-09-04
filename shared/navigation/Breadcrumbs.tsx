import * as React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/shared/utils/cn';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items, className, ...props }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex items-center text-xs text-zentro-text-secondary', className)}
      {...props}
    >
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 text-zentro-navy-600 hover:text-zentro-navy-900 transition-colors dark:text-zentro-navy-300 dark:hover:text-white"
          >
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3 text-zentro-navy-400" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-zentro-navy-900 transition-colors dark:hover:text-white"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn(
                    'font-medium text-zentro-navy-900 dark:text-white',
                    isLast && 'truncate max-w-[200px] sm:max-w-none'
                  )}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}