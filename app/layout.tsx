import { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Script from "next/script";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Gautham Dinesh",
  description: "Full Stack Developer & Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        href="/apple-icon-icon.png"
        type="image/png"
        sizes="180x180"
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

      <body className={poppins.className}>{children}</body>
    </html>
  );
}
