import type { Metadata } from 'next';
import { Mail, MessageSquare } from 'lucide-react';
import { PageContainer, Section } from '@/shared/layout';
import { Breadcrumbs } from '@/shared/navigation/Breadcrumbs';
import { Card, Badge, Input, Button } from '@/shared/ui';

export const metadata: Metadata = {
  title: 'Contact Zentro — Inquiries & Partnerships',
  description: 'Reach out to the Zentro team for enterprise questions, security inquiries, and partnerships.',
};

export default function ContactPage() {
  return (
    <Section spacing="md">
      <PageContainer size="md" className="space-y-8">
        <Breadcrumbs items={[{ label: 'Contact' }]} />
        <div className="space-y-3">
          <Badge variant="accent" size="sm">Direct Communication</Badge>
          <h1 className="text-3xl font-bold tracking-tight text-zentro-navy-900 sm:text-4xl dark:text-white">
            Contact Zentro
          </h1>
          <p className="text-sm text-zentro-text-secondary">
            For enterprise licensing, security audits, feedback, or general inquiries.
          </p>
        </div>

        <Card variant="default" padding="lg" className="space-y-4">
          <Input label="Your Name" placeholder="Alex Morgan" />
          <Input label="Email Address" type="email" placeholder="alex@company.com" />
          <div className="space-y-1.5 text-left">
            <label className="block text-xs font-semibold text-zentro-navy-700 dark:text-zentro-navy-300">Message</label>
            <textarea
              rows={4}
              placeholder="How can we assist you?"
              className="w-full rounded-zentro-sm border border-zentro-border-light bg-white p-3 text-sm text-zentro-text-primary focus-zentro dark:border-zentro-navy-700 dark:bg-zentro-navy-900 dark:text-white"
            />
          </div>
          <Button variant="primary" size="md" className="w-full">
            Send Message
          </Button>
        </Card>
      </PageContainer>
    </Section>
  );
}