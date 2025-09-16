import { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import Script from "next/script";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Gautham Dinesh - Software Engineer & Full Stack Developer",
    template: "%s | Gautham Dinesh",
  },
  description:
    "Gautham Dinesh is a Software Engineer at Goldman Sachs based in London. Expert in Java, Python, JavaScript, TypeScript, React, Next.js, AWS, Docker, and Kubernetes. View my portfolio of projects and experience.",
  keywords: [
    "Gautham Dinesh",
    "Software Engineer",
    "Full Stack Developer",
    "Goldman Sachs",
    "London",
    "Java Developer",
    "Python Developer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "AWS",
    "Docker",
    "Kubernetes",
    "Portfolio",
    "Web Developer",
    "Software Development",
    "Tech Professional",
  ],
  authors: [{ name: "Gautham Dinesh", url: "https://gautham.dk" }],
  creator: "Gautham Dinesh",
  publisher: "Gautham Dinesh",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gautham.dk",
    title: "Gautham Dinesh - Software Engineer & Full Stack Developer",
    description:
      "Gautham Dinesh is a Software Engineer at Goldman Sachs based in London. Expert in Java, Python, JavaScript, TypeScript, React, Next.js, AWS, Docker, and Kubernetes. View my portfolio of projects and experience.",
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
    title: "Gautham Dinesh - Software Engineer & Full Stack Developer",
    description:
      "Gautham Dinesh is a Software Engineer at Goldman Sachs based in London. Expert in Java, Python, JavaScript, TypeScript, React, Next.js, AWS, Docker, and Kubernetes.",
    creator: "@0xzorog",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "Aw7JkcxKMVHtTPWsKzZ7ERUUMAUwaKRQF_gCN668QXA", 
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
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Gautham Dinesh",
            jobTitle: "Software Engineer",
            description:
              "Full Stack Developer & Software Engineer based in London. Experienced in Java, Python, JavaScript/TypeScript, React, and cloud technologies.",
            url: "https://gautham.dk",
            image: "https://gautham.dk/og-image.png",
            sameAs: [
              "https://www.linkedin.com/in/gauthamdk/",
              "https://github.com/gauthamdk",
              "https://twitter.com/0xzorog",
            ],
            worksFor: {
              "@type": "Organization",
              name: "Goldman Sachs",
              url: "https://www.goldmansachs.com",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "London",
              addressCountry: "GB",
            },
            knowsAbout: [
              "Java",
              "Python",
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "AWS",
              "Docker",
              "Kubernetes",
            ],
          }),
        }}
      />
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
