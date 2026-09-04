'use client';

import * as React from 'react';
import { Download, CheckCircle2, RotateCcw, ArrowRight, Sparkles, FileText } from 'lucide-react';
import Link from 'next/link';
import { formatBytes } from '@/shared/file/formatBytes';
import { ProcessingResult } from '@/core/processing/types';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Badge } from '@/shared/ui/Badge';

export interface ResultPanelProps {
  result: ProcessingResult;
  onReset: () => void;
  relatedToolSlug?: string;
  relatedToolName?: string;
}

export function ResultPanel({
  result,
  onReset,
  relatedToolSlug = 'pdf-to-word',
  relatedToolName = 'Convert to Word',
}: ResultPanelProps) {
  const { fileName, fileSize, downloadUrl, telemetry } = result;
  const originalSize = telemetry.originalSizeBytes;
  const processedSize = telemetry.processedSizeBytes || fileSize;
  const savings = telemetry.savingsPercent || Math.max(0, Math.round(((originalSize - processedSize) / originalSize) * 100));

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center rounded-zentro-lg border border-zentro-border-light bg-white p-6 sm:p-10 shadow-sm dark:border-zentro-navy-800 dark:bg-zentro-navy-900 space-y-8 text-center">
      {/* Success Badge */}
      <div className="space-y-3">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-zentro-navy-900 dark:text-white sm:text-3xl">
          Document Ready for Download
        </h2>
        <p className="text-xs font-mono text-zentro-navy-500 dark:text-zentro-navy-400">
          {fileName}
        </p>
      </div>

      {/* Metrics Card */}
      <div className="grid w-full max-w-lg grid-cols-3 gap-3 rounded-zentro-md border border-zentro-border-light bg-zentro-bg-soft p-4 dark:border-zentro-navy-800 dark:bg-zentro-navy-950">
        <div className="space-y-1">
          <p className="text-[11px] font-semibold text-zentro-text-secondary">Original Size</p>
          <p className="font-mono text-sm font-bold text-zentro-navy-800 dark:text-white">
            {formatBytes(originalSize)}
          </p>
        </div>

        <div className="space-y-1 border-x border-zentro-border-light dark:border-zentro-navy-800">
          <p className="text-[11px] font-semibold text-zentro-text-secondary">Resulting Size</p>
          <p className="font-mono text-sm font-bold text-zentro-orange-600 dark:text-zentro-orange-400">
            {formatBytes(processedSize)}
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-[11px] font-semibold text-zentro-text-secondary">Reduction</p>
          <p className="font-mono text-sm font-bold text-emerald-600 dark:text-emerald-400">
            -{savings}%
          </p>
        </div>
      </div>

      {/* Primary Download Action */}
      <div className="flex flex-wrap items-center justify-center gap-3.5 w-full max-w-md">
        <Button
          type="button"
          variant="primary"
          size="lg"
          onClick={handleDownload}
          leftIcon={<Download className="h-5 w-5" />}
          className="w-full sm:w-auto flex-1 shadow-md shadow-zentro-orange-500/20"
        >
          Download Document
        </Button>
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={onReset}
          leftIcon={<RotateCcw className="h-4 w-4" />}
          className="w-full sm:w-auto"
        >
          Process Another
        </Button>
      </div>

      {/* Contextual Action Continuation */}
      <div className="w-full max-w-md border-t border-zentro-border-light pt-6 dark:border-zentro-navy-800">
        <p className="text-xs text-zentro-text-secondary mb-3">Next suggested workflow:</p>
        <Link href={`/tools/${relatedToolSlug}`} className="group block">
          <div className="flex items-center justify-between rounded-zentro-sm border border-zentro-border-light bg-white p-3 hover:border-zentro-orange-300 transition-colors dark:border-zentro-navy-800 dark:bg-zentro-navy-950">
            <div className="flex items-center gap-2 text-xs font-bold text-zentro-navy-900 dark:text-white">
              <Sparkles className="h-4 w-4 text-zentro-orange-500" />
              <span>{relatedToolName}</span>
            </div>
            <ArrowRight className="h-4 w-4 text-zentro-navy-400 group-hover:text-zentro-orange-500 group-hover:translate-x-1 transition-all" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ResultPanel;