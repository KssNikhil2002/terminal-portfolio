import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nikhil Kruthiventi",
  description: "AI/ML Engineer and Full Stack Developer specializing in Artificial Intelligence, Machine Learning, and modern web technologies. MS Computer Science student at UW-Madison.",
  keywords: ["Nikhil Kruthiventi", "AI Engineer", "ML Engineer", "Full Stack Developer", "UW-Madison", "Computer Science", "Artificial Intelligence", "Machine Learning", "React", "Python", "PyTorch"],
  authors: [{ name: "Nikhil Kruthiventi" }],
  creator: "Nikhil Kruthiventi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nikhil-kruthiventi-portfolio.vercel.app",
    title: "Nikhil Kruthiventi | AI/ML Engineer & Full Stack Developer",
    description: "AI/ML Engineer and Full Stack Developer specializing in Artificial Intelligence, Machine Learning, and modern web technologies. MS Computer Science student at UW-Madison.",
    siteName: "Nikhil Kruthiventi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Kruthiventi | AI/ML Engineer & Full Stack Developer",
    description: "AI/ML Engineer and Full Stack Developer specializing in Artificial Intelligence, Machine Learning, and modern web technologies.",
    creator: "@nikhil_kruthiventi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
