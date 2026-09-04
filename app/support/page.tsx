import type { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle, FileCheck2, ArrowRight } from 'lucide-react';
import { PageContainer, Section } from '@/shared/layout';
import { Breadcrumbs } from '@/shared/navigation/Breadcrumbs';
import { Card, Badge, Button } from '@/shared/ui';

export const metadata: Metadata = {
  title: 'Support Desk — Troubleshooting & Self-Help',
  description: 'Self-help guides, file troubleshooting, browser compatibility checks, and issue resolution.',
};

export default function SupportPage() {
  return (
    <Section spacing="md">
      <PageContainer size="md" className="space-y-8">
        <Breadcrumbs items={[{ label: 'Support' }]} />
        <div className="space-y-3">
          <Badge variant="accent" size="sm">Technical Resolution</Badge>
          <h1 className="text-3xl font-bold tracking-tight text-zentro-navy-900 sm:text-4xl dark:text-white">
            Support Desk
          </h1>
          <p className="text-sm text-zentro-text-secondary">
            Find immediate solutions to corrupted files, password-protected documents, and browser memory limits.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card variant="default" padding="md" className="space-y-3">
            <HelpCircle className="h-5 w-5 text-zentro-orange-500" />
            <h2 className="text-sm font-bold text-zentro-navy-900 dark:text-white">File Not Loading?</h2>
            <p className="text-xs text-zentro-text-secondary">Check if your file is password protected or exceeds device memory allocations.</p>
          </Card>
          <Card variant="default" padding="md" className="space-y-3">
            <FileCheck2 className="h-5 w-5 text-emerald-600" />
            <h2 className="text-sm font-bold text-zentro-navy-900 dark:text-white">Browser Compatibility</h2>
            <p className="text-xs text-zentro-text-secondary">Zentro operates on modern Chrome, Firefox, Safari, and Edge engines with WebAssembly enabled.</p>
          </Card>
        </div>

        <div className="text-center pt-4">
          <p className="text-xs text-zentro-text-secondary mb-2">Need direct assistance from engineering?</p>
          <Link href="/contact">
            <Button variant="outline" size="sm" rightIcon={<ArrowRight className="h-3.5 w-3.5" />}>
              Contact Engineering
            </Button>
          </Link>
        </div>
      </PageContainer>
    </Section>
  );
}