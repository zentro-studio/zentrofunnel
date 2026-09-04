export interface ValidationOptions {
  maxSizeBytes?: number;
  allowedExtensions?: string[];
  checkMagicBytes?: boolean;
}

export async function validateDocumentFile(
  file: File,
  options: ValidationOptions = {}
): Promise<{ valid: boolean; error?: string }> {
  const {
    maxSizeBytes = 50 * 1024 * 1024, // 50MB default
    allowedExtensions = ['.pdf'],
    checkMagicBytes = true,
  } = options;

  if (!file || file.size === 0) {
    return { valid: false, error: 'The selected file is empty (0 bytes).' };
  }

  if (file.size > maxSizeBytes) {
    const limitMb = Math.round(maxSizeBytes / (1024 * 1024));
    return {
      valid: false,
      error: `File size exceeds the sovereign browser limit of ${limitMb}MB.`,
    };
  }

  const ext = '.' + (file.name.split('.').pop()?.toLowerCase() || '');
  if (allowedExtensions.length > 0 && !allowedExtensions.includes(ext)) {
    return {
      valid: false,
      error: `Unsupported file format (${ext}). Supported formats: ${allowedExtensions.join(', ')}`,
    };
  }

  // Magic Byte Check: PDF specification mandates '%PDF-' header (0x25, 0x50, 0x44, 0x46)
  if (checkMagicBytes && ext === '.pdf') {
    try {
      const slice = file.slice(0, 5);
      const buffer = await slice.arrayBuffer();
      const bytes = new Uint8Array(buffer);

      const isPdfHeader =
        bytes[0] === 0x25 && // %
        bytes[1] === 0x50 && // P
        bytes[2] === 0x44 && // D
        bytes[3] === 0x46;   // F

      if (!isPdfHeader) {
        return {
          valid: false,
          error: 'Invalid or corrupted PDF file. Magic byte signature missing.',
        };
      }
    } catch {
      return {
        valid: false,
        error: 'Failed to read document binary stream for security validation.',
      };
    }
  }

  return { valid: true };
}

export default validateDocumentFile;