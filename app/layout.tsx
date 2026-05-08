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

const siteUrl = 'https://techai.zone.id';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'MrSaqib | Creative Developer Pakistan',
    template: '%s | MrSaqib',
  },
  description:
    'Muhammad Saqib (Saqib242 / MrSaqib) builds SEO-focused, high-performance Next.js and React websites for businesses in Faisalabad, Gujranwala, and across Pakistan.',
  keywords: [
    'MrSaqib',
    'Saqib242',
    'Muhammad Saqib',
    'Creative Developer Pakistan',
    'Web Developer Faisalabad',
    'Website Designer Faisalabad',
    'Gujranwala Web Developer',
    'Next.js Developer Pakistan',
    'React Developer Pakistan',
    'SEO Expert Pakistan',
    'UI UX Designer Pakistan',
    'Portfolio Website Developer',
    'Business Website Developer',
    'Frontend Developer Pakistan',
  ],
  authors: [{name: 'Muhammad Saqib'}],
  creator: 'Muhammad Saqib',
  publisher: 'MrSaqib',
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'MrSaqib | Creative Developer Pakistan',
    description:
      'Portfolio of Muhammad Saqib featuring SEO-optimized Next.js, React, branding, and modern web engineering projects.',
    url: siteUrl,
    siteName: 'MrSaqib',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MrSaqib - Creative Developer Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MrSaqib | Creative Developer Pakistan',
    description: 'Portfolio of Muhammad Saqib aka Saqib242.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'QBTbRBfM4UaFb99KTDYjmhcWqdv6owEV0e-apSLn-Yg',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Muhammad Saqib',
  alternateName: ['MrSaqib', 'Saqib242', 'mrsaqib242', 'Mr Saqib'],
  url: siteUrl,
  jobTitle: 'Creative Developer',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'PK',
    addressLocality: 'Faisalabad',
  },
  knowsAbout: [
    'Next.js',
    'React',
    'Web Development',
    'SEO',
    'UI UX Design',
    'Branding',
    'Frontend Development',
    'Digital Marketing',
  ],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${outfit.variable} ${jetbrains.variable} scroll-smooth`}>
      <body className="bg-[#050508] text-white font-sans selection:bg-cyan-500/30" suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
        <SecurityGuard />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
