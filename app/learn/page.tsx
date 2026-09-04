import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import { PageContainer, Section } from '@/shared/layout';
import { Breadcrumbs } from '@/shared/navigation/Breadcrumbs';
import { Card, Badge } from '@/shared/ui';

export const metadata: Metadata = {
  title: 'Learning Center — Document Architecture & Standards',
  description:
    'Evergreen guides, compression benchmarks, PDF/A standards, and browser security documentation.',
};

export default function LearnIndexPage() {
  const guides = [
    {
      title: 'How PDF Compression Works',
      category: 'Compression',
      description: 'An architectural deep-dive into stream downsampling, object removal, and font subsetting.',
      href: '/learn/pdf/how-to-compress-a-pdf',
    },
    {
      title: 'Client-Side Document Sovereignty',
      category: 'Security',
      description: 'Understanding browser Web Workers, memory isolation, and why files never touch remote servers.',
      href: '/learn/security/client-side-sovereignty',
    },
    {
      title: 'PDF/A Archival Standards Guide',
      category: 'Standards',
      description: 'A complete reference for long-term document preservation and compliance formatting.',
      href: '/learn/standards/what-is-pdf-a',
    },
  ];

  return (
    <Section spacing="md">
      <PageContainer size="lg" className="space-y-10">
        <div className="space-y-4">
          <Breadcrumbs items={[{ label: 'Learning Center' }]} />
          <div className="space-y-2">
            <Badge variant="accent" size="sm">Knowledge Graph</Badge>
            <h1 className="text-3xl font-bold tracking-tight text-zentro-navy-900 sm:text-4xl dark:text-white">
              Document Engineering & Learning
            </h1>
            <p className="max-w-2xl text-sm text-zentro-text-secondary">
              Authoritative guides explaining document standards, cryptographic ciphers, compression strategies, and privacy.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <Card key={g.title} variant="interactive" padding="md" className="flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <Badge variant="neutral" size="sm">{g.category}</Badge>
                <h2 className="text-base font-bold text-zentro-navy-900 dark:text-white">{g.title}</h2>
                <p className="text-xs text-zentro-text-secondary">{g.description}</p>
              </div>
              <div className="text-xs font-semibold text-zentro-orange-600 flex items-center gap-1">
                <span>Read Guide</span>
                <ArrowRight className="h-3 w-3" />
              </div>
            </Card>
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}