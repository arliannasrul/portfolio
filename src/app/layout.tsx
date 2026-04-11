import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import ThemeProvider from './ThemeContext';  // Client component
import LanguageProvider from './LanguageContext';
import ChatAssistant from '../components/ChatAssistant';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Arlian Nasrul Ramadhani - Portfolio",
  description: "my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
      <LanguageProvider>
        <ThemeProvider>
          {children}
          <ChatAssistant />
        </ThemeProvider>
      </LanguageProvider>
      </body>
    </html>
  );
}
