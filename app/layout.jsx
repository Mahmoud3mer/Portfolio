import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairsTransition from "@/components/StairsTransition";

import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

const JetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata = {
  title: "Portfolio",
  description: "Mahmoud Amer's Portfolio, Frontend Developer",
  icons: {
    icon: '/favicon.svg'
  },
  openGraph: {
    title: "Mahmoud Amer's Portfolio",
    description: "I'm a Frontend Developer.",
    url: 'https://3mer-portfolio.vercel.app/',
    images: [
      {
        url: 'https://3mer-portfolio.vercel.app/public/og/portfolio.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio Image',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${JetbrainsMono.className} px-4`}
      >
        <Header />

        <StairsTransition/>
        
        <PageTransition>
          {children}
        </PageTransition>

      </body>
    </html>
  );
}
