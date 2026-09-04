import * as React from 'react';
import { cn } from '@/shared/utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'neutral' | 'accent' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'neutral', size = 'md', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center font-medium rounded-zentro-sm transition-colors';

    const variants = {
      neutral:
        'bg-zentro-navy-100 text-zentro-navy-800 border border-zentro-navy-200 dark:bg-zentro-navy-800 dark:text-zentro-navy-200 dark:border-zentro-navy-700',
      accent:
        'bg-zentro-orange-50 text-zentro-orange-700 border border-zentro-orange-200 dark:bg-zentro-orange-950/40 dark:text-zentro-orange-300 dark:border-zentro-orange-800',
      success:
        'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800',
      warning:
        'bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800',
      error:
        'bg-red-50 text-red-700 border border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800',
      info:
        'bg-sky-50 text-sky-700 border border-sky-200 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800',
    };

    const sizes = {
      sm: 'text-xs px-2 py-0.5 gap-1',
      md: 'text-xs px-2.5 py-1 gap-1.5',
    };

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';