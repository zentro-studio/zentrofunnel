export const siteConfig = {
  name: 'Zentro',
  tagline: 'High-Performance Sovereign Document Workspace',
  description:
    'Fast, private, and sovereign document tools. Compress, convert, edit, and organize documents directly in your browser without data leaks.',
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://zentro.app',
  ogImage: '/og.png',
  links: {
    github: 'https://github.com/zentro-workspace',
    twitter: 'https://twitter.com/zentroapp',
  },
  privacy: {
    clientFirst: true,
    zeroRetention: true,
  },
} as const;

export type SiteConfig = typeof siteConfig;