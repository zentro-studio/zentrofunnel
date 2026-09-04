'use client';

import * as React from 'react';
import { Loader2, ShieldCheck, XCircle } from 'lucide-react';
import { Progress } from '@/shared/ui/Progress';
import { Button } from '@/shared/ui/Button';

export interface ProcessingStateProps {
  progress?: number;
  statusText?: string;
  isIndeterminate?: boolean;
  onCancel?: () => void;
  fileName?: string;
}

export function ProcessingState({
  progress = 0,
  statusText = 'Optimizing document streams in browser memory...',
  isIndeterminate = false,
  onCancel,
  fileName,
}: ProcessingStateProps) {
  return (
    <div className="flex min-h-[260px] flex-col items-center justify-center rounded-zentro-lg border border-zentro-border-light bg-white p-8 text-center shadow-sm dark:border-zentro-navy-800 dark:bg-zentro-navy-900 space-y-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zentro-orange-50 text-zentro-orange-500 dark:bg-zentro-orange-950/40">
        <Loader2 className="h-6 w-6 animate-spin text-zentro-orange-500" />
      </div>

      <div className="max-w-md w-full space-y-2">
        <h3 className="text-base font-bold text-zentro-navy-900 dark:text-white sm:text-lg">
          Processing Document
        </h3>
        {fileName && (
          <p className="truncate text-xs font-mono text-zentro-navy-500 dark:text-zentro-navy-400">
            {fileName}
          </p>
        )}
        <p className="text-xs text-zentro-text-secondary">
          {statusText}
        </p>
      </div>

      <div className="max-w-md w-full space-y-2">
        <div className="flex justify-between text-xs font-semibold text-zentro-navy-700 dark:text-zentro-navy-300">
          <span>Worker Execution</span>
          {!isIndeterminate && <span className="font-mono">{Math.round(progress)}%</span>}
        </div>
        <Progress value={progress} isIndeterminate={isIndeterminate} size="md" />
      </div>

      <div className="flex flex-col items-center gap-3 pt-2">
        <div className="flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 font-medium">
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          <span>Execution isolated to local Web Worker thread</span>
        </div>

        {onCancel && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onCancel}
            leftIcon={<XCircle className="h-4 w-4" />}
            className="text-xs text-zentro-navy-500 hover:text-red-600"
          >
            Cancel Task
          </Button>
        )}
      </div>
    </div>
  );
}

export default ProcessingState;