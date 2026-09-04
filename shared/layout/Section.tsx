import * as React from 'react';
import { cn } from '@/shared/utils/cn';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: 'sm' | 'md' | 'lg' | 'none';
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing = 'md', children, ...props }, ref) => {
    const spacings = {
      none: 'py-0',
      sm: 'py-6 sm:py-8',
      md: 'py-10 sm:py-16',
      lg: 'py-16 sm:py-24',
    };

    return (
      <section
        ref={ref}
        className={cn('w-full', spacings[spacing], className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';