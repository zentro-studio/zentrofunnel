import * as React from 'react';
import { Accordion, AccordionItem } from '@/shared/ui/Accordion';
import { Badge } from '@/shared/ui/Badge';

export interface ToolFAQProps {
  toolName: string;
  items: AccordionItem[];
}

export function ToolFAQ({ toolName, items }: ToolFAQProps) {
  // Automated FAQPage Schema generation matching Doc 08 §7
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.title,
      acceptedAnswer: {
        '@type': 'Answer',
        text: typeof item.content === 'string' ? item.content : item.title,
      },
    })),
  };

  return (
    <div className="space-y-6 pt-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="space-y-2 text-center sm:text-left">
        <Badge variant="neutral" size="sm">
          AEO Questions
        </Badge>
        <h2 className="text-2xl font-bold tracking-tight text-zentro-navy-900 dark:text-white sm:text-3xl">
          Frequently Asked Questions About {toolName}
        </h2>
        <p className="text-xs text-zentro-text-secondary sm:text-sm">
          Technical specifications, security boundaries, and sovereign execution guidance.
        </p>
      </div>

      <Accordion items={items} defaultOpen={[items[0]?.id || '']} />
    </div>
  );
}

export default ToolFAQ;