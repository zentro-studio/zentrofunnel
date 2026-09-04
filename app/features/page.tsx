import type { Metadata } from 'next';
import { ShieldCheck, Zap, Lock, Cpu } from 'lucide-react';
import { PageContainer, Section } from '@/shared/layout';
import { Breadcrumbs } from '@/shared/navigation/Breadcrumbs';
import { Card, Badge } from '@/shared/ui';

export const metadata: Metadata = {
  title: 'Platform Features — Sovereign Document Processing',
  description: 'Explore the sovereign capabilities of Zentro: client-side processing, zero data retention, and instant execution.',
};

export default function FeaturesPage() {
  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-emerald-600" />,
      title: 'Zero-Upload Sovereignty',
      desc: 'Documents process in local browser memory via WebAssembly without hitting external servers.',
    },
    {
      icon: <Zap className="h-6 w-6 text-zentro-orange-500" />,
      title: 'Instant Execution',
      desc: 'No network queue latency or remote conversion servers. Processing begins the moment you click.',
    },
    {
      icon: <Lock className="h-6 w-6 text-zentro-navy-800 dark:text-white" />,
      title: 'Cryptographic Privacy',
      desc: 'Password encryption and decryption execute via standardized ciphers entirely on your machine.',
    },
    {
      icon: <Cpu className="h-6 w-6 text-sky-600" />,
      title: 'Multi-Threaded Workers',
      desc: 'Heavy document calculations leverage dedicated Web Worker threads to keep the UI smooth.',
    },
  ];

  return (
    <Section spacing="md">
      <PageContainer size="lg" className="space-y-10">
        <div className="space-y-4">
          <Breadcrumbs items={[{ label: 'Features' }]} />
          <div className="space-y-2">
            <Badge variant="accent" size="sm">Core Architecture</Badge>
            <h1 className="text-3xl font-bold tracking-tight text-zentro-navy-900 sm:text-4xl dark:text-white">
              Engineered for Sovereignty & Speed
            </h1>
            <p className="max-w-2xl text-sm text-zentro-text-secondary">
              Discover how Zentro redefines document productivity by replacing cloud servers with modern browser computing.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <Card key={f.title} variant="default" padding="md" className="space-y-3">
              <div>{f.icon}</div>
              <h2 className="text-base font-bold text-zentro-navy-900 dark:text-white">{f.title}</h2>
              <p className="text-xs leading-relaxed text-zentro-text-secondary">{f.desc}</p>
            </Card>
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}