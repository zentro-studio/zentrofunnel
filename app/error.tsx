'use client';

import * as React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';
import { PageContainer, Section } from '@/shared/layout';
import { Button, Card } from '@/shared/ui';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Diagnostic logging hook for telemetry
  }, [error]);

  return (
    <Section spacing="lg">
      <PageContainer size="sm" className="text-center">
        <Card variant="flat" padding="lg" className="space-y-6 border-red-200 dark:border-red-900/50">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-400">
            <AlertTriangle className="h-7 w-7" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-zentro-navy-900 sm:text-3xl dark:text-white">
              An Unexpected Error Occurred
            </h1>
            <p className="text-sm text-zentro-text-secondary">
              The operation could not be completed. Your files remain completely secure in local memory.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button
              variant="primary"
              size="md"
              onClick={() => reset()}
              leftIcon={<RefreshCw className="h-4 w-4" />}
            >
              Try Again
            </Button>
            <Link href="/">
              <Button variant="outline" size="md" leftIcon={<Home className="h-4 w-4" />}>
                Back to Home
              </Button>
            </Link>
          </div>
        </Card>
      </PageContainer>
    </Section>
  );
}