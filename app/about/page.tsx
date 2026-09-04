import type { Metadata } from 'next';
import { PageContainer, Section } from '@/shared/layout';
import { Breadcrumbs } from '@/shared/navigation/Breadcrumbs';
import { Card, Badge } from '@/shared/ui';

export const metadata: Metadata = {
  title: 'About Zentro — Sovereign Document Workspace',
  description: 'Our mission is to eliminate document privacy leaks by building sovereign browser-first tools.',
};

export default function AboutPage() {
  return (
    <Section spacing="md">
      <PageContainer size="md" className="space-y-8">
        <Breadcrumbs items={[{ label: 'About' }]} />
        <div className="space-y-3">
          <Badge variant="accent" size="sm">Our Mission</Badge>
          <h1 className="text-3xl font-bold tracking-tight text-zentro-navy-900 sm:text-4xl dark:text-white">
            Documents Belong to You
          </h1>
          <p className="text-base leading-relaxed text-zentro-text-secondary">
            Zentro was founded on a simple principle: you should never have to upload sensitive legal, financial, or personal documents to a third-party cloud server just to compress or convert them.
          </p>
        </div>

        <Card variant="flat" padding="lg" className="space-y-4">
          <h2 className="text-lg font-bold text-zentro-navy-900 dark:text-white">The Sovereign Computing Model</h2>
          <p className="text-xs leading-relaxed text-zentro-text-secondary">
            Modern web browsers possess powerful multi-core processing capabilities. Zentro utilizes WebAssembly and isolated Web Workers to execute document processing directly on your device. Your data stays where it belongs: with you.
          </p>
        </Card>
      </PageContainer>
    </Section>
  );
}