import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';

const inter = Inter({ subsets: ['latin'] });

// Metadata สำหรับ SEO และชื่อ tab ของเบราว์เซอร์
export const metadata: Metadata = {
  title: 'Portfolio | UX/UI Designer & Frontend Developer',
  description: 'Portfolio of a specialized UX/UI Designer and Frontend Developer',
};

// Component Layout หลักที่ครอบคลุมทั้งแอปพลิเคชัน
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-slate-900`}>
        <Navbar />
        <main className="min-h-screen pt-16 bg-white">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

