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
  title: 'Saqib Visuals | Digital Agency & Engineering',
  description: 'Scalable architectures, AI integration, and modern web technologies for businesses that demand engineering precision.',
  keywords: ['Digital Agency', 'Engineering', 'Web Development', 'AI Integration', 'Visual Design', 'High Performance'],
  authors: [{ name: 'Saqib Visuals' }],
  creator: 'Saqib Visuals',
  publisher: 'Saqib Visuals',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: 'https://picsum.photos/seed/sv-logo/32/32',
    shortcut: 'https://picsum.photos/seed/sv-logo/32/32',
    apple: 'https://picsum.photos/seed/sv-logo/180/180',
  },
  openGraph: {
    title: 'Saqib Visuals | Digital Agency & Engineering',
    description: 'We build high-performance digital ecosystems for the future.',
    url: 'https://techai.zone.id/',
    siteName: 'Saqib Visuals',
    images: [
      {
        url: 'https://picsum.photos/seed/agency-preview/1200/630',
        width: 1200,
        height: 630,
        alt: 'Saqib Visuals Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saqib Visuals | Digital Agency',
    description: 'Scalable architectures and modern web technologies.',
    images: ['https://picsum.photos/seed/agency-preview/1200/630'],
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
