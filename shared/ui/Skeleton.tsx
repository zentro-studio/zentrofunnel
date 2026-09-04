import * as React from 'react';
import { cn } from '@/shared/utils/cn';

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-zentro-sm bg-zentro-navy-100 dark:bg-zentro-navy-800', className)}
      {...props}
    />
  );
}

export default Skeleton;