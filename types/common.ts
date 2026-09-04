export type ProcessingStatus = 
  | 'idle'
  | 'uploading'
  | 'validating'
  | 'processing'
  | 'completed'
  | 'failed'
  | 'expired';

export interface BaseFileMetadata {
  id: string;
  name: string;
  size: number;
  type: string;
  lastModified: number;
}

export interface ProcessingError {
  code: string;
  message: string;
  recoverable: boolean;
}
