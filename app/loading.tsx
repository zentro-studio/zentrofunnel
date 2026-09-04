import { PageContainer, Section } from '@/shared/layout';
import { Skeleton } from '@/shared/ui/Skeleton';

export default function GlobalLoading() {
  return (
    <Section spacing="md">
      <PageContainer size="lg" className="space-y-8">
        <div className="space-y-3">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-10 w-96 max-w-full" />
          <Skeleton className="h-4 w-full max-w-xl" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Skeleton className="h-48 w-full rounded-zentro-md" />
          <Skeleton className="h-48 w-full rounded-zentro-md" />
          <Skeleton className="h-48 w-full rounded-zentro-md" />
        </div>
      </PageContainer>
    </Section>
  );
}