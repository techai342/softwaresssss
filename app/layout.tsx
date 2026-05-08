import type {Metadata} from 'next';
import {Inter, Outfit, JetBrains_Mono} from 'next/font/google';
import './globals.css';
import { CustomCursor } from '@/components/CustomCursor';
import { SecurityGuard } from '@/components/SecurityGuard';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://techai.zone.id/'),
  title: {
    default: 'MrSaqib | Creative Developer Pakistan',
    template: '%s | MrSaqib',
  },
  description:
    'Muhammad Saqib (Saqib242 / MrSaqib) is a creative developer and visual artist from Pakistan building SEO-optimized Next.js and React websites, branding systems, and modern UI/UX experiences.',
  keywords: [
    'MrSaqib',
    'Saqib242',
    'Muhammad Saqib',
    'Creative Developer Pakistan',
    'Web Developer Faisalabad',
    'Web Developer Gujranwala',
    'Gojra Web Developer',
    'Next.js Developer Pakistan',
    'React Developer Pakistan',
    'SEO Expert Pakistan',
    'UI UX Designer Pakistan',
    'Website Designer Faisalabad',
    'Digital Creator Pakistan',
    'Portfolio Website Developer',
  ],
  authors: [{ name: 'Muhammad Saqib', url: 'https://techai.zone.id/' }],
  creator: 'Muhammad Saqib',
  publisher: 'MrSaqib',
  alternates: {
    canonical: 'https://techai.zone.id/',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'MrSaqib | Creative Developer Pakistan',
    description:
      'Portfolio of Muhammad Saqib (Saqib242): Next.js, React, UI/UX, branding, and SEO optimized digital experiences.',
    url: 'https://techai.zone.id/',
    siteName: 'MrSaqib',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MrSaqib - Creative Developer Pakistan',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MrSaqib | Creative Developer Pakistan',
    description: 'Portfolio of Muhammad Saqib aka Saqib242.',
    images: ['/og-image.jpg'],
    creator: '@mrsaqib242',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${outfit.variable} ${jetbrains.variable} scroll-smooth`}>
      <body className="bg-[#050508] text-white font-sans selection:bg-cyan-500/30" suppressHydrationWarning>
        <SecurityGuard />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
