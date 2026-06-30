import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import { resume } from "@/data/resume";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${resume.fullName} | ${resume.title}`,
  description: resume.summary,
  keywords: [
    "Amogh Anil Waghunde",
    "Graphic Designer",
    "UI UX Designer",
    "Portfolio",
    "Pune",
    "Behance",
    "Figma",
  ],
  openGraph: {
    title: `${resume.fullName} | ${resume.title}`,
    description: resume.summary,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${resume.fullName} | ${resume.title}`,
    description: resume.summary,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent selection:text-background"
      >
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
