export type JobStatus =
  | 'idle'
  | 'uploading'
  | 'validating'
  | 'processing'
  | 'completed'
  | 'failed'
  | 'cancelled'
  | 'expired';

export interface FileRecord {
  id: string;
  file: File;
  name: string;
  size: number;
  formattedSize: string;
  type: string;
  isValid: boolean;
  validationError?: string;
}

export interface ProcessingTelemetry {
  startTime: number;
  endTime?: number;
  durationMs?: number;
  originalSizeBytes: number;
  processedSizeBytes?: number;
  savingsPercent?: number;
}

export interface ProcessingResult {
  fileBlob: Blob;
  fileName: string;
  fileSize: number;
  downloadUrl: string;
  telemetry: ProcessingTelemetry;
}

export interface ToolError {
  code: string;
  message: string;
  recoverable: boolean;
  details?: string;
}