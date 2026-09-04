import type { Metadata } from 'next';
import { PageContainer, Section } from '@/shared/layout';
import { Breadcrumbs } from '@/shared/navigation/Breadcrumbs';
import { Card, Badge } from '@/shared/ui';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions — Privacy, Limits & Usage',
  description: 'Answers to common questions about browser processing, privacy, file limits, and document formats.',
};

export default function FAQPage() {
  const faqs = [
    {
      q: 'Are my documents uploaded to any server?',
      a: 'No. All document processing takes place entirely within your browser memory using WebAssembly and client-side workers. Your files never leave your device.',
    },
    {
      q: 'Is Zentro free to use?',
      a: 'Yes. The initial core document tools are completely free to use without registration, subscriptions, or watermarks.',
    },
    {
      q: 'What is the maximum file size supported?',
      a: 'Because processing occurs in your local system memory, limits are determined by your device RAM. Standard PDF files up to 200MB+ operate smoothly on modern browsers.',
    },
    {
      q: 'Does Zentro retain or store document data?',
      a: 'No. Zentro enforces a strict zero-retention architecture. Once you close your browser tab, all memory buffers are instantly purged.',
    },
  ];

  return (
    <Section spacing="md">
      <PageContainer size="md" className="space-y-10">
        <div className="space-y-4">
          <Breadcrumbs items={[{ label: 'FAQ' }]} />
          <div className="space-y-2">
            <Badge variant="accent" size="sm">Help & Guidance</Badge>
            <h1 className="text-3xl font-bold tracking-tight text-zentro-navy-900 sm:text-4xl dark:text-white">
              Frequently Asked Questions
            </h1>
            <p className="text-sm text-zentro-text-secondary">
              Everything you need to know about sovereign browser processing, privacy guarantees, and format capabilities.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <Card key={faq.q} variant="default" padding="md" className="space-y-2">
              <h2 className="text-sm font-bold text-zentro-navy-900 dark:text-white">{faq.q}</h2>
              <p className="text-xs leading-relaxed text-zentro-text-secondary">{faq.a}</p>
            </Card>
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}