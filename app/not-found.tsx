import Link from 'next/link';
import { FileQuestion, ArrowRight, Home } from 'lucide-react';
import { PageContainer, Section } from '@/shared/layout';
import { Button, Card } from '@/shared/ui';

export default function NotFound() {
  return (
    <Section spacing="lg">
      <PageContainer size="sm" className="text-center">
        <Card variant="flat" padding="lg" className="space-y-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-zentro-orange-50 text-zentro-orange-600 dark:bg-zentro-orange-950/40 dark:text-zentro-orange-400">
            <FileQuestion className="h-7 w-7" />
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-zentro-navy-900 sm:text-4xl dark:text-white">
              Page Not Found
            </h1>
            <p className="text-sm text-zentro-text-secondary">
              The requested document tool, learning guide, or resource does not exist or has moved.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link href="/">
              <Button variant="secondary" size="md" leftIcon={<Home className="h-4 w-4" />}>
                Go to Homepage
              </Button>
            </Link>
            <Link href="/tools">
              <Button variant="primary" size="md" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Browse All Tools
              </Button>
            </Link>
          </div>
        </Card>
      </PageContainer>
    </Section>
  );
}