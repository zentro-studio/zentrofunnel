import * as React from 'react';
import { cn } from '@/shared/utils/cn';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number; // 0 to 100
  isIndeterminate?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, isIndeterminate = false, size = 'md', ...props }, ref) => {
    const clampedValue = Math.min(Math.max(value, 0), 100);

    const sizes = {
      sm: 'h-1.5',
      md: 'h-2.5',
      lg: 'h-4',
    };

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={isIndeterminate ? undefined : clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        className={cn(
          'w-full overflow-hidden rounded-full bg-zentro-navy-100 dark:bg-zentro-navy-800',
          sizes[size],
          className
        )}
        {...props}
      >
        <div
          className={cn(
            'h-full bg-zentro-orange-500 transition-all duration-normal ease-out',
            isIndeterminate && 'w-1/3 animate-[pulse_1.5s_ease-in-out_infinite]'
          )}
          style={!isIndeterminate ? { width: `${clampedValue}%` } : undefined}
        />
      </div>
    );
  }
);

Progress.displayName = 'Progress';