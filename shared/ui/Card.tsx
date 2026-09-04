import * as React from 'react';
import { cn } from '@/shared/utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'flat' | 'interactive';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', padding = 'md', children, ...props }, ref) => {
    const baseStyles = 'rounded-zentro-md bg-white text-zentro-text-primary transition-all duration-normal dark:bg-zentro-navy-900';

    const variants = {
      default: 'border border-zentro-border-light shadow-sm dark:border-zentro-navy-800',
      flat: 'border border-zentro-border-light bg-zentro-bg-soft dark:border-zentro-navy-800 dark:bg-zentro-navy-900/60',
      interactive:
        'border border-zentro-border-light shadow-sm hover:border-zentro-orange-400 hover:shadow-xl hover:shadow-zentro-orange-500/10 hover:-translate-y-1.5 cursor-pointer dark:border-zentro-navy-800 dark:hover:border-zentro-orange-500/60 dark:hover:shadow-black/50',
    };

    const paddings = {
      none: 'p-0',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    };

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], paddings[padding], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
export default Card;