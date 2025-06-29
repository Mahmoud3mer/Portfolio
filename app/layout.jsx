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
