'use client';

import * as React from 'react';
import { FileText, X, CheckCircle2, AlertCircle } from 'lucide-react';
import { formatBytes } from '@/shared/file/formatBytes';
import { Badge } from '@/shared/ui/Badge';
import { cn } from '@/shared/utils/cn';

export interface FileCardProps {
  file: File;
  onRemove?: () => void;
  isValid?: boolean;
  error?: string;
  className?: string;
}

export function FileCard({
  file,
  onRemove,
  isValid = true,
  error,
  className,
}: FileCardProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between rounded-zentro-md border p-3.5 transition-all duration-fast shadow-sm',
        isValid
          ? 'border-zentro-border-light bg-white dark:border-zentro-navy-800 dark:bg-zentro-navy-900'
          : 'border-red-200 bg-red-50/50 dark:border-red-900/60 dark:bg-red-950/20',
        className
      )}
    >
      <div className="flex items-center gap-3 overflow-hidden">
        <div
          className={cn(
            'flex h-10 w-10 shrink-0 items-center justify-center rounded-zentro-sm',
            isValid
              ? 'bg-zentro-orange-50 text-zentro-orange-600 dark:bg-zentro-orange-950/40 dark:text-zentro-orange-400'
              : 'bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400'
          )}
        >
          <FileText className="h-5 w-5" />
        </div>

        <div className="min-w-0 space-y-0.5">
          <p className="truncate text-sm font-bold text-zentro-navy-900 dark:text-white">
            {file.name}
          </p>
          <div className="flex items-center gap-2 text-xs text-zentro-text-secondary">
            <span>{formatBytes(file.size)}</span>
            <span>•</span>
            {isValid ? (
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                <CheckCircle2 className="h-3 w-3" /> Ready
              </span>
            ) : (
              <span className="flex items-center gap-1 text-red-600 dark:text-red-400 font-medium">
                <AlertCircle className="h-3 w-3" /> {error || 'Invalid file'}
              </span>
            )}
          </div>
        </div>
      </div>

      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="rounded-zentro-sm p-1.5 text-zentro-navy-400 hover:bg-zentro-navy-100 hover:text-zentro-navy-800 focus-zentro transition-colors dark:hover:bg-zentro-navy-800 dark:hover:text-white cursor-pointer ml-2"
          aria-label="Remove document"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

export default FileCard;