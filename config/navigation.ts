export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  badge?: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    title: 'Tools',
    href: '/tools',
  },
  {
    title: 'Features',
    href: '/features',
  },
  {
    title: 'Learn',
    href: '/learn',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
];

export const footerNav: Record<string, NavItem[]> = {
  tools: [
    { title: 'Compress PDF', href: '/tools/compress-pdf', badge: 'Popular' },
    { title: 'Merge PDF', href: '/tools/merge-pdf' },
    { title: 'Split PDF', href: '/tools/split-pdf' },
    { title: 'Rotate PDF', href: '/tools/rotate-pdf' },
    { title: 'PDF to Word', href: '/tools/pdf-to-word' },
    { title: 'OCR Searchable PDF', href: '/tools/ocr' },
  ],
  learning: [
    { title: 'How PDF Compression Works', href: '/learn/pdf-compression' },
    { title: 'Client-Side Security Guide', href: '/learn/client-side-security' },
    { title: 'PDF/A Archival Standards', href: '/learn/pdf-a-standards' },
    { title: 'All Learning Guides', href: '/learn' },
  ],
  company: [
    { title: 'About Zentro', href: '/about' },
    { title: 'FAQ', href: '/faq' },
    { title: 'Support & Help', href: '/support' },
    { title: 'Contact', href: '/contact' },
  ],
  legal: [
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Service', href: '/terms' },
    { title: 'Security & Sovereignty', href: '/privacy#security' },
  ],
};