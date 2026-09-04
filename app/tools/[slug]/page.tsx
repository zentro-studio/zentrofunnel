import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { toolsRegistry } from '@/config/tools';
import { PageContainer, Section } from '@/shared/layout';
import { Breadcrumbs } from '@/shared/navigation/Breadcrumbs';
import { Button, Card, Badge } from '@/shared/ui';

interface ToolPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return toolsRegistry.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = toolsRegistry.find((t) => t.slug === slug);

  if (!tool) {
    return {
      title: 'Tool Not Found',
    };
  }

  return {
    title: `${tool.name} — Sovereign Online Document Processing`,
    description: tool.description,
    alternates: {
      canonical: tool.canonicalPath,
    },
  };
}

export default async function DynamicToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = toolsRegistry.find((t) => t.slug === slug);

  if (!tool) {
    notFound();
  }

  return (
    <Section spacing="md">
      <PageContainer size="lg" className="space-y-10">
        
        {/* Navigation Breadcrumb */}
        <Breadcrumbs
          items={[
            { label: 'Tools', href: '/tools' },
            { label: tool.name },
          ]}
        />

        {/* Above-the-fold Tool Header (Doc 07 §6) */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
            <Badge variant="accent" size="sm">
              Sovereign Edge Engine
            </Badge>
            <div className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>Zero-Retention Privacy</span>
            </div>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-zentro-navy-900 sm:text-5xl dark:text-white">
            {tool.name}
          </h1>

          {/* Direct Answer Paragraph for AEO / GEO (Doc 07 §10) */}
          <p className="max-w-3xl text-sm leading-relaxed text-zentro-text-secondary sm:text-base">
            {tool.directAnswer}
          </p>
        </div>

        {/* Tool Workspace Scaffolding Container (Target for Phase 7 & 8) */}
        <Card variant="default" padding="lg" className="border-2 border-dashed border-zentro-navy-200 dark:border-zentro-navy-700 text-center py-16">
          <div className="max-w-md mx-auto space-y-4">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zentro-orange-50 text-zentro-orange-600 dark:bg-zentro-orange-950/40 dark:text-zentro-orange-400">
              <Zap className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-zentro-navy-900 dark:text-white">
                {tool.name} Workspace
              </h2>
              <p className="text-xs text-zentro-text-secondary">
                Accepts {tool.acceptedFormats.join(', ')} • Output: {tool.outputFormat}
              </p>
            </div>
            <Button variant="primary" size="md">
              Select Document
            </Button>
          </div>
        </Card>

        {/* Feature & Privacy Assurance Details */}
        <div className="grid gap-6 sm:grid-cols-3 pt-6">
          <Card variant="flat" padding="md" className="space-y-2">
            <h3 className="text-sm font-bold text-zentro-navy-900 dark:text-white">100% Client-Side</h3>
            <p className="text-xs text-zentro-text-secondary">Operations execute in browser WebAssembly memory with zero upload latency.</p>
          </Card>
          <Card variant="flat" padding="md" className="space-y-2">
            <h3 className="text-sm font-bold text-zentro-navy-900 dark:text-white">No File Limits</h3>
            <p className="text-xs text-zentro-text-secondary">Process large files without queue waits, watermarks, or account registration gates.</p>
          </Card>
          <Card variant="flat" padding="md" className="space-y-2">
            <h3 className="text-sm font-bold text-zentro-navy-900 dark:text-white">Encrypted Memory</h3>
            <p className="text-xs text-zentro-text-secondary">Document buffers are immediately freed upon task completion or tab closure.</p>
          </Card>
        </div>

      </PageContainer>
    </Section>
  );
}