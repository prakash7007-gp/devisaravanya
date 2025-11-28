import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import Footer from "@/components/footer";
import Providers from "./provider";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dr. Devi Saravanya - Ayurvedic Herbal Clinic',
  description: 'Authentic Ayurvedic treatments and holistic wellness care',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider> {/* <-- MUST BE OUTSIDE */}
          <Providers>
            <Header />
            <main>{children}</main>
            <Footer />
          </Providers>
        </LanguageProvider>
      </body>   
    </html>
  );
}
