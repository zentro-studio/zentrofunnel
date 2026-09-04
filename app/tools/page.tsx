import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { toolsRegistry, toolCategories, ToolCategory } from '@/config/tools';
import { PageContainer, Section } from '@/shared/layout';
import { Breadcrumbs } from '@/shared/navigation/Breadcrumbs';
import { Card, Badge } from '@/shared/ui';

export const metadata: Metadata = {
  title: 'All Document Tools',
  description:
    'Comprehensive directory of fast, browser-based sovereign document tools. Compress, merge, split, convert, and protect documents securely.',
};

export default function ToolsIndexPage() {
  const categories: ToolCategory[] = ['pdf', 'conversion', 'security', 'utility'];

  return (
    <Section spacing="md">
      <PageContainer size="lg" className="space-y-10">
        
        {/* Breadcrumb & Header */}
        <div className="space-y-4">
          <Breadcrumbs items={[{ label: 'Document Tools' }]} />
          <div className="space-y-2">
            <Badge variant="accent" size="sm">
              Sovereign Utility Suite
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight text-zentro-navy-900 sm:text-4xl dark:text-white">
              Document Tools Directory
            </h1>
            <p className="max-w-2xl text-sm text-zentro-text-secondary sm:text-base">
              Execute high-precision document operations directly within client browser memory. No files are uploaded to remote servers.
            </p>
          </div>
        </div>

        {/* Category Sections */}
        <div className="space-y-12">
          {categories.map((catKey) => {
            const catInfo = toolCategories[catKey];
            const catTools = toolsRegistry.filter((t) => t.category === catKey);

            return (
              <div key={catKey} className="space-y-4">
                <div className="border-b border-zentro-border-light pb-2 dark:border-zentro-navy-800">
                  <h2 className="text-xl font-bold text-zentro-navy-900 dark:text-white">
                    {catInfo.name}
                  </h2>
                  <p className="text-xs text-zentro-text-secondary">{catInfo.description}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {catTools.map((tool) => (
                    <Link key={tool.id} href={tool.canonicalPath} className="group focus-zentro rounded-zentro-md">
                      <Card
                        variant="interactive"
                        padding="md"
                        className="flex h-full flex-col justify-between space-y-3"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h3 className="text-base font-bold text-zentro-navy-900 group-hover:text-zentro-orange-600 transition-colors dark:text-white">
                              {tool.name}
                            </h3>
                            {tool.popular && (
                              <Badge variant="accent" size="sm">
                                Popular
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-zentro-text-secondary line-clamp-2">
                            {tool.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-zentro-border-light dark:border-zentro-navy-800 text-xs font-semibold text-zentro-navy-700 group-hover:text-zentro-orange-600 transition-colors dark:text-zentro-navy-300">
                          <span>Open Tool</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </PageContainer>
    </Section>
  );
}