import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';

import '../styles/_global.scss';
import Navbar from '@/components/navbar/Navbar';
import SmoothScroll from '@/components/smoothScroll/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-title',
});

export const metadata: Metadata = {
  title: 'Exitus Engenharia',
  description: 'Empresa de engenharia civil premium',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <Navbar />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}