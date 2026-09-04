import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';
import { toolsRegistry } from '@/config/tools';
import { Card } from '@/shared/ui/Card';
import { Badge } from '@/shared/ui/Badge';

export interface RelatedToolsProps {
  currentSlug: string;
  limit?: number;
}

export function RelatedTools({ currentSlug, limit = 3 }: RelatedToolsProps) {
  const currentTool = toolsRegistry.find((t) => t.slug === currentSlug);
  const related = toolsRegistry
    .filter((t) => t.slug !== currentSlug && (currentTool ? t.category === currentTool.category || t.popular : t.popular))
    .slice(0, limit);

  return (
    <div className="space-y-6 pt-8 border-t border-zentro-border-light dark:border-zentro-navy-800">
      <div className="space-y-1 text-center sm:text-left">
        <Badge variant="accent" size="sm">
          Related Workflows
        </Badge>
        <h2 className="text-xl font-bold text-zentro-navy-900 dark:text-white sm:text-2xl">
          Companion Document Tools
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((tool) => (
          <Link key={tool.id} href={tool.canonicalPath} className="group focus-zentro rounded-zentro-md block">
            <Card variant="interactive" padding="md" className="h-full flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-zentro-navy-900 group-hover:text-zentro-orange-600 transition-colors dark:text-white">
                    {tool.name}
                  </h3>
                  {tool.popular && <Badge variant="accent" size="sm">Popular</Badge>}
                </div>
                <p className="text-xs text-zentro-text-secondary line-clamp-2">
                  {tool.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-zentro-border-light dark:border-zentro-navy-800 text-xs font-semibold text-zentro-navy-700 group-hover:text-zentro-orange-600 transition-colors dark:text-zentro-navy-300">
                <span>Launch Tool</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RelatedTools;