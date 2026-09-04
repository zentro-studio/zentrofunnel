import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  FileText,
  CheckCircle2,
  ServerOff,
  Sparkles,
} from 'lucide-react';
import { toolsRegistry } from '@/config/tools';
import { PageContainer, Section } from '@/shared/layout';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Badge } from '@/shared/ui/Badge';
import { Accordion } from '@/shared/ui/Accordion';
import { FadeIn, FadeInStagger, FadeInItem } from '@/shared/ui/Motion';

export default function HomePage() {
  const popularTools = toolsRegistry.filter((t) => t.popular);

  const homeFaqs = [
    {
      id: 'faq-privacy',
      title: 'How does Zentro process documents without uploading them?',
      content:
        'Zentro compiles high-performance document libraries into WebAssembly binaries that execute directly inside your browser tab. Your document binary remains in local device memory (RAM) and is never transmitted over HTTP/HTTPS to remote backend servers.',
    },
    {
      id: 'faq-limits',
      title: 'Is there a limit on file sizes or processing volume?',
      content:
        'Because processing runs on your hardware rather than shared remote clusters, there are no artificial file size paywalls or hourly task queues. You can process large documents as long as your device has available RAM.',
    },
    {
      id: 'faq-cost',
      title: 'Are Zentro core document utilities completely free?',
      content:
        'Yes. All core document tools—including Compress PDF, Merge, Split, Word conversion, and Protection—are 100% free with zero watermarks, zero sign-ups, and zero hidden subscriptions.',
    },
    {
      id: 'faq-security',
      title: 'What happens to my data when I close the browser?',
      content:
        'All allocated memory buffers and temporary WebAssembly pointers are instantly destroyed by your operating system garbage collector as soon as the task completes or the tab is closed.',
    },
  ];

  return (
    <div className="flex flex-col">
      
      {/* 1. HERO SECTION */}
      <Section spacing="lg" className="border-b border-zentro-border-light dark:border-zentro-navy-800 bg-white dark:bg-zentro-navy-950">
        <PageContainer size="lg">
          <FadeIn className="mx-auto max-w-3xl text-center space-y-6">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-800 shadow-sm dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-300">
              <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span>100% Client-Side Sovereign Workspace</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-zentro-navy-900 sm:text-6xl dark:text-white leading-[1.15]">
              Sovereign Document Tools. <br />
              <span className="text-zentro-orange-500">Zero Server Uploads.</span>
            </h1>

            {/* Sub-headline */}
            <p className="mx-auto max-w-2xl text-base text-zentro-text-secondary sm:text-lg dark:text-zentro-navy-300">
              Compress, merge, convert, and protect documents directly inside your browser. Fast, private execution running on local WebAssembly memory with zero data leaks.
            </p>

            {/* Quick Action Matrix */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link href="/tools/compress-pdf">
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Compress PDF Now
                </Button>
              </Link>
              <Link href="/tools">
                <Button variant="outline" size="lg">
                  Browse All 15 Tools
                </Button>
              </Link>
            </div>

            {/* Quick Feature Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-xs font-medium text-zentro-navy-600 dark:text-zentro-navy-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>No Account Required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>No Watermarks</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Instant RAM Processing</span>
              </div>
            </div>

          </FadeIn>
        </PageContainer>
      </Section>

      {/* 2. POPULAR TOOLS GRID */}
      <Section spacing="md">
        <PageContainer size="lg" className="space-y-8">
          <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zentro-border-light pb-4 dark:border-zentro-navy-800">
            <div>
              <Badge variant="accent" size="sm" className="mb-2">
                High-Demand Tools
              </Badge>
              <h2 className="text-2xl font-bold tracking-tight text-zentro-navy-900 sm:text-3xl dark:text-white">
                Popular Document Utilities
              </h2>
            </div>
            <Link href="/tools" className="text-xs font-bold text-zentro-orange-600 hover:text-zentro-orange-700 flex items-center gap-1 group">
              <span>View complete tool registry</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>

          <FadeInStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {popularTools.map((tool) => (
              <FadeInItem key={tool.id}>
                <Link href={tool.canonicalPath} className="group focus-zentro rounded-zentro-md block h-full">
                  <Card variant="interactive" padding="md" className="h-full flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-zentro-sm bg-zentro-navy-50 text-zentro-navy-800 group-hover:bg-zentro-orange-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-normal dark:bg-zentro-navy-800 dark:text-zentro-navy-200">
                          <FileText className="h-5 w-5" />
                        </div>
                        <Badge variant="accent" size="sm">Popular</Badge>
                      </div>
                      <h3 className="text-base font-bold text-zentro-navy-900 group-hover:text-zentro-orange-600 transition-colors dark:text-white">
                        {tool.name}
                      </h3>
                      <p className="text-xs leading-relaxed text-zentro-text-secondary">
                        {tool.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-zentro-border-light dark:border-zentro-navy-800 text-xs font-semibold text-zentro-navy-700 group-hover:text-zentro-orange-600 transition-colors dark:text-zentro-navy-300">
                      <span>Launch Sovereign Tool</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1.5" />
                    </div>
                  </Card>
                </Link>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </PageContainer>
      </Section>

      {/* 3. ARCHITECTURAL CONTRAST */}
      <Section spacing="md" className="bg-zentro-bg-soft dark:bg-zentro-navy-900/50 border-y border-zentro-border-light dark:border-zentro-navy-800">
        <PageContainer size="lg" className="space-y-10">
          <FadeIn className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="neutral" size="sm">The Sovereign Standard</Badge>
            <h2 className="text-2xl font-bold tracking-tight text-zentro-navy-900 sm:text-3xl dark:text-white">
              Why Traditional Converters Leak Data
            </h2>
            <p className="text-xs sm:text-sm text-zentro-text-secondary">
              Legacy online converters transmit your confidential files over the open web to central servers. Zentro keeps computation locked to your hardware.
            </p>
          </FadeIn>

          <FadeInStagger className="grid gap-6 md:grid-cols-2">
            <FadeInItem>
              <Card variant="flat" padding="lg" className="space-y-4 border-red-200 bg-red-50/30 dark:border-red-950 dark:bg-red-950/10 h-full hover:border-red-300 transition-colors">
                <div className="flex items-center gap-2 text-red-700 font-bold dark:text-red-400">
                  <ServerOff className="h-5 w-5" />
                  <h3 className="text-base">Legacy Cloud Converters</h3>
                </div>
                <ul className="space-y-2.5 text-xs text-zentro-navy-700 dark:text-zentro-navy-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Uploads raw documents to third-party shared servers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Files remain cached on disk stages for hours or days.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Network queue latency and artificial file-size paywalls.</span>
                  </li>
                </ul>
              </Card>
            </FadeInItem>

            <FadeInItem>
              <Card variant="flat" padding="lg" className="space-y-4 border-emerald-200 bg-emerald-50/40 dark:border-emerald-950 dark:bg-emerald-950/20 h-full hover:border-emerald-300 transition-colors">
                <div className="flex items-center gap-2 text-emerald-800 font-bold dark:text-emerald-300">
                  <ShieldCheck className="h-5 w-5 text-emerald-600" />
                  <h3 className="text-base">Zentro Sovereign Architecture</h3>
                </div>
                <ul className="space-y-2.5 text-xs text-zentro-navy-700 dark:text-zentro-navy-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>100% browser-based WebAssembly and Web Worker execution.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Zero bytes uploaded. Documents never leave local device RAM.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Instant execution speed with zero server queue wait times.</span>
                  </li>
                </ul>
              </Card>
            </FadeInItem>
          </FadeInStagger>
        </PageContainer>
      </Section>

      {/* 4. EXECUTION LIFECYCLE (Interactive 1-2-3 Step Boxes) */}
      <Section spacing="md">
        <PageContainer size="lg" className="space-y-8">
          <FadeIn className="text-center max-w-xl mx-auto space-y-2">
            <Badge variant="accent" size="sm">Frictionless Flow</Badge>
            <h2 className="text-2xl font-bold tracking-tight text-zentro-navy-900 sm:text-3xl dark:text-white">
              How Zentro Works
            </h2>
            <p className="text-xs text-zentro-text-secondary">
              Simple 3-step sovereign execution with zero configuration friction.
            </p>
          </FadeIn>

          <FadeInStagger className="grid gap-6 sm:grid-cols-3">
            
            {/* Step 1 */}
            <FadeInItem>
              <Card variant="interactive" padding="md" className="group space-y-3 relative h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zentro-orange-500 text-white font-mono text-sm font-bold shadow-md shadow-zentro-orange-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-fast">
                  1
                </div>
                <h3 className="text-base font-bold text-zentro-navy-900 group-hover:text-zentro-orange-600 transition-colors dark:text-white">
                  Select Document
                </h3>
                <p className="text-xs leading-relaxed text-zentro-text-secondary">
                  Drag and drop your file into the workspace. The file is loaded directly into local browser memory without network latency.
                </p>
              </Card>
            </FadeInItem>

            {/* Step 2 */}
            <FadeInItem>
              <Card variant="interactive" padding="md" className="group space-y-3 relative h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zentro-navy-800 text-white font-mono text-sm font-bold shadow-md shadow-zentro-navy-800/20 group-hover:scale-110 group-hover:bg-zentro-navy-900 group-hover:-rotate-6 transition-all duration-fast dark:bg-zentro-navy-700">
                  2
                </div>
                <h3 className="text-base font-bold text-zentro-navy-900 group-hover:text-zentro-orange-600 transition-colors dark:text-white">
                  Local Processing
                </h3>
                <p className="text-xs leading-relaxed text-zentro-text-secondary">
                  Dedicated Web Workers execute optimization algorithms inside your browser memory without transferring data over the internet.
                </p>
              </Card>
            </FadeInItem>

            {/* Step 3 */}
            <FadeInItem>
              <Card variant="interactive" padding="md" className="group space-y-3 relative h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white font-mono text-sm font-bold shadow-md shadow-emerald-600/20 group-hover:scale-110 group-hover:bg-emerald-700 group-hover:rotate-6 transition-all duration-fast">
                  3
                </div>
                <h3 className="text-base font-bold text-zentro-navy-900 group-hover:text-zentro-orange-600 transition-colors dark:text-white">
                  Direct Download
                </h3>
                <p className="text-xs leading-relaxed text-zentro-text-secondary">
                  Save the processed document straight from memory to your storage disk. Temporary buffer pointers are immediately purged.
                </p>
              </Card>
            </FadeInItem>

          </FadeInStagger>
        </PageContainer>
      </Section>

      {/* 5. STRUCTURED FAQ */}
      <Section spacing="md" className="border-t border-zentro-border-light dark:border-zentro-navy-800 bg-zentro-bg-soft dark:bg-zentro-navy-950">
        <PageContainer size="md" className="space-y-8">
          <FadeIn className="text-center space-y-2">
            <Badge variant="neutral" size="sm">Direct Answers</Badge>
            <h2 className="text-2xl font-bold tracking-tight text-zentro-navy-900 sm:text-3xl dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-zentro-text-secondary">
              Clear answers regarding privacy guarantees, limits, and technical standards.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Accordion items={homeFaqs} defaultOpen={['faq-privacy']} />
          </FadeIn>
        </PageContainer>
      </Section>

      {/* 6. CONVERSION CTA BANNER */}
      <Section spacing="lg" className="border-t border-zentro-border-light dark:border-zentro-navy-800 bg-zentro-navy-900 text-white">
        <PageContainer size="md">
          <FadeIn className="text-center space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
              Ready to Solve Your Document Problem?
            </h2>
            <p className="mx-auto max-w-lg text-sm text-zentro-navy-200">
              No installation, no login, and zero data leaves your machine. Choose a tool to begin.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Link href="/tools/compress-pdf">
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Compress PDF Now
                </Button>
              </Link>
              <Link href="/tools">
                <Button variant="outline" size="lg" className="bg-transparent text-white border-zentro-navy-700 hover:bg-zentro-navy-800">
                  Explore All 15 Tools
                </Button>
              </Link>
            </div>
          </FadeIn>
        </PageContainer>
      </Section>

    </div>
  );
}