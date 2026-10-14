import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

// 1. Montserrat for all Headings, Titles, Editorial Display, and Prices
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

// 2. Authentic Neue Haas Grotesk from the project's font collection
const neueHaasGrotesk = localFont({
  src: [
    {
      path: '../public/fonts/neue-haas-grotesk/NeueHaasGrot-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/neue-haas-grotesk/NeueHaasGrot-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/neue-haas-grotesk/NeueHaasGrot-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/neue-haas-grotesk/NeueHaasGrot-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/neue-haas-grotesk/NeueHaasGrot-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-neue-haas',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VOITURE — Beyond the Ordinary | Luxury Car Showroom',
  description:
    'Experience the art of automotive excellence. An exclusive cinematic showroom revealing exceptional luxury vehicles.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0b0b0b',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${neueHaasGrotesk.variable} dark`}
    >

      <body className="bg-[#0b0b0b] text-white font-sans antialiased overflow-x-hidden selection:bg-[#deba76] selection:text-neutral-950">
        {children}
      </body>
    </html>
  );
}
