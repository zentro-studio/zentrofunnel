import type { Metadata } from 'next';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PageContainer, Section } from '@/shared/layout';
import { Breadcrumbs } from '@/shared/navigation/Breadcrumbs';
import { Card, Badge } from '@/shared/ui';

export const metadata: Metadata = {
  title: 'Privacy Policy — Zero Upload & Sovereign Processing Guarantee',
  description: 'Zentro enforces a zero-upload architecture. Read our sovereign data privacy guarantee.',
};

export default function PrivacyPage() {
  return (
    <Section spacing="md">
      <PageContainer size="md" className="space-y-8">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
        <div className="space-y-3">
          <Badge variant="success" size="sm">
            <CheckCircle2 className="h-3 w-3" /> Zero Server Storage
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight text-zentro-navy-900 sm:text-4xl dark:text-white">
            Privacy Policy & Sovereignty Guarantee
          </h1>
          <p className="text-sm text-zentro-text-secondary">
            Last updated: 2026. Zentro is engineered to make data collection technically impossible during document processing.
          </p>
        </div>

        <Card variant="flat" padding="lg" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-base font-bold text-zentro-navy-900 dark:text-white">1. Client-Side Execution Guarantee</h2>
            <p className="text-xs leading-relaxed text-zentro-text-secondary">
              When you use any Zentro tool (Compress PDF, Merge, Convert, OCR, etc.), your document files are loaded directly into your local browser execution context. No document binaries, raw text streams, or image buffers are transmitted across the internet to our servers.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-bold text-zentro-navy-900 dark:text-white">2. Zero Data Retention</h2>
            <p className="text-xs leading-relaxed text-zentro-text-secondary">
              Because files are not uploaded, there is no server-side retention window or temporary disk staging. When you finish downloading or close your browser tab, all memory buffers allocated for the document are permanently released by your device operating system.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-bold text-zentro-navy-900 dark:text-white">3. Telemetry & Analytics</h2>
            <p className="text-xs leading-relaxed text-zentro-text-secondary">
              We never log document names, document content, file hashes, or user-identifiable data. Any future system telemetry will strictly measure aggregate operational status tokens (e.g., 'compression task completed successfully') without inspecting file contents.
            </p>
          </div>
        </Card>
      </PageContainer>
    </Section>
  );
}