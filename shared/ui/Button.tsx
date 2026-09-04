import * as React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/shared/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-zentro-sm transition-all duration-fast disabled:opacity-50 disabled:pointer-events-none focus-zentro cursor-pointer active:scale-[0.98] select-none';

    const variants = {
      primary:
        'bg-zentro-orange-500 text-white hover:bg-zentro-orange-600 hover:shadow-md hover:shadow-zentro-orange-500/20 active:bg-zentro-orange-700 hover:-translate-y-0.5 border border-transparent',
      secondary:
        'bg-zentro-navy-800 text-white hover:bg-zentro-navy-900 hover:shadow-md hover:shadow-zentro-navy-900/20 active:bg-zentro-navy-950 hover:-translate-y-0.5 border border-transparent dark:bg-zentro-navy-700 dark:hover:bg-zentro-navy-600',
      outline:
        'border border-zentro-border-light bg-white text-zentro-navy-800 hover:bg-zentro-navy-50 hover:border-zentro-navy-300 hover:shadow-sm active:bg-zentro-navy-100 hover:-translate-y-0.5 dark:bg-transparent dark:border-zentro-navy-700 dark:text-zentro-navy-100 dark:hover:bg-zentro-navy-800',
      ghost:
        'bg-transparent text-zentro-navy-700 hover:bg-zentro-navy-100 hover:text-zentro-navy-900 active:bg-zentro-navy-200 dark:text-zentro-navy-300 dark:hover:bg-zentro-navy-800 dark:hover:text-white',
      danger:
        'bg-zentro-status-error text-white hover:bg-red-600 hover:shadow-md hover:shadow-red-500/20 active:bg-red-700 hover:-translate-y-0.5 border border-transparent',
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5 gap-1.5 h-8',
      md: 'text-sm px-4 py-2 gap-2 h-10',
      lg: 'text-base px-6 py-3 gap-2.5 h-12',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin text-current" />
        ) : (
          leftIcon
        )}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;