import type { Metadata } from 'next';
import { PageContainer, Section } from '@/shared/layout';
import { Breadcrumbs } from '@/shared/navigation/Breadcrumbs';
import { Card, Badge } from '@/shared/ui';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions governing the use of Zentro sovereign document processing tools.',
};

export default function TermsPage() {
  return (
    <Section spacing="md">
      <PageContainer size="md" className="space-y-8">
        <Breadcrumbs items={[{ label: 'Terms of Service' }]} />
        <div className="space-y-3">
          <Badge variant="neutral" size="sm">Legal Contract</Badge>
          <h1 className="text-3xl font-bold tracking-tight text-zentro-navy-900 sm:text-4xl dark:text-white">
            Terms of Service
          </h1>
          <p className="text-sm text-zentro-text-secondary">
            Last updated: 2026. Clear, transparent terms for using Zentro browser-based utilities.
          </p>
        </div>

        <Card variant="flat" padding="lg" className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-base font-bold text-zentro-navy-900 dark:text-white">1. Permitted Use</h2>
            <p className="text-xs leading-relaxed text-zentro-text-secondary">
              Zentro grants you a free, non-exclusive, sovereign license to process personal and commercial documents directly on your device. You are responsible for ensuring you have lawful rights to the documents you process.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-bold text-zentro-navy-900 dark:text-white">2. Disclaimer of Warranty</h2>
            <p className="text-xs leading-relaxed text-zentro-text-secondary">
              Zentro is provided on an &quot;as-is&quot; basis without warranties of any kind. While our tools undergo rigorous testing against PDF/A and OpenXML standards, we recommend retaining original copies of essential records.
            </p>
          </div>
        </Card>
      </PageContainer>
    </Section>
  );
}