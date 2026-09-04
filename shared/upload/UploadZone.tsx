'use client';

import * as React from 'react';
import { UploadCloud, FileUp, AlertTriangle } from 'lucide-react';
import { validateDocumentFile, ValidationOptions } from '@/core/document/validator';
import { Button } from '@/shared/ui/Button';
import { cn } from '@/shared/utils/cn';

export interface UploadZoneProps {
  onFileSelect: (file: File) => void;
  acceptedFormats?: string[];
  maxSizeBytes?: number;
  title?: string;
  description?: string;
  disabled?: boolean;
  className?: string;
}

export function UploadZone({
  onFileSelect,
  acceptedFormats = ['.pdf'],
  maxSizeBytes = 50 * 1024 * 1024,
  title = 'Select or drop your document here',
  description = 'Processed 100% locally in your browser memory',
  disabled = false,
  className,
}: UploadZoneProps) {
  const [isDragOver, setIsDragOver] = React.useState(false);
  const [validationError, setValidationError] = React.useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleProcessFile = async (file: File) => {
    setValidationError(null);

    const validation = await validateDocumentFile(file, {
      maxSizeBytes,
      allowedExtensions: acceptedFormats,
      checkMagicBytes: true,
    });

    if (!validation.valid) {
      setValidationError(validation.error || 'Invalid document file.');
      return;
    }

    onFileSelect(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);

    if (disabled) return;

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file) handleProcessFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!disabled) setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file) handleProcessFile(file);
    }
  };

  return (
    <div className="w-full space-y-3">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => !disabled && fileInputRef.current?.click()}
        className={cn(
          'group relative flex min-h-[260px] cursor-pointer flex-col items-center justify-center rounded-zentro-lg border-2 border-dashed p-8 text-center transition-all duration-normal',
          isDragOver
            ? 'border-zentro-orange-500 bg-zentro-orange-50/50 scale-[1.01] shadow-lg shadow-zentro-orange-500/10 dark:border-zentro-orange-400 dark:bg-zentro-orange-950/20'
            : 'border-zentro-navy-200 bg-white hover:border-zentro-orange-400 hover:bg-zentro-navy-50/40 dark:border-zentro-navy-700 dark:bg-zentro-navy-900 dark:hover:border-zentro-orange-500/60',
          disabled && 'cursor-not-allowed opacity-50 pointer-events-none',
          className
        )}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={acceptedFormats.join(',')}
          onChange={handleInputChange}
          disabled={disabled}
          className="sr-only"
          aria-label="Upload document"
        />

        <div className="flex flex-col items-center space-y-4">
          <div
            className={cn(
              'flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-fast',
              isDragOver
                ? 'bg-zentro-orange-500 text-white scale-110 shadow-md shadow-zentro-orange-500/30'
                : 'bg-zentro-orange-50 text-zentro-orange-600 group-hover:scale-105 dark:bg-zentro-orange-950/40 dark:text-zentro-orange-400'
            )}
          >
            <UploadCloud className="h-7 w-7" />
          </div>

          <div className="space-y-1">
            <h3 className="text-base font-bold text-zentro-navy-900 dark:text-white sm:text-lg">
              {title}
            </h3>
            <p className="text-xs text-zentro-text-secondary sm:text-sm">
              {description}
            </p>
          </div>

          <div className="pt-2">
            <Button
              type="button"
              variant="primary"
              size="md"
              leftIcon={<FileUp className="h-4 w-4" />}
              className="pointer-events-none"
            >
              Choose File
            </Button>
          </div>

          <p className="text-[11px] font-medium text-zentro-navy-400 dark:text-zentro-navy-500">
            Accepted formats: {acceptedFormats.join(', ')} • Max {Math.round(maxSizeBytes / (1024 * 1024))}MB
          </p>
        </div>
      </div>

      {validationError && (
        <div className="flex items-center gap-2 rounded-zentro-sm border border-red-200 bg-red-50 p-3 text-xs font-semibold text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-300">
          <AlertTriangle className="h-4 w-4 shrink-0 text-red-600" />
          <span>{validationError}</span>
        </div>
      )}
    </div>
  );
}

export default UploadZone;