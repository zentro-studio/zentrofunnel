import * as React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Badge } from '@/shared/ui/Badge';
import { Breadcrumbs, BreadcrumbItem } from '@/shared/navigation/Breadcrumbs';

export interface ToolHeaderProps {
  title: string;
  description: string;
  directAnswer?: string;
  breadcrumbs: BreadcrumbItem[];
  badgeText?: string;
}

export function ToolHeader({
  title,
  description,
  directAnswer,
  breadcrumbs,
  badgeText = 'Sovereign Edge Engine',
}: ToolHeaderProps) {
  return (
    <div className="space-y-4 text-center sm:text-left">
      <Breadcrumbs items={breadcrumbs} />

      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
          <Badge variant="accent" size="sm">
            {badgeText}
          </Badge>
          <div className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span>Zero-Retention RAM</span>
          </div>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-zentro-navy-900 sm:text-5xl dark:text-white">
          {title}
        </h1>

        <p className="max-w-3xl text-sm leading-relaxed text-zentro-text-secondary sm:text-base dark:text-zentro-navy-300">
          {description}
        </p>

        {directAnswer && (
          <div className="rounded-zentro-sm border-l-2 border-zentro-orange-500 bg-zentro-navy-50/70 p-3 text-xs leading-relaxed text-zentro-navy-800 dark:bg-zentro-navy-900/60 dark:text-zentro-navy-200">
            {directAnswer}
          </div>
        )}
      </div>
    </div>
  );
}

export default ToolHeader;