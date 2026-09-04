import type { Metadata } from 'next';
import { PageContainer, Section } from '@/shared/layout';
import { Breadcrumbs } from '@/shared/navigation/Breadcrumbs';
import { Card, Badge } from '@/shared/ui';

export const metadata: Metadata = {
  title: 'Engineering & Product Blog',
  description: 'Product updates, engineering milestones, and document productivity trends.',
};

export default function BlogIndexPage() {
  return (
    <Section spacing="md">
      <PageContainer size="lg" className="space-y-10">
        <div className="space-y-4">
          <Breadcrumbs items={[{ label: 'Blog' }]} />
          <div className="space-y-2">
            <Badge variant="accent" size="sm">Product Updates</Badge>
            <h1 className="text-3xl font-bold tracking-tight text-zentro-navy-900 sm:text-4xl dark:text-white">
              Zentro Engineering Blog
            </h1>
            <p className="max-w-2xl text-sm text-zentro-text-secondary">
              Technical updates, release insights, and sovereign browser processing benchmarks.
            </p>
          </div>
        </div>

        <Card variant="flat" padding="lg" className="text-center py-12">
          <p className="text-sm font-medium text-zentro-navy-700 dark:text-zentro-navy-300">
            Initial engineering release notes and benchmark articles will publish during Phase 10.
          </p>
        </Card>
      </PageContainer>
    </Section>
  );
}