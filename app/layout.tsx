import { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import Script from "next/script";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Gautham Dinesh",
  description:
    "Full Stack Developer & Software Engineer based in London. Experienced in Java, Python, JavaScript/TypeScript, React, and cloud technologies.",
  keywords: [
    "Gautham Dinesh",
    "Software Engineer",
    "Full Stack Developer",
    "Goldman Sachs",
    "React",
    "Next.js",
    "TypeScript",
    "London",
  ],
  authors: [{ name: "Gautham Dinesh" }],
  creator: "Gautham Dinesh",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gautham.dk",
    title: "Gautham Dinesh - Software Engineer",
    description:
      "Full Stack Developer & Software Engineer based in London. Experienced in Java, Python, JavaScript/TypeScript, React, and cloud technologies.",
    siteName: "Gautham Dinesh Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gautham Dinesh - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gautham Dinesh - Software Engineer",
    description:
      "Full Stack Developer & Software Engineer based in London. Experienced in Java, Python, JavaScript/TypeScript, React, and cloud technologies.",
    creator: "@0xzorog",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        id="google-tag"
        strategy="lazyOnload"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload" id="google-tag-config">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
      `}
      </Script>

      <body className={jetbrainsMono.className}>{children}</body>
    </html>
  );
}
